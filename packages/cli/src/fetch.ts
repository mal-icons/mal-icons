import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { IconSource } from "../../../icons-data/sources.config";

/** A raw source SVG: its base name (without extension) and file contents. */
export interface RawIcon {
  name: string;
  svg: string;
}

const CACHE_ROOT = join(process.cwd(), ".svg-cache");

function cacheDirFor(source: IconSource): string {
  return join(CACHE_ROOT, source.id);
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

  const files = (await readdir(cacheDir)).filter((f) => f.endsWith(".svg")).sort();
  const icons: RawIcon[] = [];
  for (const file of files) {
    const svg = await readFile(join(cacheDir, file), "utf8");
    icons.push({ name: file.replace(/\.svg$/, ""), svg });
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

  const work = await mkdtemp(join(tmpdir(), `mal-icon-${source.id}-`));
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
    const svgFiles = (await readdir(iconDir)).filter((f) => f.endsWith(".svg"));
    for (const file of svgFiles) {
      const content = await readFile(join(iconDir, file), "utf8");
      await writeFile(join(cacheDir, file), content);
    }
  } finally {
    await rm(work, { recursive: true, force: true });
  }
}
