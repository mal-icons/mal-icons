#!/usr/bin/env bun
// Force the production automatic JSX runtime BEFORE anything else runs.
//
// Bun's JSX transform picks the dev runtime (`jsxDEV` from
// `react/jsx-dev-runtime`) unless `NODE_ENV === "production"`, and it reads
// `NODE_ENV` once at process startup — mutating `process.env.NODE_ENV` or
// passing `production: true` to `Bun.build()` does NOT change the decision.
// Shipping the dev runtime breaks React Server Component prerendering in
// consumers (e.g. Next.js), whose production react-ssr runtime omits `jsxDEV`
// ("(0, d.jsxDEV) is not a function"). If the build was started without it,
// re-exec this script once with `NODE_ENV=production` so every bundle emits
// the production runtime (`jsx`/`jsxs` from `react/jsx-runtime`).
if (process.env.NODE_ENV !== "production") {
  const child = Bun.spawn(["bun", "run", import.meta.path, ...Bun.argv.slice(2)], {
    env: { ...process.env, NODE_ENV: "production" },
    stdio: ["inherit", "inherit", "inherit"],
  });
  process.exit(await child.exited);
}

import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
/**
 * Build the publishable JS artifacts for @mal-icons/core and @mal-icons/react.
 *
 * - ESM is built with code-splitting so per-icon modules share a single
 *   runtime chunk while remaining individually tree-shakeable.
 * - CJS is built for the package entry points (root + per-set barrels).
 * - Type declarations are emitted separately by `tsc --build` (run first).
 */
import { Glob } from "bun";

const ROOT = process.cwd();
const REACT_SRC = join(ROOT, "packages", "react", "src");
const REACT_OUT = join(ROOT, "packages", "react", "dist");
const CORE_SRC = join(ROOT, "packages", "core", "src");
const CORE_OUT = join(ROOT, "packages", "core", "dist");
const VUE_SRC = join(ROOT, "packages", "vue", "src");
const VUE_OUT = join(ROOT, "packages", "vue", "dist");
const RN_SRC = join(ROOT, "packages", "react-native", "src");
const RN_OUT = join(ROOT, "packages", "react-native", "dist");
const PREACT_SRC = join(ROOT, "packages", "preact", "src");
const PREACT_OUT = join(ROOT, "packages", "preact", "dist");
const SOLID_SRC = join(ROOT, "packages", "solid", "src");
const SOLID_OUT = join(ROOT, "packages", "solid", "dist");
const WEB_SRC = join(ROOT, "packages", "web", "src");
const WEB_OUT = join(ROOT, "packages", "web", "dist");
const ESLINT_SRC = join(ROOT, "packages", "eslint-plugin", "src");
const ESLINT_OUT = join(ROOT, "packages", "eslint-plugin", "dist");

const REACT_EXTERNAL = ["react", "react/jsx-runtime", "react-dom", "@mal-icons/core"];
const VUE_EXTERNAL = ["vue", "@mal-icons/core"];
const RN_EXTERNAL = [
  "react",
  "react/jsx-runtime",
  "react-native",
  "react-native-svg",
  "@mal-icons/core",
];
const PREACT_EXTERNAL = ["preact", "preact/hooks", "preact/jsx-runtime", "@mal-icons/core"];
const SOLID_EXTERNAL = [
  "solid-js",
  "solid-js/web",
  "solid-js/h",
  "solid-js/store",
  "@mal-icons/core",
];
const WEB_EXTERNAL = ["@mal-icons/core"];

async function collect(glob: string, base: string): Promise<string[]> {
  const out: string[] = [];
  for await (const file of new Glob(glob).scan(base)) {
    out.push(join(base, file));
  }
  return out.sort();
}

/**
 * Group per-icon source files by their set id (the directory name directly
 * under `<base>/icons/`).  Returns a Map so callers can iterate one set at a
 * time and keep each Bun.build call's entrypoint count well below the memory
 * limit (~3 k files per call vs. the previous ~30 k single-call approach).
 */
function groupBySet(files: string[], iconsRoot: string): Map<string, string[]> {
  const prefix = iconsRoot.endsWith("/") ? iconsRoot : `${iconsRoot}/`;
  const map = new Map<string, string[]>();
  for (const f of files) {
    const rel = f.startsWith(prefix) ? f.slice(prefix.length) : f;
    const setId = rel.split("/")[0];
    if (!setId) continue;
    let arr = map.get(setId);
    if (!arr) {
      arr = [];
      map.set(setId, arr);
    }
    arr.push(f);
  }
  return map;
}

async function buildCore(): Promise<void> {
  const entry = join(CORE_SRC, "index.ts");
  for (const format of ["esm", "cjs"] as const) {
    const result = await Bun.build({
      entrypoints: [entry],
      outdir: CORE_OUT,
      target: "node",
      format,
      naming: format === "cjs" ? "[dir]/[name].cjs" : "[dir]/[name].js",
    });
    if (!result.success) throw new AggregateError(result.logs, "core build failed");
  }
}

