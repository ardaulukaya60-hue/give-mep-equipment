"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "./language-switcher";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { navigation } = dictionary;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center gap-6 px-5 sm:px-8 lg:px-10">
        <Link href={`/${locale}`} className="group flex shrink-0 items-center gap-3" aria-label="GIVE MEP Equipment home">
          <span aria-hidden="true" className="grid size-10 place-items-center border border-emerald-900 text-xs font-bold tracking-wider text-emerald-950 transition-colors group-hover:bg-emerald-950 group-hover:text-white">
            GM
          </span>
          <span className="max-w-40 text-sm font-bold leading-tight tracking-[0.08em] text-slate-950">GIVE MEP Equipment</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {navigation.items.map((item) => {
            const href = `/${locale}${item.href}`;
            const active = item.href === "" ? pathname === `/${locale}` : pathname.startsWith(href);
            return (
              <Link key={`${item.href}-${item.label}`} href={href} aria-current={active ? "page" : undefined} className={`border-b py-2 text-sm font-medium transition-colors ${active ? "border-amber-600 text-emerald-950" : "border-transparent text-slate-600 hover:text-emerald-950"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-3 xl:flex">
          <LanguageSwitcher currentLocale={locale} label={dictionary.languageLabel} />
          <Link href={`/${locale}/#inquiry`} className="bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-900">
            {navigation.requestQuote}
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-3 xl:hidden">
          <div className="hidden sm:block">
            <LanguageSwitcher currentLocale={locale} label={dictionary.languageLabel} />
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? navigation.closeLabel : navigation.menuLabel}
            className="grid size-11 place-items-center border border-slate-300 text-slate-950"
          >
            <span className="sr-only">{open ? navigation.closeLabel : navigation.menuLabel}</span>
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] h-px w-5 bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-navigation" onClick={() => setOpen(false)} className={`${open ? "block" : "hidden"} border-t border-slate-200 bg-white xl:hidden`}>
        <nav className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8" aria-label="Mobile navigation">
          <div className="mb-4 border-b border-slate-200 pb-4 sm:hidden">
            <LanguageSwitcher currentLocale={locale} label={dictionary.languageLabel} />
          </div>
          <div className="grid">
            {navigation.items.map((item) => {
              const href = `/${locale}${item.href}`;
              return <Link key={`${item.href}-${item.label}`} href={href} className="border-b border-slate-100 py-3.5 text-base font-medium text-slate-800 hover:text-emerald-950">{item.label}</Link>;
            })}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link href={`/${locale}/#inquiry`} className="bg-emerald-950 px-5 py-3.5 text-center text-sm font-semibold text-white">{navigation.requestQuote}</Link>
            <Link href={`/${locale}/#contact`} className="border border-emerald-950 px-5 py-3.5 text-center text-sm font-semibold text-emerald-950">{navigation.contactUs}</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
