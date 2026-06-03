#!/usr/bin/env bun
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { sources } from "../../../icons-data/sources.config";
import { type Framework, runAdd } from "./add.ts";
import { fetchSet } from "./fetch.ts";
import { generateSet } from "./generate.ts";
import { writeLicenseReport } from "./licenses.ts";
import { type SearchIndex, searchIcons, semanticSearch } from "./search.ts";
import { type ImportFramework, svgToComponentSource } from "./svg-import.ts";

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
  mal-icon add <Name...> [--set <id>] [--framework <react|react-native|vue|svelte>] [--out <dir>]
  mal-icon licenses [--out <file>]
  mal-icon search <query...> [--semantic]
  mal-icon import <file.svg> --name <Name> [--framework <react|react-native|vue|svelte>] [--out <dir>]

Options:
  --set <id>          Icon set (e.g. fi). Omit on generate to do all sets.
  --no-fetch          Reuse the local SVG cache instead of downloading.
  --limit <n>         Only generate the first <n> icons (for quick checks).
  --framework <name>  Target framework for "add"/"import" (default react).
  --name <Name>       Component name for "import".
  --out <path>        Output directory ("add"/"import") or file ("licenses").

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

async function runSearchCommand(positionals: string[], semantic: boolean): Promise<void> {
  const query = positionals.join(" ");
  const indexPath = join(process.cwd(), "packages", "react", "src", "icons", "search-index.json");
  if (!existsSync(indexPath)) {
    console.error("mal-icon search: no search index found. Run 'generate' first.");
    process.exitCode = 1;
    return;
  }
  const index = JSON.parse(await readFile(indexPath, "utf8")) as SearchIndex;
  const results = (semantic ? semanticSearch : searchIcons)(query, index.entries);
  if (results.length === 0) {
    console.log(`No icons match "${query}".`);
    return;
  }
  for (const r of results) {
    console.log(`${r.set}\t${r.name}`);
  }
}

async function runImportCommand(
  positionals: string[],
  flags: Record<string, string>,
): Promise<void> {
  const file = positionals[0];
  if (file === undefined) {
    console.error("mal-icon import: provide a path to an .svg file.");
    process.exitCode = 1;
    return;
  }
  const name = flags.name;
  if (name === undefined || name === "") {
    console.error("mal-icon import: --name <Name> is required.");
    process.exitCode = 1;
    return;
  }
  const framework = (flags.framework ?? "react") as ImportFramework;
  const svg = await readFile(file, "utf8");
  const source = svgToComponentSource(name, svg, framework);
  const ext =
    framework === "react" || framework === "react-native"
      ? "tsx"
      : framework === "vue"
        ? "ts"
        : "svelte";
  const outDir = flags.out ?? "src/icons";
  const dest = join(outDir, `${name}.${ext}`);
  await mkdir(outDir, { recursive: true });
  await writeFile(dest, source, "utf8");
  console.log(`imported ${name} -> ${dest}`);
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
      await runSearchCommand(positionals, "semantic" in flags);
      break;
    case "import":
      await runImportCommand(positionals, flags);
      break;
    default:
      printHelp();
  }
}

await main();
