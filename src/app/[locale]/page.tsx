import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";

type PageProps = { params: Promise<{ locale: string }> };

const quoteHref = "#inquiry";

const valveContent = {
  en: {
    eyebrow: "Selected valve portfolio",
    title: "Core valve types for international procurement",
    description:
      "A focused selection for water, infrastructure, industrial and building-service projects. Final selection depends on medium, pressure, temperature, size, connection, material, actuation and applicable standards.",
    viewProducts: "View valve options",
    catalogTitle: "Valve catalog access",
    catalogText:
      "Original PDF catalogs may contain manufacturer address and phone information, so they are no longer published directly on the website. Send your requirement and we will provide suitable catalog pages or a sanitized product reference for your inquiry.",
    catalogCta: "Request catalog by email",
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
    title: "面向国际工程采购的常用阀门品类",
    description:
      "聚焦水务、基础设施、工业装置和建筑机电项目中的常用阀门需求。最终选型需结合介质、压力、温度、口径、连接方式、材质、驱动方式及适用标准确认。",
    viewProducts: "查看阀门产品",
    catalogTitle: "阀门产品手册获取",
    catalogText:
      "原始 PDF 手册中包含厂家地址和联系电话，因此本站不再直接公开下载。客户提交需求后，我们会根据询价内容提供对应产品页或脱敏后的产品资料。",
    catalogCta: "提交需求获取手册",
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
    eyebrow: "Selection de robinetterie",
    title: "Les principaux types de vannes pour les achats internationaux",
    description:
      "Une selection adaptee aux projets d'eau, d'infrastructure, d'industrie et de services techniques du batiment. Le choix final depend du fluide, de la pression, de la temperature, du diametre, du raccordement, des materiaux, de l'actionnement et des normes applicables.",
    viewProducts: "Voir les vannes",
    catalogTitle: "Acces aux catalogues de robinetterie",
    catalogText:
      "Les catalogues PDF d'origine peuvent contenir l'adresse et le telephone du fabricant. Ils ne sont donc plus publies directement sur le site. Envoyez votre besoin et nous fournirons les pages pertinentes ou une reference produit preparee pour votre demande.",
    catalogCta: "Demander le catalogue",
    items: [
      ["Robinets-vannes", "Solutions d'isolement courantes pour l'eau, la vapeur, les hydrocarbures et les reseaux industriels."],
      ["Robinets a soupape", "Solutions d'arret et de reglage pour tuyauteries industrielles et procedes."],
      ["Clapets anti-retour", "Solutions destinees a limiter le retour du fluide dans les reseaux de tuyauterie."],
      ["Robinets a tournant spherique", "Versions manuelles, pneumatiques et electriques pour un isolement rapide."],
      ["Vannes papillon", "Solutions compactes pour reseaux d'eau, batiments et installations industrielles."],
      ["Vannes de regulation", "Solutions modulantes pour les besoins de pression, debit et controle de procede."],
    ],
  },
  de: {
    eyebrow: "Ausgewaehltes Armaturenportfolio",
    title: "Wichtige Armaturentypen fuer internationale Beschaffung",
    description:
      "Eine fokussierte Auswahl fuer Wasser-, Infrastruktur-, Industrie- und Gebaeudetechnikprojekte. Die finale Auswahl haengt von Medium, Druck, Temperatur, Nennweite, Anschluss, Material, Antrieb und geltenden Normen ab.",
    viewProducts: "Armaturen ansehen",
    catalogTitle: "Zugang zu Armaturenkatalogen",
    catalogText:
      "Originale PDF-Kataloge koennen Herstelleradresse und Telefonnummer enthalten und werden daher nicht direkt auf der Website veroeffentlicht. Senden Sie Ihre Anfrage, und wir stellen passende Katalogseiten oder eine bereinigte Produktreferenz bereit.",
    catalogCta: "Katalog per Anfrage erhalten",
    items: [
      ["Absperrschieber", "Absperrarmaturen fuer Wasser, Dampf, Oel und industrielle Rohrleitungen."],
      ["Absperrventile", "Absperr- und Drosseloptionen fuer industrielle Rohrleitungen und Prozessanwendungen."],
      ["Rueckschlagventile", "Rueckflussverhinderer zur Begrenzung von Rueckstroemung in Rohrleitungssystemen."],
      ["Kugelhaehne", "Vierteldrehende Ausfuehrungen mit manueller, pneumatischer oder elektrischer Betaetigung."],
      ["Absperrklappen", "Kompakte Loesungen fuer Wassernetze, Gebaeudetechnik und industrielle Fluidsysteme."],
      ["Regelventile", "Modulierende Armaturen fuer Druck-, Durchfluss- und Prozessregelung."],
    ],
  },
} as const satisfies Record<Locale, unknown>;

