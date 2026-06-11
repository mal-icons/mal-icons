#!/usr/bin/env bun
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
/**
 * Size budget gate (NFR-2): every generated per-icon module must stay under
 * the gzipped size limit. Run via `bun run size`.
 *
 * We measure the gzipped size of each icon's own module source (its data +
 * the tiny `createIcon` call), which represents the marginal cost of adding
 * one icon — the shared runtime is paid only once by the consumer.
 */
import { gzipSync } from "node:zlib";

const LIMIT_BYTES = 800; // 0.8 KB gzipped
const ICONS_ROOT = join(process.cwd(), "packages", "react", "src", "icons");

function walkIconFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      out.push(...walkIconFiles(full));
    } else if (entry.endsWith(".tsx")) {
      out.push(full);
    }
  }
  return out;
}

function gzippedSize(file: string): number {
  // Strip the shared import line so we measure only the icon's own payload.
  const source = readFileSync(file, "utf8").replace(/^import .*\n+/m, "");
  return gzipSync(Buffer.from(source)).length;
}

function main(): void {
  const files = walkIconFiles(ICONS_ROOT);
  if (files.length === 0) {
    console.error("No generated icon files found. Run the generator first.");
    process.exit(1);
  }

  let max = 0;
  let maxFile = "";
  const offenders: Array<{ file: string; size: number }> = [];
  for (const file of files) {
    const size = gzippedSize(file);
    if (size > max) {
      max = size;
      maxFile = file;
    }
    if (size > LIMIT_BYTES) offenders.push({ file, size });
  }

  console.log(`Checked ${files.length} icons. Largest: ${max} B gzip (${maxFile}).`);
  if (offenders.length > 0) {
    console.error(`\n${offenders.length} icon(s) exceed ${LIMIT_BYTES} B gzip:`);
    for (const o of offenders) console.error(`  ${o.size} B  ${o.file}`);
    process.exit(1);
  }
  console.log(`All icons within the ${LIMIT_BYTES} B budget.`);
}

main();
