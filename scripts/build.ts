#!/usr/bin/env bun
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
  const perIcon = iconFiles.filter((f) => !f.endsWith("/index.ts"));

  const esm = await Bun.build({
    entrypoints: [join(VUE_SRC, "index.ts"), ...barrels, ...perIcon],
    outdir: VUE_OUT,
    root: VUE_SRC,
    target: "browser",
    format: "esm",
    splitting: true,
    external: VUE_EXTERNAL,
  });
  if (!esm.success) throw new AggregateError(esm.logs, "vue ESM build failed");

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
  const perIcon = iconFiles.filter((f) => !f.endsWith("/index.ts"));

  const esm = await Bun.build({
    entrypoints: [join(PREACT_SRC, "index.ts"), ...barrels, ...perIcon],
    outdir: PREACT_OUT,
    root: PREACT_SRC,
    target: "browser",
    format: "esm",
    splitting: true,
    external: PREACT_EXTERNAL,
  });
  if (!esm.success) throw new AggregateError(esm.logs, "preact ESM build failed");

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
  const perIcon = iconFiles.filter((f) => !f.endsWith("/index.ts"));

  const esm = await Bun.build({
    entrypoints: [join(SOLID_SRC, "index.ts"), ...barrels, ...perIcon],
    outdir: SOLID_OUT,
    root: SOLID_SRC,
    target: "browser",
    format: "esm",
    splitting: true,
    external: SOLID_EXTERNAL,
  });
  if (!esm.success) throw new AggregateError(esm.logs, "solid ESM build failed");

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

  // The default entry and every generated icon read theming through React
  // context/hooks, so they are Client Components. They must carry a top-level
  // `"use client"` directive so they can be imported into React Server
  // Components (e.g. Next.js App Router). Bun hoists ESM imports above any
  // in-source directive, demoting it to a no-op string, so the directive is
  // injected via `banner` to guarantee it is the first statement of every
  // emitted client chunk. The hook-free `server.tsx` entry is built
  // separately, WITHOUT the banner, so it stays a Server Component.
  const USE_CLIENT = '"use client";';
  const clientEntrypoints = [join(REACT_SRC, "index.ts"), ...barrels, ...iconFiles];

  const esm = await Bun.build({
    entrypoints: clientEntrypoints,
    outdir: REACT_OUT,
    root: REACT_SRC,
    target: "browser",
    format: "esm",
    splitting: true,
    external: REACT_EXTERNAL,
    banner: USE_CLIENT,
  });
  if (!esm.success) throw new AggregateError(esm.logs, "react ESM build failed");

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
  for (const set of ["ci", "dev", "fa", "fab", "far", "fi", "io", "oc", "ti"]) {
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
  const esmEntrypoints = [join(RN_SRC, "index.ts"), ...barrels, ...iconFiles];

  const esm = await Bun.build({
    entrypoints: esmEntrypoints,
    outdir: RN_OUT,
    root: RN_SRC,
    target: "node",
    format: "esm",
    splitting: true,
    external: RN_EXTERNAL,
  });
  if (!esm.success) throw new AggregateError(esm.logs, "react-native ESM build failed");

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
