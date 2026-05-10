import { describe, expect, test } from "bun:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { FiActivity } from "../src/icons/fi/index.ts";

describe("generated Feather icon", () => {
  test("renders a native <svg> with fill=none (stroke set)", () => {
    const html = renderToStaticMarkup(createElement(FiActivity));
    expect(html).toContain("<svg");
    expect(html).toContain('viewBox="0 0 24 24"');
    expect(html).toContain('fill="none"');
    expect(html).toContain('stroke="currentColor"');
    expect(html).toContain("<polyline");
  });

  test("applies size and title props", () => {
    const html = renderToStaticMarkup(createElement(FiActivity, { size: 48, title: "activity" }));
    expect(html).toContain('width="48"');
    expect(html).toContain("<title>activity</title>");
    expect(html).toContain('role="img"');
  });
});
