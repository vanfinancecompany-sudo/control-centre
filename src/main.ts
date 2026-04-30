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
  imageSuite: env.VITE_IMAGE_SUITE_URL || "",
  controlCentre:
    env.VITE_CONTROL_CENTRE_URL || "https://control-centre-navy.vercel.app",
};

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
    description: "Shortcuts into the Marketing CRM toolset.",
    cards: [
      {
        title: "Stock",
        description: "Vehicle stock views and marketing stock actions.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: urls.marketingCrm,
        initials: "STK",
        tone: "blue",
      },
      {
        title: "Reel Factory",
        description: "Create and manage short-form video assets.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: urls.marketingCrm,
        initials: "REEL",
        tone: "rose",
      },
      {
        title: "Creative Library",
        description: "Reusable creative, captions, and campaign assets.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: urls.marketingCrm,
        initials: "LIB",
        tone: "teal",
      },
    ],
  },
  {
    title: "Posting",
    description: "Publishing workflows for each sales channel.",
    cards: [
      {
        title: "Van Finance Posting",
        description: "Publishing flow for Van Finance posts.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: urls.marketingCrm,
        initials: "VF",
        tone: "green",
      },
      {
        title: "Rent2Buy Posting",
        description: "Publishing flow for Rent2Buy posts.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: urls.marketingCrm,
        initials: "R2B",
        tone: "gold",
      },
      {
        title: "Marketplace Posting",
        description: "Marketplace publishing and listing workflow.",
        envKey: "VITE_MARKETING_CRM_URL",
        fallback: urls.marketingCrm,
        initials: "MP",
        tone: "rose",
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
        title: "Customer Files",
        description: "Rent2Buy and Finance customer proof folders.",
        envKey: "VITE_WORK_DOCUMENTS_HUB_URL",
        fallback: urls.workDocumentsHub,
        initials: "CUST",
        tone: "green",
      },
      {
        title: "General Documents",
        description: "Reusable files, forms, and general documents.",
        envKey: "VITE_WORK_DOCUMENTS_HUB_URL",
        fallback: urls.workDocumentsHub,
        initials: "GEN",
        tone: "blue",
      },
      {
        title: "Email Templates",
        description: "Outlook .eml templates and saved mail files.",
        envKey: "VITE_WORK_DOCUMENTS_HUB_URL",
        fallback: urls.workDocumentsHub,
        initials: "EML",
        tone: "gold",
      },
      {
        title: "Miscellaneous Files",
        description: "One-off reference files and admin folders.",
        envKey: "VITE_WORK_DOCUMENTS_HUB_URL",
        fallback: urls.workDocumentsHub,
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
