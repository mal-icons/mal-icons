import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { FiActivity } from "../src/icons/fi/index.ts";

describe("svg output snapshots", () => {
  test("FiActivity default render is stable", () => {
    const html = renderToStaticMarkup(createElement(FiActivity));
    expect(html).toMatchSnapshot();
  });

  test("FiActivity with size/color/title is stable", () => {
    const html = renderToStaticMarkup(
      createElement(FiActivity, { size: 24, color: "#3366ff", title: "activity" }),
    );
    expect(html).toMatchSnapshot();
  });
});
