import { describe, expect, test } from "bun:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { registerReactNativeSvgMock } from "./rn-svg-mock.ts";

// Mock `react-native-svg` before the adapter (and its icons) are imported.
registerReactNativeSvgMock();

const { FiActivity } = await import("../src/icons/fi/FiActivity.tsx");
const { IconContext } = await import("../src/index.ts");

function attr(svg: string, name: string): string {
  const m = svg.match(new RegExp(`(?<![\\w-])${name}="([^"]*)"`));
  return m ? m[1] : "";
}

describe("@mal-icon/react-native generated icon", () => {
  test("renders an SVG equivalent to the other adapters", () => {
    const svg = renderToStaticMarkup(createElement(FiActivity));
    expect(attr(svg, "viewBox")).toBe("0 0 24 24");
    expect(attr(svg, "fill")).toBe("none");
    expect(attr(svg, "stroke")).toBe("currentColor");
    expect(attr(svg, "stroke-width")).toBe("2");
    expect(svg).toContain('points="22 12 18 12 15 21 9 3 6 12 2 12"');
  });

  test("size and color props win over the built-in defaults", () => {
    const svg = renderToStaticMarkup(createElement(FiActivity, { size: 32, color: "red" }));
    expect(attr(svg, "width")).toBe("32");
    expect(attr(svg, "height")).toBe("32");
    expect(attr(svg, "color")).toBe("red");
  });

  test("defaults to a numeric size of 24 when nothing is provided", () => {
    const svg = renderToStaticMarkup(createElement(FiActivity));
    expect(attr(svg, "width")).toBe("24");
    expect(attr(svg, "height")).toBe("24");
  });

  test("title sets the accessibility role and label", () => {
    const svg = renderToStaticMarkup(createElement(FiActivity, { title: "Activity" }));
    expect(svg).toContain('role="img"');
    expect(svg).toContain('aria-label="Activity"');
  });

  test("untitled icons are not given an accessibility role", () => {
    const svg = renderToStaticMarkup(createElement(FiActivity));
    expect(svg).not.toContain("role=");
  });

  test("context supplies defaults that per-icon props override", () => {
    const provided = renderToStaticMarkup(
      createElement(IconContext.Provider, { value: { size: 48, color: "blue" } }, [
        createElement(FiActivity, { key: "ctx" }),
        createElement(FiActivity, { key: "override", size: 12 }),
      ]),
    );
    expect(provided).toContain('width="48"');
    expect(provided).toContain('width="12"');
    expect(provided).toContain('color="blue"');
  });
});
