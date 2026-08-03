import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "./language-switcher";

export function SiteFooter({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const { footer, navigation } = dictionary;
  return (
    <footer className="bg-[#071c16] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="grid gap-12 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1fr]">
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-3">
              <span aria-hidden="true" className="grid size-11 place-items-center border border-amber-500/70 text-xs font-bold tracking-wider text-white">GM</span>
              <span className="font-bold tracking-[0.08em]">GIVE MEP Equipment</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">{footer.summary}</p>
            <div className="mt-6"><LanguageSwitcher currentLocale={locale} label={dictionary.languageLabel} light /></div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-amber-500">{footer.navigationTitle}</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {navigation.items.map((item) => <li key={`${item.href}-${item.label}`}><Link href={`/${locale}${item.href}`} className="hover:text-white">{item.label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-amber-500">{footer.contactTitle}</h2>
            <div className="mt-5 space-y-4 text-sm">
              <a href="mailto:105792539@qq.com" className="block text-white/75 hover:text-white">105792539@qq.com</a>
              <a href="tel:+8613871215656" className="block text-white/75 hover:text-white">+86 138 7121 5656</a>
              <Link href={`/${locale}/#contact`} className="mt-6 inline-flex border border-white/35 px-4 py-3 font-semibold text-white hover:border-amber-500">{navigation.contactUs}</Link>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-amber-500">{footer.companyTitle}</h2>
            <dl className="mt-5 space-y-5 text-sm">
              <div><dt className="text-white/45">{footer.establishedLabel}</dt><dd className="mt-1 text-white/80">{footer.establishedValue}</dd></div>
              <div><dt className="text-white/45">{footer.locationsLabel}</dt><dd className="mt-1 text-white/80">{footer.locationsValue}</dd></div>
            </dl>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GIVE MEP Equipment. {footer.copyright}</p>
          <p>{footer.locationsValue}</p>
        </div>
      </div>
    </footer>
  );
}
