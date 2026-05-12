import { describe, expect, test } from "bun:test";
import { type SearchEntry, searchIcons, tokenize } from "../src/search.ts";

const index: SearchEntry[] = [
  { name: "FiActivity", set: "fi", terms: ["fi", "activity"] },
  { name: "FiAlertCircle", set: "fi", terms: ["fi", "alert", "circle"] },
  { name: "FiAlertTriangle", set: "fi", terms: ["fi", "alert", "triangle"] },
  { name: "FiCircle", set: "fi", terms: ["fi", "circle"] },
];

describe("tokenize", () => {
  test("splits camelCase, hyphens and underscores", () => {
    expect(tokenize("FiAlertCircle")).toEqual(["fi", "alert", "circle"]);
    expect(tokenize("arrow-up_left")).toEqual(["arrow", "up", "left"]);
  });
});

describe("searchIcons", () => {
  test("ranks exact term matches first", () => {
    const results = searchIcons("circle", index);
    expect(results[0]?.name).toBe("FiCircle");
    expect(results.map((r) => r.name)).toContain("FiAlertCircle");
  });

  test("prefix matches across terms", () => {
    const names = searchIcons("alert", index).map((r) => r.name);
    expect(names).toEqual(["FiAlertCircle", "FiAlertTriangle"]);
  });

  test("subsequence fuzzy matching", () => {
    const names = searchIcons("actv", index).map((r) => r.name);
    expect(names).toContain("FiActivity");
  });

  test("no matches returns empty", () => {
    expect(searchIcons("zzzzz", index)).toEqual([]);
  });

  test("empty query returns leading entries", () => {
    expect(searchIcons("", index, 2)).toHaveLength(2);
  });
});