const valveImages = ["gate-valve.jpg", "globe-valve.jpg", "check-valve.jpg", "ball-valve.jpg", "butterfly-valve.jpg", "control-valve.jpg"];

const qualityContent = {
  en: {
    eyebrow: "Quality assurance",
    title: "Documented systems for controlled valve supply",
    description:
      "The supplied qualification file documents management systems, production licensing and product compliance held by Shouhe Valve Group Co., Ltd., the valve manufacturer represented in this product range.",
    note:
      "Certificates are shown for procurement reference. Validity and applicability should be reconfirmed for the specific product, market and delivery date during quotation.",
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
    description:
      "所提供的资质文件记录了首核阀门集团有限公司在管理体系、特种设备生产许可及产品合规方面的相关证明，该公司为本次阀门产品资料所对应的制造企业。",
    note:
      "证书图片供采购评估参考。具体产品、目标市场及交付日期所适用的证书范围和有效性，应在报价阶段再次确认。",
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
    eyebrow: "Assurance qualite",
    title: "Des systemes documentes pour un approvisionnement maitrise",
    description:
      "Le dossier de qualification fourni presente les systemes de management, la licence de production et les documents de conformite de Shouhe Valve Group Co., Ltd., fabricant associe a cette gamme de robinetterie.",
    note:
      "Les certificats sont presentes a titre de reference pour les achats. Leur validite et leur champ d'application doivent etre reconfirmes selon le produit, le marche et la date de livraison lors de l'offre.",
    view: "Voir le certificat",
    items: [
      ["Licence de production d'equipements speciaux", "Licence chinoise relative a la fabrication de composants de tuyauterie sous pression."],
      ["ISO 9001 - Management de la qualite", "Certification du systeme de management de la qualite couvrant la vente de vannes metalliques."],
      ["ISO 14001 - Management environnemental", "Certification environnementale couvrant la vente de vannes metalliques et les activites associees."],
      ["ISO 45001 - Sante et securite au travail", "Certification SST couvrant la vente de vannes metalliques et les activites associees."],
      ["Conformite CE - Robinet a tournant spherique", "Certificat de conformite ECM concernant la categorie des robinets a tournant spherique."],
    ],
  },
  de: {
    eyebrow: "Qualitaetssicherung",
    title: "Dokumentierte Systeme fuer kontrollierte Armaturenlieferung",
    description:
      "Die bereitgestellte Qualifikationsdatei dokumentiert Managementsysteme, Produktionslizenz und Produktkonformitaet von Shouhe Valve Group Co., Ltd., dem Hersteller dieser Armaturenreihe.",
    note:
      "Die Zertifikate dienen als Referenz fuer den Einkauf. Gueltigkeit und Anwendbarkeit sollten fuer Produkt, Zielmarkt und Lieferdatum im Angebotsprozess erneut bestaetigt werden.",
    view: "Zertifikat ansehen",
    items: [
      ["Produktionslizenz fuer Sonderausruestung", "Chinesische Lizenz fuer die Herstellung von Druckrohrleitungskomponenten."],
      ["ISO 9001 Qualitaetsmanagement", "Zertifizierung des Qualitaetsmanagementsystems fuer den Vertrieb von Metallarmaturen."],
      ["ISO 14001 Umweltmanagement", "Umweltmanagement-Zertifizierung fuer Metallarmaturenvertrieb und zugehoerige Aktivitaeten."],
      ["ISO 45001 Arbeits- und Gesundheitsschutz", "Zertifizierung fuer Arbeits- und Gesundheitsschutz im Bereich Metallarmaturenvertrieb."],
      ["CE-Konformitaet - Kugelhahn", "ECM-Konformitaetszertifikat fuer die Produktkategorie Kugelhahn."],
    ],
  },
} as const satisfies Record<Locale, unknown>;

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
    title: "Valve references across essential industries",
    description:
      "The qualification file contains a partial performance list of customer and project references. Click a reference to view a short profile. Published images are conservative application visuals until project-site photos are supplied and approved.",
    source: "Listed in the supplied qualification file",
    imageNote: "Application visual; exact project-site photo pending confirmation.",
    open: "Open project profile",
    close: "Project profile",
    items: [
      {
        title: "West-East Gas Pipeline II - Gaoling Compressor Station",
        sector: "Gas transmission infrastructure",
        summary:
          "A representative energy-infrastructure reference from the supplied performance list. For procurement use, valve selection should be checked against pressure class, medium, connection and actuation requirements.",
        image: "/projects/industrial-pipeline-valves.jpg",
      },
      {
        title: "Wuhan Metro Tianhe Airport Project",
        sector: "Transport infrastructure",
        summary:
          "A public transport infrastructure reference. Relevant valve inquiries may involve water systems, building services or supporting utility networks, subject to confirmed project specifications.",
        image: "/products/valves/butterfly-valve.jpg",
      },
      {
        title: "Fuqing Integrated Urban-Rural Water Supply - Phase I Pipeline",
        sector: "Water infrastructure",
        summary:
          "A water-supply network reference where isolation, non-return and flow-control valve requirements are commonly reviewed by pipeline medium, size and installation conditions.",
        image: "/products/valves/gate-valve.jpg",
      },
      {
        title: "Ningxia Qingtongxia Town Wastewater Treatment Plant",
        sector: "Wastewater treatment",
        summary:
          "A wastewater-treatment reference. Product matching should consider corrosion environment, operation frequency, sealing requirements and maintenance access.",
        image: "/products/valves/check-valve.jpg",
      },
      {
        title: "Sinopec Tianjin Hangu Lubricant Expansion Project",
        sector: "Petrochemical industry",
        summary:
          "A petrochemical-industry reference from the performance list. Final valve options depend on medium properties, temperature, pressure and applicable project standards.",
        image: "/products/valves/globe-valve.jpg",
      },
      {
        title: "CATL New Energy Technology Co., Ltd.",
        sector: "New energy manufacturing",
        summary:
          "A new-energy manufacturing reference. Valve requirements may relate to plant utilities or process-support systems and should be confirmed case by case.",
        image: "/products/valves/ball-valve.jpg",
      },
    ],
  },
  zh: {
    eyebrow: "精选业绩",
    title: "覆盖关键行业的阀门项目参考",
    description:
      "资质文件中收录了部分客户及项目业绩。点击项目卡片可查看简介。当前图片采用谨慎的应用场景图，真实项目现场照片待后续补充并确认后替换。",
    source: "收录于所提供的企业资质文件",
    imageNote: "应用场景图；对应项目现场照片待确认。",
    open: "打开项目简介",
    close: "项目简介",
    items: [
      {
        title: "西气东输二号线陕西高陵压气站",
        sector: "天然气输送基础设施",
        summary: "资质文件业绩表中的能源基础设施参考。具体阀门匹配需结合压力等级、介质、连接方式和驱动要求确认。",
        image: "/projects/industrial-pipeline-valves.jpg",
      },
      {
        title: "武汉地铁天河机场项目",
        sector: "交通基础设施",
        summary: "公共交通基础设施参考。相关阀门需求可能涉及水系统、楼宇机电或配套公用工程，需以项目技术条件为准。",
        image: "/products/valves/butterfly-valve.jpg",
      },
      {
        title: "福清市城乡供水一体化一期管网工程",
        sector: "供水基础设施",
        summary: "供水管网类参考。常见关注点包括隔断、止回、流量控制、口径、安装条件和适用标准。",
        image: "/products/valves/gate-valve.jpg",
      },
      {
        title: "宁夏青铜峡镇污水处理厂",
        sector: "污水处理",
        summary: "污水处理类参考。选型时通常需要考虑腐蚀环境、启闭频率、密封要求和后期维护便利性。",
        image: "/products/valves/check-valve.jpg",
      },
      {
        title: "中石化天津汉沽润滑油扩建项目",
        sector: "石油化工",
        summary: "石化行业参考。最终阀门方案需结合介质特性、温度、压力和项目执行标准确认。",
        image: "/products/valves/globe-valve.jpg",
      },
      {
        title: "宁德时代新能源科技股份有限公司",
        sector: "新能源制造",
        summary: "新能源制造类参考。阀门需求可能涉及厂务系统或工艺辅助系统，应按具体应用逐项确认。",
        image: "/products/valves/ball-valve.jpg",
      },
    ],
  },
  fr: {
    eyebrow: "References selectionnees",
    title: "References de robinetterie dans des secteurs essentiels",
    description:
      "Le dossier de qualification comprend une liste partielle de references clients et projets. Cliquez sur une reference pour afficher son profil. Les images publiees restent des visuels d'application jusqu'a validation de photos de site.",
    source: "Reference figurant dans le dossier de qualification fourni",
    imageNote: "Visuel d'application; photo exacte du site a confirmer.",
    open: "Ouvrir le profil",
    close: "Profil du projet",
    items: [
      {
        title: "Gazoduc Ouest-Est II - Station de compression de Gaoling",
        sector: "Infrastructure de transport de gaz",
        summary:
          "Reference d'infrastructure energetique issue de la liste fournie. La selection des vannes doit etre verifiee selon la classe de pression, le fluide, le raccordement et l'actionnement.",
        image: "/projects/industrial-pipeline-valves.jpg",
      },
      {
        title: "Metro de Wuhan - Projet de l'aeroport Tianhe",
        sector: "Infrastructure de transport",
        summary:
          "Reference d'infrastructure de transport public. Les demandes peuvent concerner les reseaux d'eau, les services du batiment ou les utilites associees, selon les specifications confirmees.",
        image: "/products/valves/butterfly-valve.jpg",
      },
      {
        title: "Reseau integre d'alimentation en eau de Fuqing - Phase I",
        sector: "Infrastructure hydraulique",
        summary:
          "Reference de reseau d'alimentation en eau. Les besoins courants incluent l'isolement, le clapet anti-retour et le controle du debit, selon le diametre et les conditions d'installation.",
        image: "/products/valves/gate-valve.jpg",
      },
      {
        title: "Station d'epuration de Qingtongxia, Ningxia",
        sector: "Traitement des eaux usees",
        summary:
          "Reference de traitement des eaux usees. La selection doit tenir compte de la corrosion, de la frequence de manoeuvre, de l'etancheite et de la maintenance.",
        image: "/products/valves/check-valve.jpg",
      },
      {
        title: "Extension du site de lubrifiants Sinopec de Tianjin Hangu",
        sector: "Industrie petrochimique",
        summary:
          "Reference petrochemique. Les options finales dependent des proprietes du fluide, de la temperature, de la pression et des normes du projet.",
        image: "/products/valves/globe-valve.jpg",
      },
      {
        title: "CATL New Energy Technology Co., Ltd.",
        sector: "Fabrication pour les nouvelles energies",
        summary:
          "Reference de fabrication pour les nouvelles energies. Les besoins peuvent concerner les utilites d'usine ou les systemes de support de procede.",
        image: "/products/valves/ball-valve.jpg",
      },
    ],
  },
  de: {
    eyebrow: "Ausgewaehlte Referenzen",
    title: "Armaturenreferenzen in wichtigen Branchen",
    description:
      "Die Qualifikationsdatei enthaelt eine Teilliste von Kunden- und Projektreferenzen. Klicken Sie auf eine Referenz, um ein kurzes Profil zu sehen. Die Bilder sind konservative Anwendungsvisualisierungen, bis Projektfotos bereitgestellt und freigegeben sind.",
    source: "Aufgefuehrt in der bereitgestellten Qualifikationsdatei",
    imageNote: "Anwendungsbild; exaktes Projektfoto noch zu bestaetigen.",
    open: "Projektprofil oeffnen",
    close: "Projektprofil",
    items: [
      {
        title: "West-East Gas Pipeline II - Verdichterstation Gaoling",
        sector: "Gastransport-Infrastruktur",
        summary:
          "Eine Referenz aus dem Bereich Energieinfrastruktur aus der bereitgestellten Leistungsliste. Fuer die Beschaffung sollten Druckklasse, Medium, Anschluss und Antrieb geprueft werden.",
        image: "/projects/industrial-pipeline-valves.jpg",
      },
      {
        title: "Wuhan Metro - Projekt Flughafen Tianhe",
        sector: "Verkehrsinfrastruktur",
        summary:
          "Eine Referenz im Bereich oeffentlicher Verkehrsinfrastruktur. Relevante Armaturenanfragen koennen Wassersysteme, Gebaeudetechnik oder Versorgungsnetze betreffen.",
        image: "/products/valves/butterfly-valve.jpg",
      },
      {
        title: "Integrierte Wasserleitung Fuqing - Phase I",
        sector: "Wasserinfrastruktur",
        summary:
          "Eine Referenz fuer ein Wasserversorgungsnetz. Typische Punkte sind Absperrung, Rueckflussverhinderung, Durchflussregelung, Nennweite und Einbaubedingungen.",
        image: "/products/valves/gate-valve.jpg",
      },
      {
        title: "Abwasserbehandlungsanlage Qingtongxia, Ningxia",
        sector: "Abwasserbehandlung",
        summary:
          "Eine Referenz im Bereich Abwasserbehandlung. Bei der Auswahl sind Korrosionsumgebung, Schalthaeufigkeit, Dichtanforderungen und Wartungszugang wichtig.",
        image: "/products/valves/check-valve.jpg",
      },
      {
        title: "Sinopec Tianjin Hangu Schmierstoff-Erweiterungsprojekt",
        sector: "Petrochemische Industrie",
        summary:
          "Eine petrochemische Referenz aus der Leistungsliste. Finale Armaturenoptionen haengen von Medium, Temperatur, Druck und Projektstandards ab.",
        image: "/products/valves/globe-valve.jpg",
      },
      {
        title: "CATL New Energy Technology Co., Ltd.",
        sector: "Fertigung fuer neue Energien",
        summary:
          "Eine Referenz aus der New-Energy-Fertigung. Armaturenbedarf kann Werksversorgung oder prozessnahe Hilfssysteme betreffen und sollte im Einzelfall bestaetigt werden.",
        image: "/products/valves/ball-valve.jpg",
      },
    ],
  },
} as const satisfies Record<Locale, unknown>;

