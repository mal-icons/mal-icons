#!/usr/bin/env bun
import { sources } from "../../../icons-data/sources.config";
import { fetchSet } from "./fetch.ts";
import { generateSet } from "./generate.ts";

interface GenerateOptions {
  set?: string;
  noFetch: boolean;
  limit?: number;
}

function parseArgs(argv: string[]): { command: string; opts: GenerateOptions } {
  const command = argv[0] ?? "help";
  const opts: GenerateOptions = { noFetch: false };
  for (let i = 1; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--set") {
      opts.set = argv[++i];
    } else if (arg === "--no-fetch") {
      opts.noFetch = true;
    } else if (arg === "--limit") {
      opts.limit = Number(argv[++i]);
    }
  }
  return { command, opts };
}

function printHelp(): void {
  console.log(`mal-icon — icon build pipeline

Usage:
  mal-icon generate --set <id> [--no-fetch] [--limit <n>]

Options:
  --set <id>     Icon set to generate (e.g. fi). Omit to generate all sets.
  --no-fetch     Reuse the local SVG cache instead of downloading.
  --limit <n>    Only generate the first <n> icons (for quick checks).

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

async function main(): Promise<void> {
  const { command, opts } = parseArgs(process.argv.slice(2));
  switch (command) {
    case "generate":
      await runGenerate(opts);
      break;
    default:
      printHelp();
  }
}

await main();
