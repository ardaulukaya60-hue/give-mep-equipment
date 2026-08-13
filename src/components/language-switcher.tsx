"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

const labels: Record<Locale, string> = { en: "EN", zh: "中文", fr: "FR", de: "DE" };

export function LanguageSwitcher({ currentLocale, label, light = false }: { currentLocale: Locale; label: string; light?: boolean }) {
  const pathname = usePathname();

  function localizedPath(locale: Locale) {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return (
    <nav aria-label={label} className="flex items-center gap-1">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={localizedPath(locale)}
          hrefLang={locale}
          aria-current={locale === currentLocale ? "page" : undefined}
          className={`rounded-sm px-2 py-1.5 text-xs font-semibold transition-colors ${
            locale === currentLocale
              ? light ? "bg-white text-emerald-950" : "bg-emerald-950 !text-white"
              : light ? "text-white/70 hover:text-white" : "text-slate-500 hover:text-emerald-950"
          }`}
        >
          {labels[locale]}
        </Link>
      ))}
    </nav>
  );
}
