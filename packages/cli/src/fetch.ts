import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, relative } from "node:path";
import type { IconSource } from "../../../icons-data/sources.config";

/** A raw source SVG: its base name (without extension) and file contents. */
export interface RawIcon {
  name: string;
  svg: string;
}

const CACHE_ROOT = join(process.cwd(), ".svg-cache");

/**
 * Reduce a source SVG file name to a clean, lowercase kebab-case slug.
 *
 * Source sets are inconsistent: some use kebab-case (`arrow-up.svg`), others
 * mix underscores and punctuation (`fork_&_knife.svg`, `align_center-h.svg`).
 * Folding everything to alphanumeric tokens joined by single hyphens yields a
 * stable id that is safe for component names, custom-element selectors, and
 * sprite ids. Already-kebab names (e.g. Feather) are unchanged.
 */
function normalizeName(file: string): string {
  return file
    .replace(/\.svg$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function cacheDirFor(source: IconSource): string {
  return join(CACHE_ROOT, source.id);
}

/**
 * Recursively collect every `.svg` file under `dir`, returning paths relative
 * to `dir` (POSIX-separated, sorted) so the result is deterministic across
 * platforms. Used by sets that shard artwork across sub-directories.
 */
async function collectSvgsRecursive(dir: string): Promise<string[]> {
  const out: string[] = [];
  async function walk(current: string): Promise<void> {
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else if (entry.name.endsWith(".svg")) {
        out.push(relative(dir, full).split("\\").join("/"));
      }
    }
  }
  await walk(dir);
  return out.sort();
}

/**
 * Ensure raw SVGs for a set are available locally.
 *
 * When `noFetch` is false the set's pinned archive is downloaded from
 * GitHub, extracted, and the `.svg` files are copied into a per-set cache.
 * When `noFetch` is true the existing cache is reused (offline / determinism).
 */
export async function fetchSet(source: IconSource, noFetch: boolean): Promise<RawIcon[]> {
  const cacheDir = cacheDirFor(source);

  if (!noFetch) {
    await downloadAndExtract(source, cacheDir);
  }

  if (!existsSync(cacheDir)) {
    throw new Error(
      `No cached SVGs for set "${source.id}" at ${cacheDir}. Run without --no-fetch first.`,
    );
  }

  const files = source.recursive
    ? await collectSvgsRecursive(cacheDir)
    : (await readdir(cacheDir)).filter((f) => f.endsWith(".svg")).sort();
  const exclude = source.excludePattern ? new RegExp(source.excludePattern, "i") : null;
  const icons: RawIcon[] = [];
  for (const file of files) {
    if (exclude?.test(file)) continue;
    const svg = await readFile(join(cacheDir, file), "utf8");
    // Recursive sets carry a sub-path (e.g. `lorc/ace.svg`); the component name
    // derives from the file's own base name only, never its author folder.
    const base = file.slice(file.lastIndexOf("/") + 1);
    icons.push({ name: normalizeName(base), svg });
  }
  return icons;
}

async function downloadAndExtract(source: IconSource, cacheDir: string): Promise<void> {
  const url = `https://codeload.github.com/${source.repo}/tar.gz/${source.ref}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to download ${url}: HTTP ${res.status}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());

  const work = await mkdtemp(join(tmpdir(), `mal-icons-${source.id}-`));
  try {
    const tarPath = join(work, "src.tar.gz");
    await writeFile(tarPath, buf);
    execFileSync("tar", ["-xzf", tarPath, "-C", work]);

    const entries = await readdir(work, { withFileTypes: true });
    const rootDir = entries.find((e) => e.isDirectory());
    if (!rootDir) throw new Error("Extracted archive has no root directory");

    const iconDir = join(work, rootDir.name, source.iconDir);
    if (!existsSync(iconDir)) {
      throw new Error(`Icon directory not found in archive: ${source.iconDir}`);
    }

    await rm(cacheDir, { recursive: true, force: true });
    await mkdir(cacheDir, { recursive: true });
    // Recursive sets (e.g. Game Icons) keep their sub-directory structure so
    // identically-named glyphs from different author folders don't collide in
    // the flat cache; flat sets copy `.svg` files straight into the cache root.
    const relPaths = source.recursive
      ? await collectSvgsRecursive(iconDir)
      : (await readdir(iconDir)).filter((f) => f.endsWith(".svg"));
    for (const rel of relPaths) {
      const dest = join(cacheDir, rel);
      await mkdir(join(dest, ".."), { recursive: true });
      await writeFile(dest, await readFile(join(iconDir, rel), "utf8"));
    }
  } finally {
    await rm(work, { recursive: true, force: true });
  }
}
