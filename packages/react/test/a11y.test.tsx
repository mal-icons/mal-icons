import { describe, expect, test } from "bun:test";
import axe from "axe-core";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MlCircle } from "../src/icons/demo/index.ts";
import { FiActivity } from "../src/icons/fi/index.ts";

async function runAxe(markup: string) {
  const host = document.createElement("div");
  host.innerHTML = markup;
  document.body.appendChild(host);
  try {
    return await axe.run(host, {
      runOnly: { type: "rule", values: ["svg-img-alt", "aria-hidden-body"] },
    });
  } finally {
    host.remove();
  }
}

describe("accessibility", () => {
  test("decorative icon (no title) is aria-hidden", () => {
    const html = renderToStaticMarkup(createElement(MlCircle));
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain('role="presentation"');
  });

  test("labelled icon exposes role=img and a <title>", () => {
    const html = renderToStaticMarkup(createElement(FiActivity, { title: "activity" }));
    expect(html).toContain('role="img"');
    expect(html).toContain("<title>activity</title>");
  });

  test("labelled icon has no axe violations", async () => {
    const html = renderToStaticMarkup(createElement(FiActivity, { title: "activity indicator" }));
    const results = await runAxe(html);
    expect(results.violations).toHaveLength(0);
  });

  test("decorative icon has no axe violations", async () => {
    const html = renderToStaticMarkup(createElement(MlCircle));
    const results = await runAxe(html);
    expect(results.violations).toHaveLength(0);
  });
});
