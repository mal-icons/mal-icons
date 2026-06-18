#!/usr/bin/env node
/**
 * build-packs.mjs — deterministic generator for the mal-icons reference packs.
 *
 * Reads the library's canonical search index and emits, for every icon set,
 * a machine-readable JSON pack (consumed by search.js) and a human-readable
 * Markdown table. Each icon record carries: name, tags, description.
 *
 *   - tags        : name tokens + everyday synonyms (reverse SYNONYMS map)
 *   - description : curated text for popular concepts, templated otherwise
 *
 * Source of truth (relative to this file):
 *   ../../../packages/react/src/icons/search-index.json   (name, set, terms)
 *
 * Usage:  node scripts/build-packs.mjs
 *
 * The generated files are committed artifacts; re-run this whenever the
 * library adds icons so the packs stay in sync. Output is byte-stable.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SKILL_ROOT = join(HERE, "..");
const REPO_ROOT = join(SKILL_ROOT, "..", "..");
const INDEX_PATH = join(REPO_ROOT, "packages", "react", "src", "icons", "search-index.json");
const OUT_DIR = join(SKILL_ROOT, "references", "icons");

/** Per-set metadata (pinned versions mirror icons-data/sources.config.ts). */
const SET_META = {
  bs: {
    id: "bs",
    name: "Bootstrap Icons",
    prefix: "Bs",
    version: "1.13.1",
    license: "MIT",
    repo: "twbs/icons",
    style: "fill",
    viewBox: "0 0 16 16",
    blurb:
      "Bootstrap's official 16×16 icon set, outline + solid variants (`BsAlarm`, `BsHeartFill`, `BsGear`). Single-color fill; theme via `color`.",
  },
  rx: {
    id: "rx",
    name: "Radix Icons",
    prefix: "Rx",
    version: "0.0.17",
    license: "MIT",
    repo: "radix-ui/icons",
    style: "fill",
    viewBox: "0 0 15 15",
    blurb:
      "Crisp 15×15 UI icons by the Radix team (`RxAccessibility`, `RxGear`). Single-color fill; theme via `color`.",
  },
  tf: {
    id: "tf",
    name: "Themify",
    prefix: "Tf",
    version: "9600186",
    license: "OFL-1.1",
    repo: "lykmapipo/themify-icons",
    style: "fill",
    viewBox: "0 0 17 17",
    blurb:
      "Hand-crafted, iOS-inspired line/solid icons (`TfHome`, `TfHeart`, `TfSettings`). Single-color fill; theme via `color`.",
  },
  vsc: {
    id: "vsc",
    name: "Codicons",
    prefix: "Vsc",
    version: "0.0.46",
    license: "CC-BY-4.0",
    repo: "microsoft/vscode-codicons",
    style: "fill",
    viewBox: "0 0 16 16",
    blurb:
      "VS Code's product icon set, 16×16 (`VscAccount`, `VscGitMerge`, `VscBug`). Single-color fill; theme via `color`.",
  },
  cg: {
    id: "cg",
    name: "css.gg",
    prefix: "Cg",
    version: "2.1.1",
    license: "MIT",
    repo: "astrit/css.gg",
    style: "fill",
    viewBox: "0 0 24 24",
    blurb:
      "Open-source, minimal 24×24 icons (`CgAdd`, `CgSearch`, `CgTrash`). Solid `currentColor` fills; theme via `color`.",
  },
  sl: {
    id: "sl",
    name: "Simple Line Icons",
    prefix: "Sl",
    version: "2.5.5",
    license: "MIT",
    repo: "thesabbir/simple-line-icons",
    style: "fill",
    viewBox: "0 0 1024 1024",
    blurb:
      "Minimal, thin line-style UI icons (`SlWrench`, `SlHeart`, `SlSettings`). Single-color 1024×1024 fill; theme via `color`.",
  },
  hi: {
    id: "hi",
    name: "Heroicons",
    prefix: "Hi",
    version: "2.2.0",
    license: "MIT",
    repo: "tailwindlabs/heroicons",
    style: "stroke",
    viewBox: "0 0 24 24",
    blurb:
      "Tailwind Labs' hand-crafted 24×24 outline icons (`HiAcademicCap`, `HiBell`, `HiHome`). Stroke-based; theme via `color`, honor `strokeWidth`/`weight`.",
  },
  ad: {
    id: "ad",
    name: "Ant Design Icons",
    prefix: "Ad",
    version: "4.0.0",
    license: "MIT",
    repo: "ant-design/ant-design-icons",
    style: "fill",
    viewBox: "0 0 1024 1024",
    blurb:
      "Ant Design's outlined UI icon set (e.g. `AdHome`, `AdSetting`, `AdSearch`). Clean single-color 1024×1024 fill icons. Paths paint with `currentColor`; theme via `color`.",
  },
  fi: {
    id: "fi",
    name: "Feather",
    prefix: "Fi",
    version: "4.29.0",
    license: "MIT",
    repo: "feathericons/feather",
    style: "stroke",
    viewBox: "0 0 24 24",
    blurb:
      "Simple, clean, stroke-based 24×24 icons. Themed via `color`; honor `strokeWidth`/`weight`.",
  },
  ci: {
    id: "ci",
    name: "Circum",
    prefix: "Ci",
    version: "2.0.2",
    license: "MPL-2.0",
    repo: "Klarr-Agency/Circum-Icons",
    style: "fill",
    viewBox: "0 0 24 24",
    blurb: "Lightweight, friendly fill icons. Paths paint with `currentColor`; theme via `color`.",
  },
  io: {
    id: "io",
    name: "Ionicons",
    prefix: "Io",
    version: "8.0.13",
    license: "MIT",
    repo: "ionic-team/ionicons",
    style: "fill",
    viewBox: "0 0 512 512",
    blurb:
      "Large 512×512 set with filled, `-outline` and `-sharp` variants. Filled icons theme via `color`; outline variants carry stroke geometry.",
  },
  la: {
    id: "la",
    name: "Line Awesome",
    prefix: "La",
    version: "1.2.1",
    license: "MIT",
    repo: "icons8/line-awesome",
    style: "fill",
    viewBox: "0 0 32 32",
    blurb:
      "Icons8's 32×32 fill set — a Font Awesome 5 alternative drawn in the Windows 10 style. Solid glyphs carry a `Solid` suffix (e.g. `LaAddressBook`, `LaAddressBookSolid`); brand marks are plain (`LaAdobe`).",
  },
  lu: {
    id: "lu",
    name: "Lucide",
    prefix: "Lu",
    version: "1.19.0",
    license: "ISC",
    repo: "lucide-icons/lucide",
    style: "stroke",
    viewBox: "0 0 24 24",
    blurb:
      "Large, community-driven 24×24 stroke set (a Feather fork, e.g. `LuActivity`, `LuSearch`). Themed via `color`; honor `strokeWidth`/`weight`.",
  },
  fa: {
    id: "fa",
    name: "Font Awesome Free",
    prefix: "Fa",
    version: "6.7.2",
    license: "CC-BY-4.0",
    repo: "FortAwesome/Font-Awesome",
    style: "fill",
    viewBox: "0 0 512 512",
    blurb:
      "Large solid 512×512 set (variable width viewBox). Paths paint with `currentColor`; theme via `color`.",
  },
  fab: {
    id: "fab",
    name: "Font Awesome Free Brands",
    prefix: "Fab",
    version: "6.7.2",
    license: "CC-BY-4.0",
    repo: "FortAwesome/Font-Awesome",
    style: "fill",
    viewBox: "0 0 512 512",
    blurb:
      "Brand and logo marks (variable width viewBox). Paths paint with `currentColor`; theme via `color`.",
  },
  far: {
    id: "far",
    name: "Font Awesome Free Regular",
    prefix: "Far",
    version: "6.7.2",
    license: "CC-BY-4.0",
    repo: "FortAwesome/Font-Awesome",
    style: "fill",
    viewBox: "0 0 512 512",
    blurb:
      "Regular (outline-style) 512×512 icons (variable width viewBox). Paths paint with `currentColor`; theme via `color`.",
  },
  ti: {
    id: "ti",
    name: "Typicons",
    prefix: "Ti",
    version: "2.1.2",
    license: "CC-BY-SA-4.0",
    repo: "stephenhutchings/typicons.font",
    style: "fill",
    viewBox: "0 0 24 24",
    blurb:
      "Compact, rounded 24×24 fill icons with many `-outline` variants. Paths paint with `currentColor`; theme via `color`.",
  },
  oc: {
    id: "oc",
    name: "Octicons",
    prefix: "Oc",
    version: "19.28.1",
    license: "MIT",
    repo: "primer/octicons",
    style: "fill",
    viewBox: "0 0 16 16",
    blurb:
      "GitHub's UI icons, shipped in size variants (component names keep the size suffix, e.g. `OcAlert16`/`OcAlert24`). Paths paint with `currentColor`; theme via `color`.",
  },
  dev: {
    id: "dev",
    name: "Devicons",
    prefix: "Dev",
    version: "2.0.1",
    license: "MIT",
    repo: "vorillaz/devicons",
    style: "fill",
    viewBox: "0 0 600 600",
    blurb:
      "Developer brand logos & icons (e.g. `DevReact`, `DevDreamhost`). Many ship a plain and an `Icon` variant. Paths paint with `currentColor`; theme via `color`.",
  },
  wi: {
    id: "wi",
    name: "Weather Icons",
    prefix: "Wi",
    version: "2.0.12",
    license: "OFL-1.1",
    repo: "erikflowers/weather-icons",
    style: "fill",
    viewBox: "0 0 30 30",
    blurb:
      "Weather, maritime & meteorological 30×30 fill icons (e.g. `WiDaySunny`, `WiThunderstorm`). The redundant `wi-` filename prefix is dropped. Paths paint with `currentColor`; theme via `color`.",
  },
  fc: {
    id: "fc",
    name: "Flat Color Icons",
    prefix: "Fc",
    version: "1.0.2",
    license: "CC-BY-4.0",
    repo: "icons8/flat-color-icons",
    style: "color",
    viewBox: "0 0 48 48",
    blurb:
      "Icons8's multi-color flat 48×48 icons (e.g. `FcAbout`, `FcSearch`, `FcCalendar`). Each shape keeps its own baked color, so these are NOT themed via `color`/`currentColor` — render them as-is.",
  },
  gr: {
    id: "gr",
    name: "Grommet",
    prefix: "Gr",
    version: "4.14.0",
    license: "Apache-2.0",
    repo: "grommet/grommet-icons",
    style: "stroke",
    viewBox: "0 0 24 24",
    blurb:
      "Grommet's stroke-based 24×24 icons, including many brand marks (e.g. `GrHome`, `GrGithub`, `GrAmazon`). Themed via `color`; honor `strokeWidth`/`weight`. Brand icons render single-color.",
  },
  gi: {
    id: "gi",
    name: "Game Icons",
    prefix: "Gi",
    version: "82d9488",
    license: "CC-BY-3.0",
    repo: "game-icons/icons",
    style: "fill",
    viewBox: "0 0 512 512",
    blurb:
      "4180 detailed game/fantasy/RPG icons from game-icons.net (e.g. `GiSwordWound`, `GiDragonHead`, `GiHealthPotion`, `GiShield`). Single-color `currentColor` fill on a 512×512 canvas; theme via `color`.",
  },
  mdf: {
    id: "mdf",
    name: "Material Icons Filled",
    prefix: "Mdf",
    version: "0.14.15",
    license: "Apache-2.0",
    repo: "marella/material-design-icons",
    style: "fill",
    viewBox: "0 0 24 24",
    blurb:
      "Google's Material Icons — the filled (default) 24×24 variant (e.g. `MdfHome`, `MdfSearch`, `MdfFace`). Solid `currentColor` fills; theme via `color`.",
  },
  mdr: {
    id: "mdr",
    name: "Material Icons Rounded",
    prefix: "Mdr",
    version: "0.14.15",
    license: "Apache-2.0",
    repo: "marella/material-design-icons",
    style: "fill",
    viewBox: "0 0 24 24",
    blurb:
      "Google's Material Icons — the rounded 24×24 variant with softened corners (e.g. `MdrHome`, `MdrSearch`, `MdrFace`). Solid `currentColor` fills; theme via `color`.",
  },
  mds: {
    id: "mds",
    name: "Material Icons Sharp",
    prefix: "Mds",
    version: "0.14.15",
    license: "Apache-2.0",
    repo: "marella/material-design-icons",
    style: "fill",
    viewBox: "0 0 24 24",
    blurb:
      "Google's Material Icons — the sharp 24×24 variant with square corners (e.g. `MdsHome`, `MdsSearch`, `MdsFace`). Solid `currentColor` fills; theme via `color`.",
  },
  mdt: {
    id: "mdt",
    name: "Material Icons Two Tone",
    prefix: "Mdt",
    version: "0.14.15",
    license: "Apache-2.0",
    repo: "marella/material-design-icons",
    style: "fill",
    viewBox: "0 0 24 24",
    blurb:
      "Google's Material Icons — the two-tone 24×24 variant (a solid layer plus a 30%-opacity layer, e.g. `MdtHome`, `MdtSearch`, `MdtFace`). Single `currentColor` hue with built-in opacity; theme via `color`.",
  },
  mso: {
    id: "mso",
    name: "Material Symbols Outlined",
    prefix: "Mso",
    version: "0.9.0",
    license: "Apache-2.0",
    repo: "marella/material-symbols",
    style: "fill",
    viewBox: "0 -960 960 960",
    blurb:
      "Google's Material Symbols — the outlined weight-400 variant (e.g. `MsoHome`, `MsoSearch`, `MsoFace`). 960×960 viewBox; paths paint with `currentColor`; theme via `color`.",
  },
  msr: {
    id: "msr",
    name: "Material Symbols Rounded",
    prefix: "Msr",
    version: "0.9.0",
    license: "Apache-2.0",
    repo: "marella/material-symbols",
    style: "fill",
    viewBox: "0 -960 960 960",
    blurb:
      "Google's Material Symbols — the rounded weight-400 variant (e.g. `MsrHome`, `MsrSearch`, `MsrFace`). 960×960 viewBox; paths paint with `currentColor`; theme via `color`.",
  },
  mss: {
    id: "mss",
    name: "Material Symbols Sharp",
    prefix: "Mss",
    version: "0.9.0",
    license: "Apache-2.0",
    repo: "marella/material-symbols",
    style: "fill",
    viewBox: "0 -960 960 960",
    blurb:
      "Google's Material Symbols — the sharp weight-400 variant (e.g. `MssHome`, `MssSearch`, `MssFace`). 960×960 viewBox; paths paint with `currentColor`; theme via `color`.",
  },
  ri: {
    id: "ri",
    name: "Remix Icon",
    prefix: "Ri",
    version: "4.6.0",
    license: "Apache-2.0",
    repo: "Remix-Design/RemixIcon",
    style: "fill",
    viewBox: "0 0 24 24",
    blurb:
      "Neutral, open-source 24×24 system icons in matching `-line` and `-fill` pairs (e.g. `RiHome2Line`, `RiHome2Fill`, `RiSearchLine`). Single-color fill; theme via `color`.",
  },
  si: {
    id: "si",
    name: "Simple Icons",
    prefix: "Si",
    version: "16.23.0",
    license: "CC0-1.0",
    repo: "simple-icons/simple-icons",
    style: "fill",
    viewBox: "0 0 24 24",
    blurb:
      "SVG brand/logo icons for popular companies and tools (e.g. `SiGithub`, `SiReact`, `SiDocker`). Single-color 24×24 fill; theme via `color`.",
  },
  bx: {
    id: "bx",
    name: "Boxicons Regular",
    prefix: "Bx",
    version: "2.1.4",
    license: "CC-BY-4.0",
    repo: "box-icons/boxicons",
    style: "fill",
    viewBox: "0 0 24 24",
    blurb:
      "Simple, consistent 24×24 outline-style UI icons (e.g. `BxHome`, `BxSearch`, `BxUser`). Single-color fill; theme via `color`.",
  },
  bxs: {
    id: "bxs",
    name: "Boxicons Solid",
    prefix: "Bxs",
    version: "2.1.4",
    license: "CC-BY-4.0",
    repo: "box-icons/boxicons",
    style: "fill",
    viewBox: "0 0 24 24",
    blurb:
      "Solid-weight variants of the Boxicons UI set (e.g. `BxsHome`, `BxsHeart`, `BxsUser`). Single-color 24×24 fill; theme via `color`.",
  },
  bxl: {
    id: "bxl",
    name: "Boxicons Logos",
    prefix: "Bxl",
    version: "2.1.4",
    license: "CC-BY-4.0",
    repo: "box-icons/boxicons",
    style: "fill",
    viewBox: "0 0 24 24",
    blurb:
      "Brand/logo marks from Boxicons (e.g. `BxlGithub`, `BxlReact`, `BxlDocker`). Single-color 24×24 fill; theme via `color`.",
  },
  tb: {
    id: "tb",
    name: "Tabler Icons",
    prefix: "Tb",
    version: "3.44.0",
    license: "MIT",
    repo: "tabler/tabler-icons",
    style: "stroke",
    viewBox: "0 0 24 24",
    blurb:
      "Large set of crisp 24×24 outline icons drawn on a 2px stroke grid (e.g. `TbHeart`, `TbHome`, `TbBrandGithub`). Theme via `color`; tune weight with `weight`.",
  },
  ph: {
    id: "ph",
    name: "Phosphor",
    prefix: "Ph",
    version: "2.0.8",
    license: "MIT",
    repo: "phosphor-icons/core",
    style: "fill",
    viewBox: "0 0 256 256",
    blurb:
      "Flexible 256×256 icons in the regular weight, drawn as single-color fills (e.g. `PhHeart`, `PhHouse`, `PhGithubLogo`). Theme via `color`.",
  },
};

