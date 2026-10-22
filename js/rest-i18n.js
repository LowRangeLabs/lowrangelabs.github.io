const REST_I18N = {
  ro: {
    "meta.title": "Rest: Slow down. Do nothing. — LowRange Labs",
    "rest.hero.title": "Rest: Slow down.<br>Do nothing.", "rest.hero.cta": "Întreabă-ne despre Rest", "rest.hero.text": "Un loc liniștit pentru pauze intenționate. Fără sarcini de terminat. Fără scor de urmărit. Doar puțin timp care îți aparține.", "rest.hero.coming": "În curând pe iOS și Android",
    "rest.about.title": "O pauză, cu intenție.", "rest.about.p1": "Aplicația îți oferă un loc în care să te oprești, în mod intenționat. Alege o durată, lasă telefonul deoparte și lasă momentul să fie așa cum este.", "rest.about.p2": "Poți sta, privi pe fereastră, ieși la plimbare sau pur și simplu să fii. Nu trebuie să faci nimic altceva.",
    "rest.sessions.title": "Fă loc pentru o pauză", "rest.duration.label": "Alege o pauză", "rest.session.one.title": "Timpul tău, alegerea ta.", "rest.session.one.text": "Începe cu câteva minute, alege o sesiune personalizată între 1 minut și 5 ore sau lasă cronometrul să meargă fără limită. Poți pune pauză sau te poți opri oricând ai nevoie.", "rest.session.two.title": "Un parcurs fără presiune.", "rest.session.two.text": "Un parcurs opțional te invită să rămâi puțin mai mult, de la câteva minute la pauze mai lungi. Fără serii zilnice, clasamente sau penalizări când alegi să pleci.", "rest.session.three.title": "O evidență doar pentru tine.", "rest.session.three.text": "Vezi sesiunile încheiate și notează cum te simți. Istoricul și reflecțiile tale rămân pe dispozitiv.",
    "rest.details.title": "Creată pentru liniște", "rest.detail.two": "Fără cont sau reclame", "rest.detail.three": "Funcțiile principale merg și fără internet", "rest.detail.four": "Istoricul sesiunilor și reflecțiile rămân pe dispozitiv", "rest.detail.five": "Fără permisiune pentru notificări sau analiză de utilizare", "rest.detail.six": "Versiunile publicate trimit date despre erori pentru a ne ajuta să le remediem",
    "rest.closing.title": "Puțin loc pentru tine.", "rest.closing.text": "Alege un moment. Restul poate să aștepte.", "rest.closing.coming": "În curând pe iOS și Android", "rest.footer.terms": "Termeni și condiții", "rest.footer.privacy": "Politica de confidențialitate", "rest.footer.contact": "Contact"
  },
  en: {
    "meta.title": "Rest: Slow down. Do nothing. — LowRange Labs",
    "rest.hero.title": "Rest: Slow down.<br>Do nothing.", "rest.hero.cta": "Ask about Rest", "rest.hero.text": "A quiet app for intentional pauses. No tasks to finish. No score to chase. Just a little time that belongs to you.", "rest.hero.coming": "Coming soon on iOS and Android",
    "rest.about.title": "A pause, on purpose.", "rest.about.p1": "The app gives you a space to pause on purpose. Pick a duration, put the phone down, and let the moment be what it is.", "rest.about.p2": "Sit, look out the window, take a walk, or simply be. Nothing else is required.",
    "rest.sessions.title": "Make room for a pause", "rest.duration.label": "Choose a pause", "rest.session.one.title": "Your time, your choice.", "rest.session.one.text": "Start with a few minutes, choose a custom session from 1 minute to 5 hours, or leave the timer open-ended. Pause or stop whenever you need to.", "rest.session.two.title": "A journey with no pressure.", "rest.session.two.text": "The optional journey invites you to stay a little longer, from a few minutes into longer pauses. There are no streaks, rankings, or penalties for stepping away.", "rest.session.three.title": "A record just for you.", "rest.session.three.text": "See your completed sessions and reflect on how you feel. Your session history and reflections stay on your device.",
    "rest.details.title": "Made for quiet time", "rest.detail.two": "No account or ads", "rest.detail.three": "Core experience works offline", "rest.detail.four": "Session history and reflections stay on your device", "rest.detail.five": "No notification permission or usage analytics", "rest.detail.six": "Production versions send crash diagnostics to help us fix errors",
    "rest.closing.title": "A little space to be.", "rest.closing.text": "Choose a moment. Let everything else wait.", "rest.closing.coming": "Coming soon on iOS and Android", "rest.footer.terms": "Terms and Conditions", "rest.footer.privacy": "Privacy Policy", "rest.footer.contact": "Contact"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const apply = (lang) => {
    const dict = REST_I18N[lang] || REST_I18N.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = dict[el.dataset.i18n];
      if (value !== undefined) el.innerHTML = value;
    });
    document.documentElement.lang = lang;
    document.title = dict["meta.title"];
    document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.toggle("is-active", btn.dataset.lang === lang));
    localStorage.setItem("lrl-lang", lang);
  };
  const formatDuration = (minutes, lang) => {
    if (lang === "ro") {
      if (minutes < 60) return `${minutes} ${minutes === 1 ? "minut" : "minute"}`;
      const hours = Math.floor(minutes / 60);
      const remainder = minutes % 60;
      return `${hours} ${hours === 1 ? "oră" : "ore"}${remainder ? ` ${remainder} min` : ""}`;
    }
    if (minutes < 60) return `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    return `${hours} ${hours === 1 ? "hour" : "hours"}${remainder ? ` ${remainder} min` : ""}`;
  };
  const slider = document.getElementById("pause-duration");
  const output = document.getElementById("pause-duration-value");
  const updateDuration = () => {
    if (slider && output) output.value = formatDuration(Number(slider.value), document.documentElement.lang);
  };
  if (slider) slider.addEventListener("input", updateDuration);
  apply(localStorage.getItem("lrl-lang") === "ro" ? "ro" : "en");
  updateDuration();
  const motionItems = document.querySelectorAll("[data-motion]");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.body.classList.add("rest-motion-ready");
    const motionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    motionItems.forEach((item, index) => {
      item.style.setProperty("--motion-order", index % 3);
      motionObserver.observe(item);
    });
  }
  document.querySelectorAll(".lang-btn").forEach((btn) => btn.addEventListener("click", () => { apply(btn.dataset.lang); updateDuration(); }));
});
