#!/usr/bin/env bun
/**
 * Build the publishable JS artifacts for @mal-icon/core and @mal-icon/react.
 *
 * - ESM is built with code-splitting so per-icon modules share a single
 *   runtime chunk while remaining individually tree-shakeable.
 * - CJS is built for the package entry points (root + per-set barrels).
 * - Type declarations are emitted separately by `tsc --build` (run first).
 */
import { Glob } from "bun";
import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const REACT_SRC = join(ROOT, "packages", "react", "src");
const REACT_OUT = join(ROOT, "packages", "react", "dist");
const CORE_SRC = join(ROOT, "packages", "core", "src");
const CORE_OUT = join(ROOT, "packages", "core", "dist");

const REACT_EXTERNAL = ["react", "react/jsx-runtime", "react-dom", "@mal-icon/core"];

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

async function buildReact(): Promise<void> {
  const iconFiles = await collect("icons/**/*.tsx", REACT_SRC);
  const barrels = await collect("icons/**/index.ts", REACT_SRC);
  const esmEntrypoints = [join(REACT_SRC, "index.ts"), ...barrels, ...iconFiles];

  const esm = await Bun.build({
    entrypoints: esmEntrypoints,
    outdir: REACT_OUT,
    root: REACT_SRC,
    target: "browser",
    format: "esm",
    splitting: true,
    external: REACT_EXTERNAL,
  });
  if (!esm.success) throw new AggregateError(esm.logs, "react ESM build failed");

  // CJS: bundle the public entry points (no splitting in CJS).
  const cjs = await Bun.build({
    entrypoints: [join(REACT_SRC, "index.ts"), ...barrels],
    outdir: REACT_OUT,
    root: REACT_SRC,
    target: "browser",
    format: "cjs",
    external: REACT_EXTERNAL,
    naming: "[dir]/[name].cjs",
  });
  if (!cjs.success) throw new AggregateError(cjs.logs, "react CJS build failed");

  // Copy static assets (sprites + manifest) that are referenced by exports.
  await mkdir(join(REACT_OUT, "icons", "fi"), { recursive: true });
  const sprite = Bun.file(join(REACT_SRC, "icons", "fi", "sprite.svg"));
  if (await sprite.exists()) {
    await cp(
      join(REACT_SRC, "icons", "fi", "sprite.svg"),
      join(REACT_OUT, "icons", "fi", "sprite.svg"),
    );
  }
  const manifest = Bun.file(join(REACT_SRC, "icons", "manifest.json"));
  if (await manifest.exists()) {
    await cp(
      join(REACT_SRC, "icons", "manifest.json"),
      join(REACT_OUT, "icons", "manifest.json"),
    );
  }
}

async function main(): Promise<void> {
  await rm(CORE_OUT, { recursive: true, force: true });
  await rm(REACT_OUT, { recursive: true, force: true });
  await buildCore();
  await buildReact();
  console.log("Build complete: core + react (ESM + CJS).");
}

await main();