/**
 * Concept synonyms (kept in lock-step with packages/cli/src/search.ts SYNONYMS).
 * Maps everyday words -> the icon terms that actually appear in the sets.
 */
const SYNONYMS = {
  add: ["plus"],
  account: ["user"],
  bin: ["trash"],
  cancel: ["x"],
  cart: ["shopping-cart"],
  close: ["x"],
  delete: ["trash", "x"],
  edit: ["edit", "pen", "pencil"],
  find: ["search"],
  gear: ["settings", "sliders"],
  hide: ["eye-off"],
  house: ["home"],
  like: ["heart", "thumbs-up"],
  love: ["heart"],
  notification: ["bell"],
  person: ["user"],
  photo: ["image", "camera"],
  picture: ["image"],
  remove: ["trash", "minus", "x"],
  save: ["save", "download"],
  setting: ["settings", "sliders"],
  trash: ["trash"],
  warning: ["alert-triangle"],
};

/** Reverse map: icon term -> everyday words that should also tag it. */
const REVERSE_SYNONYMS = (() => {
  const out = {};
  for (const [word, terms] of Object.entries(SYNONYMS)) {
    for (const term of terms) {
      // a synonym target may be multi-word ("shopping-cart"); index each token
      for (const token of term.split("-")) {
        const set = out[token] ?? new Set();
        set.add(word);
        out[token] = set;
      }
    }
  }
  return out;
})();

