#!/usr/bin/env bun
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { sources } from "../../../icons-data/sources.config";
import { type Framework, runAdd } from "./add.ts";
import { fetchSet } from "./fetch.ts";
import { generateSet } from "./generate.ts";
import { writeLicenseReport } from "./licenses.ts";
import { type SearchIndex, searchIcons } from "./search.ts";

interface GenerateOptions {
  set?: string;
  noFetch: boolean;
  limit?: number;
}

interface ParsedArgs {
  command: string;
  opts: GenerateOptions;
  positionals: string[];
  flags: Record<string, string>;
}

function parseArgs(argv: string[]): ParsedArgs {
  const command = argv[0] ?? "help";
  const opts: GenerateOptions = { noFetch: false };
  const positionals: string[] = [];
  const flags: Record<string, string> = {};
  for (let i = 1; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === undefined) continue;
    if (arg === "--set") {
      opts.set = argv[++i];
      flags.set = opts.set ?? "";
    } else if (arg === "--no-fetch") {
      opts.noFetch = true;
    } else if (arg === "--limit") {
      opts.limit = Number(argv[++i]);
    } else if (arg.startsWith("--")) {
      flags[arg.slice(2)] = argv[++i] ?? "";
    } else {
      positionals.push(arg);
    }
  }
  return { command, opts, positionals, flags };
}

function printHelp(): void {
  console.log(`mal-icon — icon build pipeline

Usage:
  mal-icon generate --set <id> [--no-fetch] [--limit <n>]
  mal-icon add <Name...> [--set <id>] [--framework <react|vue|svelte>] [--out <dir>]
  mal-icon licenses [--out <file>]
  mal-icon search <query...>

Options:
  --set <id>          Icon set (e.g. fi). Omit on generate to do all sets.
  --no-fetch          Reuse the local SVG cache instead of downloading.
  --limit <n>         Only generate the first <n> icons (for quick checks).
  --framework <name>  Target framework for "add" (default react).
  --out <path>        Output directory ("add") or file ("licenses").

Available sets: ${Object.keys(sources).join(", ")}`);
}

async function runGenerate(opts: GenerateOptions): Promise<void> {
  const setIds = opts.set ? [opts.set] : Object.keys(sources);
  for (const id of setIds) {
    const source = sources[id];
    if (!source) {
      console.error(`Unknown set: ${id}`);
      process.exitCode = 1;
      return;
    }
    console.log(`[${id}] fetching${opts.noFetch ? " (cache)" : ""}…`);
    const raw = await fetchSet(source, opts.noFetch);
    console.log(`[${id}] generating ${raw.length} icons…`);
    const { count } = await generateSet(source, raw, opts.limit);
    console.log(`[${id}] wrote ${count} icon module(s).`);
  }
}

async function runAddCommand(positionals: string[], flags: Record<string, string>): Promise<void> {
  if (positionals.length === 0) {
    console.error("mal-icon add: provide at least one icon name.");
    process.exitCode = 1;
    return;
  }
  const framework = (flags.framework ?? "react") as Framework;
  const opts = {
    set: flags.set ?? "fi",
    framework,
    out: flags.out ?? "src/icons",
  };
  const plan = await runAdd(positionals, opts);
  for (const item of plan) {
    console.log(`added ${item.name} -> ${item.dest}`);
  }
  console.log(`Done: ${plan.length} icon(s) vendored into ${opts.out}.`);
}

async function runLicensesCommand(flags: Record<string, string>): Promise<void> {
  const out = flags.out ?? "LICENSES.md";
  await writeLicenseReport(out);
  console.log(`Wrote license report to ${out}.`);
}

async function runSearchCommand(positionals: string[]): Promise<void> {
  const query = positionals.join(" ");
  const indexPath = join(process.cwd(), "packages", "react", "src", "icons", "search-index.json");
  if (!existsSync(indexPath)) {
    console.error("mal-icon search: no search index found. Run 'generate' first.");
    process.exitCode = 1;
    return;
  }
  const index = JSON.parse(await readFile(indexPath, "utf8")) as SearchIndex;
  const results = searchIcons(query, index.entries);
  if (results.length === 0) {
    console.log(`No icons match "${query}".`);
    return;
  }
  for (const r of results) {
    console.log(`${r.set}\t${r.name}`);
  }
}

async function main(): Promise<void> {
  const { command, opts, positionals, flags } = parseArgs(process.argv.slice(2));
  switch (command) {
    case "generate":
      await runGenerate(opts);
      break;
    case "add":
      await runAddCommand(positionals, flags);
      break;
    case "licenses":
      await runLicensesCommand(flags);
      break;
    case "search":
      await runSearchCommand(positionals);
      break;
    default:
      printHelp();
  }
}

await main();
