#!/usr/bin/env node
/**
 * search.js — fast icon search across the mal-icons reference packs.
 *
 * Searches name + tags + description over every set (or one set), ranking
 * results with the same algorithm the library ships in its CLI:
 *   exact name/tag > name prefix > tag prefix > substring > subsequence,
 * plus everyday-word synonym expansion (e.g. "trash" finds FiTrash2,
 * "gear" finds FiSettings, "house" finds FiHome).
 *
 * Usage:
 *   node search.js <query> [--set fi|ci|io|fa|fab|far] [--limit N] [--json]
 *
 * Examples:
 *   node search.js trash
 *   node search.js "shopping cart" --set fi
 *   node search.js notification --limit 5 --json
 *
 * Reads the JSON packs in ../references/icons/. No dependencies.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ICONS_DIR = path.join(HERE, "..", "references", "icons");
const SETS = ["fi", "ci", "io", "fa", "fab", "far"];

/** Everyday word -> icon terms (lock-step with packages/cli/src/search.ts). */
const SYNONYMS = {
  add: ["plus"],
  account: ["user"],
  bin: ["trash"],
  cancel: ["x"],
  cart: ["shopping", "cart"],
  close: ["x"],
  delete: ["trash", "x"],
  edit: ["edit", "pen", "pencil"],
  find: ["search"],
  gear: ["settings", "sliders"],
  hide: ["eye"],
  house: ["home"],
  like: ["heart", "thumbs"],
  love: ["heart"],
  notification: ["bell"],
  person: ["user"],
  photo: ["image", "camera"],
  picture: ["image"],
  remove: ["trash", "minus", "x"],
  save: ["save", "download"],
  setting: ["settings", "sliders"],
  trash: ["trash"],
  warning: ["alert", "triangle"],
};

function parseArgs(argv) {
  const opts = { limit: 20, set: null, json: false, terms: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--limit" || a === "-n") opts.limit = Number(argv[++i]) || opts.limit;
    else if (a === "--set" || a === "-s") opts.set = argv[++i];
    else if (a === "--json") opts.json = true;
    else if (a === "--help" || a === "-h") opts.help = true;
    else opts.terms.push(a);
  }
  opts.query = opts.terms.join(" ");
  return opts;
}

function loadIcons(setFilter) {
  const ids = setFilter ? [setFilter] : SETS;
  const icons = [];
  for (const id of ids) {
    const file = path.join(ICONS_DIR, `${id}.json`);
    if (!fs.existsSync(file)) {
      process.stderr.write(`! pack not found: ${file}\n`);
      continue;
    }
    const pack = JSON.parse(fs.readFileSync(file, "utf8"));
    for (const icon of pack.icons) icons.push({ ...icon, set: pack.set.id });
  }
  return icons;
}

/** True if every char of q appears in order within text (subsequence). */
function isSubsequence(q, text) {
  let i = 0;
  for (let j = 0; j < text.length && i < q.length; j++) {
    if (text[j] === q[i]) i++;
  }
  return i === q.length;
}

/** Expand a query into its tokens plus any everyday-word synonyms. */
function expandQuery(query) {
  const whole = query.toLowerCase().trim();
  const tokens = whole.split(/[\s\-_]+/).filter(Boolean);
  const out = [];
  const seen = new Set();
  const push = (t) => {
    if (t && !seen.has(t)) {
      seen.add(t);
      out.push(t);
    }
  };
  push(whole);
  for (const token of tokens) {
    push(token);
    for (const syn of SYNONYMS[token] ?? []) push(syn);
  }
  return out;
}

/** Score a single candidate term against one icon (0 = no match). */
function scoreTerm(q, icon, name, tags) {
  if (name === q || tags.includes(q)) return 100;
  if (name.startsWith(q)) return 80;
  if (tags.some((t) => t.startsWith(q))) return 60;
  if (name.includes(q)) return 40;
  if (tags.some((t) => t.includes(q))) return 30;
  if (icon.description.toLowerCase().includes(q)) return 20;
  if (isSubsequence(q, name)) return 10;
  return 0;
}

function search(query, icons, limit) {
  const candidates = expandQuery(query);
  if (candidates.length === 0) return icons.slice(0, limit);
  const original = candidates[0];
  const scored = [];
  for (const icon of icons) {
    const name = icon.name.toLowerCase();
    const tags = icon.tags.map((t) => t.toLowerCase());
    let best = 0;
    for (const c of candidates) {
      const raw = scoreTerm(c, icon, name, tags);
      const weighted = c === original ? raw : raw * 0.85;
      if (weighted > best) best = weighted;
    }
    if (best > 0) scored.push({ icon, score: best });
  }
  scored.sort(
    (a, b) =>
      b.score - a.score ||
      a.icon.name.length - b.icon.name.length ||
      a.icon.name.localeCompare(b.icon.name),
  );
  return scored.slice(0, limit).map((s) => s.icon);
}

function printHelp() {
  process.stdout.write(
    [
      "Usage: node search.js <query> [--set fi|ci|io|fa|fab|far] [--limit N] [--json]",
      "",
      "Search mal-icons by name, tags, or description.",
      "",
      "Options:",
      "  -s, --set <id>     Limit to one set (fi, ci, io, fa, fab, far).",
      "  -n, --limit <N>    Max results (default 20).",
      "      --json         Output JSON instead of a table.",
      "  -h, --help         Show this help.",
      "",
      "Examples:",
      "  node search.js trash",
      '  node search.js "shopping cart" --set fi',
      "  node search.js notification --limit 5 --json",
      "",
    ].join("\n"),
  );
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help || !opts.query) {
    printHelp();
    process.exit(opts.help ? 0 : 1);
  }
  if (opts.set && !SETS.includes(opts.set)) {
    process.stderr.write(`! unknown set "${opts.set}" (expected: ${SETS.join(", ")})\n`);
    process.exit(1);
  }

  const icons = loadIcons(opts.set);
  const results = search(opts.query, icons, opts.limit);

  if (opts.json) {
    process.stdout.write(`${JSON.stringify(results, null, 2)}\n`);
    return;
  }

  if (results.length === 0) {
    process.stdout.write(`No icons match "${opts.query}".\n`);
    return;
  }

  const nameW = Math.max(...results.map((r) => r.name.length), 4);
  process.stdout.write(`${results.length} result(s) for "${opts.query}":\n\n`);
  for (const r of results) {
    const name = r.name.padEnd(nameW);
    process.stdout.write(`  ${name}  [${r.set}]  ${r.description}\n`);
  }
  process.stdout.write("\n");
}

main();