/**
 * Curated, human-written descriptions for popular concepts, keyed by the
 * icon's base slug (component name minus set prefix, kebab-cased) OR by any
 * single meaningful term. Applied across every set (Fi/Ci/Io) so FiHeart,
 * CiHeart and IoHeart all read well. Everything else is templated.
 */
const CURATED = {
  heart: "Heart outline — likes, favorites, wishlists and reactions.",
  star: "Star — ratings, favorites and featured/bookmarked content.",
  search: "Magnifying glass — search inputs, filters and lookups.",
  home: "House — home links, dashboards and primary navigation.",
  user: "Single person — profiles, accounts and authors.",
  users: "Group of people — teams, members and audiences.",
  settings: "Cog/gear — settings, configuration and preferences.",
  bell: "Bell — notifications and alerts.",
  trash: "Trash can — delete and remove actions.",
  "trash-2": "Trash can — delete and remove actions.",
  plus: "Plus — add, create and increment actions.",
  minus: "Minus — remove, collapse and decrement actions.",
  x: "Cross — close, dismiss and cancel actions.",
  check: "Check mark — success, confirm and completed states.",
  edit: "Pencil — edit, compose and rename actions.",
  download: "Downward arrow to tray — download and save actions.",
  upload: "Upward arrow from tray — upload and import actions.",
  share: "Share — share, export and send-to actions.",
  mail: "Envelope — email, messages and inboxes.",
  phone: "Handset — call and contact actions.",
  calendar: "Calendar — dates, scheduling and events.",
  clock: "Clock face — time, history and schedules.",
  camera: "Camera — capture photos and image uploads.",
  image: "Picture — images, galleries and media.",
  lock: "Closed padlock — security, privacy and protected content.",
  unlock: "Open padlock — unlocked or accessible content.",
  eye: "Eye — show, view and visibility toggles.",
  "eye-off": "Eye with slash — hide and reduced-visibility toggles.",
  menu: "Hamburger lines — menus and navigation drawers.",
  "shopping-cart": "Shopping cart — carts, checkout and e-commerce.",
  "credit-card": "Credit card — payments, billing and checkout.",
  download_done: "Completed download indicator.",
  github: "GitHub mark — repository and source-code links.",
  twitter: "Twitter/X bird — social profile links.",
  arrow: "Directional arrow — navigation and movement.",
  chevron: "Chevron — expand/collapse and step navigation.",
  bookmark: "Bookmark/ribbon — save-for-later and reading lists.",
  filter: "Funnel — filtering and refining lists.",
  refresh: "Circular arrows — refresh, reload and sync.",
  sun: "Sun — light theme and daytime.",
  moon: "Crescent moon — dark theme and night.",
  map: "Map — locations, directions and geography.",
  "map-pin": "Map pin — places, markers and addresses.",
  wifi: "Wi-Fi waves — connectivity and network status.",
  bluetooth: "Bluetooth — device pairing and wireless links.",
  battery: "Battery — power level and charging state.",
  play: "Play triangle — start playback.",
  pause: "Pause bars — pause playback.",
  stop: "Stop square — stop playback or processes.",
  volume: "Speaker — audio volume controls.",
  folder: "Folder — directories and file grouping.",
  file: "Document — files and attachments.",
  link: "Chain link — hyperlinks and connected items.",
  send: "Paper plane — send and submit actions.",
  globe: "Globe — language, web and worldwide reach.",
  info: "Information — details, help and tooltips.",
  help: "Question mark — help and support.",
};

