import type { Rule } from "eslint";

const MAL_ICON_PREFIX = "@mal-icon/";

/**
 * Disallow default and namespace imports from `@mal-icon/*` packages. Named
 * imports are required so bundlers can tree-shake unused icons.
 */
export const preferNamedImport: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Require named imports from @mal-icon packages for tree-shaking.",
    },
    schema: [],
    messages: {
      named: "Use named imports from '{{source}}' so unused icons are tree-shaken.",
    },
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const source = node.source.value;
        if (typeof source !== "string" || !source.startsWith(MAL_ICON_PREFIX)) return;
        for (const spec of node.specifiers) {
          if (spec.type === "ImportDefaultSpecifier" || spec.type === "ImportNamespaceSpecifier") {
            context.report({ node: spec, messageId: "named", data: { source } });
          }
        }
      },
    };
  },
};
