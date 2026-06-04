import type { IconData } from "@mal-icon/web";
import { fiIcons } from "@mal-icon/web/fi";

/** Names shown in the gallery, in display order. */
export const ICON_NAMES = [
  "FiActivity",
  "FiArrowRight",
  "FiBell",
  "FiCalendar",
  "FiCamera",
  "FiCheck",
  "FiCloud",
  "FiCode",
  "FiDownload",
  "FiEdit",
  "FiGithub",
  "FiGlobe",
  "FiHeart",
  "FiHome",
  "FiLoader",
  "FiLock",
  "FiMail",
  "FiMoon",
  "FiSearch",
  "FiSettings",
  "FiStar",
  "FiSun",
  "FiTrash2",
  "FiUpload",
  "FiUser",
  "FiZap",
];

/** Icons used by the app chrome itself (search field, copy buttons, links). */
const UI_ICON_NAMES = ["FiSearch", "FiGithub", "FiCopy", "FiCheck"];

/** Curated subset of the full Feather set, keyed by name for `<mal-icon>`. */
export const ICONS: Record<string, IconData> = Object.fromEntries(
  [...ICON_NAMES, ...UI_ICON_NAMES].map((name) => [name, fiIcons[name]]),
);
