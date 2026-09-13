Object.assign(LRL_I18N.ro, {
  "outroads.meta.title": "Outroads — Explore beyond the road",
  "outroads.nav.home": "LowRange Labs", "outroads.nav.features": "Funcții", "outroads.nav.about": "Despre aplicație",
  "outroads.eyebrow": "O aplicație LowRange Labs", "outroads.hero.text": "Hărți gândite pentru momentele în care drumul se termină și începe explorarea. Planifică, urmărește și păstrează aproape informațiile de care ai nevoie pe traseu.", "outroads.availability": "Disponibilă pe Android · iOS în curând",
  "outroads.android.aria": "Descarcă Outroads pentru Android", "outroads.ios.aria": "Outroads pentru iOS, disponibilă în curând", "outroads.ios.soon": "În curând",
  "outroads.intro.eyebrow": "Pentru ieșiri în natură", "outroads.intro.title": "Înaintezi mai sigur când vezi imaginea de ansamblu.", "outroads.intro.text": "Harta, traseele și straturile utile se întâlnesc într-un singur loc. Outroads îți oferă contextul de care ai nevoie înainte să pornești — de la traseul ales până la reperele care contează pe teren.",
  "outroads.features.eyebrow": "Ce poți face", "outroads.features.title": "Pregătit pentru traseu.",
  "outroads.offline.title": "Hărți offline", "outroads.offline.text": "Selectează zona care te interesează și păstrează harta disponibilă și atunci când nu ai semnal.",
  "outroads.gpx.title": "Import GPX", "outroads.gpx.text": "Importă un fișier GPX pentru a vedea traseul direct pe hartă și pentru a-l avea la îndemână în explorare.",
  "outroads.layers.title": "Straturi utile de hartă", "outroads.layers.text": "Adaugă context hărții prin straturi pentru trasee, camping, apă, vârfuri și alte repere utile.",
  "outroads.protected.title": "Arii protejate", "outroads.protected.text": "Vizualizează straturi dedicate ariilor protejate pentru o planificare mai atentă a ieșirilor în natură.",
  "outroads.closing.title": "Explorează mai departe.", "outroads.closing.text": "Disponibilă acum pe Android. iOS urmează în curând.", "outroads.closing.cta": "Înapoi la proiectele LowRange Labs"
});
Object.assign(LRL_I18N.en, {
  "outroads.meta.title": "Outroads — Explore beyond the road",
  "outroads.nav.home": "LowRange Labs", "outroads.nav.features": "Features", "outroads.nav.about": "About the app",
  "outroads.eyebrow": "A LowRange Labs app", "outroads.hero.text": "Maps for the moments when the road ends and exploration begins. Plan, follow and keep the information you need close at hand on the trail.", "outroads.availability": "Available on Android · iOS coming soon",
  "outroads.android.aria": "Download Outroads for Android", "outroads.ios.aria": "Outroads for iOS, coming soon", "outroads.ios.soon": "Coming soon",
  "outroads.intro.eyebrow": "For time outdoors", "outroads.intro.title": "Go farther when you see the bigger picture.", "outroads.intro.text": "Maps, routes and useful layers come together in one place. Outroads gives you the context you need before setting out — from your chosen route to the landmarks that matter on the trail.",
  "outroads.features.eyebrow": "What you can do", "outroads.features.title": "Built for the trail.",
  "outroads.offline.title": "Offline maps", "outroads.offline.text": "Select the area you need and keep the map available even when there is no signal.",
  "outroads.gpx.title": "Import GPX", "outroads.gpx.text": "Import a GPX file to see a route directly on the map and keep it close at hand while exploring.",
  "outroads.layers.title": "Useful map layers", "outroads.layers.text": "Add context with layers for routes, camping, water, peaks and other useful landmarks.",
  "outroads.protected.title": "Protected areas", "outroads.protected.text": "View dedicated protected-area layers to plan more thoughtfully for time outdoors.",
  "outroads.closing.title": "Explore farther.", "outroads.closing.text": "Available now on Android. iOS is coming soon.", "outroads.closing.cta": "Back to LowRange Labs projects"
});

document.addEventListener("DOMContentLoaded", () => {
  const applyOutroadsTitle = (lang) => { document.title = LRL_I18N[lang]["outroads.meta.title"]; };
  applyOutroadsTitle(lrlGetLang());
  document.querySelectorAll(".lang-btn").forEach((btn) => btn.addEventListener("click", () => applyOutroadsTitle(btn.getAttribute("data-lang"))));
});