/**
 * Human-readable display name derived from the component name (not the split
 * search terms), so "CiAirportSign1" → "Airport Sign 1" rather than the
 * redundant "Airport Sign1 Sign 1".
 */
function humanFromName(name, prefix) {
  const base = name.startsWith(prefix) ? name.slice(prefix.length) : name;
  return base
    .replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase boundary
    .replace(/([A-Za-z])(\d)/g, "$1 $2") // letter→digit boundary
    .replace(/(\d)([A-Za-z])/g, "$1 $2") // digit→letter boundary
    .trim();
}

/** Variant note for Ionicons outline/sharp companions. */
function variantNote(slug) {
  if (slug.endsWith("-outline")) return " Outline variant.";
  if (slug.endsWith("-sharp")) return " Sharp (squared) variant.";
  return "";
}

function buildRecord(entry, meta) {
  // terms[0] is the set id; drop it.
  const meaningful = entry.terms.slice(1).filter((t) => t && t !== meta.id);
  const baseSlug = meaningful.join("-");

  // --- tags ---
  const tags = new Set(meaningful);
  for (const term of meaningful) {
    for (const word of REVERSE_SYNONYMS[term] ?? []) tags.add(word);
  }
  if (meta.style === "stroke") tags.add("stroke");
  else tags.add("fill");
  if (baseSlug.endsWith("-outline")) tags.add("outline");
  if (baseSlug.endsWith("-sharp")) tags.add("sharp");

  // --- description (curated first, then templated) ---
  let description;
  const rootSlug = baseSlug.replace(/-(outline|sharp)$/, "");
  if (CURATED[baseSlug]) {
    description = CURATED[baseSlug];
  } else if (CURATED[rootSlug]) {
    description = CURATED[rootSlug] + variantNote(baseSlug);
  } else {
    const hit = meaningful.find((t) => CURATED[t]);
    if (hit) {
      description = CURATED[hit] + variantNote(baseSlug);
    } else {
      const human = humanFromName(entry.name, meta.prefix) || meta.name;
      description = `${human} icon — ${meta.name} (${meta.id}) set, ${meta.style} style.${variantNote(baseSlug)}`;
    }
  }

  return {
    name: entry.name,
    tags: [...tags].sort(),
    description,
  };
}

