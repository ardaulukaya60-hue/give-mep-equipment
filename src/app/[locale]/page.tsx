import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

const quoteHref = "mailto:105792539@qq.com?subject=GIVE%20MEP%20Equipment%20-%20Request%20for%20Quotation";

const valveContent = {
  en: {
    eyebrow: "Selected valve portfolio",
    title: "Core valve types for international procurement",
    description: "A focused selection from the supplied industrial and water-system catalogs. Final selection depends on medium, pressure, temperature, size, connection, material, actuation and applicable standards.",
    viewCatalog: "View full catalog",
    catalogTitle: "Complete valve catalogs",
    catalogText: "Review the full product range, model references, dimensions and technical tables in the original catalogs.",
    industrial: "Industrial Valve Catalog",
    water: "Water System Valve Catalog",
    note: "Electrical equipment remains part of our wider sourcing scope but is not featured in this catalog update.",
    items: [
      ["Gate Valves", "Isolation valves commonly considered for water, steam, oil and industrial pipelines."],
      ["Globe Valves", "Flow shut-off and throttling options for industrial piping and process service."],
      ["Check Valves", "Non-return valve options designed to help prevent reverse flow in piping systems."],
      ["Ball Valves", "Quarter-turn manual, pneumatic and electric actuation options for efficient isolation."],
      ["Butterfly Valves", "Compact flow-control options for water networks, building services and industrial systems."],
      ["Control Valves", "Modulating valve options for pressure, flow and process-control requirements."],
    ],
  },
  zh: {
    eyebrow: "精选阀门产品",
    title: "面向国际工程采购的常用阀门类别",
    description: "以下内容精选自工业系统和水系统阀门手册。最终选型需结合介质、压力、温度、口径、连接方式、材质、驱动方式及适用标准确认。",
    viewCatalog: "查看完整手册",
    catalogTitle: "完整阀门产品手册",
    catalogText: "在原始手册中查看全部产品系列、型号参考、外形尺寸和技术参数表。",
    industrial: "工业系统阀门手册",
    water: "水系统阀门手册",
    note: "电气设备仍属于后续供应范围，但本次网页更新暂不重点展示。",
    items: [
      ["闸阀", "常用于水、蒸汽、油品及工业管线的启闭和隔断需求。"],
      ["截止阀", "适用于工业管道和工艺系统中的截断及一定范围内的流量调节。"],
      ["止回阀", "用于帮助防止管道介质倒流，提供多种结构形式选择。"],
      ["球阀", "提供手动、气动和电动等驱动选择，适用于快速启闭。"],
      ["蝶阀", "结构紧凑，适用于水系统、楼宇设施和工业流体控制。"],
      ["调节阀", "面向压力、流量及工艺控制需求的调节型阀门选择。"],
    ],
  },
  fr: {
    eyebrow: "Sélection de robinetterie",
    title: "Les principaux types de vannes pour les achats internationaux",
    description: "Une sélection issue des catalogues de robinetterie industrielle et de réseaux d’eau. Le choix final dépend du fluide, de la pression, de la température, du diamètre, du raccordement, des matériaux, de l’actionnement et des normes applicables.",
    viewCatalog: "Consulter le catalogue complet",
    catalogTitle: "Catalogues complets de robinetterie",
    catalogText: "Consultez toutes les gammes, références, dimensions et données techniques dans les catalogues d’origine.",
    industrial: "Catalogue de robinetterie industrielle",
    water: "Catalogue de robinetterie pour réseaux d’eau",
    note: "Les équipements électriques restent dans notre périmètre d’approvisionnement, mais ne sont pas mis en avant dans cette mise à jour.",
    items: [
      ["Robinets-vannes", "Solutions d’isolement courantes pour l’eau, la vapeur, les hydrocarbures et les réseaux industriels."],
      ["Robinets à soupape", "Solutions d’arrêt et de réglage pour tuyauteries industrielles et procédés."],
      ["Clapets anti-retour", "Solutions destinées à limiter le retour du fluide dans les réseaux de tuyauterie."],
      ["Robinets à tournant sphérique", "Versions manuelles, pneumatiques et électriques pour un isolement rapide."],
      ["Vannes papillon", "Solutions compactes pour réseaux d’eau, bâtiments et installations industrielles."],
      ["Vannes de régulation", "Solutions modulantes pour les besoins de pression, débit et contrôle de procédé."],
    ],
  },
} as const;

