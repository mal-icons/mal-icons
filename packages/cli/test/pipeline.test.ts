import { describe, expect, test } from "bun:test";
import { toCamelAttr, toComponentName } from "../src/naming.ts";
import { roundNumbers, optimize } from "../src/optimize.ts";
import { parseSvg } from "../src/svg.ts";
import { contentHash } from "../src/dedup.ts";
import type { IconSource } from "../../../icons-data/sources.config";

const strokeSource: IconSource = {
  id: "fi",
  prefix: "Fi",
  name: "Feather",
  license: "MIT",
  repo: "feathericons/feather",
  ref: "main",
  iconDir: "icons",
  style: "stroke",
};

const SAMPLE = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22.0000 12.005 18 12"></polyline></svg>`;

describe("naming", () => {
  test("toComponentName builds PascalCase with prefix", () => {
    expect(toComponentName("Fi", "arrow-up-circle")).toBe("FiArrowUpCircle");
    expect(toComponentName("Fi", "activity.svg")).toBe("FiActivity");
  });

  test("toComponentName guards leading digits", () => {
    expect(toComponentName("Fi", "1st-place")).toBe("Fi_1stPlace");
  });

  test("toCamelAttr converts kebab attrs", () => {
    expect(toCamelAttr("stroke-width")).toBe("strokeWidth");
    expect(toCamelAttr("d")).toBe("d");
  });
});

describe("optimize", () => {
  test("roundNumbers rounds to 2 decimals", () => {
    expect(roundNumbers("22.0000 12.005 18")).toBe("22 12.01 18");
  });

  test("parses viewBox and shape nodes", () => {
    const parsed = parseSvg(SAMPLE);
    expect(parsed.viewBox).toBe("0 0 24 24");
    expect(parsed.nodes).toHaveLength(1);
    expect(parsed.nodes[0]?.tag).toBe("polyline");
  });

  test("lifts stroke root attrs into defaultAttr", () => {
    const opt = optimize(parseSvg(SAMPLE), strokeSource);
    expect(opt.defaultAttr.fill).toBe("none");
    expect(opt.defaultAttr.strokeWidth).toBe(2);
    expect(opt.defaultAttr.strokeLinecap).toBe("round");
  });

  test("rounds coordinates in child nodes", () => {
    const opt = optimize(parseSvg(SAMPLE), strokeSource);
    expect(opt.nodes[0]?.attr.points).toBe("22 12.01 18 12");
  });
});

describe("determinism", () => {
  test("contentHash is stable for identical input", () => {
    const a = contentHash(optimize(parseSvg(SAMPLE), strokeSource));
    const b = contentHash(optimize(parseSvg(SAMPLE), strokeSource));
    expect(a).toBe(b);
    expect(a).toHaveLength(16);
  });
});
