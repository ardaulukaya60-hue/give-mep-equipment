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
        { label: "Quality", href: "/#why-give" },
        { label: "About Us", href: "/#why-give" },
        { label: "Contact", href: "/#contact" },
      ],
      requestQuote: "Request a Quote",
      contactUs: "Contact Us",
    },
    footer: {
      summary: "Industrial valves and electrical equipment for international engineering procurement and wholesale supply.",
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
      seoTitle: "Valves & Electrical Equipment for Global Projects",
      seoDescription: "GIVE MEP Equipment supplies valves, high-voltage and low-voltage electrical equipment for engineering procurement and wholesale customers worldwide.",
      common: { viewProducts: "View Products", requestQuote: "Request a Quote", contactUs: "Contact Us", learnMore: "Explore Solutions" },
      hero: {
        eyebrow: "Industrial supply for global procurement",
        title: "Valves and electrical equipment for demanding projects.",
        description: "GIVE MEP Equipment supports engineering buyers and wholesalers with valves, high-voltage equipment, and low-voltage equipment for projects across Europe, the Americas, Africa, and Southeast Asia.",
        note: "Clear requirements. Practical matching. Responsive communication.",
      },
      products: {
        eyebrow: "Core product categories",
        title: "Essential equipment for MEP and industrial procurement",
        description: "Explore our three core supply categories. Product selections are matched to your technical requirements and project context.",
        items: [
          { title: "Valves", description: "Valve solutions for flow control requirements across infrastructure, building services, and industrial applications." },
          { title: "High-Voltage Electrical Equipment", description: "Equipment for high-voltage power systems, selected according to project specifications and applicable standards." },
          { title: "Low-Voltage Electrical Equipment", description: "Equipment for low-voltage distribution and control needs in commercial, infrastructure, and industrial environments." },
        ],
      },
      why: {
        eyebrow: "Why GIVE MEP Equipment",
        title: "A focused partner for international procurement",
        description: "We keep the sourcing process grounded in the information that matters: your application, technical needs, quantity, standards, and destination.",
        items: [
          { title: "Established in 2011", description: "GIVE MEP Equipment has operated since 2011, with teams based in Shanghai and Wuhan, China." },
          { title: "International procurement focus", description: "We serve engineering procurement teams and wholesale buyers working across international markets." },
          { title: "Three focused categories", description: "Our offering centers on valves, high-voltage equipment, and low-voltage equipment." },
          { title: "Requirement-led matching", description: "We prioritize clear communication so product options can be matched to the stated project requirements." },
        ],
      },
      industries: {
        eyebrow: "Industries & solutions",
        title: "Supporting diverse project environments",
        description: "Our product categories can support procurement requirements across a range of infrastructure, building, industrial, and power applications.",
        items: [
          { title: "Water & Infrastructure", description: "Flow control and electrical supply needs for water, utility, and public infrastructure applications." },
          { title: "Industrial Facilities", description: "Equipment sourcing support for process, manufacturing, and general industrial environments." },
          { title: "Commercial Buildings", description: "MEP equipment requirements for commercial properties and building services systems." },
          { title: "Energy & Power Distribution", description: "High- and low-voltage equipment for power distribution requirements and related applications." },
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
        { label: "质量保障", href: "/#why-give" },
        { label: "关于我们", href: "/#why-give" },
        { label: "联系我们", href: "/#contact" },
      ],
      requestQuote: "获取报价",
      contactUs: "联系我们",
    },
    footer: {
      summary: "面向国际工程采购与批发业务，提供工业阀门及高低压电气设备。",
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
      seoTitle: "面向全球工程项目的阀门及电气设备",
      seoDescription: "GIVE MEP Equipment 为全球工程采购商与批发客户提供阀门、高压电气设备和低压电气设备。",
      common: { viewProducts: "查看产品", requestQuote: "获取报价", contactUs: "联系我们", learnMore: "了解解决方案" },
      hero: {
        eyebrow: "服务全球工程采购",
        title: "为严苛工程需求提供阀门及电气设备。",
        description: "GIVE MEP Equipment 面向欧美、非洲和东南亚的工程采购商及批发商，提供阀门、高压电气设备和低压电气设备采购支持。",
        note: "明确需求 · 合理匹配 · 及时沟通",
      },
      products: {
        eyebrow: "核心产品类别",
        title: "满足机电与工业采购需求的关键设备",
        description: "了解我们的三大核心供应类别。产品选择将结合技术要求和实际项目应用进行匹配。",
        items: [
          { title: "阀门", description: "面向基础设施、建筑机电和工业应用中的流体控制需求，提供阀门产品匹配支持。" },
          { title: "高压电气设备", description: "依据项目技术规格和适用标准，为高压电力系统提供设备选型与供应支持。" },
          { title: "低压电气设备", description: "适用于商业建筑、基础设施和工业环境中的低压配电及控制需求。" },
        ],
      },
      why: {
        eyebrow: "为什么选择 GIVE MEP Equipment",
        title: "专注国际工程采购的合作伙伴",
        description: "我们围绕实际采购要点开展工作：应用场景、技术要求、数量、执行标准和交付国家。",
        items: [
          { title: "成立于2011年", description: "GIVE MEP Equipment 成立于2011年，团队位于中国上海和武汉。" },
          { title: "专注国际采购", description: "服务面向国际市场开展业务的工程采购团队和批发客户。" },
          { title: "聚焦三大品类", description: "核心供应范围包括阀门、高压电气设备和低压电气设备。" },
          { title: "以需求匹配为导向", description: "重视前期需求沟通，以明确的项目条件作为产品匹配依据。" },
        ],
      },
      industries: {
        eyebrow: "行业应用与解决方案",
        title: "支持多类工程应用场景",
        description: "我们的产品类别可用于基础设施、建筑、工业和电力应用中的相关采购需求。",
        items: [
          { title: "水务与基础设施", description: "面向水务、公用工程和公共基础设施应用中的流体控制及电气设备需求。" },
          { title: "工业设施", description: "为工艺、制造及通用工业环境提供设备采购匹配支持。" },
          { title: "商业建筑", description: "服务商业物业和建筑机电系统中的设备采购需求。" },
          { title: "能源与配电", description: "面向电力配送及相关应用中的高低压电气设备需求。" },
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
        { label: "Qualité", href: "/#why-give" },
        { label: "Notre entreprise", href: "/#why-give" },
        { label: "Contact", href: "/#contact" },
      ],
      requestQuote: "Demander un devis",
      contactUs: "Nous contacter",
    },
    footer: {
      summary: "Vannes industrielles et équipements électriques destinés aux achats de projets internationaux et à la distribution professionnelle.",
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
      seoTitle: "Vannes et équipements électriques pour projets internationaux",
      seoDescription: "GIVE MEP Equipment fournit des vannes ainsi que des équipements électriques haute et basse tension aux acheteurs de projets et distributeurs internationaux.",
      common: { viewProducts: "Voir les produits", requestQuote: "Demander un devis", contactUs: "Nous contacter", learnMore: "Découvrir les solutions" },
      hero: {
        eyebrow: "Approvisionnement industriel international",
        title: "Vannes et équipements électriques pour les projets exigeants.",
        description: "GIVE MEP Equipment accompagne les acheteurs de projets et les distributeurs en Europe, dans les Amériques, en Afrique et en Asie du Sud-Est pour leurs besoins en vannes et en équipements électriques haute et basse tension.",
        note: "Besoins clairs. Sélection pertinente. Communication réactive.",
      },
      products: {
        eyebrow: "Catégories principales",
        title: "Des équipements essentiels pour les achats MEP et industriels",
        description: "Découvrez nos trois catégories principales. La sélection des produits s’effectue selon vos exigences techniques et le contexte du projet.",
        items: [
          { title: "Vannes", description: "Des solutions de robinetterie pour la régulation des fluides dans les infrastructures, les bâtiments et les applications industrielles." },
          { title: "Équipements électriques haute tension", description: "Des équipements destinés aux systèmes haute tension, sélectionnés selon les spécifications du projet et les normes applicables." },
          { title: "Équipements électriques basse tension", description: "Des équipements pour la distribution et la commande basse tension dans les environnements tertiaires, industriels et d’infrastructure." },
        ],
      },
      why: {
        eyebrow: "Pourquoi GIVE MEP Equipment",
        title: "Un partenaire spécialisé dans les achats internationaux",
        description: "Notre démarche repose sur les données déterminantes : application, exigences techniques, quantité, normes et pays de livraison.",
        items: [
          { title: "Fondée en 2011", description: "GIVE MEP Equipment exerce ses activités depuis 2011, avec des équipes à Shanghai et Wuhan, en Chine." },
          { title: "Orientation internationale", description: "Nous accompagnons les équipes d’achats de projets et les distributeurs actifs sur les marchés internationaux." },
          { title: "Trois catégories ciblées", description: "Notre offre se concentre sur les vannes et les équipements électriques haute et basse tension." },
          { title: "Sélection guidée par le besoin", description: "Nous privilégions un échange précis afin de rapprocher les options produits des exigences communiquées." },
        ],
      },
      industries: {
        eyebrow: "Secteurs & solutions",
        title: "Au service de différents environnements de projet",
        description: "Nos catégories de produits peuvent répondre aux besoins d’approvisionnement des infrastructures, bâtiments, sites industriels et réseaux électriques.",
        items: [
          { title: "Eau & infrastructures", description: "Besoins en régulation des fluides et équipements électriques pour l’eau, les réseaux publics et les infrastructures." },
          { title: "Sites industriels", description: "Accompagnement des achats pour les environnements de process, de fabrication et les installations industrielles." },
          { title: "Bâtiments tertiaires", description: "Besoins en équipements MEP pour les immeubles commerciaux et leurs systèmes techniques." },
          { title: "Énergie & distribution électrique", description: "Équipements haute et basse tension pour les besoins de distribution électrique et applications associées." },
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
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
