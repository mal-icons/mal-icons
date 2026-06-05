import type { IconNode } from "@mal-icons/core";
import type { IconSource } from "../../../icons-data/sources.config";
import { toComponentName } from "./naming.ts";
import { optimize } from "./optimize.ts";
import { parseSvg } from "./svg.ts";

/** Target framework for {@link svgToComponentSource}. */
export type ImportFramework = "react" | "react-native" | "vue" | "svelte" | "preact" | "solid";

/**
 * Serializable icon shape produced from a raw SVG. Mirrors core's `IconData`
 * but is also the input the framework factories consume.
 */
export interface ImportedIcon {
  componentName: string;
  viewBox: string;
  defaultAttr: Record<string, string | number>;
  nodes: IconNode[];
}

/** A minimal source descriptor so user SVGs reuse the standard optimizer. */
function userSource(style: "stroke" | "fill"): IconSource {
  return {
    id: "user",
    prefix: "",
    name: "User",
    license: "UNLICENSED",
    repo: "",
    ref: "",
    iconDir: "",
    style,
  };
}

/** Detect whether an SVG is stroke-based (line icons) or fill-based. */
export function detectStyle(svg: string): "stroke" | "fill" {
  const root = svg.match(/<svg\b[^>]*>/i)?.[0] ?? "";
  if (/fill\s*=\s*"none"/i.test(root) || /stroke-width\s*=/i.test(svg)) {
    return "stroke";
  }
  return "fill";
}

/**
 * Convert a raw SVG string into an optimized, generation-ready icon. Reuses
 * the same parse + optimize passes as the bundled sets so user icons get
 * `currentColor` folding, coordinate rounding, and `defaultAttr` lifting.
 */
export function svgToIcon(name: string, svg: string, prefix = ""): ImportedIcon {
  const style = detectStyle(svg);
  const optimized = optimize(parseSvg(svg), userSource(style));
  return {
    componentName: toComponentName(prefix, name),
    viewBox: optimized.viewBox,
    defaultAttr: optimized.defaultAttr,
    nodes: optimized.nodes,
  };
}

function camelToKebab(value: string): string {
  return value.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
}

function serializeNodes(nodes: IconNode[], kebab: boolean): string {
  return `[${nodes
    .map((n) => {
      const attr = kebab
        ? Object.fromEntries(Object.entries(n.attr).map(([k, v]) => [camelToKebab(k), v]))
        : n.attr;
      return `["${n.tag}",${JSON.stringify(attr)}]`;
    })
    .join(",")}]`;
}

/**
 * Render a standalone, tree-shakeable component module for a user SVG,
 * matching the output of the generator for the bundled sets.
 */
export function svgToComponentSource(
  name: string,
  svg: string,
  framework: ImportFramework,
  prefix = "",
): string {
  const icon = svgToIcon(name, svg, prefix);
  const kebab = framework !== "react" && framework !== "react-native";
  const nodesLiteral = serializeNodes(icon.nodes, kebab);
  const hasDefaults = Object.keys(icon.defaultAttr).length > 0;
  const defaultAttr = kebab
    ? Object.fromEntries(Object.entries(icon.defaultAttr).map(([k, v]) => [camelToKebab(k), v]))
    : icon.defaultAttr;

  if (framework === "react") {
    const arg = hasDefaults ? `, ${JSON.stringify(defaultAttr)}` : "";
    return `import { createIcon } from "@mal-icons/react";\n\nexport const ${icon.componentName} = createIcon("${icon.viewBox}", ${nodesLiteral}${arg});\n`;
  }
  if (framework === "react-native") {
    const arg = hasDefaults ? `, ${JSON.stringify(defaultAttr)}` : "";
    return `import { createIcon } from "@mal-icons/react-native";\n\nexport const ${icon.componentName} = createIcon("${icon.viewBox}", ${nodesLiteral}${arg});\n`;
  }
  if (framework === "vue") {
    const arg = hasDefaults ? `, ${JSON.stringify(defaultAttr)}` : "";
    return `import { createIcon } from "@mal-icons/vue";\n\nexport const ${icon.componentName} = createIcon("${icon.viewBox}", ${nodesLiteral}${arg});\n`;
  }
  if (framework === "preact" || framework === "solid") {
    const arg = hasDefaults ? `, ${JSON.stringify(defaultAttr)}` : "";
    return `import { createIcon } from "@mal-icons/${framework}";\n\nexport const ${icon.componentName} = createIcon("${icon.viewBox}", ${nodesLiteral}${arg});\n`;
  }
  const defaultLine = hasDefaults ? `  const defaultAttr = ${JSON.stringify(defaultAttr)};\n` : "";
  const defaultBind = hasDefaults ? " {defaultAttr}" : "";
  return `<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "@mal-icons/svelte/IconBase.svelte";

  const nodes: NodeTuple[] = ${nodesLiteral};
${defaultLine}  let props = $props();
</script>

<IconBase viewBox="${icon.viewBox}" {nodes}${defaultBind} {...props} />
`;
}
