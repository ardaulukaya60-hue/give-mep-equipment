import type { Locale } from "./config";

export type Dictionary = {
  languageLabel: string;
  navigation: {
    menuLabel: string;
    closeLabel: string;
    items: Array<{ label: string; href: string }>;
    requestQuote: string;
    contactUs: string;
  };
  footer: {
    summary: string;
    navigationTitle: string;
    contactTitle: string;
    companyTitle: string;
    establishedLabel: string;
    establishedValue: string;
    locationsLabel: string;
    locationsValue: string;
    copyright: string;
  };
  home: {
    seoTitle: string;
    seoDescription: string;
    common: { viewProducts: string; requestQuote: string; contactUs: string; learnMore: string };
    hero: { eyebrow: string; title: string; description: string; note: string };
    products: { eyebrow: string; title: string; description: string; items: Array<{ title: string; description: string }> };
    why: { eyebrow: string; title: string; description: string; items: Array<{ title: string; description: string }> };
    industries: { eyebrow: string; title: string; description: string; items: Array<{ title: string; description: string }> };
    procurement: { eyebrow: string; title: string; description: string; fieldsLabel: string; fields: string[]; closing: string };
    projects: { eyebrow: string; title: string; description: string; placeholderTitle: string; placeholderText: string; status: string };
    cta: { eyebrow: string; title: string; description: string; emailLabel: string; phoneLabel: string };
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    languageLabel: "Language",
    navigation: {
      menuLabel: "Open navigation",
      closeLabel: "Close navigation",
      items: [
        { label: "Home", href: "" },
        { label: "Products", href: "/#products" },
        { label: "Solutions", href: "/#solutions" },
        { label: "Projects", href: "/#projects" },
        { label: "Quality", href: "/#quality" },
        { label: "About Us", href: "/#why-give" },
        { label: "Contact", href: "/#contact" },
      ],
      requestQuote: "Request a Quote",
      contactUs: "Contact Us",
    },
    footer: {
      summary: "Industrial valves for international engineering procurement and wholesale supply.",
      navigationTitle: "Explore",
      contactTitle: "Contact",
      companyTitle: "Company",
      establishedLabel: "Established",
      establishedValue: "August 26, 2011",
      locationsLabel: "Locations",
      locationsValue: "Shanghai & Wuhan, China",
      copyright: "All rights reserved.",
    },
    home: {
      seoTitle: "Industrial Valves for Global Engineering Projects",
      seoDescription: "GIVE MEP Equipment supplies industrial valves for engineering procurement and wholesale customers worldwide.",
      common: { viewProducts: "View Products", requestQuote: "Request a Quote", contactUs: "Contact Us", learnMore: "Explore Solutions" },
      hero: {
        eyebrow: "Industrial supply for global procurement",
        title: "Industrial valves for demanding projects.",
        description: "GIVE MEP Equipment supports engineering buyers and wholesalers with valve procurement for projects across Europe, the Americas, Africa, and Southeast Asia.",
        note: "Clear requirements. Practical matching. Responsive communication.",
      },
      products: {
        eyebrow: "Core valve categories",
        title: "Valve options for MEP and industrial procurement",
        description: "Explore commonly requested valve categories. Product selections are matched to your technical requirements and project context.",
        items: [
          { title: "Valves", description: "Valve solutions for flow control requirements across infrastructure, building services, and industrial applications." },
        ],
      },
      why: {
        eyebrow: "Why GIVE MEP Equipment",
        title: "A focused partner for international procurement",
        description: "We keep the sourcing process grounded in the information that matters: your application, technical needs, quantity, standards, and destination.",
        items: [
          { title: "Established in 2011", description: "GIVE MEP Equipment has operated since 2011, with teams based in Shanghai and Wuhan, China." },
          { title: "International procurement focus", description: "We serve engineering procurement teams and wholesale buyers working across international markets." },
          { title: "Valve-focused supply", description: "This website now focuses on valve products and related procurement support." },
          { title: "Requirement-led matching", description: "We prioritize clear communication so product options can be matched to the stated project requirements." },
        ],
      },
      industries: {
        eyebrow: "Industries & solutions",
        title: "Supporting diverse project environments",
        description: "Our valve categories can support procurement requirements across a range of infrastructure, building and industrial applications.",
        items: [
          { title: "Water & Infrastructure", description: "Flow control needs for water, utility, and public infrastructure applications." },
          { title: "Industrial Facilities", description: "Equipment sourcing support for process, manufacturing, and general industrial environments." },
          { title: "Commercial Buildings", description: "MEP equipment requirements for commercial properties and building services systems." },
          { title: "Energy & Pipeline Networks", description: "Valve options for pipeline, utility and related energy-support applications." },
        ],
      },
      procurement: {
        eyebrow: "Procurement support",
        title: "Share the details that define your requirement",
        description: "A complete request helps us understand your application and identify relevant product options more efficiently.",
        fieldsLabel: "Helpful information to include",
        fields: ["Product name or category", "Technical specifications", "Required quantity", "Applicable standard", "Delivery country"],
        closing: "Send the available information, even if the specification is still being refined. We will use it as the basis for product matching and quotation discussion.",
      },
      projects: {
        eyebrow: "Projects",
        title: "Project references will be added with verified information",
        description: "This section is reserved for genuine project materials that will be published after supporting details and media are confirmed.",
        placeholderTitle: "Verified project profile",
        placeholderText: "Project application, supplied category, scope, and approved images will appear here when available.",
        status: "Project information pending",
      },
      cta: {
        eyebrow: "Start a conversation",
        title: "Tell us what your project needs.",
        description: "Share your product requirements and procurement context to begin a product-matching and quotation discussion.",
        emailLabel: "Email",
        phoneLabel: "Phone",
      },
    },
  },
  zh: {
    languageLabel: "语言",
    navigation: {
      menuLabel: "打开导航菜单",
      closeLabel: "关闭导航菜单",
      items: [
        { label: "首页", href: "" },
        { label: "产品中心", href: "/#products" },
        { label: "行业解决方案", href: "/#solutions" },
        { label: "工程案例", href: "/#projects" },
        { label: "质量保障", href: "/#quality" },
        { label: "关于我们", href: "/#why-give" },
        { label: "联系我们", href: "/#contact" },
      ],
      requestQuote: "获取报价",
      contactUs: "联系我们",
    },
    footer: {
      summary: "面向国际工程采购与批发业务，提供工业阀门产品支持。",
      navigationTitle: "快速导航",
      contactTitle: "联系方式",
      companyTitle: "公司信息",
      establishedLabel: "成立时间",
      establishedValue: "2011年8月26日",
      locationsLabel: "所在城市",
      locationsValue: "中国上海 · 中国武汉",
      copyright: "版权所有。",
    },
    home: {
      seoTitle: "面向全球工程项目的工业阀门",
      seoDescription: "GIVE MEP Equipment 为全球工程采购商与批发客户提供工业阀门采购支持。",
      common: { viewProducts: "查看产品", requestQuote: "获取报价", contactUs: "联系我们", learnMore: "了解解决方案" },
      hero: {
        eyebrow: "服务全球工程采购",
        title: "为严苛工程需求提供工业阀门。",
        description: "GIVE MEP Equipment 面向欧美、非洲和东南亚的工程采购商及批发商，提供阀门产品采购支持。",
        note: "明确需求 · 合理匹配 · 及时沟通",
      },
      products: {
        eyebrow: "核心阀门类别",
        title: "满足机电与工业采购需求的阀门产品",
        description: "了解常用阀门品类。产品选择将结合技术要求和实际项目应用进行匹配。",
        items: [
          { title: "阀门", description: "面向基础设施、建筑机电和工业应用中的流体控制需求，提供阀门产品匹配支持。" },
        ],
      },
      why: {
        eyebrow: "为什么选择 GIVE MEP Equipment",
        title: "专注国际工程采购的合作伙伴",
        description: "我们围绕实际采购要点开展工作：应用场景、技术要求、数量、执行标准和交付国家。",
        items: [
          { title: "成立于2011年", description: "GIVE MEP Equipment 成立于2011年，团队位于中国上海和武汉。" },
          { title: "专注国际采购", description: "服务面向国际市场开展业务的工程采购团队和批发客户。" },
          { title: "聚焦阀门供应", description: "本站当前聚焦阀门产品及相关采购支持。" },
          { title: "以需求匹配为导向", description: "重视前期需求沟通，以明确的项目条件作为产品匹配依据。" },
        ],
      },
      industries: {
        eyebrow: "行业应用与解决方案",
        title: "支持多类工程应用场景",
        description: "我们的阀门产品可用于基础设施、建筑机电和工业应用中的相关采购需求。",
        items: [
          { title: "水务与基础设施", description: "面向水务、公用工程和公共基础设施应用中的流体控制需求。" },
          { title: "工业设施", description: "为工艺、制造及通用工业环境提供设备采购匹配支持。" },
          { title: "商业建筑", description: "服务商业物业和建筑机电系统中的设备采购需求。" },
          { title: "能源与管网", description: "面向管线、公用工程和能源配套系统中的阀门需求。" },
        ],
      },
      procurement: {
        eyebrow: "采购支持",
        title: "提供定义采购需求的关键信息",
        description: "信息越完整，我们越能高效理解应用条件并筛选适合进一步沟通的产品方案。",
        fieldsLabel: "建议提供的信息",
        fields: ["产品名称或类别", "技术规格", "采购数量", "执行标准", "交付国家"],
        closing: "即使技术规格仍在完善，也可以先发送现有资料。我们将以此为基础开展产品匹配和报价沟通。",
      },
      projects: {
        eyebrow: "工程项目",
        title: "经核实的项目资料将在此展示",
        description: "本区块预留用于展示真实项目资料，待项目说明和相关图片确认后再正式发布。",
        placeholderTitle: "真实项目资料",
        placeholderText: "后续将展示项目应用、供应类别、工作范围及经确认可发布的图片。",
        status: "项目资料待补充",
      },
      cta: {
        eyebrow: "开始沟通",
        title: "告诉我们您的项目需求。",
        description: "发送产品要求和采购背景，开始产品匹配与报价沟通。",
        emailLabel: "邮箱",
        phoneLabel: "电话",
      },
    },
  },
  fr: {
    languageLabel: "Langue",
    navigation: {
      menuLabel: "Ouvrir le menu",
      closeLabel: "Fermer le menu",
      items: [
        { label: "Accueil", href: "" },
        { label: "Produits", href: "/#products" },
        { label: "Solutions", href: "/#solutions" },
        { label: "Réalisations", href: "/#projects" },
        { label: "Qualité", href: "/#quality" },
        { label: "Notre entreprise", href: "/#why-give" },
        { label: "Contact", href: "/#contact" },
      ],
      requestQuote: "Demander un devis",
      contactUs: "Nous contacter",
    },
    footer: {
      summary: "Vannes industrielles destinees aux achats de projets internationaux et a la distribution professionnelle.",
      navigationTitle: "Navigation",
      contactTitle: "Contact",
      companyTitle: "Entreprise",
      establishedLabel: "Fondée le",
      establishedValue: "26 août 2011",
      locationsLabel: "Implantations",
      locationsValue: "Shanghai et Wuhan, Chine",
      copyright: "Tous droits réservés.",
    },
    home: {
      seoTitle: "Vannes industrielles pour projets internationaux",
      seoDescription: "GIVE MEP Equipment fournit des vannes industrielles aux acheteurs de projets et distributeurs internationaux.",
      common: { viewProducts: "Voir les produits", requestQuote: "Demander un devis", contactUs: "Nous contacter", learnMore: "Découvrir les solutions" },
      hero: {
        eyebrow: "Approvisionnement industriel international",
        title: "Vannes industrielles pour les projets exigeants.",
        description: "GIVE MEP Equipment accompagne les acheteurs de projets et les distributeurs en Europe, dans les Ameriques, en Afrique et en Asie du Sud-Est pour leurs besoins en robinetterie industrielle.",
        note: "Besoins clairs. Sélection pertinente. Communication réactive.",
      },
      products: {
        eyebrow: "Categories de vannes",
        title: "Des vannes pour les achats MEP et industriels",
        description: "Decouvrez les categories de vannes couramment demandees. La selection s'effectue selon vos exigences techniques et le contexte du projet.",
        items: [
          { title: "Vannes", description: "Des solutions de robinetterie pour la régulation des fluides dans les infrastructures, les bâtiments et les applications industrielles." },
        ],
      },
      why: {
        eyebrow: "Pourquoi GIVE MEP Equipment",
        title: "Un partenaire spécialisé dans les achats internationaux",
        description: "Notre démarche repose sur les données déterminantes : application, exigences techniques, quantité, normes et pays de livraison.",
        items: [
          { title: "Fondée en 2011", description: "GIVE MEP Equipment exerce ses activités depuis 2011, avec des équipes à Shanghai et Wuhan, en Chine." },
          { title: "Orientation internationale", description: "Nous accompagnons les équipes d’achats de projets et les distributeurs actifs sur les marchés internationaux." },
          { title: "Approvisionnement axe sur les vannes", description: "Ce site se concentre desormais sur les produits de robinetterie et l'assistance aux achats associee." },
          { title: "Sélection guidée par le besoin", description: "Nous privilégions un échange précis afin de rapprocher les options produits des exigences communiquées." },
        ],
      },
      industries: {
        eyebrow: "Secteurs & solutions",
        title: "Au service de différents environnements de projet",
        description: "Nos categories de vannes peuvent repondre aux besoins d'approvisionnement des infrastructures, batiments et sites industriels.",
        items: [
          { title: "Eau & infrastructures", description: "Besoins en regulation des fluides pour l'eau, les reseaux publics et les infrastructures." },
          { title: "Sites industriels", description: "Accompagnement des achats pour les environnements de process, de fabrication et les installations industrielles." },
          { title: "Bâtiments tertiaires", description: "Besoins en équipements MEP pour les immeubles commerciaux et leurs systèmes techniques." },
          { title: "Energie & reseaux de tuyauterie", description: "Solutions de vannes pour les reseaux, les utilites et les applications de support energetique." },
        ],
      },
      procurement: {
        eyebrow: "Assistance aux achats",
        title: "Communiquez les éléments qui définissent votre besoin",
        description: "Une demande complète nous aide à comprendre l’application et à identifier plus efficacement les options pertinentes.",
        fieldsLabel: "Informations utiles à transmettre",
        fields: ["Nom ou catégorie du produit", "Spécifications techniques", "Quantité requise", "Norme applicable", "Pays de livraison"],
        closing: "Vous pouvez nous transmettre les informations disponibles, même si le cahier des charges est encore en cours de finalisation. Elles serviront de base à la sélection et à la discussion du devis.",
      },
      projects: {
        eyebrow: "Projets",
        title: "Des références vérifiées seront publiées ici",
        description: "Cet espace est réservé à de véritables références qui seront ajoutées une fois les informations et visuels correspondants validés.",
        placeholderTitle: "Référence projet vérifiée",
        placeholderText: "L’application, la catégorie fournie, le périmètre et les images autorisées seront présentés ici lorsqu’ils seront disponibles.",
        status: "Informations projet à venir",
      },
      cta: {
        eyebrow: "Échangeons sur votre besoin",
        title: "Présentez-nous les besoins de votre projet.",
        description: "Transmettez vos exigences produits et le contexte d’achat afin d’engager la sélection et la discussion du devis.",
        emailLabel: "E-mail",
        phoneLabel: "Téléphone",
      },
    },
  },
  de: {
    languageLabel: "Sprache",
    navigation: {
      menuLabel: "Navigation oeffnen",
      closeLabel: "Navigation schliessen",
      items: [
        { label: "Startseite", href: "" },
        { label: "Produkte", href: "/#products" },
        { label: "Loesungen", href: "/#solutions" },
        { label: "Projekte", href: "/#projects" },
        { label: "Qualitaet", href: "/#quality" },
        { label: "Ueber uns", href: "/#why-give" },
        { label: "Kontakt", href: "/#contact" },
      ],
      requestQuote: "Angebot anfragen",
      contactUs: "Kontakt aufnehmen",
    },
    footer: {
      summary: "Industriearmaturen fuer internationale Projektbeschaffung und Grosshandelskunden.",
      navigationTitle: "Navigation",
      contactTitle: "Kontakt",
      companyTitle: "Unternehmen",
      establishedLabel: "Gegruendet",
      establishedValue: "26. August 2011",
      locationsLabel: "Standorte",
      locationsValue: "Shanghai und Wuhan, China",
      copyright: "Alle Rechte vorbehalten.",
    },
    home: {
      seoTitle: "Industriearmaturen fuer internationale Engineering-Projekte",
      seoDescription: "GIVE MEP Equipment liefert Industriearmaturen fuer internationale Projektbeschaffung und Grosshandelskunden.",
      common: { viewProducts: "Produkte ansehen", requestQuote: "Angebot anfragen", contactUs: "Kontakt aufnehmen", learnMore: "Loesungen ansehen" },
      hero: {
        eyebrow: "Industrielle Beschaffung fuer globale Projekte",
        title: "Industriearmaturen fuer anspruchsvolle Projekte.",
        description: "GIVE MEP Equipment unterstuetzt Engineering-Einkaeufer und Grosshaendler bei der Beschaffung von Armaturen fuer Projekte in Europa, Amerika, Afrika und Suedostasien.",
        note: "Klare Anforderungen. Passende Auswahl. Schnelle Kommunikation.",
      },
      products: {
        eyebrow: "Kernkategorien fuer Armaturen",
        title: "Armaturen fuer MEP- und Industrieeinkauf",
        description: "Entdecken Sie haeufig angefragte Armaturenkategorien. Die Produktauswahl wird an technische Anforderungen und Projektkontext angepasst.",
        items: [
          { title: "Armaturen", description: "Armaturenloesungen fuer Durchflussregelung in Infrastruktur, Gebaeudetechnik und industriellen Anwendungen." },
        ],
      },
      why: {
        eyebrow: "Warum GIVE MEP Equipment",
        title: "Ein fokussierter Partner fuer internationale Beschaffung",
        description: "Unser Prozess konzentriert sich auf die Informationen, die fuer die Auswahl wichtig sind: Anwendung, technische Anforderungen, Menge, Normen und Lieferland.",
        items: [
          { title: "Gegruendet 2011", description: "GIVE MEP Equipment ist seit 2011 taetig, mit Teams in Shanghai und Wuhan, China." },
          { title: "Fokus auf internationale Beschaffung", description: "Wir betreuen Projekt-Einkaufsteams und Grosshandelskunden in internationalen Maerkten." },
          { title: "Fokus auf Armaturen", description: "Diese Website konzentriert sich auf Armaturen und die dazugehoerige Einkaufsunterstuetzung." },
          { title: "Auswahl nach Bedarf", description: "Wir legen Wert auf klare Kommunikation, damit Produktoptionen zu den Projektanforderungen passen." },
        ],
      },
      industries: {
        eyebrow: "Branchen & Loesungen",
        title: "Unterstuetzung fuer unterschiedliche Projektumgebungen",
        description: "Unsere Armaturenkategorien koennen Beschaffungsanforderungen in Infrastruktur, Gebaeudetechnik und Industrie unterstuetzen.",
        items: [
          { title: "Wasser & Infrastruktur", description: "Durchflussregelung fuer Wasser, Versorgungsnetze und oeffentliche Infrastruktur." },
          { title: "Industrieanlagen", description: "Beschaffungsunterstuetzung fuer Prozess-, Fertigungs- und allgemeine Industrieumgebungen." },
          { title: "Gewerbliche Gebaeude", description: "MEP-Anforderungen fuer Gewerbeimmobilien und technische Gebaeudesysteme." },
          { title: "Energie & Rohrleitungsnetze", description: "Armaturenoptionen fuer Rohrleitungen, Versorgungsnetze und energiebezogene Anwendungen." },
        ],
      },
      procurement: {
        eyebrow: "Beschaffungsunterstuetzung",
        title: "Teilen Sie die Daten, die Ihren Bedarf definieren",
        description: "Eine vollstaendige Anfrage hilft uns, Ihre Anwendung zu verstehen und passende Produktoptionen schneller einzugrenzen.",
        fieldsLabel: "Hilfreiche Angaben",
        fields: ["Produktname oder Kategorie", "Technische Spezifikationen", "Benotigte Menge", "Anwendbare Norm", "Lieferland"],
        closing: "Senden Sie die vorhandenen Informationen, auch wenn die Spezifikation noch nicht final ist. Wir nutzen sie als Grundlage fuer Produktauswahl und Angebotsgespraech.",
      },
      projects: {
        eyebrow: "Projekte",
        title: "Gepruefte Projektreferenzen werden hier ergaenzt",
        description: "Dieser Bereich ist fuer echte Projektmaterialien reserviert, die nach Bestaetigung von Details und Bildmaterial veroeffentlicht werden.",
        placeholderTitle: "Geprueftes Projektprofil",
        placeholderText: "Anwendung, Produktkategorie, Umfang und freigegebene Bilder erscheinen hier, sobald sie verfuegbar sind.",
        status: "Projektinformationen ausstehend",
      },
      cta: {
        eyebrow: "Gespreach starten",
        title: "Teilen Sie uns Ihren Projektbedarf mit.",
        description: "Senden Sie Ihre Produktanforderungen und den Beschaffungskontext, um Produktauswahl und Angebot zu starten.",
        emailLabel: "E-Mail",
        phoneLabel: "Telefon",
      },
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