const valveImages = ["gate-valve.jpg", "globe-valve.jpg", "check-valve.jpg", "ball-valve.jpg", "butterfly-valve.jpg", "control-valve.jpg"];

const qualityContent = {
  en: {
    eyebrow: "Quality assurance",
    title: "Documented systems for controlled valve supply",
    description: "The supplied qualification file documents management systems, production licensing and product compliance held by Shouhe Valve Group Co., Ltd., the valve manufacturer represented in this product range.",
    note: "Certificates are shown for procurement reference. Validity and applicability should be reconfirmed for the specific product, market and delivery date during quotation.",
    view: "View certificate",
    items: [
      ["Special Equipment Production License", "Pressure piping component manufacturing license issued in China."],
      ["ISO 9001 Quality Management", "Quality management system certification covering the sales of metal valves."],
      ["ISO 14001 Environmental Management", "Environmental management system certification covering metal valve sales and related activities."],
      ["ISO 45001 Occupational Health & Safety", "Occupational health and safety management system certification covering metal valve sales and related activities."],
      ["CE Compliance - Ball Valve", "ECM certificate of compliance for the ball valve product category."],
    ],
  },
  zh: {
    eyebrow: "质量保障",
    title: "以可核验的体系与产品资质支持阀门采购",
    description: "所提供的资质文件记录了首核阀门集团有限公司在管理体系、特种设备生产许可及产品合规方面的相关证明，该公司为本次阀门产品资料所对应的制造企业。",
    note: "证书图片供采购评估参考。具体产品、目标市场及交付日期所适用的证书范围和有效性，应在报价阶段再次确认。",
    view: "查看证书",
    items: [
      ["特种设备生产许可证", "中国境内压力管道元件制造相关许可。"],
      ["ISO 9001 质量管理体系", "认证范围包含金属阀门销售。"],
      ["ISO 14001 环境管理体系", "认证范围包含金属阀门销售及相关管理活动。"],
      ["ISO 45001 职业健康安全管理体系", "认证范围包含金属阀门销售及相关管理活动。"],
      ["CE 合规证书 - 球阀", "由 ECM 出具、对应球阀产品类别的合规证明。"],
    ],
  },
  fr: {
    eyebrow: "Assurance qualité",
    title: "Des systèmes documentés pour un approvisionnement maîtrisé",
    description: "Le dossier de qualification fourni présente les systèmes de management, la licence de production et les documents de conformité de Shouhe Valve Group Co., Ltd., fabricant associé à cette gamme de robinetterie.",
    note: "Les certificats sont présentés à titre de référence pour les achats. Leur validité et leur champ d’application doivent être reconfirmés selon le produit, le marché et la date de livraison lors de l’offre.",
    view: "Voir le certificat",
    items: [
      ["Licence de production d’équipements spéciaux", "Licence chinoise relative à la fabrication de composants de tuyauterie sous pression."],
      ["ISO 9001 - Management de la qualité", "Certification du système de management de la qualité couvrant la vente de vannes métalliques."],
      ["ISO 14001 - Management environnemental", "Certification environnementale couvrant la vente de vannes métalliques et les activités associées."],
      ["ISO 45001 - Santé et sécurité au travail", "Certification SST couvrant la vente de vannes métalliques et les activités associées."],
      ["Conformité CE - Robinet à tournant sphérique", "Certificat de conformité ECM concernant la catégorie des robinets à tournant sphérique."],
    ],
  },
} as const;

const certificateImages = [
  "special-equipment-production-license.jpg",
  "iso-9001-quality-management.jpg",
  "iso-14001-environmental-management.jpg",
  "iso-45001-occupational-health-safety.jpg",
  "ce-ball-valve.jpg",
];

