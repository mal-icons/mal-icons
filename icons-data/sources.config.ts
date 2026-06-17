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
   * `fill="none"` and rely on stroke; `fill` sets paint with currentColor;
   * `color` sets (e.g. Flat Color Icons) keep their original multi-color
   * fills baked into each shape and are not themed via `currentColor`.
   */
  style: "stroke" | "fill" | "color";
  /**
   * Optional file-name prefix to drop before deriving component names. Some
   * sets ship every file already namespaced (e.g. Weather Icons uses
   * `wi-day-sunny.svg`); stripping the redundant prefix avoids doubled
   * component names like `WiWiDaySunny`.
   */
  stripPrefix?: string;
  /**
   * Optional regular-expression source (matched against the raw `.svg` file
   * name, case-insensitively) for files to skip. Some sets ship several axes in
   * a single directory (e.g. Material Symbols stores both the base glyph and a
   * `-fill` variant side by side); excluding the unwanted axis keeps a set
   * scoped to a single visual style.
   *
   * When {@link recursive} is set the pattern is matched against the file's
   * path relative to {@link iconDir} (e.g. `badges/blank.svg`) so whole
   * sub-directories can be excluded.
   */
  excludePattern?: string;
  /**
   * Collect `.svg` files recursively from every sub-directory of
   * {@link iconDir} rather than just its top level. Some sets (e.g. Game Icons)
   * shard their artwork across many author folders instead of a single flat
   * directory.
   */
  recursive?: boolean;
  /**
   * Optional exact `d` attribute of a background shape to drop from every icon
   * in the set. Game Icons bake a full-canvas black backdrop
   * (`<path d="M0 0h512v512H0z"/>`) behind each white foreground glyph; dropping
   * it leaves a single themeable `currentColor` path.
   */
  backgroundPath?: string;
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
  fc: {
    id: "fc",
    prefix: "Fc",
    name: "Flat Color Icons",
    license: "CC-BY-4.0",
    repo: "icons8/flat-color-icons",
    ref: "v1.0.2",
    iconDir: "svg",
    style: "color",
  },
  gi: {
    id: "gi",
    prefix: "Gi",
    name: "Game Icons",
    license: "CC-BY-3.0",
    repo: "game-icons/icons",
    // Upstream ships no release tags; pin to a commit for reproducibility.
    ref: "82d948812bfe3f269ef8f731dcdb07b08160edc4",
    // SVGs are sharded across per-author folders at the repo root; collect them
    // all recursively and drop the non-icon contributor `badges/` directory.
    iconDir: "",
    style: "fill",
    recursive: true,
    excludePattern: "^badges/",
    // Each icon bakes a full-canvas black backdrop behind a white foreground;
    // drop it so the glyph themes via `currentColor`.
    backgroundPath: "M0 0h512v512H0z",
  },
  gr: {
    id: "gr",
    prefix: "Gr",
    name: "Grommet",
    license: "Apache-2.0",
    repo: "grommet/grommet-icons",
    ref: "v4.14.0",
    iconDir: "public/img",
    style: "stroke",
  },
  hi: {
    id: "hi",
    prefix: "Hi",
    name: "Heroicons",
    license: "MIT",
    repo: "tailwindlabs/heroicons",
    ref: "v2.2.0",
    iconDir: "optimized/24/outline",
    style: "stroke",
  },
  sl: {
    id: "sl",
    prefix: "Sl",
    name: "Simple Line Icons",
    license: "MIT",
    repo: "thesabbir/simple-line-icons",
    ref: "v2.5.5",
    iconDir: "src/svgs",
    style: "fill",
  },
  cg: {
    id: "cg",
    prefix: "Cg",
    name: "css.gg",
    license: "MIT",
    repo: "astrit/css.gg",
    ref: "2.1.1",
    iconDir: "icons/svg",
    style: "fill",
  },
  vsc: {
    id: "vsc",
    prefix: "Vsc",
    name: "Codicons",
    license: "CC-BY-4.0",
    repo: "microsoft/vscode-codicons",
    ref: "v0.0.46-17",
    iconDir: "src/icons",
    style: "fill",
  },
  tf: {
    id: "tf",
    prefix: "Tf",
    name: "Themify",
    license: "OFL-1.1",
    repo: "lykmapipo/themify-icons",
    // The upstream fork ships no tags; pin to a commit for reproducibility.
    ref: "9600186b24a7242f0e1e0a186983e6253301bb5d",
    iconDir: "SVG",
    style: "fill",
  },
  rx: {
    id: "rx",
    prefix: "Rx",
    name: "Radix Icons",
    license: "MIT",
    repo: "radix-ui/icons",
    ref: "website@0.0.17",
    iconDir: "packages/radix-icons/icons",
    style: "fill",
  },
  mdf: {
    id: "mdf",
    prefix: "Mdf",
    name: "Material Icons Filled",
    license: "Apache-2.0",
    repo: "marella/material-design-icons",
    ref: "v0.14.15",
    iconDir: "svg/filled",
    style: "fill",
  },
  mdr: {
    id: "mdr",
    prefix: "Mdr",
    name: "Material Icons Rounded",
    license: "Apache-2.0",
    repo: "marella/material-design-icons",
    ref: "v0.14.15",
    iconDir: "svg/round",
    style: "fill",
  },
  mds: {
    id: "mds",
    prefix: "Mds",
    name: "Material Icons Sharp",
    license: "Apache-2.0",
    repo: "marella/material-design-icons",
    ref: "v0.14.15",
    iconDir: "svg/sharp",
    style: "fill",
  },
  mdt: {
    id: "mdt",
    prefix: "Mdt",
    name: "Material Icons Two Tone",
    license: "Apache-2.0",
    repo: "marella/material-design-icons",
    ref: "v0.14.15",
    iconDir: "svg/two-tone",
    style: "fill",
  },
  bs: {
    id: "bs",
    prefix: "Bs",
    name: "Bootstrap Icons",
    license: "MIT",
    repo: "twbs/icons",
    ref: "v1.13.1",
    iconDir: "icons",
    style: "fill",
  },
  mso: {
    id: "mso",
    prefix: "Mso",
    name: "Material Symbols Outlined",
    license: "Apache-2.0",
    repo: "marella/material-symbols",
    ref: "v0.9.0",
    iconDir: "svg/400/outlined",
    style: "fill",
    // The directory ships both the base glyph and its `-fill` axis; keep only
    // the outlined (non-fill) style the user asked for.
    excludePattern: "-fill\\.svg$",
  },
  msr: {
    id: "msr",
    prefix: "Msr",
    name: "Material Symbols Rounded",
    license: "Apache-2.0",
    repo: "marella/material-symbols",
    ref: "v0.9.0",
    iconDir: "svg/400/rounded",
    style: "fill",
    excludePattern: "-fill\\.svg$",
  },
  mss: {
    id: "mss",
    prefix: "Mss",
    name: "Material Symbols Sharp",
    license: "Apache-2.0",
    repo: "marella/material-symbols",
    ref: "v0.9.0",
    iconDir: "svg/400/sharp",
    style: "fill",
    excludePattern: "-fill\\.svg$",
  },
};
