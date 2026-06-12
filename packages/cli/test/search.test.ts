import { describe, expect, test } from "bun:test";
import {
  expandQuery,
  type SearchEntry,
  searchIcons,
  semanticSearch,
  tokenize,
} from "../src/search.ts";

const index: SearchEntry[] = [
  { name: "FiActivity", set: "fi", terms: ["fi", "activity"] },
  { name: "FiAlertCircle", set: "fi", terms: ["fi", "alert", "circle"] },
  { name: "FiAlertTriangle", set: "fi", terms: ["fi", "alert", "triangle"] },
  { name: "FiCircle", set: "fi", terms: ["fi", "circle"] },
  { name: "FiHome", set: "fi", terms: ["fi", "home"] },
  { name: "FiTrash2", set: "fi", terms: ["fi", "trash"] },
  { name: "FiSettings", set: "fi", terms: ["fi", "settings"] },
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

describe("expandQuery", () => {
  test("adds synonyms for natural-language words", () => {
    expect(expandQuery("bin")).toContain("trash");
    expect(expandQuery("gear")).toContain("settings");
  });

  test("keeps the original query first and dedupes", () => {
    const terms = expandQuery("house");
    expect(terms[0]).toBe("house");
    expect(terms).toContain("home");
    expect(new Set(terms).size).toBe(terms.length);
  });
});

describe("semanticSearch", () => {
  test("resolves concept words to real icons", () => {
    expect(semanticSearch("bin", index)[0]?.name).toBe("FiTrash2");
    expect(semanticSearch("gear", index)[0]?.name).toBe("FiSettings");
    expect(semanticSearch("house", index)[0]?.name).toBe("FiHome");
  });

  test("direct matches outrank synonym matches", () => {
    expect(semanticSearch("home", index)[0]?.name).toBe("FiHome");
  });

  test("still finds plain matches", () => {
    expect(semanticSearch("circle", index)[0]?.name).toBe("FiCircle");
  });
});
