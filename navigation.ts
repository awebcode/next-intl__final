import {
  createSharedPathnamesNavigation,
} from "next-intl/navigation";

export const locales = ["en", "bn"] as const;
export const localePrefix = "always"; // Default
// and external paths, separated by locale.

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
