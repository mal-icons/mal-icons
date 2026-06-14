import { describe, expect, test } from "bun:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { FcAbout } from "../src/icons/fc/index.ts";

describe("generated Flat Color (fc) icon", () => {
  test("preserves per-shape multi-color fills (flattened groups)", () => {
    const html = renderToStaticMarkup(createElement(FcAbout, { size: 32 }));
    expect(html).toContain('viewBox="0 0 48 48"');
    expect(html).toContain('width="32"');
    // Primary path color is kept (not folded to currentColor).
    expect(html).toContain('fill="#2196F3"');
    // Group-inherited white details survive group flattening.
    expect(html).toContain('fill="#fff"');
    expect(html).toContain("<circle");
    expect(html).toContain("<rect");
  });
});
