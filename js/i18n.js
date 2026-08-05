const LRL_I18N = {
  ro: {
    "meta.title": "LowRange Labs — Sisteme software solide, aplicații și jocuri",
    "nav.home": "Acasă",
    "nav.about": "Despre Noi",
    "nav.portfolio": "Portofoliu",
    "nav.services": "Servicii",
    "nav.contact": "Contact",

    "hero.title": "Sisteme software solide.<br>Aplicații și jocuri construite<br>fără compromisuri.",
    "hero.subtitle": "La LowRange Labs, combinăm ingineria software riguroasă, dezvoltarea de jocuri 2D și integrările AI moderne pentru a crea produse proprii de top și soluții tehnice custom pentru afaceri.",
    "hero.cta_primary": "Explorează Proiectele",
    "hero.cta_secondary": "Consultanță &amp; Servicii B2B",

    "about.eyebrow": "Despre Noi",
    "about.title": "Tracțiune Maximă în Software",
    "about.p1": "Numele nostru vine din lumea off-road &amp; overlanding: reductorul (Low Range) este cel care oferă cuplul și puterea maximă pentru a depăși cele mai grele terenuri.",
    "about.p2": "Aplicăm aceeași filosofie în ingineria software: scriem cod curat, construim arhitecturi stabile și livrăm soluții tehnice capabile să gestioneze provocări complexe — de la aplicații de navigație în natură și jocuri pe matrice, până la automatizări enterprise și integrări AI.",

    "portfolio.eyebrow": "Portofoliu",
    "portfolio.title": "Produse Proprii",

    "outroads.desc": "Aplicație mobilă dedicată explorării responsabile și comunității overlanding/outdoor. Oferă hărți cu ariile protejate din Europa (Natura 2000), restricții legale actualizate și orientare eficientă în teren.",
    "outroads.status": "În Dezvoltare",

    "snakshund.desc": "Un joc puzzle interactiv bazat pe o mecanică clasică de grid, reinterpretată într-un stil vizual unic și un gameplay bazat pe fizică și logică.",
    "snakshund.status": "În Curând pe iOS &amp; Android",

    "blockpuzzle.name": "Block Puzzle Project",
    "blockpuzzle.desc": "Un titlu casual axat pe performanță, interfață fluidă și o experiență de joc captivantă fără timpi de așteptare.",
    "blockpuzzle.status": "În Dezvoltare",
    "blockpuzzle.tag1": "Casual",
    "blockpuzzle.tag2": "Logică",

    "services.title": "Consultanță &amp; Servicii Tehnice",
    "services.subtitle": "Ajutăm companiile să automatizeze procese și să construiască produse digitale rapide.",

    "service1.title": "Dezvoltare Web &amp; Mobile Custom",
    "service1.desc": "Aplicații de înaltă performanță, optimizate pentru viteză, scalabilitate și securitate.",
    "service2.title": "Integrări AI &amp; Automatizări",
    "service2.desc": "Arhitecturi moderne pentru eficientizarea fluxurilor de lucru interne folosind LLM-uri și modele generative.",
    "service3.title": "QA Automation &amp; Arhitectură Software",
    "service3.desc": "Audit tehnic, teste automate pentru aplicații mobile/web și optimizarea performanței.",

    "contact.eyebrow": "Contact",
    "contact.title": "Ai un proiect în minte sau vrei să colaborăm?",
    "contact.text": "Trimite-ne un mesaj la <a href=\"mailto:contact@lowrangelabs.com\">contact@lowrangelabs.com</a> și hai să discutăm.",

    "footer.tagline": "Sisteme software solide. Construite fără compromisuri.",
    "footer.copyright": "© 2026 LowRange Labs. All rights reserved."
  },

  en: {
    "meta.title": "LowRange Labs — Rugged Software, Apps &amp; Games",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.services": "Services",
    "nav.contact": "Contact",

    "hero.title": "Engineering rugged software.<br>Apps and games built<br>without compromise.",
    "hero.subtitle": "At LowRange Labs, we combine rigorous software engineering, 2D game development, and modern AI integrations to build top-tier products of our own and custom technical solutions for businesses.",
    "hero.cta_primary": "Explore Our Projects",
    "hero.cta_secondary": "Consulting &amp; B2B Services",

    "about.eyebrow": "About Us",
    "about.title": "Maximum Traction in Software",
    "about.p1": "Our name comes from the off-road &amp; overlanding world: the transfer case's Low Range is what delivers maximum torque and power to get through the toughest terrain.",
    "about.p2": "We apply the same philosophy to software engineering: we write clean code, build stable architectures, and deliver technical solutions capable of handling complex challenges — from outdoor navigation apps and grid-based games to enterprise automation and AI integrations.",

    "portfolio.eyebrow": "Portfolio",
    "portfolio.title": "Our Products",

    "outroads.desc": "A mobile app dedicated to responsible exploration and the overlanding/outdoor community. It provides maps of protected areas across Europe (Natura 2000), up-to-date legal restrictions, and efficient wayfinding in the field.",
    "outroads.status": "In Development",

    "snakshund.desc": "An interactive puzzle game built on a classic grid mechanic, reinterpreted with a unique visual style and physics-and-logic-driven gameplay.",
    "snakshund.status": "Coming Soon on iOS &amp; Android",

    "blockpuzzle.name": "Block Puzzle Project",
    "blockpuzzle.desc": "A casual title focused on performance, a fluid interface, and an engaging play experience with no waiting around.",
    "blockpuzzle.status": "In Development",
    "blockpuzzle.tag1": "Casual",
    "blockpuzzle.tag2": "Logic",

    "services.title": "Consulting &amp; Technical Services",
    "services.subtitle": "We help companies automate processes and build digital products fast.",

    "service1.title": "Custom Web &amp; Mobile Development",
    "service1.desc": "High-performance applications, optimized for speed, scalability, and security.",
    "service2.title": "AI Integrations &amp; Automation",
    "service2.desc": "Modern architectures that streamline internal workflows using LLMs and generative models.",
    "service3.title": "QA Automation &amp; Software Architecture",
    "service3.desc": "Technical audits, automated testing for mobile/web apps, and performance optimization.",

    "contact.eyebrow": "Contact",
    "contact.title": "Got a project in mind, or want to collaborate?",
    "contact.text": "Send us a message at <a href=\"mailto:contact@lowrangelabs.com\">contact@lowrangelabs.com</a> and let's talk.",

    "footer.tagline": "Solid software systems. Built without compromise.",
    "footer.copyright": "© 2026 LowRange Labs. All rights reserved."
  }
};

const LRL_LANG_KEY = "lrl-lang";

function lrlGetLang() {
  const saved = localStorage.getItem(LRL_LANG_KEY);
  if (saved === "ro" || saved === "en") return saved;
  return navigator.language && navigator.language.toLowerCase().startsWith("ro") ? "ro" : "ro";
}

function lrlApplyLang(lang) {
  const dict = LRL_I18N[lang] || LRL_I18N.ro;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  if (dict["meta.title"]) document.title = dict["meta.title"];
  document.documentElement.lang = lang;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem(LRL_LANG_KEY, lang);
}

document.addEventListener("DOMContentLoaded", () => {
  lrlApplyLang(lrlGetLang());

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => lrlApplyLang(btn.getAttribute("data-lang")));
  });
});
