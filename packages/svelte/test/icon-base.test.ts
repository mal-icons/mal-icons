import { describe, expect, test } from "bun:test";
import { render } from "svelte/server";
import IconBase from "../src/IconBase.svelte";
import FiActivity from "./FiActivity.svelte";
import Provider from "./Provider.svelte";

describe("Svelte IconBase", () => {
  test("renders a native svg with currentColor defaults", () => {
    const { body } = render(IconBase, { props: { viewBox: "0 0 24 24" } });
    expect(body).toContain("<svg");
    expect(body).toContain('viewBox="0 0 24 24"');
    expect(body).toContain('stroke="currentColor"');
    expect(body).toContain('fill="currentColor"');
    expect(body).toContain('width="1em"');
    expect(body).toContain('height="1em"');
  });

  test("size and color props win", () => {
    const { body } = render(IconBase, {
      props: { viewBox: "0 0 24 24", size: 32, color: "red" },
    });
    expect(body).toContain('width="32"');
    expect(body).toContain('height="32"');
    expect(body).toContain("color:red");
  });

  test("title renders <title> and role=img", () => {
    const { body } = render(IconBase, {
      props: { viewBox: "0 0 24 24", title: "Activity" },
    });
    expect(body).toContain("<title>Activity</title>");
    expect(body).toContain('role="img"');
    expect(body).not.toContain('aria-hidden="true"');
  });

  test("without title svg is aria-hidden presentation", () => {
    const { body } = render(IconBase, { props: { viewBox: "0 0 24 24" } });
    expect(body).toContain('role="presentation"');
    expect(body).toContain('aria-hidden="true"');
  });
});

describe("Svelte generated icon", () => {
  test("renders shape children and default root attrs", () => {
    const { body } = render(FiActivity);
    expect(body).toContain("<polyline");
    expect(body).toContain('points="22 12 18 12 15 21 9 3 6 12 2 12"');
    expect(body).toContain('fill="none"');
    expect(body).toContain('stroke-width="2"');
  });

  test("consumer props override default attrs", () => {
    const { body } = render(FiActivity, { props: { size: 48 } });
    expect(body).toContain('width="48"');
    expect(body).toContain('height="48"');
  });

  test("context theming applies and props still override", () => {
    const { body } = render(Provider);
    expect(body).toContain('width="24"');
    expect(body).toContain("color:green");
    expect(body).toContain("ctx");
  });
});
