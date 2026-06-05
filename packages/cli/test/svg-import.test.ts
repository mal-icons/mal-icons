import { describe, expect, test } from "bun:test";
import { detectStyle, svgToComponentSource, svgToIcon } from "../src/svg-import.ts";

const strokeSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2">
  <path d="M1.001 2.002 L3 4" />
</svg>`;

const fillSvg = `<svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="4" fill="#123456"/></svg>`;

describe("svgToIcon", () => {
  test("detects stroke icons", () => {
    expect(detectStyle(strokeSvg)).toBe("stroke");
  });

  test("detects fill icons", () => {
    expect(detectStyle(fillSvg)).toBe("fill");
  });

  test("optimizes coordinates and lifts stroke defaults", () => {
    const icon = svgToIcon("my-icon", strokeSvg, "Fi");
    expect(icon.componentName).toBe("FiMyIcon");
    expect(icon.viewBox).toBe("0 0 24 24");
    expect(icon.defaultAttr.fill).toBe("none");
    expect(icon.defaultAttr.strokeWidth).toBe(2);
    // 1.001 rounds to 1, 2.002 rounds to 2.
    expect(icon.nodes[0]?.attr.d).toBe("M1 2 L3 4");
  });

  test("folds fill colors to currentColor", () => {
    const icon = svgToIcon("dot", fillSvg);
    expect(icon.nodes[0]?.attr.fill).toBe("currentColor");
  });
});

describe("svgToComponentSource", () => {
  test("react module imports the public package", () => {
    const src = svgToComponentSource("Dot", fillSvg, "react");
    expect(src).toContain('from "@mal-icons/react"');
    expect(src).toContain("export const Dot = createIcon(");
  });

  test("react-native module imports the public package with camel-cased attrs", () => {
    const src = svgToComponentSource("Arrow", strokeSvg, "react-native");
    expect(src).toContain('from "@mal-icons/react-native"');
    expect(src).toContain("export const Arrow = createIcon(");
    expect(src).toContain('"strokeWidth":2');
  });

  test("svelte module wraps IconBase.svelte", () => {
    const src = svgToComponentSource("Dot", fillSvg, "svelte");
    expect(src).toContain("@mal-icons/svelte/IconBase.svelte");
    expect(src).toContain("<IconBase");
  });

  test("vue module uses kebab-cased attrs", () => {
    const src = svgToComponentSource("Arrow", strokeSvg, "vue");
    expect(src).toContain('from "@mal-icons/vue"');
    expect(src).toContain('"stroke-width":2');
  });
});
