/**
 * Registry of icon sets the build pipeline knows how to fetch and generate.
 *
 * Versions are pinned (by git ref) for reproducibility, and the license of
 * each source set is recorded for compliance reporting.
 */
export interface IconSource {
  /** Short set id used in import paths, e.g. "fi". */
  id: string;
  /** PascalCase component prefix, e.g. "Fi" → FiActivity. */
  prefix: string;
  /** Human-readable name. */
  name: string;
  /** SPDX license identifier of the source project. */
  license: string;
  /** GitHub "owner/repo". */
  repo: string;
  /** Pinned git ref (branch or tag) to download. */
  ref: string;
  /**
   * Path, inside the extracted archive (relative to the repo root folder),
   * that contains the raw `.svg` files.
   */
  iconDir: string;
  /**
   * Rendering style of the set. `stroke` sets (e.g. Feather) keep
   * `fill="none"` and rely on stroke; `fill` sets paint with currentColor.
   */
  style: "stroke" | "fill";
}

export const sources: Record<string, IconSource> = {
  fi: {
    id: "fi",
    prefix: "Fi",
    name: "Feather",
    license: "MIT",
    repo: "feathericons/feather",
    ref: "v4.29.0",
    iconDir: "icons",
    style: "stroke",
  },
};
