import { afterEach, describe, expect, test } from "bun:test";
import type { IconData } from "@mal-icon/core";
import { act, createElement } from "react";
import { createRoot } from "react-dom/client";
import { renderToStaticMarkup } from "react-dom/server";
import {
  Icon,
  IconContext,
  SpriteIcon,
  cdnLoader,
  clearIconCache,
  createIcon,
  preloadIcon,
  setLoader,
} from "../src/index.ts";

// Opt into React's act() testing environment for client-render assertions.
(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const activityData: IconData = {
  viewBox: "0 0 24 24",
  nodes: [["polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }]],
  defaultAttr: { fill: "none" },
};

afterEach(() => {
  clearIconCache();
});

describe("SpriteIcon", () => {
  test("references a same-document symbol via <use>", () => {
    const html = renderToStaticMarkup(createElement(SpriteIcon, { id: "fi-activity" }));
    expect(html).toContain('<use href="#fi-activity"');
    expect(html).toContain('width="1em"');
    expect(html).toContain('role="presentation"');
    expect(html).toContain('aria-hidden="true"');
  });

  test("supports an external sprite URL", () => {
    const html = renderToStaticMarkup(
      createElement(SpriteIcon, { id: "fi-activity", href: "/icons/fi.svg" }),
    );
    expect(html).toContain('<use href="/icons/fi.svg#fi-activity"');
  });

  test("title makes it role=img and adds <title>", () => {
    const html = renderToStaticMarkup(
      createElement(SpriteIcon, { id: "fi-activity", title: "Activity" }),
    );
    expect(html).toContain("<title>Activity</title>");
    expect(html).toContain('role="img"');
  });

  test("honours IconContext sizing/color", () => {
    const html = renderToStaticMarkup(
      createElement(
        IconContext.Provider,
        { value: { size: 40, color: "blue" } },
        createElement(SpriteIcon, { id: "fi-activity" }),
      ),
    );
    expect(html).toContain('width="40"');
    expect(html).toContain("color:blue");
  });
});

describe("Icon (dynamic-by-name)", () => {
  test("renders synchronously from a preloaded component", () => {
    const FiActivity = createIcon("0 0 24 24", activityData.nodes, { fill: "none" });
    preloadIcon("FiActivity", FiActivity);
    const html = renderToStaticMarkup(createElement(Icon, { name: "FiActivity", size: 30 }));
    expect(html).toContain("<polyline");
    expect(html).toContain('width="30"');
  });

  test("renders synchronously from preloaded IconData", () => {
    preloadIcon("fi-activity", activityData);
    const html = renderToStaticMarkup(createElement(Icon, { name: "fi-activity" }));
    expect(html).toContain("<polyline");
    expect(html).toContain('viewBox="0 0 24 24"');
    expect(html).toContain('fill="none"');
  });

  test("shows fallback while unresolved", () => {
    const html = renderToStaticMarkup(
      createElement(Icon, { name: "missing", fallback: createElement("span", null, "…") }),
    );
    expect(html).toBe("<span>…</span>");
  });

  test("lazily resolves via a loader on the client", async () => {
    let calls = 0;
    const loader = async (name: string) => {
      calls++;
      expect(name).toBe("fi-activity");
      return activityData;
    };

    const container = document.createElement("div");
    document.body.appendChild(container);
    const root = createRoot(container);

    await act(async () => {
      root.render(createElement(Icon, { name: "fi-activity", loader }));
    });
    await act(async () => {});

    expect(container.innerHTML).toContain("<polyline");
    expect(calls).toBe(1);

    await act(async () => {
      root.unmount();
    });
    container.remove();
  });
});

describe("cdnLoader", () => {
  test("fetches and validates a JSON payload", async () => {
    const fakeFetch = (async (url: string) => {
      expect(url).toBe("https://cdn.example/icons/fi-activity.json");
      return new Response(JSON.stringify(activityData), { status: 200 });
    }) as unknown as typeof fetch;

    const load = cdnLoader("https://cdn.example/icons/", fakeFetch);
    const data = await load("fi-activity");
    expect(data).toEqual(activityData);
  });

  test("throws on a malformed payload", async () => {
    const fakeFetch = (async () =>
      new Response(JSON.stringify({ nope: true }), { status: 200 })) as unknown as typeof fetch;
    const load = cdnLoader("https://cdn.example", fakeFetch);
    expect(load("bad")).rejects.toThrow(/malformed/);
  });

  test("throws on a non-OK response", async () => {
    const fakeFetch = (async () => new Response("", { status: 404 })) as unknown as typeof fetch;
    const load = cdnLoader("https://cdn.example", fakeFetch);
    expect(load("missing")).rejects.toThrow(/failed to load/);
  });
});

describe("setLoader", () => {
  test("imports the set module once and resolves by name", async () => {
    const FiActivity = createIcon("0 0 24 24", activityData.nodes);
    let imports = 0;
    const load = setLoader(async () => {
      imports++;
      return { FiActivity };
    });

    expect(await load("FiActivity")).toBe(FiActivity);
    await load("FiActivity");
    expect(imports).toBe(1);
    expect(load("Nope")).rejects.toThrow(/not found/);
  });
});
