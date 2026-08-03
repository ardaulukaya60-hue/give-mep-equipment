import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <div lang={locale} className="flex min-h-screen flex-col">
      <SiteHeader locale={locale} dictionary={dictionary} />
      <div className="flex-1">{children}</div>
      <SiteFooter locale={locale} dictionary={dictionary} />
    </div>
  );
}