const inquiryContent = {
  en: {
    eyebrow: "Inquiry window",
    title: "Send your valve requirement",
    description:
      "Share the product name, working condition, standard, quantity and delivery country. The form is prepared for Netlify Forms so submissions can be collected from the live site.",
    name: "Name",
    company: "Company",
    email: "Email",
    phone: "Phone / WhatsApp",
    country: "Delivery country",
    product: "Valve type or product name",
    message: "Requirement details",
    submit: "Send inquiry",
    privacy: "No payment, database or file upload is connected in this version.",
  },
  zh: {
    eyebrow: "客户询盘窗口",
    title: "发送您的阀门采购需求",
    description: "请填写产品名称、工况、执行标准、数量和交付国家。表单已按 Netlify Forms 准备，上线后可在 Netlify 后台收集客户提交内容。",
    name: "姓名",
    company: "公司名称",
    email: "邮箱",
    phone: "电话 / WhatsApp",
    country: "交付国家",
    product: "阀门类型或产品名称",
    message: "需求说明",
    submit: "发送询盘",
    privacy: "当前版本未接入支付、数据库或文件上传功能。",
  },
  fr: {
    eyebrow: "Fenetre de demande",
    title: "Envoyez votre besoin en robinetterie",
    description:
      "Indiquez le produit, les conditions de service, la norme, la quantite et le pays de livraison. Le formulaire est prepare pour Netlify Forms afin de collecter les demandes depuis le site publie.",
    name: "Nom",
    company: "Entreprise",
    email: "E-mail",
    phone: "Telephone / WhatsApp",
    country: "Pays de livraison",
    product: "Type de vanne ou produit",
    message: "Details du besoin",
    submit: "Envoyer la demande",
    privacy: "Aucun paiement, base de donnees ni televersement de fichier n'est connecte dans cette version.",
  },
  de: {
    eyebrow: "Anfragefenster",
    title: "Senden Sie Ihren Armaturenbedarf",
    description:
      "Teilen Sie Produktname, Betriebsbedingungen, Norm, Menge und Lieferland mit. Das Formular ist fuer Netlify Forms vorbereitet, damit Anfragen von der Live-Website gesammelt werden koennen.",
    name: "Name",
    company: "Unternehmen",
    email: "E-Mail",
    phone: "Telefon / WhatsApp",
    country: "Lieferland",
    product: "Armaturentyp oder Produktname",
    message: "Anforderungsdetails",
    submit: "Anfrage senden",
    privacy: "In dieser Version sind keine Zahlung, Datenbank oder Datei-Uploads angebunden.",
  },
} as const satisfies Record<Locale, unknown>;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const home = getDictionary(locale).home;
  return {
    title: home.seoTitle,
    description: home.seoDescription,
    alternates: { canonical: `/${locale}`, languages: { en: "/en", "zh-CN": "/zh", fr: "/fr", de: "/de" } },
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

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-800">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="min-h-12 border border-slate-300 bg-white px-4 text-base font-normal text-slate-950 outline-none transition-colors focus:border-emerald-900"
      />
    </label>
  );
}

