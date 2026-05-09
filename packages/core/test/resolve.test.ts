import { describe, expect, test } from "bun:test";
import { resolveIconAttrs } from "../src/index.ts";

describe("resolveIconAttrs", () => {
  test("defaults size to 1em when nothing provided", () => {
    const r = resolveIconAttrs({}, {});
    expect(r.size).toBe("1em");
    expect(r.color).toBeUndefined();
    expect(r.className).toBeUndefined();
  });

  test("props.size overrides context.size", () => {
    const r = resolveIconAttrs({ size: 32 }, { size: "2em" });
    expect(r.size).toBe(32);
  });

  test("context.size used when props.size absent", () => {
    const r = resolveIconAttrs({}, { size: "2em" });
    expect(r.size).toBe("2em");
  });

  test("props.color overrides context.color", () => {
    const r = resolveIconAttrs({ color: "red" }, { color: "blue" });
    expect(r.color).toBe("red");
  });

  test("context.color used when props.color absent", () => {
    const r = resolveIconAttrs({}, { color: "blue" });
    expect(r.color).toBe("blue");
  });

  test("className concatenates context then props", () => {
    const r = resolveIconAttrs({ className: "b" }, { className: "a" });
    expect(r.className).toBe("a b");
  });

  test("className is undefined when neither provided", () => {
    const r = resolveIconAttrs({}, {});
    expect(r.className).toBeUndefined();
  });

  test("className uses only props when context empty", () => {
    const r = resolveIconAttrs({ className: "only" }, {});
    expect(r.className).toBe("only");
  });
});