async function buildVue(): Promise<void> {
  const iconFiles = await collect("icons/**/*.ts", VUE_SRC);
  const barrels = await collect("icons/**/index.ts", VUE_SRC);
  const perIcon = iconFiles.filter((f) => !f.endsWith("/index.ts") && !f.endsWith("/names.ts"));
  const iconsRoot = join(VUE_SRC, "icons");

  // ESM phase 1: root index + set barrels (small entrypoint count, no OOM).
  const esm1 = await Bun.build({
    entrypoints: [join(VUE_SRC, "index.ts"), ...barrels],
    outdir: VUE_OUT,
    root: VUE_SRC,
    target: "browser",
    format: "esm",
    splitting: true,
    external: VUE_EXTERNAL,
  });
  if (!esm1.success) throw new AggregateError(esm1.logs, "vue ESM build failed");

  // ESM phase 2: per-icon files, one set at a time to keep memory bounded.
  for (const [setId, setIcons] of groupBySet(perIcon, iconsRoot)) {
    const esm2 = await Bun.build({
      entrypoints: setIcons,
      outdir: VUE_OUT,
      root: VUE_SRC,
      target: "browser",
      format: "esm",
      splitting: true,
      external: VUE_EXTERNAL,
    });
    if (!esm2.success) throw new AggregateError(esm2.logs, `vue ESM build failed for set ${setId}`);
  }

  const cjs = await Bun.build({
    entrypoints: [join(VUE_SRC, "index.ts")],
    outdir: VUE_OUT,
    root: VUE_SRC,
    target: "browser",
    format: "cjs",
    external: VUE_EXTERNAL,
    naming: "[dir]/[name].cjs",
  });
  if (!cjs.success) throw new AggregateError(cjs.logs, "vue CJS build failed");
}

async function buildPreact(): Promise<void> {
  const iconFiles = await collect("icons/**/*.ts", PREACT_SRC);
  const barrels = await collect("icons/**/index.ts", PREACT_SRC);
  const perIcon = iconFiles.filter((f) => !f.endsWith("/index.ts") && !f.endsWith("/names.ts"));
  const iconsRoot = join(PREACT_SRC, "icons");

  // ESM phase 1: root index + set barrels (small entrypoint count, no OOM).
  const esm1 = await Bun.build({
    entrypoints: [join(PREACT_SRC, "index.ts"), ...barrels],
    outdir: PREACT_OUT,
    root: PREACT_SRC,
    target: "browser",
    format: "esm",
    splitting: true,
    external: PREACT_EXTERNAL,
  });
  if (!esm1.success) throw new AggregateError(esm1.logs, "preact ESM build failed");

  // ESM phase 2: per-icon files, one set at a time to keep memory bounded.
  for (const [setId, setIcons] of groupBySet(perIcon, iconsRoot)) {
    const esm2 = await Bun.build({
      entrypoints: setIcons,
      outdir: PREACT_OUT,
      root: PREACT_SRC,
      target: "browser",
      format: "esm",
      splitting: true,
      external: PREACT_EXTERNAL,
    });
    if (!esm2.success)
      throw new AggregateError(esm2.logs, `preact ESM build failed for set ${setId}`);
  }

  const cjs = await Bun.build({
    entrypoints: [join(PREACT_SRC, "index.ts")],
    outdir: PREACT_OUT,
    root: PREACT_SRC,
    target: "browser",
    format: "cjs",
    external: PREACT_EXTERNAL,
    naming: "[dir]/[name].cjs",
  });
  if (!cjs.success) throw new AggregateError(cjs.logs, "preact CJS build failed");
}

async function buildSolid(): Promise<void> {
  const iconFiles = await collect("icons/**/*.ts", SOLID_SRC);
  const barrels = await collect("icons/**/index.ts", SOLID_SRC);
  const perIcon = iconFiles.filter((f) => !f.endsWith("/index.ts") && !f.endsWith("/names.ts"));
  const iconsRoot = join(SOLID_SRC, "icons");

  // ESM phase 1: root index + set barrels (small entrypoint count, no OOM).
  const esm1 = await Bun.build({
    entrypoints: [join(SOLID_SRC, "index.ts"), ...barrels],
    outdir: SOLID_OUT,
    root: SOLID_SRC,
    target: "browser",
    format: "esm",
    splitting: true,
    external: SOLID_EXTERNAL,
  });
  if (!esm1.success) throw new AggregateError(esm1.logs, "solid ESM build failed");

  // ESM phase 2: per-icon files, one set at a time to keep memory bounded.
  for (const [setId, setIcons] of groupBySet(perIcon, iconsRoot)) {
    const esm2 = await Bun.build({
      entrypoints: setIcons,
      outdir: SOLID_OUT,
      root: SOLID_SRC,
      target: "browser",
      format: "esm",
      splitting: true,
      external: SOLID_EXTERNAL,
    });
    if (!esm2.success)
      throw new AggregateError(esm2.logs, `solid ESM build failed for set ${setId}`);
  }

  const cjs = await Bun.build({
    entrypoints: [join(SOLID_SRC, "index.ts")],
    outdir: SOLID_OUT,
    root: SOLID_SRC,
    target: "browser",
    format: "cjs",
    external: SOLID_EXTERNAL,
    naming: "[dir]/[name].cjs",
  });
  if (!cjs.success) throw new AggregateError(cjs.logs, "solid CJS build failed");
}