const projectContent = {
  en: {
    eyebrow: "Selected references",
    title: "Valve supply references across essential industries",
    description: "The qualification file contains a partial performance list of 163 customer and project references. The selection below highlights representative applications without adding unverified supply scope, contract value or project outcomes.",
    source: "Listed in the supplied qualification file",
    items: [
      ["West-East Gas Pipeline II - Gaoling Compressor Station", "Gas transmission infrastructure"],
      ["Wuhan Metro Tianhe Airport Project", "Transport infrastructure"],
      ["Fuqing Integrated Urban-Rural Water Supply - Phase I Pipeline", "Water infrastructure"],
      ["Ningxia Qingtongxia Town Wastewater Treatment Plant", "Wastewater treatment"],
      ["Sinopec Tianjin Hangu Lubricant Expansion Project", "Petrochemical industry"],
      ["CATL New Energy Technology Co., Ltd.", "New energy manufacturing"],
    ],
  },
  zh: {
    eyebrow: "精选业绩",
    title: "覆盖关键行业的阀门供货参考",
    description: "资质文件收录了由企业提供的 163 条部分客户及项目业绩。以下选取具有代表性的应用名称进行展示，不补充未经证实的供货范围、合同金额或项目成果。",
    source: "收录于所提供的企业资质文件",
    items: [
      ["西气东输二号线陕西高陵压气站", "天然气输送基础设施"],
      ["武汉地铁天河机场项目", "交通基础设施"],
      ["福清市城乡供水一体化一期管网工程", "供水基础设施"],
      ["宁夏青铜峡镇污水处理厂", "污水处理"],
      ["中石化天津汉沽润滑油扩建项目", "石油化工"],
      ["宁德时代新能源科技股份有限公司", "新能源制造"],
    ],
  },
  fr: {
    eyebrow: "Références sélectionnées",
    title: "Des références de fourniture pour des secteurs essentiels",
    description: "Le dossier de qualification comprend une liste partielle de 163 références clients et projets. La sélection ci-dessous présente des applications représentatives sans ajouter de périmètre de fourniture, de montant contractuel ni de résultat non vérifié.",
    source: "Référence figurant dans le dossier de qualification fourni",
    items: [
      ["Gazoduc Ouest-Est II - Station de compression de Gaoling", "Infrastructure de transport de gaz"],
      ["Métro de Wuhan - Projet de l’aéroport Tianhe", "Infrastructure de transport"],
      ["Réseau intégré d’alimentation en eau de Fuqing - Phase I", "Infrastructure hydraulique"],
      ["Station d’épuration de Qingtongxia, Ningxia", "Traitement des eaux usées"],
      ["Extension du site de lubrifiants Sinopec de Tianjin Hangu", "Industrie pétrochimique"],
      ["CATL New Energy Technology Co., Ltd.", "Fabrication pour les nouvelles énergies"],
    ],
  },
} as const;

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

