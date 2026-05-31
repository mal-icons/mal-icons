import { describe, expect, test } from "bun:test";
import { ICON_ANIMATIONS_CSS, WEIGHT_STROKE_WIDTH, animationClass } from "@mal-icons/core";
import { renderToStaticMarkup } from "react-dom/server";
import { createIcon } from "../src/index.ts";

const FiActivity = createIcon(
  "0 0 24 24",
  [["polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }]],
  { fill: "none", strokeWidth: 2 },
);

describe("animations", () => {
  test("animate prop adds the CSS animation class", () => {
    const html = renderToStaticMarkup(<FiActivity animate="spin" />);
    expect(html).toContain(`class="${animationClass("spin")}"`);
  });

  test("no animate prop renders no animation class", () => {
    const html = renderToStaticMarkup(<FiActivity />);
    expect(html).not.toContain("mal-icons-animate");
  });

  test("animate merges with a user className", () => {
    const html = renderToStaticMarkup(<FiActivity animate="pulse" className="x" />);
    expect(html).toContain("x mal-icons-animate-pulse");
  });

  test("animations CSS exposes keyframes and reduced-motion guard", () => {
    expect(ICON_ANIMATIONS_CSS).toContain("@keyframes mal-icons-spin");
    expect(ICON_ANIMATIONS_CSS).toContain("prefers-reduced-motion");
  });
});

describe("weights", () => {
  test("weight overrides the baked stroke width", () => {
    const html = renderToStaticMarkup(<FiActivity weight="bold" />);
    expect(html).toContain(`stroke-width="${WEIGHT_STROKE_WIDTH.bold}"`);
  });

  test("thin weight maps to 1", () => {
    const html = renderToStaticMarkup(<FiActivity weight="thin" />);
    expect(html).toContain('stroke-width="1"');
  });

  test("no weight keeps the default stroke width", () => {
    const html = renderToStaticMarkup(<FiActivity />);
    expect(html).toContain('stroke-width="2"');
  });
});

describe("multi-tone", () => {
  test("secondaryColor sets the CSS variable", () => {
    const html = renderToStaticMarkup(<FiActivity secondaryColor="#f00" />);
    expect(html).toContain("--mal-icons-secondary:#f00");
  });

  test("no secondaryColor omits the variable", () => {
    const html = renderToStaticMarkup(<FiActivity color="blue" />);
    expect(html).not.toContain("--mal-icons-secondary");
  });
});
