import type { Rule } from "eslint";
import type { ImportDeclaration } from "estree";

const MAL_ICON_PREFIX = "@mal-icon/";

/**
 * Report icons imported from `@mal-icon/*` that are never referenced in the
 * file. Unused icon imports add no runtime cost with tree-shaking but signal
 * dead code and bloat editor autocomplete.
 */
export const noUnusedIcons: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow unused icon imports from @mal-icon packages.",
    },
    schema: [],
    messages: {
      unused: "Icon '{{name}}' is imported from '{{source}}' but never used.",
    },
  },
  create(context) {
    const declarations: ImportDeclaration[] = [];
    return {
      ImportDeclaration(node) {
        const source = node.source.value;
        if (typeof source !== "string" || !source.startsWith(MAL_ICON_PREFIX)) return;
        if (node.specifiers.some((s) => s.type === "ImportSpecifier")) {
          declarations.push(node);
        }
      },
      "Program:exit"() {
        const sourceCode = context.sourceCode;
        for (const decl of declarations) {
          const source = decl.source.value;
          for (const variable of sourceCode.getDeclaredVariables(decl)) {
            if (variable.references.length === 0 && variable.identifiers[0]) {
              context.report({
                node: variable.identifiers[0],
                messageId: "unused",
                data: { name: variable.name, source: String(source) },
              });
            }
          }
        }
      },
    };
  },
};
