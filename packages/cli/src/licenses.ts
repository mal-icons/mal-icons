import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { IconsManifest } from "@mal-icon/core";

const MANIFEST_PATH = join(process.cwd(), "packages", "react", "src", "icons", "manifest.json");

/**
 * Render a deterministic Markdown license-compliance report from a manifest.
 * Sets are listed in id order with their license and icon count (§16.5).
 */
export function buildLicenseReport(manifest: IconsManifest): string {
  const sets = [...manifest.sets].sort((a, b) => a.id.localeCompare(b.id));
  const total = sets.reduce((sum, s) => sum + s.count, 0);
  const rows = sets.map((s) => `| ${s.id} | ${s.name} | ${s.license} | ${s.count} |`).join("\n");
  return `# Icon License Report

This project bundles icons from the sets below. Each set retains its original
license; consult the upstream project for full terms.

| Set | Name | License | Icons |
| --- | ---- | ------- | ----- |
${rows}

**Total:** ${total} icon(s) across ${sets.length} set(s).
`;
}

/** Read the generated manifest and write a Markdown report to `out`. */
export async function writeLicenseReport(out: string): Promise<string> {
  const manifest: IconsManifest = existsSync(MANIFEST_PATH)
    ? (JSON.parse(await readFile(MANIFEST_PATH, "utf8")) as IconsManifest)
    : { sets: [] };
  const report = buildLicenseReport(manifest);
  await writeFile(out, report);
  return report;
}