export default async function LocalizedHome({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const home = getDictionary(locale).home;
  const valves = valveContent[locale];
  const quality = qualityContent[locale];
  const projects = projectContent[locale];
  const inquiry = inquiryContent[locale];

  return (
    <main>
      <section className="relative overflow-hidden bg-[#edf2ef] px-5 sm:px-8 lg:px-10" aria-labelledby="home-hero-title">
        <div className="absolute inset-0 industrial-grid opacity-50" />
        <div className="relative mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-14 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div className="max-w-3xl">
            <p className="section-label">{home.hero.eyebrow}</p>
            <h1 id="home-hero-title" className="mt-6 text-5xl font-semibold leading-[1.04] text-slate-950 sm:text-6xl lg:text-[4.75rem]">
              {home.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">{home.hero.description}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={quoteHref} className="inline-flex items-center justify-center gap-3 bg-emerald-950 px-6 py-4 text-sm font-semibold !text-white transition-colors hover:bg-emerald-900">
                {home.common.requestQuote}<ArrowIcon />
              </a>
              <a href="#products" className="inline-flex items-center justify-center gap-3 border border-emerald-950 px-6 py-4 text-sm font-semibold text-emerald-950 transition-colors hover:bg-white">
                {home.common.viewProducts}<ArrowIcon />
              </a>
            </div>
            <p className="mt-8 border-l-2 border-amber-600 pl-4 text-sm font-medium text-slate-700">{home.hero.note}</p>
          </div>

          <div className="relative mx-auto w-full max-w-xl" aria-hidden="true">
            <div className="aspect-square border border-emerald-950/15 bg-white/55 p-5 sm:p-8">
              <div className="relative h-full overflow-hidden border border-emerald-950/20 bg-slate-100">
                <Image src="/projects/industrial-pipeline-valves.jpg" alt="" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-emerald-950/20" />
                <span className="absolute left-5 top-5 text-[10px] font-bold tracking-[0.24em] text-white">VALVE SUPPLY</span>
                <span className="absolute bottom-5 right-5 text-5xl font-light text-white/45 sm:text-7xl">GIVE</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-amber-600" />
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28" aria-labelledby="products-title">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="section-label">{valves.eyebrow}</p>
              <h2 id="products-title" className="section-title mt-5">{valves.title}</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-700 lg:justify-self-end">{valves.description}</p>
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
                  <p className="mt-4 min-h-20 text-sm leading-6 text-slate-700">{item[1]}</p>
                  <a href="#inquiry" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-950">{valves.viewProducts}<ArrowIcon /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogs" className="scroll-mt-24 bg-[#edf2ef] px-5 py-20 sm:px-8 lg:px-10 lg:py-24" aria-labelledby="catalogs-title">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="section-label">CATALOG</p>
            <h2 id="catalogs-title" className="section-title mt-5">{valves.catalogTitle}</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-700">{valves.catalogText}</p>
          </div>
          <div className="border border-emerald-950/15 bg-white p-7 sm:p-9">
            <span className="text-xs font-bold tracking-[0.18em] text-amber-700">PDF ACCESS</span>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">{valves.catalogCta}</h3>
            <p className="mt-4 text-sm leading-6 text-slate-700">{home.procurement.closing}</p>
            <a href="#inquiry" className="mt-8 inline-flex items-center gap-3 bg-emerald-950 px-6 py-4 text-sm font-semibold !text-white hover:bg-emerald-900">
              {home.common.requestQuote}<ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="why-give" className="scroll-mt-24 bg-[#0a2b21] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28" aria-labelledby="why-title">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label !text-amber-300">{home.why.eyebrow}</p>
            <h2 id="why-title" className="section-title mt-5 !text-white">{home.why.title}</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-100">{home.why.description}</p>
          </div>
          <div className="grid gap-px overflow-hidden border border-white/20 bg-white/20 sm:grid-cols-2">
            {home.why.items.map((item, index) => (
              <article key={item.title} className="bg-[#0a2b21] p-7 lg:p-9">
                <span className="text-xs font-bold tracking-[0.2em] text-amber-300">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-100">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-28" aria-labelledby="industries-title">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl">
            <p className="section-label">{home.industries.eyebrow}</p>
            <h2 id="industries-title" className="section-title mt-5">{home.industries.title}</h2>
            <p className="mt-6 text-base leading-7 text-slate-700">{home.industries.description}</p>
          </div>
          <div className="mt-12 grid border-l border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            {home.industries.items.map((item, index) => (
              <article key={item.title} className="min-h-72 border-b border-r border-slate-300 bg-white p-7 transition-colors hover:bg-[#edf2ef]">
                <span className="grid size-11 place-items-center border border-emerald-900/30 text-sm font-semibold text-emerald-950">0{index + 1}</span>
                <h3 className="mt-10 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-700">{item.description}</p>
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
            <p className="mt-6 text-base leading-7 text-slate-700">{home.procurement.description}</p>
            <p className="mt-7 text-sm leading-6 text-slate-700">{home.procurement.closing}</p>
            <a href="#inquiry" className="mt-9 inline-flex items-center gap-3 bg-emerald-950 px-6 py-4 text-sm font-semibold !text-white transition-colors hover:bg-emerald-900">{home.common.requestQuote}<ArrowIcon /></a>
          </div>
          <div className="border border-slate-200 bg-[#edf2ef] p-7 sm:p-10">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-950">{home.procurement.fieldsLabel}</h3>
            <ol className="mt-7 space-y-3">
              {home.procurement.fields.map((field, index) => (
                <li key={field} className="flex items-center gap-4 border-b border-emerald-950/10 bg-white px-5 py-4 text-sm font-medium text-slate-900">
                  <span className="text-xs font-bold text-amber-700">0{index + 1}</span>{field}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="quality" className="scroll-mt-24 bg-[#f4f6f5] px-5 py-20 sm:px-8 lg:px-10 lg:py-28" aria-labelledby="quality-title">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="section-label">{quality.eyebrow}</p>
              <h2 id="quality-title" className="section-title mt-5">{quality.title}</h2>
            </div>
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
                  <p className="mt-3 text-sm leading-6 text-slate-700">{item[1]}</p>
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
          <div className="max-w-4xl">
            <p className="section-label">{projects.eyebrow}</p>
            <h2 id="projects-title" className="section-title mt-5">{projects.title}</h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700">{projects.description}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.items.map((item, index) => (
              <details key={item.title} className="group overflow-hidden border border-slate-200 bg-white">
                <summary className="grid cursor-pointer list-none gap-5 p-0 marker:hidden">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image src={item.image} alt={item.title} width={1200} height={900} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-6 pt-0">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-bold tracking-[0.18em] text-amber-700">0{index + 1}</span>
                      <span className="text-xs font-semibold text-emerald-900">{projects.open}</span>
                    </div>
                    <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-emerald-800">{item.sector}</p>
                    <h3 className="mt-4 text-xl font-semibold leading-7 text-slate-950">{item.title}</h3>
                  </div>
                </summary>
                <div className="border-t border-slate-200 bg-[#f7f8f7] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-900">{projects.close}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-700">{item.summary}</p>
                  <p className="mt-5 text-xs leading-5 text-slate-600">{projects.source}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{projects.imageNote}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 bg-[#edf2ef] px-5 py-20 sm:px-8 lg:px-10 lg:py-28" aria-labelledby="inquiry-title">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="section-label">{inquiry.eyebrow}</p>
            <h2 id="inquiry-title" className="section-title mt-5">{inquiry.title}</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-700">{inquiry.description}</p>
            <div className="mt-8 space-y-3 text-sm text-slate-800">
              <p><span className="font-semibold">{home.cta.emailLabel}: </span><a className="text-emerald-950 underline-offset-4 hover:underline" href="mailto:105792539@qq.com">105792539@qq.com</a></p>
              <p><span className="font-semibold">{home.cta.phoneLabel}: </span><a className="text-emerald-950 underline-offset-4 hover:underline" href="tel:+8613871215656">+86 138 7121 5656</a></p>
            </div>
          </div>

          <form name="quote-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="grid gap-5 border border-slate-200 bg-white p-6 sm:grid-cols-2 sm:p-8">
            <input type="hidden" name="form-name" value="quote-request" />
            <p className="hidden">
              <label>Do not fill this out: <input name="bot-field" /></label>
            </p>
            <Field label={inquiry.name} name="name" required />
            <Field label={inquiry.company} name="company" />
            <Field label={inquiry.email} name="email" type="email" required />
            <Field label={inquiry.phone} name="phone" />
            <Field label={inquiry.country} name="country" />
            <Field label={inquiry.product} name="product" required />
            <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
              {inquiry.message}
              <textarea name="message" required rows={7} className="border border-slate-300 bg-white px-4 py-3 text-base font-normal text-slate-950 outline-none transition-colors focus:border-emerald-900" />
            </label>
            <div className="grid gap-4 sm:col-span-2 sm:grid-cols-[auto_1fr] sm:items-center">
              <button type="submit" className="inline-flex items-center justify-center gap-3 bg-emerald-950 px-6 py-4 text-sm font-semibold !text-white transition-colors hover:bg-emerald-900">
                {inquiry.submit}<ArrowIcon />
              </button>
              <p className="text-xs leading-5 text-slate-600">{inquiry.privacy}</p>
            </div>
          </form>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-emerald-950 px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24" aria-labelledby="cta-title">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-label !text-amber-300">{home.cta.eyebrow}</p>
            <h2 id="cta-title" className="mt-5 text-4xl font-semibold text-white sm:text-5xl">{home.cta.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-100">{home.cta.description}</p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-white sm:flex-row sm:gap-8">
              <p><span className="text-slate-200">{home.cta.emailLabel}: </span><a className="underline-offset-4 hover:underline" href="mailto:105792539@qq.com">105792539@qq.com</a></p>
              <p><span className="text-slate-200">{home.cta.phoneLabel}: </span><a className="underline-offset-4 hover:underline" href="tel:+8613871215656">+86 138 7121 5656</a></p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#inquiry" className="inline-flex items-center justify-center gap-3 bg-white px-6 py-4 text-sm font-semibold text-emerald-950 transition-colors hover:bg-amber-50">{home.common.requestQuote}<ArrowIcon /></a>
            <a href="mailto:105792539@qq.com" className="inline-flex items-center justify-center gap-3 border border-white/60 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white">{home.common.contactUs}<ArrowIcon /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
