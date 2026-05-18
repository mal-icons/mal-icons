import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { resolveAddPlan, rewriteImports, runAdd } from "../src/add.ts";
import { buildLicenseReport } from "../src/licenses.ts";

async function tmp(): Promise<string> {
  return mkdtemp(join(tmpdir(), "mal-icon-add-"));
}

describe("add command", () => {
  test("resolveAddPlan maps known icons and rejects unknown ones", () => {
    const plan = resolveAddPlan(["FiActivity"], {
      set: "fi",
      framework: "react",
      out: "out",
    });
    expect(plan).toHaveLength(1);
    expect(plan[0]?.name).toBe("FiActivity");
    expect(plan[0]?.source).toContain(join("react", "src", "icons", "fi", "FiActivity.tsx"));
    expect(plan[0]?.dest).toBe(join("out", "FiActivity.tsx"));

    expect(() => resolveAddPlan(["Nope"], { set: "fi", framework: "react", out: "out" })).toThrow(
      /unknown icon "Nope"/,
    );
  });

  test("runAdd vendors files and rewrites imports to the package", async () => {
    const out = await tmp();
    try {
      const plan = await runAdd(["FiActivity"], { set: "fi", framework: "react", out });
      const dest = plan[0]?.dest ?? "";
      expect(existsSync(dest)).toBe(true);
      const content = await readFile(dest, "utf8");
      expect(content).toContain('from "@mal-icon/react"');
      expect(content).not.toContain("../../create-icon");
    } finally {
      await rm(out, { recursive: true, force: true });
    }
  });

  test("runAdd vendors react-native icons against the react-native package", async () => {
    const out = await tmp();
    try {
      const plan = await runAdd(["FiActivity"], { set: "fi", framework: "react-native", out });
      const dest = plan[0]?.dest ?? "";
      expect(dest).toBe(join(out, "FiActivity.tsx"));
      expect(existsSync(dest)).toBe(true);
      const content = await readFile(dest, "utf8");
      expect(content).toContain('from "@mal-icon/react-native"');
      expect(content).not.toContain("../../create-icon");
    } finally {
      await rm(out, { recursive: true, force: true });
    }
  });

  test("rewriteImports targets the right package per framework", () => {
    expect(rewriteImports('x from "../../create-icon.tsx"', "react-native")).toContain(
      '"@mal-icon/react-native"',
    );
    expect(rewriteImports('x from "../../create-icon.ts"', "vue")).toContain('"@mal-icon/vue"');
    expect(rewriteImports('import IconBase from "../../IconBase.svelte";', "svelte")).toContain(
      '"@mal-icon/svelte/IconBase.svelte"',
    );
  });
});

describe("licenses command", () => {
  test("buildLicenseReport renders a deterministic Markdown table", () => {
    const report = buildLicenseReport({
      sets: [
        { id: "fi", name: "Feather", license: "MIT", count: 287 },
        { id: "ab", name: "Alpha", license: "Apache-2.0", count: 3 },
      ],
    });
    // sorted by id: ab before fi
    expect(report.indexOf("| ab |")).toBeLessThan(report.indexOf("| fi |"));
    expect(report).toContain("| fi | Feather | MIT | 287 |");
    expect(report).toContain("**Total:** 290 icon(s) across 2 set(s).");
  });
});