export default async function LocalizedHome({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const home = getDictionary(locale).home;
  const valves = valveContent[locale];
  const quality = qualityContent[locale];
  const projects = projectContent[locale];

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
            <div><p className="section-label">{valves.eyebrow}</p><h2 id="products-title" className="section-title mt-5">{valves.title}</h2></div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">{valves.description}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valves.items.map((item, index) => (
              <article key={item[0]} className="group overflow-hidden border border-slate-200 bg-white transition-transform duration-300 hover:-translate-y-1 hover:border-emerald-900/40 hover:shadow-xl hover:shadow-slate-950/5">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image src={`/products/valves/${valveImages[index]}`} alt={item[0]} width={1200} height={900} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-bold tracking-[0.18em] text-amber-700">0{index + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold leading-7 text-slate-950">{item[0]}</h3>
                  <p className="mt-4 min-h-20 text-sm leading-6 text-slate-600">{item[1]}</p>
                  <a href="#catalogs" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-950">{valves.viewCatalog}<ArrowIcon /></a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 border-l-2 border-amber-600 pl-4 text-sm leading-6 text-slate-600">{valves.note}</p>
        </div>
      </section>

      <section id="catalogs" className="scroll-mt-24 bg-[#edf2ef] px-5 py-20 sm:px-8 lg:px-10 lg:py-24" aria-labelledby="catalogs-title">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="section-label">PDF / DOWNLOAD</p>
            <h2 id="catalogs-title" className="section-title mt-5">{valves.catalogTitle}</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">{valves.catalogText}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a href="/brochures/industrial-valve-catalog.pdf" target="_blank" rel="noreferrer" className="group border border-emerald-950/15 bg-white p-7 transition-colors hover:border-emerald-900">
              <span className="text-xs font-bold tracking-[0.18em] text-amber-700">PDF / 01</span>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">{valves.industrial}</h3>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-950">{valves.viewCatalog}<ArrowIcon /></span>
            </a>
            <a href="/brochures/water-system-valve-catalog.pdf" target="_blank" rel="noreferrer" className="group border border-emerald-950/15 bg-white p-7 transition-colors hover:border-emerald-900">
              <span className="text-xs font-bold tracking-[0.18em] text-amber-700">PDF / 02</span>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">{valves.water}</h3>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-950">{valves.viewCatalog}<ArrowIcon /></span>
            </a>
          </div>
        </div>
      </section>

      <section id="why-give" className="scroll-mt-24 bg-[#0a2b21] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28" aria-labelledby="why-title">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label text-amber-400">{home.why.eyebrow}</p>
            <h2 id="why-title" className="section-title mt-5 text-white">{home.why.title}</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-100">{home.why.description}</p>
          </div>
          <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2">
            {home.why.items.map((item, index) => (
              <article key={item.title} className="bg-[#0a2b21] p-7 lg:p-9">
                <span className="text-xs font-bold tracking-[0.2em] text-amber-400">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">{item.description}</p>
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

      <section id="quality" className="scroll-mt-24 bg-[#f4f6f5] px-5 py-20 sm:px-8 lg:px-10 lg:py-28" aria-labelledby="quality-title">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div><p className="section-label">{quality.eyebrow}</p><h2 id="quality-title" className="section-title mt-5">{quality.title}</h2></div>
            <p className="max-w-2xl text-base leading-7 text-slate-700 lg:justify-self-end">{quality.description}</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {quality.items.map((item, index) => (
              <a key={item[0]} href={`/certificates/${certificateImages[index]}`} target="_blank" rel="noreferrer" className="group flex flex-col overflow-hidden border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-emerald-800/50 hover:shadow-xl hover:shadow-slate-950/5">
                <div className="aspect-[3/4] overflow-hidden bg-slate-100 p-3">
                  <Image src={`/certificates/${certificateImages[index]}`} alt={item[0]} width={850} height={1200} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>
                <div className="flex flex-1 flex-col border-t border-slate-200 p-5">
                  <span className="text-[11px] font-bold tracking-[0.18em] text-amber-700">0{index + 1}</span>
                  <h3 className="mt-3 text-base font-semibold leading-6 text-slate-950">{item[0]}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item[1]}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-emerald-900">{quality.view}<ArrowIcon /></span>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-8 border-l-2 border-amber-600 pl-4 text-sm leading-6 text-slate-700">{quality.note}</p>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28" aria-labelledby="projects-title">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-4xl"><p className="section-label">{projects.eyebrow}</p><h2 id="projects-title" className="section-title mt-5">{projects.title}</h2><p className="mt-6 max-w-3xl text-base leading-7 text-slate-700">{projects.description}</p></div>
          <div className="mt-12 grid gap-px overflow-hidden border border-slate-300 bg-slate-300 md:grid-cols-2 lg:grid-cols-3">
            {projects.items.map((item, index) => (
              <article key={item[0]} className="group min-h-64 bg-[#f7f8f7] p-7 transition-colors hover:bg-[#edf2ef] lg:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-amber-700">0{index + 1}</span>
                  <span className="h-px w-12 bg-emerald-900/30 transition-all group-hover:w-20" />
                </div>
                <p className="mt-10 text-xs font-bold uppercase tracking-[0.14em] text-emerald-800">{item[1]}</p>
                <h3 className="mt-4 text-xl font-semibold leading-7 text-slate-950">{item[0]}</h3>
                <p className="mt-6 text-xs leading-5 text-slate-500">{projects.source}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-emerald-950 px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24" aria-labelledby="cta-title">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-label text-amber-400">{home.cta.eyebrow}</p>
            <h2 id="cta-title" className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">{home.cta.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-100">{home.cta.description}</p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-white sm:flex-row sm:gap-8">
              <p><span className="text-slate-300">{home.cta.emailLabel}: </span><a className="underline-offset-4 hover:underline" href="mailto:105792539@qq.com">105792539@qq.com</a></p>
              <p><span className="text-slate-300">{home.cta.phoneLabel}: </span><a className="underline-offset-4 hover:underline" href="tel:+8613871215656">+86 138 7121 5656</a></p>
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