function main() {
  const index = JSON.parse(readFileSync(INDEX_PATH, "utf8"));
  mkdirSync(OUT_DIR, { recursive: true });

  const bySet = {};
  for (const entry of index.entries) {
    const list = bySet[entry.set] ?? [];
    list.push(entry);
    bySet[entry.set] = list;
  }

  for (const [setId, entries] of Object.entries(bySet)) {
    const meta = SET_META[setId];
    if (!meta) {
      console.warn(`! no metadata for set "${setId}", skipping`);
      continue;
    }
    entries.sort((a, b) => a.name.localeCompare(b.name));
    const icons = entries.map((e) => buildRecord(e, meta));

    // --- JSON pack ---
    const pack = {
      set: {
        id: meta.id,
        name: meta.name,
        prefix: meta.prefix,
        version: meta.version,
        license: meta.license,
        repo: meta.repo,
        style: meta.style,
        viewBox: meta.viewBox,
      },
      count: icons.length,
      icons,
    };
    writeFileSync(join(OUT_DIR, `${setId}.json`), `${JSON.stringify(pack, null, 2)}\n`);

    // --- Markdown table ---
    const lines = [];
    lines.push(`# ${meta.name} (\`${meta.id}\`) — ${icons.length} icons`);
    lines.push("");
    lines.push(
      `- **Prefix:** \`${meta.prefix}\` · **Version:** ${meta.version} · **License:** ${meta.license} · **Style:** ${meta.style} · **viewBox:** \`${meta.viewBox}\``,
    );
    lines.push(`- **Source:** [${meta.repo}](https://github.com/${meta.repo})`);
    lines.push(`- ${meta.blurb}`);
    lines.push("");
    lines.push(
      "Import default-only per icon: `import " +
        `${meta.prefix}Example` +
        ` from "@mal-icons/react/${meta.id}/${meta.prefix}Example"\`, ` +
        `or named from the set barrel: \`import { ${meta.prefix}Example } from "@mal-icons/react/${meta.id}"\`.`,
    );
    lines.push("");
    lines.push("| Name | Tags | Description |");
    lines.push("| --- | --- | --- |");
    for (const icon of icons) {
      const tags = icon.tags.map((t) => `\`${t}\``).join(" ");
      const desc = icon.description.replace(/\|/g, "\\|");
      lines.push(`| \`${icon.name}\` | ${tags} | ${desc} |`);
    }
    lines.push("");
    writeFileSync(join(OUT_DIR, `${setId}.md`), lines.join("\n"));

    console.log(`✓ ${setId}: ${icons.length} icons → ${setId}.json + ${setId}.md`);
  }
}

main();
