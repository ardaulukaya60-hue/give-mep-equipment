import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

const quoteHref = "mailto:105792539@qq.com?subject=GIVE%20MEP%20Equipment%20-%20Request%20for%20Quotation";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const home = getDictionary(locale).home;
  return {
    title: home.seoTitle,
    description: home.seoDescription,
    alternates: { canonical: `/${locale}`, languages: { en: "/en", "zh-CN": "/zh", fr: "/fr" } },
    openGraph: { title: home.seoTitle, description: home.seoDescription, type: "website" },
  };
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4 fill-none stroke-current stroke-[1.5]">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

function ProductVisual({ index }: { index: number }) {
  const paths = [
    <g key="valve"><circle cx="80" cy="67" r="30" /><path d="M20 67h30m60 0h30M80 37V18m-17 0h34M55 44l50 46M105 44 55 90" /></g>,
    <g key="high"><path d="M30 103h100M46 103V48h68v55M58 48V30h44v18M64 63h32M64 77h32M64 91h32M80 30V16" /><circle cx="80" cy="16" r="4" /></g>,
    <g key="low"><rect x="38" y="20" width="84" height="88" rx="2" /><path d="M51 34h58v22H51zM51 68h25v25H51zM84 68h25v25H84zM64 39v12m32-12v12M58 75h11m22 0h11" /></g>,
  ];
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-[#e8eeeb]">
      <div className="absolute inset-0 industrial-grid opacity-40" />
      <svg viewBox="0 0 160 128" className="absolute inset-0 h-full w-full fill-none stroke-emerald-950 stroke-[1.3]" aria-hidden="true">
        {paths[index]}
      </svg>
      <span className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.22em] text-emerald-900/55">GIVE MEP / 0{index + 1}</span>
    </div>
  );
}

