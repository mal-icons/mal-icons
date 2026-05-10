import { describe, expect, test } from "bun:test";
import { renderToString as vueRenderToString } from "@vue/server-renderer";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { render as svelteRender } from "svelte/server";
import { h } from "vue";

import { FiActivity as ReactFiActivity } from "../packages/react/src/icons/fi/FiActivity.tsx";
import SvelteFiActivity from "../packages/svelte/src/icons/fi/FiActivity.svelte";
import { FiActivity as VueFiActivity } from "../packages/vue/src/icons/fi/FiActivity.ts";

interface Shape {
  tag: string;
  geometry: string;
}

interface Normalized {
  viewBox: string;
  fill: string;
  stroke: string;
  strokeWidth: string;
  width: string;
  height: string;
  shapes: Shape[];
}

function attr(svg: string, name: string): string {
  const m = svg.match(new RegExp(`(?<![\\w-])${name}="([^"]*)"`));
  return m ? m[1] : "";
}

/** Extract a framework-agnostic description of the rendered icon. */
function normalize(svg: string): Normalized {
  const shapes: Shape[] = [];
  const shapeRe = /<(polyline|circle|path|line|rect|polygon|ellipse)\b([^>]*?)\/?>/g;
  let match: RegExpExecArray | null;
  // biome-ignore lint/suspicious/noAssignInExpressions: standard regex iteration
  while ((match = shapeRe.exec(svg)) !== null) {
    const body = match[2];
    const geometry =
      body.match(/(?:points|d)="([^"]*)"/)?.[1] ??
      ["cx", "cy", "r", "x", "y", "width", "height", "x1", "y1", "x2", "y2"]
        .map((a) => body.match(new RegExp(`${a}="([^"]*)"`))?.[1] ?? "")
        .filter(Boolean)
        .join(" ");
    shapes.push({ tag: match[1], geometry });
  }
  return {
    viewBox: attr(svg, "viewBox"),
    fill: attr(svg, "fill"),
    stroke: attr(svg, "stroke"),
    strokeWidth: attr(svg, "stroke-width"),
    width: attr(svg, "width"),
    height: attr(svg, "height"),
    shapes,
  };
}

function reactSvg(): string {
  return renderToStaticMarkup(createElement(ReactFiActivity));
}

function vueSvg(): Promise<string> {
  return vueRenderToString(h(VueFiActivity));
}

function svelteSvg(): string {
  return svelteRender(SvelteFiActivity).body;
}

describe("cross-framework parity: FiActivity", () => {
  test("all frameworks render an equivalent normalized SVG", async () => {
    const react = normalize(reactSvg());
    const vue = normalize(await vueSvg());
    const svelte = normalize(svelteSvg());

    const expected: Normalized = {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      width: "1em",
      height: "1em",
      shapes: [{ tag: "polyline", geometry: "22 12 18 12 15 21 9 3 6 12 2 12" }],
    };

    expect(react).toEqual(expected);
    expect(vue).toEqual(expected);
    expect(svelte).toEqual(expected);
  });

  test("size and color props are honoured identically", async () => {
    const react = normalize(
      renderToStaticMarkup(createElement(ReactFiActivity, { size: 32, color: "red" })),
    );
    const vue = normalize(await vueRenderToString(h(VueFiActivity, { size: 32, color: "red" })));
    const svelte = normalize(
      svelteRender(SvelteFiActivity, { props: { size: 32, color: "red" } }).body,
    );

    for (const out of [react, vue, svelte]) {
      expect(out.width).toBe("32");
      expect(out.height).toBe("32");
      expect(out.shapes).toEqual([
        { tag: "polyline", geometry: "22 12 18 12 15 21 9 3 6 12 2 12" },
      ]);
    }
  });

  test("a11y: untitled icons are presentation + aria-hidden in every framework", async () => {
    const outputs = [reactSvg(), await vueSvg(), svelteSvg()];
    for (const svg of outputs) {
      expect(svg).toContain('role="presentation"');
      expect(svg).toContain('aria-hidden="true"');
    }
  });
});
