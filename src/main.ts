import "./styles.css";

type Shortcut = {
  title: string;
  description: string;
  envKey: string;
  fallback?: string;
  initials: string;
  tone: "blue" | "teal" | "green" | "gold" | "rose";
};

type ShortcutSection = {
  title: string;
  description: string;
  cards: Shortcut[];
};

const env = import.meta.env;

const urls = {
  mainCrm: env.VITE_MAIN_CRM_URL || "https://crm-roan-rho.vercel.app",
  marketingCrm:
    env.VITE_MARKETING_CRM_URL || "https://marketing-crm-six.vercel.app",
  workDocumentsHub:
    env.VITE_WORK_DOCUMENTS_HUB_URL || "https://work-documents-hub.vercel.app",
  imageSuite: env.VITE_IMAGE_SUITE_URL || "https://vehicle-image-suite.vercel.app",
  controlCentre:
    env.VITE_CONTROL_CENTRE_URL || "https://control-centre-navy.vercel.app",
};

function joinUrl(base: string, path = "") {
  const cleanBase = base.trim().replace(/\/+$/, "");
  if (!cleanBase) return "";
  if (!path) return cleanBase;
  return `${cleanBase}${path.startsWith("/") || path.startsWith("#") ? path : `/${path}`}`;
}

const sections: ShortcutSection[] = [
  {
    title: "Core Systems",
    description: "Daily operating systems and primary workspaces.",
    cards: [
      {
        title: "Main CRM",
        description: "Customer pipeline, applications, and account work.",
        envKey: "VITE_MAIN_CRM_URL",
        fallback: urls.mainCrm,
        initials: "CRM",
        tone: "blue",
      },
      {
        title: "Marketing CRM",
        description: "Campaigns, creative workflows, and publishing tools.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: urls.marketingCrm,
        initials: "MKT",
        tone: "teal",
      },
      {
        title: "Work Documents Hub",
        description: "Customer files, documents, templates, and storage.",
        envKey: "VITE_WORK_DOCUMENTS_HUB_URL",
        fallback: urls.workDocumentsHub,
        initials: "DOC",
        tone: "green",
      },
      {
        title: "Image Suite",
        description: "Image tools and visual asset preparation.",
        envKey: "VITE_IMAGE_SUITE_URL",
        fallback: urls.imageSuite,
        initials: "IMG",
        tone: "gold",
      },
    ],
  },
  {
    title: "Marketing Tools",
    description: "Current shortcuts from the live Marketing CRM navigation.",
    cards: [
      {
        title: "Content Operations",
        description: "Daily marketing targets, completion tracking, and automation status.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: urls.marketingCrm,
        initials: "OPS",
        tone: "blue",
      },
      {
        title: "Marketing Dashboard",
        description: "Marketing performance dashboard and operational overview.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/marketing-dashboard/"),
        initials: "DASH",
        tone: "teal",
      },
      {
        title: "Website Analytics",
        description: "Website traffic, visitor activity, and conversion analytics.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/website-analytics/"),
        initials: "WEB",
        tone: "green",
      },
      {
        title: "Stock",
        description: "Vehicle stock views and marketing stock actions.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/stock"),
        initials: "STK",
        tone: "blue",
      },
      {
        title: "Customer Database",
        description: "Marketing customer records, audiences, and contact activity.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/customer-database"),
        initials: "CDB",
        tone: "teal",
      },
      {
        title: "Marketing Centre",
        description: "Campaign planning, channel tools, and marketing controls.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/marketing-centre"),
        initials: "MKT",
        tone: "gold",
      },
      {
        title: "Knowledge Hub",
        description: "SEO knowledge articles, content coverage, and publishing.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/knowledge-hub"),
        initials: "KH",
        tone: "green",
      },
      {
        title: "Content Factory",
        description: "Create and manage reusable marketing content.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/content-factory"),
        initials: "CF",
        tone: "rose",
      },
      {
        title: "AI Control Centre",
        description: "AI system controls, health, and operational tooling.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/ai-control-centre/"),
        initials: "AI",
        tone: "blue",
      },
      {
        title: "Knowledge Opportunities",
        description: "Find content and knowledge gaps worth building next.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/ai-knowledge-opportunities"),
        initials: "KOP",
        tone: "teal",
      },
      {
        title: "Suppression Centre",
        description: "Manage suppressed contacts and marketing exclusions.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/suppression-centre/"),
        initials: "SUP",
        tone: "rose",
      },
      {
        title: "Email Templates",
        description: "Build and manage reusable marketing email templates.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/email-templates/"),
        initials: "EML",
        tone: "gold",
      },
      {
        title: "Campaigns",
        description: "Create, send, and monitor marketing campaigns.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/campaigns/"),
        initials: "CMP",
        tone: "green",
      },
      {
        title: "DealerKit Stock Watch",
        description: "Monitor DealerKit stock, feed health, and stock changes.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/vansco-stock-watch"),
        initials: "DK",
        tone: "blue",
      },
      {
        title: "YouTube Generator",
        description: "Create and manage YouTube vehicle video content.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/youtube-generator"),
        initials: "YT",
        tone: "rose",
      },
      {
        title: "Daily Reels",
        description: "Daily automated Reel production and publishing status.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/daily-reels/"),
        initials: "REEL",
        tone: "gold",
      },
      {
        title: "Creative Library",
        description: "Reusable creative, captions, and campaign assets.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/creative-library"),
        initials: "LIB",
        tone: "teal",
      },
    ],
  },
  {
    title: "Posting",
    description: "Current Marketing CRM publishing workflows by channel.",
    cards: [
      {
        title: "Van Finance Facebook",
        description: "Van Finance Facebook vehicle publishing workflow.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/van-finance-facebook"),
        initials: "VFF",
        tone: "green",
      },
      {
        title: "Rent2Buy Facebook",
        description: "Rent2Buy Facebook vehicle publishing workflow.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/rent2buy-facebook"),
        initials: "R2B",
        tone: "gold",
      },
      {
        title: "Van Finance Marketplace",
        description: "Van Finance Facebook Marketplace listing workflow.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/van-finance-marketplace"),
        initials: "VFM",
        tone: "blue",
      },
      {
        title: "Rent2Buy Marketplace",
        description: "Rent2Buy Facebook Marketplace listing workflow.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/rent2buy-marketplace"),
        initials: "R2M",
        tone: "rose",
      },
      {
        title: "Van Finance Groups & Classifieds",
        description: "Van Finance Facebook groups and classifieds workflow.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/van-finance-groups"),
        initials: "VFG",
        tone: "teal",
      },
      {
        title: "Rent2Buy Facebook Groups",
        description: "Rent2Buy Facebook groups publishing workflow.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: joinUrl(urls.marketingCrm, "/rent2buy-groups"),
        initials: "R2G",
        tone: "green",
      },
    ],
  },
  {
    title: "Business Areas",
    description: "Quick entry points by business stream.",
    cards: [
      {
        title: "Van Finance",
        description: "Finance applications and customer work.",
        envKey: "VITE_MAIN_CRM_URL",
        fallback: urls.mainCrm,
        initials: "VF",
        tone: "blue",
      },
      {
        title: "Rent2Buy",
        description: "Rent2Buy customers, cases, and handovers.",
        envKey: "VITE_MAIN_CRM_URL",
        fallback: urls.mainCrm,
        initials: "R2B",
        tone: "teal",
      },
    ],
  },
  {
    title: "Files",
    description: "Document areas inside Work Documents Hub.",
    cards: [
      {
        title: "Work Documents Hub",
        description: "Open the full document storage workspace.",
        envKey: "VITE_WORK_DOCUMENTS_HUB_URL",
        fallback: urls.workDocumentsHub,
        initials: "DOC",
        tone: "green",
      },
      {
        title: "Rent2Buy Customer Files",
        description: "Rent2Buy customer proof folders and uploads.",
        envKey: "VITE_WORK_DOCUMENTS_HUB_URL",
        fallback: joinUrl(urls.workDocumentsHub, "#rent2buy-customers"),
        initials: "R2B",
        tone: "green",
      },
      {
        title: "Finance Customer Files",
        description: "Finance customer proof folders and uploads.",
        envKey: "VITE_WORK_DOCUMENTS_HUB_URL",
        fallback: joinUrl(urls.workDocumentsHub, "#finance-customers"),
        initials: "FIN",
        tone: "blue",
      },
      {
        title: "Rent2Buy Documents",
        description: "Reusable Rent2Buy forms and general documents.",
        envKey: "VITE_WORK_DOCUMENTS_HUB_URL",
        fallback: joinUrl(urls.workDocumentsHub, "#rent2buy-documents"),
        initials: "R2D",
        tone: "gold",
      },
      {
        title: "Finance Documents",
        description: "Reusable Finance forms and general documents.",
        envKey: "VITE_WORK_DOCUMENTS_HUB_URL",
        fallback: joinUrl(urls.workDocumentsHub, "#finance-documents"),
        initials: "FIND",
        tone: "blue",
      },
      {
        title: "Rent2Buy Email Templates",
        description: "Rent2Buy Outlook .eml template files.",
        envKey: "VITE_WORK_DOCUMENTS_HUB_URL",
        fallback: joinUrl(urls.workDocumentsHub, "#rent2buy-email-templates"),
        initials: "R2E",
        tone: "teal",
      },
      {
        title: "Finance Email Templates",
        description: "Finance Outlook .eml template files.",
        envKey: "VITE_WORK_DOCUMENTS_HUB_URL",
        fallback: joinUrl(urls.workDocumentsHub, "#finance-email-templates"),
        initials: "FEML",
        tone: "gold",
      },
      {
        title: "Miscellaneous Files",
        description: "One-off reference files and admin folders.",
        envKey: "VITE_WORK_DOCUMENTS_HUB_URL",
        fallback: joinUrl(urls.workDocumentsHub, "#misc-files"),
        initials: "MISC",
        tone: "rose",
      },
    ],
  },
];