export default async function LocalizedHome({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const home = getDictionary(locale).home;

  return (
    <main>
      <section className="relative overflow-hidden bg-[#edf2ef] px-5 sm:px-8 lg:px-10" aria-labelledby="home-hero-title">
        <div className="absolute inset-0 industrial-grid opacity-50" />
        <div className="relative mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-14 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div className="max-w-3xl">
            <p className="section-label">{home.hero.eyebrow}</p>
            <h1 id="home-hero-title" className="mt-6 text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[4.75rem]">
              {home.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{home.hero.description}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={quoteHref} className="inline-flex items-center justify-center gap-3 bg-emerald-950 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-900">
                {home.common.requestQuote}<ArrowIcon />
              </a>
              <a href="#products" className="inline-flex items-center justify-center gap-3 border border-emerald-950 px-6 py-4 text-sm font-semibold text-emerald-950 transition-colors hover:bg-white">
                {home.common.viewProducts}<ArrowIcon />
              </a>
            </div>
            <p className="mt-8 border-l-2 border-amber-600 pl-4 text-sm font-medium text-slate-600">{home.hero.note}</p>
          </div>

          <div className="relative mx-auto w-full max-w-xl" aria-hidden="true">
            <div className="aspect-square border border-emerald-950/15 bg-white/55 p-5 sm:p-8">
              <div className="relative h-full border border-emerald-950/20">
                <div className="absolute inset-0 industrial-grid opacity-60" />
                <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full fill-none stroke-emerald-950">
                  <circle cx="250" cy="250" r="112" strokeWidth="2" />
                  <circle cx="250" cy="250" r="50" strokeWidth="1" />
                  <path d="M250 55v83M250 362v83M55 250h83M362 250h83M112 112l79 79M309 309l79 79M388 112l-79 79M191 309l-79 79" strokeWidth="2" />
                  <path d="M165 165l170 170M335 165 165 335" strokeWidth="4" />
                  <path d="M190 72h120M72 190v120M428 190v120M190 428h120" strokeWidth="1" />
                </svg>
                <span className="absolute left-5 top-5 text-[10px] font-bold tracking-[0.24em] text-emerald-900/55">INDUSTRIAL SUPPLY</span>
                <span className="absolute bottom-5 right-5 text-5xl font-light tracking-[-0.06em] text-emerald-950/15 sm:text-7xl">MEP</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-amber-600" />
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28" aria-labelledby="products-title">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div><p className="section-label">{home.products.eyebrow}</p><h2 id="products-title" className="section-title mt-5">{home.products.title}</h2></div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">{home.products.description}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {home.products.items.map((item, index) => (
              <article key={item.title} className="group border border-slate-200 bg-white transition-transform duration-300 hover:-translate-y-1 hover:border-emerald-900/40 hover:shadow-xl hover:shadow-slate-950/5">
                <ProductVisual index={index} />
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-bold tracking-[0.18em] text-amber-700">0{index + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold leading-7 text-slate-950">{item.title}</h3>
                  <p className="mt-4 min-h-24 text-sm leading-6 text-slate-600">{item.description}</p>
                  <a href="#procurement" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-950">{home.common.viewProducts}<ArrowIcon /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-give" className="scroll-mt-24 bg-[#0a2b21] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28" aria-labelledby="why-title">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label text-amber-500">{home.why.eyebrow}</p>
            <h2 id="why-title" className="section-title mt-5 text-white">{home.why.title}</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/65">{home.why.description}</p>
          </div>
          <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2">
            {home.why.items.map((item, index) => (
              <article key={item.title} className="bg-[#0a2b21] p-7 lg:p-9">
                <span className="text-xs font-bold tracking-[0.2em] text-amber-500">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-28" aria-labelledby="industries-title">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl"><p className="section-label">{home.industries.eyebrow}</p><h2 id="industries-title" className="section-title mt-5">{home.industries.title}</h2><p className="mt-6 text-base leading-7 text-slate-600">{home.industries.description}</p></div>
          <div className="mt-12 grid border-l border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            {home.industries.items.map((item, index) => (
              <article key={item.title} className="min-h-72 border-b border-r border-slate-300 bg-white p-7 transition-colors hover:bg-[#edf2ef]">
                <span className="grid size-11 place-items-center border border-emerald-900/30 text-sm font-semibold text-emerald-950">0{index + 1}</span>
                <h3 className="mt-10 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="procurement" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28" aria-labelledby="procurement-title">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="section-label">{home.procurement.eyebrow}</p>
            <h2 id="procurement-title" className="section-title mt-5">{home.procurement.title}</h2>
            <p className="mt-6 text-base leading-7 text-slate-600">{home.procurement.description}</p>
            <p className="mt-7 text-sm leading-6 text-slate-600">{home.procurement.closing}</p>
            <a href={quoteHref} className="mt-9 inline-flex items-center gap-3 bg-emerald-950 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-900">{home.common.requestQuote}<ArrowIcon /></a>
          </div>
          <div className="border border-slate-200 bg-[#edf2ef] p-7 sm:p-10">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-950">{home.procurement.fieldsLabel}</h3>
            <ol className="mt-7 space-y-3">
              {home.procurement.fields.map((field, index) => <li key={field} className="flex items-center gap-4 border-b border-emerald-950/10 bg-white px-5 py-4 text-sm font-medium text-slate-800"><span className="text-xs font-bold text-amber-700">0{index + 1}</span>{field}</li>)}
            </ol>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 bg-slate-100 px-5 py-20 sm:px-8 lg:px-10 lg:py-28" aria-labelledby="projects-title">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl"><p className="section-label">{home.projects.eyebrow}</p><h2 id="projects-title" className="section-title mt-5">{home.projects.title}</h2><p className="mt-6 text-base leading-7 text-slate-600">{home.projects.description}</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <article key={item} className="border border-dashed border-slate-400 bg-white/60 p-7">
                <div className="flex aspect-[16/9] items-center justify-center border border-slate-200 bg-white industrial-grid"><span className="text-5xl font-light text-emerald-950/15">0{item}</span></div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-amber-700">{home.projects.status}</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">{home.projects.placeholderTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{home.projects.placeholderText}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-emerald-950 px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24" aria-labelledby="cta-title">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-label text-amber-500">{home.cta.eyebrow}</p>
            <h2 id="cta-title" className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">{home.cta.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">{home.cta.description}</p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-white/75 sm:flex-row sm:gap-8">
              <p><span className="text-white/45">{home.cta.emailLabel}: </span><a className="hover:text-white" href="mailto:105792539@qq.com">105792539@qq.com</a></p>
              <p><span className="text-white/45">{home.cta.phoneLabel}: </span><a className="hover:text-white" href="tel:+8613871215656">+86 138 7121 5656</a></p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={quoteHref} className="inline-flex items-center justify-center gap-3 bg-white px-6 py-4 text-sm font-semibold text-emerald-950 transition-colors hover:bg-amber-50">{home.common.requestQuote}<ArrowIcon /></a>
            <a href="mailto:105792539@qq.com" className="inline-flex items-center justify-center gap-3 border border-white/45 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white">{home.common.contactUs}<ArrowIcon /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
