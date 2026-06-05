import type { ESLint, Rule } from "eslint";
import { noUnusedIcons } from "./rules/no-unused-icons.ts";
import { preferNamedImport } from "./rules/prefer-named-import.ts";

const rules: Record<string, Rule.RuleModule> = {
  "prefer-named-import": preferNamedImport,
  "no-unused-icons": noUnusedIcons,
};

const plugin = {
  meta: { name: "@mal-icons/eslint-plugin", version: "0.1.0" },
  rules,
  configs: {} as Record<string, unknown>,
};

/** Recommended flat config enabling both rules as errors. */
plugin.configs.recommended = {
  plugins: { "@mal-icons": plugin as unknown as ESLint.Plugin },
  rules: {
    "@mal-icons/prefer-named-import": "error",
    "@mal-icons/no-unused-icons": "error",
  },
};

export { preferNamedImport, noUnusedIcons, rules };
export default plugin;