async function buildWeb(): Promise<void> {
  // The per-icon JSON data ships as-is via the `./fi/*.json` export; only the
  // vanilla renderer and the typed `./fi` registry barrel are bundled here.
  const barrels = await collect("icons/**/index.ts", WEB_SRC);

  const esm = await Bun.build({
    entrypoints: [join(WEB_SRC, "index.ts"), ...barrels],
    outdir: WEB_OUT,
    root: WEB_SRC,
    target: "browser",
    format: "esm",
    splitting: true,
    external: WEB_EXTERNAL,
  });
  if (!esm.success) throw new AggregateError(esm.logs, "web ESM build failed");

  const cjs = await Bun.build({
    entrypoints: [join(WEB_SRC, "index.ts")],
    outdir: WEB_OUT,
    root: WEB_SRC,
    target: "browser",
    format: "cjs",
    external: WEB_EXTERNAL,
    naming: "[dir]/[name].cjs",
  });
  if (!cjs.success) throw new AggregateError(cjs.logs, "web CJS build failed");
}

async function buildReact(): Promise<void> {
  const iconFiles = await collect("icons/**/*.tsx", REACT_SRC);
  const barrels = await collect("icons/**/index.ts", REACT_SRC);
  const serverEntry = join(REACT_SRC, "server.tsx");
  const iconsRoot = join(REACT_SRC, "icons");

  // The default entry and every generated icon read theming through React
  // context/hooks, so they are Client Components. They must carry a top-level
  // `"use client"` directive so they can be imported into React Server
  // Components (e.g. Next.js App Router). Bun hoists ESM imports above any
  // in-source directive, demoting it to a no-op string, so the directive is
  // injected via `banner` to guarantee it is the first statement of every
  // emitted client chunk. The hook-free `server.tsx` entry is built
  // separately, WITHOUT the banner, so it stays a Server Component.
  const USE_CLIENT = '"use client";';
  const perIcon = iconFiles.filter((f) => !f.endsWith("/index.ts"));

  // ESM phase 1: root index + set barrels (small entrypoint count, no OOM).
  // Each barrel becomes a self-contained module inlining its set's icon data.
  const esm1 = await Bun.build({
    entrypoints: [join(REACT_SRC, "index.ts"), ...barrels],
    outdir: REACT_OUT,
    root: REACT_SRC,
    target: "browser",
    format: "esm",
    splitting: true,
    external: REACT_EXTERNAL,
    banner: USE_CLIENT,
  });
  if (!esm1.success) throw new AggregateError(esm1.logs, "react ESM build failed");

  // ESM phase 2: per-icon files, one set at a time to keep memory bounded.
  // The per-icon deep-import path (e.g. `@mal-icons/react/fi/FiActivity`) is
  // ESM-only; each set's icons share a small runtime chunk placed at the dist
  // root.  Peak memory is proportional to the largest set (~3 k icons) rather
  // than the entire 30 k catalog.
  for (const [setId, setIcons] of groupBySet(perIcon, iconsRoot)) {
    const esm2 = await Bun.build({
      entrypoints: setIcons,
      outdir: REACT_OUT,
      root: REACT_SRC,
      target: "browser",
      format: "esm",
      splitting: true,
      external: REACT_EXTERNAL,
      banner: USE_CLIENT,
    });
    if (!esm2.success)
      throw new AggregateError(esm2.logs, `react ESM build failed for set ${setId}`);
  }

  const serverEsm = await Bun.build({
    entrypoints: [serverEntry],
    outdir: REACT_OUT,
    root: REACT_SRC,
    target: "browser",
    format: "esm",
    external: REACT_EXTERNAL,
  });
  if (!serverEsm.success) throw new AggregateError(serverEsm.logs, "react server ESM build failed");

  // CJS: bundle the public entry points (no splitting in CJS).
  const cjs = await Bun.build({
    entrypoints: [join(REACT_SRC, "index.ts"), ...barrels],
    outdir: REACT_OUT,
    root: REACT_SRC,
    target: "browser",
    format: "cjs",
    external: REACT_EXTERNAL,
    naming: "[dir]/[name].cjs",
    banner: USE_CLIENT,
  });
  if (!cjs.success) throw new AggregateError(cjs.logs, "react CJS build failed");

  const serverCjs = await Bun.build({
    entrypoints: [serverEntry],
    outdir: REACT_OUT,
    root: REACT_SRC,
    target: "browser",
    format: "cjs",
    external: REACT_EXTERNAL,
    naming: "[dir]/[name].cjs",
  });
  if (!serverCjs.success) throw new AggregateError(serverCjs.logs, "react server CJS build failed");

  // Copy static assets (sprites + manifest) that are referenced by exports.
  for (const set of [
    "ad",
    "bs",
    "cg",
    "ci",
    "dev",
    "fa",
    "fab",
    "far",
    "fc",
    "fi",
    "gi",
    "gr",
    "hi",
    "io",
    "lu",
    "mdf",
    "mdr",
    "mds",
    "mdt",
    "mso",
    "msr",
    "mss",
    "oc",
    "rx",
    "sl",
    "tf",
    "ti",
    "vsc",
    "wi",
  ]) {
    await mkdir(join(REACT_OUT, "icons", set), { recursive: true });
    const sprite = Bun.file(join(REACT_SRC, "icons", set, "sprite.svg"));
    if (await sprite.exists()) {
      await cp(
        join(REACT_SRC, "icons", set, "sprite.svg"),
        join(REACT_OUT, "icons", set, "sprite.svg"),
      );
    }
  }
  const manifest = Bun.file(join(REACT_SRC, "icons", "manifest.json"));
  if (await manifest.exists()) {
    await cp(join(REACT_SRC, "icons", "manifest.json"), join(REACT_OUT, "icons", "manifest.json"));
  }
}

