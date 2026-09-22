Object.assign(LRL_I18N.ro, {
  "outroads.meta.title": "Outroads — Explore beyond the road",
  "outroads.nav.home": "LowRange Labs", "outroads.nav.features": "Funcții", "outroads.nav.about": "Despre aplicație",
  "outroads.eyebrow": "O aplicație LowRange Labs", "outroads.hero.text": "Outroads te ajută să explorezi mai departe, cu hărți detaliate, trasee GPX, înregistrarea ieșirilor și informații utile pe hartă — toate într-un singur loc.", "outroads.availability": "Disponibilă pe Android · iOS în curând", "outroads.availability.android": "Android", "outroads.availability.ios": "iOS în curând",
  "outroads.android.aria": "Descarcă Outroads pentru Android", "outroads.ios.aria": "Outroads pentru iOS, disponibilă în curând", "outroads.ios.soon": "În curând",
  "outroads.intro.eyebrow": "Despre aplicație", "outroads.intro.title": "Explorează dincolo de drumurile obișnuite.", "outroads.intro.text": "Outroads este o aplicație simplă de hărți pentru explorarea dincolo de drumurile obișnuite.<br><br>Folosește hărți detaliate, importă trasee GPX, înregistrează-ți ieșirile și accesează informații utile pe hartă, fie că explorezi cu mașina, bicicleta sau pe jos.<br><br>Fie că mergi la munte, urmezi drumuri forestiere sau planifici un weekend în natură, Outroads păstrează instrumentele de care ai nevoie într-un singur loc.<br><br>Outroads este concepută să rămână simplă: harta rămâne în centru, iar instrumentele de care ai nevoie sunt mereu aproape. Explorează responsabil și verifică regulile locale înainte de a intra în zone cu acces restricționat.",
  "outroads.features.eyebrow": "Ce poți face", "outroads.features.title": "Pregătit pentru traseu.",
  "outroads.styles.title": "Stiluri de hartă", "outroads.styles.text": "Alege harta potrivită: outdoor, topografică, satelit și altele.",
  "outroads.gpx.title": "Import GPX", "outroads.gpx.text": "Importă fișiere GPX și afișează traseele direct pe hartă.",
  "outroads.recording.title": "Înregistrare traseu", "outroads.recording.text": "Înregistrează pe unde ai trecut în timp ce explorezi.",
  "outroads.layers.title": "Informații utile", "outroads.layers.text": "Vezi arii protejate, campinguri, râuri și alte repere.",
  "outroads.offline.title": "Hărți offline", "outroads.offline.text": "Descarcă hărți înainte de plecare, când semnalul e limitat.",
  "outroads.orientation.title": "Poziție și orientare", "outroads.orientation.text": "Înțelege unde ești și în ce direcție mergi.",
  "outroads.feature.offline.title": "Hărți offline", "outroads.feature.offline.text": "Selectează zona care te interesează și păstrează harta disponibilă și atunci când nu ai semnal.",
  "outroads.feature.gpx.title": "Import GPX", "outroads.feature.gpx.text": "Importă un fișier GPX pentru a vedea traseul direct pe hartă și pentru a-l avea la îndemână în explorare.",
  "outroads.feature.layers.title": "Informații utile pe hartă", "outroads.feature.layers.text": "Adaugă context hărții prin informații despre trasee, camping, apă, vârfuri și alte repere utile.",
  "outroads.feature.protected.title": "Arii protejate", "outroads.feature.protected.text": "Vizualizează ariile protejate pentru o planificare mai atentă a ieșirilor în natură.",
  "outroads.closing.title": "Explorează mai departe.", "outroads.closing.text": "Disponibilă acum pe Android. iOS urmează în curând.", "outroads.closing.cta": "Înapoi la proiectele LowRange Labs"
});
Object.assign(LRL_I18N.en, {
  "outroads.meta.title": "Outroads — Explore beyond the road",
  "outroads.nav.home": "LowRange Labs", "outroads.nav.features": "Features", "outroads.nav.about": "About the app",
  "outroads.eyebrow": "A LowRange Labs app", "outroads.hero.text": "Outroads helps you explore farther with detailed maps, GPX routes, trip recording and useful map layers — all in one place.", "outroads.availability": "Available on Android · iOS coming soon", "outroads.availability.android": "Android", "outroads.availability.ios": "iOS coming soon",
  "outroads.android.aria": "Download Outroads for Android", "outroads.ios.aria": "Outroads for iOS, coming soon", "outroads.ios.soon": "Coming soon",
  "outroads.intro.eyebrow": "About the app", "outroads.intro.title": "Explore beyond the usual roads.", "outroads.intro.text": "Outroads is a simple outdoor mapping app built for exploring beyond the usual roads.<br><br>Use detailed maps, import GPX routes, record your trips and access useful map information while exploring by car, bike or on foot.<br><br>Whether you're heading into the mountains, following forest roads or planning a weekend outdoors, Outroads keeps the tools you need in one place.<br><br>Outroads is designed to stay simple: the map remains at the center, while the tools you need are always close by. Explore responsibly and check local access rules before entering restricted areas.",
  "outroads.features.eyebrow": "What you can do", "outroads.features.title": "Built for the trail.",
  "outroads.styles.title": "Map styles", "outroads.styles.text": "Choose the right view: outdoor, topographic, satellite and more.",
  "outroads.gpx.title": "Import GPX", "outroads.gpx.text": "Import GPX files and display routes directly on the map.",
  "outroads.recording.title": "Route recording", "outroads.recording.text": "Record where you have been while exploring.",
  "outroads.layers.title": "Useful map information", "outroads.layers.text": "See protected areas, campsites, rivers and other landmarks.",
  "outroads.offline.title": "Offline maps", "outroads.offline.text": "Download maps before your trip when coverage is limited.",
  "outroads.orientation.title": "Location and orientation", "outroads.orientation.text": "Understand where you are and which way you are heading.",
  "outroads.feature.offline.title": "Offline maps", "outroads.feature.offline.text": "Select an area and keep its map available when you have no signal.",
  "outroads.feature.gpx.title": "Import GPX", "outroads.feature.gpx.text": "Import a GPX file to see its route directly on the map while exploring.",
  "outroads.feature.layers.title": "Useful map information", "outroads.feature.layers.text": "Add context with information about trails, campsites, water, peaks and other landmarks.",
  "outroads.feature.protected.title": "Protected areas", "outroads.feature.protected.text": "View protected areas to plan your time outdoors more thoughtfully.",
  "outroads.closing.title": "Explore farther.", "outroads.closing.text": "Available now on Android. iOS is coming soon.", "outroads.closing.cta": "Back to LowRange Labs projects"
});

document.addEventListener("DOMContentLoaded", () => {
  const applyOutroadsTitle = (lang) => { document.title = LRL_I18N[lang]["outroads.meta.title"]; };
  applyOutroadsTitle(lrlGetLang());
  document.querySelectorAll(".lang-btn").forEach((btn) => btn.addEventListener("click", () => applyOutroadsTitle(btn.getAttribute("data-lang"))));
});
