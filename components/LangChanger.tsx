"use client";

import { useRouter, usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";

export default function LanguageChanger() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const handleChange = (e: any) => {
    const lang = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  };
  console.log("locale", locale);
  return (
    <select
      value={locale}
      onChange={handleChange}
      className="px-8 py-2 text-black rounded border-none outline-none focus:border-none"
    >
      <option className="text-black" value="en">
        English
      </option>
      <option className="text-black" value="bn">
        Bangla
      </option>
    </select>
  );
}
