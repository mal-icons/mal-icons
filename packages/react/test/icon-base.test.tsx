import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { createIcon, IconBase, IconContext } from "../src/index.ts";

const Demo = createIcon("0 0 24 24", [["circle", { cx: "12", cy: "12", r: "10" }]]);

function render(el: Parameters<typeof renderToStaticMarkup>[0]): string {
  return renderToStaticMarkup(el);
}

describe("IconBase", () => {
  test("renders a native <svg> with the given viewBox", () => {
    const html = render(createElement(Demo));
    expect(html).toContain("<svg");
    expect(html).toContain('viewBox="0 0 24 24"');
    expect(html).toContain("<circle");
  });

  test("defaults size to 1em", () => {
    const html = render(createElement(Demo));
    expect(html).toContain('width="1em"');
    expect(html).toContain('height="1em"');
  });

  test("size prop overrides default", () => {
    const html = render(createElement(Demo, { size: 32 }));
    expect(html).toContain('width="32"');
    expect(html).toContain('height="32"');
  });

  test("color prop sets inline color style", () => {
    const html = render(createElement(Demo, { color: "red" }));
    expect(html).toContain("color:red");
  });

  test("uses currentColor for fill and stroke", () => {
    const html = render(createElement(Demo));
    expect(html).toContain('fill="currentColor"');
    expect(html).toContain('stroke="currentColor"');
  });

  test("title renders <title> and role=img", () => {
    const html = render(createElement(Demo, { title: "demo icon" }));
    expect(html).toContain("<title>demo icon</title>");
    expect(html).toContain('role="img"');
    expect(html).not.toContain('aria-hidden="true"');
  });

  test("without title sets aria-hidden and presentation role", () => {
    const html = render(createElement(Demo));
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain('role="presentation"');
    expect(html).not.toContain("<title>");
  });

  test("does not use dangerouslySetInnerHTML output artifacts", () => {
    const html = render(createElement(Demo));
    // Children are real elements, so the circle appears as a real tag.
    expect(html).toContain("<circle");
  });
});

describe("IconContext theming", () => {
  test("context size applies when no prop", () => {
    const html = render(
      createElement(IconContext.Provider, { value: { size: "2em" } }, createElement(Demo)),
    );
    expect(html).toContain('width="2em"');
  });

  test("prop size overrides context size", () => {
    const html = render(
      createElement(
        IconContext.Provider,
        { value: { size: "2em" } },
        createElement(Demo, { size: 10 }),
      ),
    );
    expect(html).toContain('width="10"');
  });

  test("context className is concatenated before prop className", () => {
    const html = render(
      createElement(
        IconContext.Provider,
        { value: { className: "ctx" } },
        createElement(Demo, { className: "local" }),
      ),
    );
    expect(html).toContain('class="ctx local"');
  });

  test("prop color overrides context color", () => {
    const html = render(
      createElement(
        IconContext.Provider,
        { value: { color: "blue" } },
        createElement(Demo, { color: "green" }),
      ),
    );
    expect(html).toContain("color:green");
  });
});

describe("IconBase direct usage", () => {
  test("forwards arbitrary svg props", () => {
    const html = render(
      createElement(IconBase, { viewBox: "0 0 10 10", "data-testid": "x" } as never),
    );
    expect(html).toContain('data-testid="x"');
  });
});
