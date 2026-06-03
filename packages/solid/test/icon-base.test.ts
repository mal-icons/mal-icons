import { describe, expect, test } from "bun:test";
import h from "solid-js/h";
import { render } from "solid-js/web";
import { IconBase, IconContext, createIcon } from "../src/index.ts";

const FiActivity = createIcon(
  "0 0 24 24",
  [["polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }]],
  { fill: "none", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" },
);

function mount(node: () => unknown): string {
  const container = document.createElement("div");
  document.body.appendChild(container);
  // biome-ignore lint/suspicious/noExplicitAny: Solid hyperscript node type.
  const dispose = render(node as any, container);
  const html = container.innerHTML;
  dispose();
  container.remove();
  return html;
}

/**
 * Solid ships separate server and DOM (browser) builds. `bun test` resolves
 * `solid-js` / `solid-js/web` to the **server** build (and ignores
 * `--conditions`), while `solid-js/h` is DOM-only — so the client `render`
 * throws "Client-only API called on the server side" here. These render
 * assertions therefore run under a Solid-aware runner (e.g. Vitest with
 * `vite-plugin-solid`, or Bun with the browser export condition) and are
 * skipped when only Solid's server build is available, keeping `bun test`
 * green without dropping coverage downstream.
 */
function domRendererAvailable(): boolean {
  try {
    mount(() => h("span", {}, "probe"));
    return true;
  } catch {
    return false;
  }
}

const hasDom = domRendererAvailable();
const describeDom = hasDom ? describe : describe.skip;

describeDom("Solid IconBase", () => {
  test("renders a native svg with currentColor defaults", () => {
    const html = mount(() => h(IconBase, { viewBox: "0 0 24 24" }));
    expect(html).toContain("<svg");
    expect(html).toContain('viewBox="0 0 24 24"');
    expect(html).toContain('stroke="currentColor"');
    expect(html).toContain('fill="currentColor"');
    expect(html).toContain('width="1em"');
    expect(html).toContain('height="1em"');
  });

  test("size and color props win", () => {
    const html = mount(() => h(IconBase, { viewBox: "0 0 24 24", size: 32, color: "red" }));
    expect(html).toContain('width="32"');
    expect(html).toContain('height="32"');
    expect(html).toContain("color: red");
  });

  test("title renders <title> and role=img", () => {
    const html = mount(() => h(IconBase, { viewBox: "0 0 24 24", title: "Activity" }));
    expect(html).toContain("<title>Activity</title>");
    expect(html).toContain('role="img"');
    expect(html).not.toContain('aria-hidden="true"');
  });

  test("without title svg is aria-hidden presentation", () => {
    const html = mount(() => h(IconBase, { viewBox: "0 0 24 24" }));
    expect(html).toContain('role="presentation"');
    expect(html).toContain('aria-hidden="true"');
  });

  test("className is appended", () => {
    const html = mount(() => h(IconBase, { viewBox: "0 0 24 24", className: "my-icon" }));
    expect(html).toContain("my-icon");
  });
});

describeDom("Solid createIcon", () => {
  test("renders shape children and default root attrs", () => {
    const html = mount(() => h(FiActivity, {}));
    expect(html).toContain("<polyline");
    expect(html).toContain('points="22 12 18 12 15 21 9 3 6 12 2 12"');
    expect(html).toContain('fill="none"');
    expect(html).toContain('stroke-width="2"');
  });

  test("consumer props override default attrs", () => {
    const html = mount(() => h(FiActivity, { size: 48 }));
    expect(html).toContain('width="48"');
    expect(html).toContain('height="48"');
  });

  test("context theming applies and props still override", () => {
    const html = mount(() =>
      h(
        IconContext.Provider,
        { value: { size: 24, color: "blue", className: "ctx" } },
        h(FiActivity, { color: "green" }),
      ),
    );
    expect(html).toContain('width="24"');
    expect(html).toContain("color: green");
    expect(html).toContain("ctx");
  });
});

describe("Solid adapter API", () => {
  test("createIcon returns a component factory", () => {
    expect(typeof FiActivity).toBe("function");
    expect(typeof IconBase).toBe("function");
  });

  test("context is exported with a default value", () => {
    expect(IconContext).toBeDefined();
  });
});
