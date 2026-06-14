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
  /**
   * Optional file-name prefix to drop before deriving component names. Some
   * sets ship every file already namespaced (e.g. Weather Icons uses
   * `wi-day-sunny.svg`); stripping the redundant prefix avoids doubled
   * component names like `WiWiDaySunny`.
   */
  stripPrefix?: string;
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
  ci: {
    id: "ci",
    prefix: "Ci",
    name: "Circum",
    license: "MPL-2.0",
    repo: "Klarr-Agency/Circum-Icons",
    ref: "v2.0.2",
    iconDir: "svg",
    style: "fill",
  },
  io: {
    id: "io",
    prefix: "Io",
    name: "Ionicons",
    license: "MIT",
    repo: "ionic-team/ionicons",
    ref: "v8.0.13",
    iconDir: "src/svg",
    style: "fill",
  },
  lu: {
    id: "lu",
    prefix: "Lu",
    name: "Lucide",
    license: "ISC",
    repo: "lucide-icons/lucide",
    ref: "1.19.0",
    iconDir: "icons",
    style: "stroke",
  },
  fa: {
    id: "fa",
    prefix: "Fa",
    name: "Font Awesome Free",
    license: "CC-BY-4.0",
    repo: "FortAwesome/Font-Awesome",
    ref: "6.7.2",
    iconDir: "svgs/solid",
    style: "fill",
  },
  far: {
    id: "far",
    prefix: "Far",
    name: "Font Awesome Free Regular",
    license: "CC-BY-4.0",
    repo: "FortAwesome/Font-Awesome",
    ref: "6.7.2",
    iconDir: "svgs/regular",
    style: "fill",
  },
  fab: {
    id: "fab",
    prefix: "Fab",
    name: "Font Awesome Free Brands",
    license: "CC-BY-4.0",
    repo: "FortAwesome/Font-Awesome",
    ref: "6.7.2",
    iconDir: "svgs/brands",
    style: "fill",
  },
  ti: {
    id: "ti",
    prefix: "Ti",
    name: "Typicons",
    license: "CC-BY-SA-4.0",
    repo: "stephenhutchings/typicons.font",
    ref: "v2.1.2",
    iconDir: "src/svg",
    style: "fill",
  },
  oc: {
    id: "oc",
    prefix: "Oc",
    name: "Octicons",
    license: "MIT",
    repo: "primer/octicons",
    ref: "v19.28.1",
    iconDir: "icons",
    style: "fill",
  },
  dev: {
    id: "dev",
    prefix: "Dev",
    name: "Devicons",
    license: "MIT",
    repo: "vorillaz/devicons",
    ref: "devicons-v2.0.1",
    iconDir: "packages/core/export-files/icons",
    style: "fill",
  },
  ad: {
    id: "ad",
    prefix: "Ad",
    name: "Ant Design Icons",
    license: "MIT",
    repo: "ant-design/ant-design-icons",
    ref: "refs/tags/@ant-design/icons-svg@4.0.0",
    iconDir: "packages/icons-svg/svg/outlined",
    style: "fill",
  },
  wi: {
    id: "wi",
    prefix: "Wi",
    name: "Weather Icons",
    license: "OFL-1.1",
    repo: "erikflowers/weather-icons",
    ref: "2.0.12",
    iconDir: "svg",
    style: "fill",
    stripPrefix: "wi-",
  },
};
