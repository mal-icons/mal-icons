import { describe, expect, test } from "bun:test";
import {
  type IconData,
  cdnLoader,
  clearRegistry,
  isIconData,
  registerIcons,
  renderIcon,
} from "../src/index.ts";
import FiActivity from "../src/icons/fi/FiActivity.json" with { type: "json" };

const activity = FiActivity as IconData;

describe("web renderIcon", () => {
  test("renders a native svg with currentColor defaults", () => {
    const svg = renderIcon(activity);
    expect(svg.tagName.toLowerCase()).toBe("svg");
    expect(svg.getAttribute("viewBox")).toBe("0 0 24 24");
    expect(svg.getAttribute("stroke")).toBe("currentColor");
    expect(svg.getAttribute("fill")).toBe("none");
    expect(svg.getAttribute("width")).toBe("1em");
    expect(svg.getAttribute("height")).toBe("1em");
  });

  test("renders shape children and default root attrs", () => {
    const svg = renderIcon(activity);
    const polyline = svg.querySelector("polyline");
    expect(polyline).not.toBeNull();
    expect(polyline?.getAttribute("points")).toBe("22 12 18 12 15 21 9 3 6 12 2 12");
    expect(svg.getAttribute("stroke-width")).toBe("2");
  });

  test("size and color props win", () => {
    const svg = renderIcon(activity, { size: 32, color: "red" });
    expect(svg.getAttribute("width")).toBe("32");
    expect(svg.getAttribute("height")).toBe("32");
    expect(svg.style.color).toBe("red");
  });

  test("title renders <title> and role=img", () => {
    const svg = renderIcon(activity, { title: "Activity" });
    expect(svg.getAttribute("role")).toBe("img");
    expect(svg.querySelector("title")?.textContent).toBe("Activity");
    expect(svg.getAttribute("aria-hidden")).toBeNull();
  });

  test("without title svg is aria-hidden presentation", () => {
    const svg = renderIcon(activity);
    expect(svg.getAttribute("role")).toBe("presentation");
    expect(svg.getAttribute("aria-hidden")).toBe("true");
  });

  test("weight overrides stroke-width", () => {
    const svg = renderIcon(activity, { weight: "bold" });
    expect(svg.getAttribute("stroke-width")).not.toBe("2");
  });
});

describe("web isIconData", () => {
  test("accepts valid data and rejects junk", () => {
    expect(isIconData(activity)).toBe(true);
    expect(isIconData({ viewBox: "0 0 24 24" })).toBe(false);
    expect(isIconData(null)).toBe(false);
    expect(isIconData("nope")).toBe(false);
  });
});

describe("web cdnLoader", () => {
  test("fetches and validates JSON payloads", async () => {
    const fakeFetch = (async (url: string) => ({
      ok: true,
      status: 200,
      json: async () => activity,
      url,
    })) as unknown as typeof fetch;
    const load = cdnLoader("https://cdn.example.com/fi/", fakeFetch);
    const data = await load("FiActivity");
    expect(data.viewBox).toBe("0 0 24 24");
  });

  test("throws on non-ok responses", async () => {
    const fakeFetch = (async () => ({
      ok: false,
      status: 404,
      json: async () => ({}),
    })) as unknown as typeof fetch;
    const load = cdnLoader("https://cdn.example.com/fi", fakeFetch);
    await expect(load("Missing")).rejects.toThrow();
  });
});

describe("web registry", () => {
  test("register and clear icons", () => {
    clearRegistry();
    registerIcons({ FiActivity: activity });
    const svg = renderIcon(activity);
    expect(svg.tagName.toLowerCase()).toBe("svg");
    clearRegistry();
  });
});
