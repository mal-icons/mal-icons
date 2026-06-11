#!/usr/bin/env bun
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Set the version field of every publishable package to a given value.
 *
 * Used by the release workflow (.github/workflows/release.yml) to stamp the
 * pushed git tag's version into each `packages/<name>/package.json`. Packages
 * marked `"private": true` (e.g. the CLI) are skipped — they are never
 * published.
 *
 * Only the `"version"` value is rewritten; all other formatting is preserved
 * byte-for-byte so the change stays minimal and review-friendly.
 *
 * Usage: `bun run scripts/set-version.ts <version>`
 *   e.g. `bun run scripts/set-version.ts 0.1.3`
 */

const SEMVER = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/;

function main(): void {
  const version = process.argv[2]?.trim();
  if (!version) {
    console.error("error: missing version argument");
    console.error("usage: bun run scripts/set-version.ts <version>");
    process.exit(1);
  }
  if (!SEMVER.test(version)) {
    console.error(`error: "${version}" is not a valid semantic version`);
    process.exit(1);
  }

  const packagesDir = join(process.cwd(), "packages");
  const updated: string[] = [];
  const skipped: string[] = [];

  for (const name of readdirSync(packagesDir).sort()) {
    const manifestPath = join(packagesDir, name, "package.json");
    let raw: string;
    try {
      raw = readFileSync(manifestPath, "utf8");
    } catch {
      continue; // not a package directory
    }

    const manifest = JSON.parse(raw);
    if (manifest.private === true) {
      skipped.push(manifest.name ?? name);
      continue;
    }

    const next = raw.replace(/("version"\s*:\s*")[^"]*(")/, `$1${version}$2`);
    if (next === raw) {
      console.error(`error: could not find a "version" field in ${manifestPath}`);
      process.exit(1);
    }
    writeFileSync(manifestPath, next);
    updated.push(manifest.name ?? name);
  }

  console.log(`Set version ${version} on ${updated.length} package(s):`);
  for (const n of updated) {
    console.log(`  + ${n}`);
  }
  if (skipped.length > 0) {
    console.log(`Skipped ${skipped.length} private package(s): ${skipped.join(", ")}`);
  }
}

main();