async function buildReactNative(): Promise<void> {
  const iconFiles = await collect("icons/**/*.tsx", RN_SRC);
  const barrels = await collect("icons/**/index.ts", RN_SRC);
  const perIcon = iconFiles.filter((f) => !f.endsWith("/index.ts"));
  const iconsRoot = join(RN_SRC, "icons");

  // ESM phase 1: root index + set barrels (small entrypoint count, no OOM).
  const esm1 = await Bun.build({
    entrypoints: [join(RN_SRC, "index.ts"), ...barrels],
    outdir: RN_OUT,
    root: RN_SRC,
    target: "node",
    format: "esm",
    splitting: true,
    external: RN_EXTERNAL,
  });
  if (!esm1.success) throw new AggregateError(esm1.logs, "react-native ESM build failed");

  // ESM phase 2: per-icon files, one set at a time to keep memory bounded.
  for (const [setId, setIcons] of groupBySet(perIcon, iconsRoot)) {
    const esm2 = await Bun.build({
      entrypoints: setIcons,
      outdir: RN_OUT,
      root: RN_SRC,
      target: "node",
      format: "esm",
      splitting: true,
      external: RN_EXTERNAL,
    });
    if (!esm2.success)
      throw new AggregateError(esm2.logs, `react-native ESM build failed for set ${setId}`);
  }

  // CJS: bundle the public entry points (no splitting in CJS).
  const cjs = await Bun.build({
    entrypoints: [join(RN_SRC, "index.ts"), ...barrels],
    outdir: RN_OUT,
    root: RN_SRC,
    target: "node",
    format: "cjs",
    external: RN_EXTERNAL,
    naming: "[dir]/[name].cjs",
  });
  if (!cjs.success) throw new AggregateError(cjs.logs, "react-native CJS build failed");
}

async function buildEslintPlugin(): Promise<void> {
  const result = await Bun.build({
    entrypoints: [join(ESLINT_SRC, "index.ts")],
    outdir: ESLINT_OUT,
    target: "node",
    format: "esm",
    external: ["eslint"],
  });
  if (!result.success) throw new AggregateError(result.logs, "eslint-plugin build failed");
}

async function main(): Promise<void> {
  await rm(CORE_OUT, { recursive: true, force: true });
  await rm(REACT_OUT, { recursive: true, force: true });
  await rm(VUE_OUT, { recursive: true, force: true });
  await rm(RN_OUT, { recursive: true, force: true });
  await rm(PREACT_OUT, { recursive: true, force: true });
  await rm(SOLID_OUT, { recursive: true, force: true });
  await rm(WEB_OUT, { recursive: true, force: true });
  await rm(ESLINT_OUT, { recursive: true, force: true });
  await buildCore();
  await buildReact();
  await buildVue();
  await buildReactNative();
  await buildPreact();
  await buildSolid();
  await buildWeb();
  await buildEslintPlugin();
  console.log(
    "Build complete: core + react + vue + react-native + preact + solid + web + eslint-plugin.",
  );
}

await main();
