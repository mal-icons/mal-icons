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

const LIMIT_BYTES = 2800; // 2.8 KB gzipped (headroom over the largest detailed icons, e.g. IoLogoTux ~2.7 KB)
/**
 * Per-set budget overrides. Brand marks (Font Awesome `fab`, Grommet `gr`)
 * are detailed, multi-path logos (e.g. FabOldRepublic ~5.2 KB, GrHadoop
 * ~4.3 KB) whose geometry is irreducible, so they get a larger ceiling than
 * the icon-grade default above. Devicons (`dev`) ship full developer brand
 * artwork — some are elaborate, single-path illustrations (e.g. DevLerna
 * ~51 KB gzip) — so the set carries a much higher ceiling. Codicons (`vsc`)
 * include the dense Tux mascot (VscTerminalLinux ~3.85 KB) whose detailed
 * geometry is irreducible. Game Icons (`gi`) are highly detailed single-path
 * illustrations whose densest glyphs (e.g. GiAbstract066 ~9.3 KB gzip) carry
 * irreducible geometry, so the set gets a larger ceiling. Every other set
 * stays on the strict {@link LIMIT_BYTES} budget.
 */
const SET_LIMIT_BYTES: Record<string, number> = {
  fab: 6000,
  dev: 52000,
  gi: 10000,
  gr: 5000,
  vsc: 4000,
};
const ICONS_ROOT = join(process.cwd(), "packages", "react", "src", "icons");

/** Resolve the set id (parent folder) and its applicable byte budget. */
function limitFor(file: string): number {
  const setId = file.slice(ICONS_ROOT.length + 1).split(/[/\\]/)[0];
  return SET_LIMIT_BYTES[setId] ?? LIMIT_BYTES;
}

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
  const offenders: Array<{ file: string; size: number; limit: number }> = [];
  for (const file of files) {
    const size = gzippedSize(file);
    if (size > max) {
      max = size;
      maxFile = file;
    }
    const limit = limitFor(file);
    if (size > limit) offenders.push({ file, size, limit });
  }

  console.log(`Checked ${files.length} icons. Largest: ${max} B gzip (${maxFile}).`);
  if (offenders.length > 0) {
    console.error(`\n${offenders.length} icon(s) exceed their gzip budget:`);
    for (const o of offenders) console.error(`  ${o.size} B (limit ${o.limit} B)  ${o.file}`);
    process.exit(1);
  }
  console.log(`All icons within budget (default ${LIMIT_BYTES} B).`);
}

main();