function cardTemplate(card: Shortcut) {
  const url = card.fallback?.trim() ?? "";
  const disabled = !url;
  const status = disabled ? "Coming soon" : "Open";
  const tag = card.envKey.replace("VITE_", "").replaceAll("_", " ");

  if (disabled) {
    return `
      <article class="shortcut-card disabled" aria-disabled="true">
        <div class="card-head">
          <span class="app-mark ${card.tone}">${card.initials}</span>
          <span class="status-pill">${status}</span>
        </div>
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <span class="env-label">${tag}</span>
      </article>
    `;
  }

  return `
    <a class="shortcut-card" href="${url}">
      <div class="card-head">
        <span class="app-mark ${card.tone}">${card.initials}</span>
        <span class="status-pill">${status}</span>
      </div>
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <span class="env-label">${tag}</span>
    </a>
  `;
}

function sectionTemplate(section: ShortcutSection) {
  return `
    <section class="suite-section">
      <div class="section-heading">
        <div>
          <span>Control Centre</span>
          <h2>${section.title}</h2>
        </div>
        <p>${section.description}</p>
      </div>
      <div class="shortcut-grid">
        ${section.cards.map(cardTemplate).join("")}
      </div>
    </section>
  `;
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main class="control-shell">
    <header class="hero">
      <nav class="topbar" aria-label="Suite status">
        <div class="brand">
          <span class="brand-mark">CC</span>
          <div>
            <strong>Control Centre</strong>
            <small>Business suite homepage</small>
          </div>
        </div>
        <a class="home-link" href="${urls.controlCentre}">Control Centre</a>
      </nav>
      <div class="hero-copy">
        <p>Van Finance Company</p>
        <h1>Business Suite</h1>
        <span>One clean front door for CRM, marketing, documents, files, and posting workflows.</span>
      </div>
    </header>
    <div class="sections">
      ${sections.map(sectionTemplate).join("")}
    </div>
  </main>
`;
