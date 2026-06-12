// Three equivalent ways to import an icon — pick whichever you prefer:
//   import FiSearch from "@mal-icons/solid/fi/FiSearch"; // per-icon default
//   import { FiSearch } from "@mal-icons/solid/fi";      // set barrel (named)
//   import { FiSearch } from "@mal-icons/solid";         // package root (named)
// This demo uses the set barrel below for a compact, tree-shakeable list.
import {
  FiActivity,
  FiArrowRight,
  FiBell,
  FiCalendar,
  FiCamera,
  FiCheck,
  FiCloud,
  FiCode,
  FiDownload,
  FiEdit,
  FiGithub,
  FiGlobe,
  FiHeart,
  FiHome,
  FiLoader,
  FiLock,
  FiMail,
  FiMoon,
  FiSearch,
  FiSettings,
  FiStar,
  FiSun,
  FiTrash2,
  FiUpload,
  FiUser,
  FiZap,
} from "@mal-icons/solid/fi";
import type { JSX } from "solid-js";

/** A generated mal-icons Solid component. */
// biome-ignore lint/suspicious/noExplicitAny: heterogeneous icon props share one type
export type IconComponent = (props: any) => JSX.Element;

/** Curated showcase set: `[exported name, component]`. */
export const ICONS: ReadonlyArray<readonly [string, IconComponent]> = [
  ["FiActivity", FiActivity],
  ["FiArrowRight", FiArrowRight],
  ["FiBell", FiBell],
  ["FiCalendar", FiCalendar],
  ["FiCamera", FiCamera],
  ["FiCheck", FiCheck],
  ["FiCloud", FiCloud],
  ["FiCode", FiCode],
  ["FiDownload", FiDownload],
  ["FiEdit", FiEdit],
  ["FiGithub", FiGithub],
  ["FiGlobe", FiGlobe],
  ["FiHeart", FiHeart],
  ["FiHome", FiHome],
  ["FiLoader", FiLoader],
  ["FiLock", FiLock],
  ["FiMail", FiMail],
  ["FiMoon", FiMoon],
  ["FiSearch", FiSearch],
  ["FiSettings", FiSettings],
  ["FiStar", FiStar],
  ["FiSun", FiSun],
  ["FiTrash2", FiTrash2],
  ["FiUpload", FiUpload],
  ["FiUser", FiUser],
  ["FiZap", FiZap],
];
