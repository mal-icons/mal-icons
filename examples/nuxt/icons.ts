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
} from "@mal-icon/vue/fi";
import type { Component } from "vue";

export interface IconEntry {
  name: string;
  comp: Component;
}

export const ICONS: IconEntry[] = [
  { name: "FiActivity", comp: FiActivity },
  { name: "FiArrowRight", comp: FiArrowRight },
  { name: "FiBell", comp: FiBell },
  { name: "FiCalendar", comp: FiCalendar },
  { name: "FiCamera", comp: FiCamera },
  { name: "FiCheck", comp: FiCheck },
  { name: "FiCloud", comp: FiCloud },
  { name: "FiCode", comp: FiCode },
  { name: "FiDownload", comp: FiDownload },
  { name: "FiEdit", comp: FiEdit },
  { name: "FiGithub", comp: FiGithub },
  { name: "FiGlobe", comp: FiGlobe },
  { name: "FiHeart", comp: FiHeart },
  { name: "FiHome", comp: FiHome },
  { name: "FiLoader", comp: FiLoader },
  { name: "FiLock", comp: FiLock },
  { name: "FiMail", comp: FiMail },
  { name: "FiMoon", comp: FiMoon },
  { name: "FiSearch", comp: FiSearch },
  { name: "FiSettings", comp: FiSettings },
  { name: "FiStar", comp: FiStar },
  { name: "FiSun", comp: FiSun },
  { name: "FiTrash2", comp: FiTrash2 },
  { name: "FiUpload", comp: FiUpload },
  { name: "FiUser", comp: FiUser },
  { name: "FiZap", comp: FiZap },
];

export { FiActivity, FiGlobe, FiSearch, FiZap };
