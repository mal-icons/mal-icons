import { describe, expect, test } from "bun:test";
import { h } from "preact";
import { renderToString } from "preact-render-to-string";
import { createIcon, IconBase, IconContext } from "../src/index.ts";

const FiActivity = createIcon(
  "0 0 24 24",
  [["polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }]],
  { fill: "none", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" },
);

describe("Preact IconBase", () => {
  test("renders a native svg with currentColor defaults", () => {
    const html = renderToString(h(IconBase, { viewBox: "0 0 24 24" }));
    expect(html).toContain("<svg");
    expect(html).toContain('viewBox="0 0 24 24"');
    expect(html).toContain('stroke="currentColor"');
    expect(html).toContain('fill="currentColor"');
    expect(html).toContain('width="1em"');
    expect(html).toContain('height="1em"');
  });

  test("size and color props win", () => {
    const html = renderToString(h(IconBase, { viewBox: "0 0 24 24", size: 32, color: "red" }));
    expect(html).toContain('width="32"');
    expect(html).toContain('height="32"');
    expect(html).toContain("color:red");
  });

  test("title renders <title> and role=img", () => {
    const html = renderToString(h(IconBase, { viewBox: "0 0 24 24", title: "Activity" }));
    expect(html).toContain("<title>Activity</title>");
    expect(html).toContain('role="img"');
    expect(html).not.toContain('aria-hidden="true"');
  });

  test("without title svg is aria-hidden presentation", () => {
    const html = renderToString(h(IconBase, { viewBox: "0 0 24 24" }));
    expect(html).toContain('role="presentation"');
    expect(html).toContain('aria-hidden="true"');
  });

  test("className is appended", () => {
    const html = renderToString(h(IconBase, { viewBox: "0 0 24 24", className: "my-icon" }));
    expect(html).toContain("my-icon");
  });
});

describe("Preact createIcon", () => {
  test("renders shape children and default root attrs", () => {
    const html = renderToString(h(FiActivity, {}));
    expect(html).toContain("<polyline");
    expect(html).toContain('points="22 12 18 12 15 21 9 3 6 12 2 12"');
    expect(html).toContain('fill="none"');
    expect(html).toContain('stroke-width="2"');
  });

  test("consumer props override default attrs", () => {
    const html = renderToString(h(FiActivity, { size: 48 }));
    expect(html).toContain('width="48"');
    expect(html).toContain('height="48"');
  });

  test("context theming applies and props still override", () => {
    const html = renderToString(
      h(
        IconContext.Provider,
        { value: { size: 24, color: "blue", className: "ctx" } },
        h(FiActivity, { color: "green" }),
      ),
    );
    expect(html).toContain('width="24"');
    expect(html).toContain("color:green");
    expect(html).toContain("ctx");
  });
});
