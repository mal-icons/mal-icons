import type { IconComponent } from "@mal-icons/react-native";
// Three equivalent ways to import an icon — pick whichever you prefer:
//   import FiSearch from "@mal-icons/react-native/fi/FiSearch"; // per-icon default
//   import { FiSearch } from "@mal-icons/react-native/fi";      // set barrel (named)
//   import { FiSearch } from "@mal-icons/react-native";         // package root (named)
// This demo uses per-icon default imports below for maximal tree-shaking.
import FiActivity from "@mal-icons/react-native/fi/FiActivity";
import FiArrowRight from "@mal-icons/react-native/fi/FiArrowRight";
import FiBell from "@mal-icons/react-native/fi/FiBell";
import FiCalendar from "@mal-icons/react-native/fi/FiCalendar";
import FiCamera from "@mal-icons/react-native/fi/FiCamera";
import FiCheck from "@mal-icons/react-native/fi/FiCheck";
import FiCloud from "@mal-icons/react-native/fi/FiCloud";
import FiCode from "@mal-icons/react-native/fi/FiCode";
import FiCopy from "@mal-icons/react-native/fi/FiCopy";
import FiDownload from "@mal-icons/react-native/fi/FiDownload";
import FiEdit from "@mal-icons/react-native/fi/FiEdit";
import FiGithub from "@mal-icons/react-native/fi/FiGithub";
import FiGlobe from "@mal-icons/react-native/fi/FiGlobe";
import FiHeart from "@mal-icons/react-native/fi/FiHeart";
import FiHome from "@mal-icons/react-native/fi/FiHome";
import FiLoader from "@mal-icons/react-native/fi/FiLoader";
import FiLock from "@mal-icons/react-native/fi/FiLock";
import FiMail from "@mal-icons/react-native/fi/FiMail";
import FiMoon from "@mal-icons/react-native/fi/FiMoon";
import FiSearch from "@mal-icons/react-native/fi/FiSearch";
import FiSettings from "@mal-icons/react-native/fi/FiSettings";
import FiStar from "@mal-icons/react-native/fi/FiStar";
import FiSun from "@mal-icons/react-native/fi/FiSun";
import FiTrash2 from "@mal-icons/react-native/fi/FiTrash2";
import FiUpload from "@mal-icons/react-native/fi/FiUpload";
import FiUser from "@mal-icons/react-native/fi/FiUser";
import FiZap from "@mal-icons/react-native/fi/FiZap";

/** Curated showcase set: `[exported name, icon component]`. */
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

export { FiCheck, FiCopy, FiGithub, FiSearch };
