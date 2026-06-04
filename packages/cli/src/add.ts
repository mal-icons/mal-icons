import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

/** Frameworks the `add` command can vendor icons for. */
export const FRAMEWORK_EXT = {
  react: "tsx",
  "react-native": "tsx",
  vue: "ts",
  svelte: "svelte",
  preact: "ts",
  solid: "ts",
} as const;
export type Framework = keyof typeof FRAMEWORK_EXT;

/** Options controlling where icons are copied from and to. */
export interface AddOptions {
  set: string;
  framework: Framework;
  out: string;
}

/** A single resolved copy operation. */
export interface AddItem {
  name: string;
  source: string;
  dest: string;
}

function iconsRoot(framework: Framework): string {
  return join(import.meta.dir, "..", "..", framework, "src", "icons");
}

/**
 * Rewrite a generated icon module's intra-package imports so the vendored
 * copy resolves against the published package instead of relative source.
 */
export function rewriteImports(content: string, framework: Framework): string {
  switch (framework) {
    case "react":
      return content.replace('"../../create-icon.tsx"', '"@mal-icon/react"');
    case "react-native":
      return content.replace('"../../create-icon.tsx"', '"@mal-icon/react-native"');
    case "vue":
      return content.replace('"../../create-icon.ts"', '"@mal-icon/vue"');
    case "svelte":
      return content.replace('"../../IconBase.svelte"', '"@mal-icon/svelte/IconBase.svelte"');
    case "preact":
      return content.replace('"../../create-icon.ts"', '"@mal-icon/preact"');
    case "solid":
      return content.replace('"../../create-icon.ts"', '"@mal-icon/solid"');
  }
}

/**
 * Resolve which source files back the requested icon names, throwing on any
 * name that does not exist in the generated set. Pure (no I/O writes).
 */
export function resolveAddPlan(names: string[], opts: AddOptions): AddItem[] {
  const ext = FRAMEWORK_EXT[opts.framework];
  const setDir = join(iconsRoot(opts.framework), opts.set);
  return names.map((name) => {
    const source = join(setDir, `${name}.${ext}`);
    if (!existsSync(source)) {
      throw new Error(`mal-icon: unknown icon "${name}" in set "${opts.set}" (${opts.framework})`);
    }
    return { name, source, dest: join(opts.out, `${name}.${ext}`) };
  });
}

/**
 * Copy exactly the requested icons into `opts.out`, rewriting imports so the
 * vendored files compile against the published packages. Returns the plan.
 */
export async function runAdd(names: string[], opts: AddOptions): Promise<AddItem[]> {
  const plan = resolveAddPlan(names, opts);
  await mkdir(opts.out, { recursive: true });
  for (const item of plan) {
    const content = rewriteImports(await readFile(item.source, "utf8"), opts.framework);
    await writeFile(item.dest, content);
  }
  return plan;
}
