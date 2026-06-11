import { describe, expect, test } from "bun:test";
import { renderToString } from "@vue/server-renderer";
import { defineComponent, h } from "vue";
import { createIcon, IconBase, provideIconContext } from "../src/index.ts";

const FiActivity = createIcon(
  "0 0 24 24",
  [["polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }]],
  { fill: "none", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" },
);

async function render(node: ReturnType<typeof h>): Promise<string> {
  const app = defineComponent({ render: () => node });
  return renderToString(h(app));
}

describe("Vue IconBase", () => {
  test("renders a native svg with currentColor defaults", async () => {
    const html = await render(h(IconBase, { viewBox: "0 0 24 24" }));
    expect(html).toContain("<svg");
    expect(html).toContain('viewBox="0 0 24 24"');
    expect(html).toContain('stroke="currentColor"');
    expect(html).toContain('fill="currentColor"');
    expect(html).toContain('width="1em"');
    expect(html).toContain('height="1em"');
  });

  test("size and color props win", async () => {
    const html = await render(h(IconBase, { viewBox: "0 0 24 24", size: 32, color: "red" }));
    expect(html).toContain('width="32"');
    expect(html).toContain('height="32"');
    expect(html).toContain("color:red");
  });

  test("title renders <title> and role=img", async () => {
    const html = await render(h(IconBase, { viewBox: "0 0 24 24", title: "Activity" }));
    expect(html).toContain("<title>Activity</title>");
    expect(html).toContain('role="img"');
    expect(html).not.toContain('aria-hidden="true"');
  });

  test("without title svg is aria-hidden presentation", async () => {
    const html = await render(h(IconBase, { viewBox: "0 0 24 24" }));
    expect(html).toContain('role="presentation"');
    expect(html).toContain('aria-hidden="true"');
  });

  test("className is appended", async () => {
    const html = await render(h(IconBase, { viewBox: "0 0 24 24", className: "my-icon" }));
    expect(html).toContain("my-icon");
  });
});

describe("Vue createIcon", () => {
  test("renders shape children and default root attrs", async () => {
    const html = await render(h(FiActivity));
    expect(html).toContain("<polyline");
    expect(html).toContain('points="22 12 18 12 15 21 9 3 6 12 2 12"');
    expect(html).toContain('fill="none"');
    expect(html).toContain('stroke-width="2"');
  });

  test("consumer props override default attrs", async () => {
    const html = await render(h(FiActivity, { size: 48 }));
    expect(html).toContain('width="48"');
    expect(html).toContain('height="48"');
  });

  test("context theming applies and props still override", async () => {
    const Parent = defineComponent({
      setup() {
        provideIconContext({ size: 24, color: "blue", className: "ctx" });
        return () => h(FiActivity, { color: "green" });
      },
    });
    const html = await renderToString(h(Parent));
    expect(html).toContain('width="24"');
    expect(html).toContain("color:green");
    expect(html).toContain("ctx");
  });
});
