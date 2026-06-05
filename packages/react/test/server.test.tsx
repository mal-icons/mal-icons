import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { createServerIcon } from "../src/server.tsx";

const FiActivity = createServerIcon(
  "0 0 24 24",
  [["polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }]],
  { fill: "none", strokeWidth: 2 },
);

describe("createServerIcon", () => {
  test("renders without any React context/hooks", () => {
    const html = renderToStaticMarkup(<FiActivity />);
    expect(html).toContain('viewBox="0 0 24 24"');
    expect(html).toContain("<polyline");
    expect(html).toContain('aria-hidden="true"');
  });

  test("applies size, color and title props", () => {
    const html = renderToStaticMarkup(<FiActivity size={32} color="#f00" title="activity" />);
    expect(html).toContain('width="32"');
    expect(html).toContain("color:#f00");
    expect(html).toContain("<title>activity</title>");
    expect(html).toContain('role="img"');
  });

  test("supports weight and animate without a provider", () => {
    const html = renderToStaticMarkup(<FiActivity weight="bold" animate="spin" />);
    expect(html).toContain('stroke-width="3"');
    expect(html).toContain("mal-icons-animate-spin");
  });
});
