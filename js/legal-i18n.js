(() => {
  const body = document.getElementById("legal-body");
  if (!body) return;

  const english = body.innerHTML;
  const page = body.dataset.legalPage;

  const ro = {
    terms: `
      <a href="index.html" class="back-link">← Înapoi la LowRange Labs</a>
      <p class="eyebrow">Legal · Outroads</p>
      <h1>Termeni și condiții</h1>
      <p class="legal-meta">Ultima actualizare: 18 septembrie 2026 · Acest document este disponibil în limba română și în limba engleză.</p>

      <p>Prezentul document („Termenii”) reglementează accesul și utilizarea aplicației mobile Outroads („Aplicația”) și a oricărui website asociat (împreună, „Serviciul”), operat de LowRange Labs („noi”, „nouă”, „al nostru”). LowRange Labs poate fi contactat la <a href="mailto:lowrangelabs@gmail.com">lowrangelabs@gmail.com</a>.</p>
      <p>Prin descărcarea, instalarea sau utilizarea Aplicației, accepți să respecți acești Termeni. Dacă nu ești de acord, nu utiliza Serviciul.</p>

      <h2>1. Despre Serviciu</h2>
      <p>Outroads este o aplicație de navigație pentru activități în aer liber și drumeții, disponibilă pentru iOS și Android, care oferă date cartografice, stiluri de hartă, hărți tematice pentru arii protejate și acoperirea terenului, informații despre trasee și locuri de campare, descărcarea hărților pentru utilizare offline și posibilitatea de a importa și vizualiza propriile trasee GPX. Outroads este un instrument de orientare și nu înlocuiește judecata, pregătirea și experiența ta atunci când călătorești în natură.</p>

      <h2>2. Eligibilitate</h2>
      <p>Trebuie să ai cel puțin 16 ani sau vârsta consimțământului digital din țara ta, dacă aceasta este mai mare, pentru a utiliza Serviciul. Dacă utilizezi Serviciul în numele unui minor, ești responsabil pentru respectarea acestor Termeni de către acesta.</p>

      <h2>3. Licența de utilizare a Aplicației</h2>
      <p>Sub rezerva respectării acestor Termeni, îți acordăm o licență limitată, personală, neexclusivă, netransmisibilă și revocabilă pentru a descărca și utiliza Aplicația pe dispozitivele pe care le deții sau le controlezi, în scop personal și necomercial.</p>
      <p>Aplicația este un software proprietar, protejat prin drepturi de autor. Cu excepția licenței de mai sus, nu îți sunt acordate drepturi asupra codului sursă, designului sau tehnologiei de bază. Nu poți copia, modifica, decompila, face inginerie inversă, distribui, sublicenția sau crea opere derivate din Aplicație, integral sau parțial, fără acordul nostru scris prealabil.</p>

      <h2>4. Utilizare acceptabilă</h2>
      <p>Accepți să nu:</p>
      <ul>
        <li>utilizezi Serviciul în scopuri ilegale sau cu încălcarea oricărei legi ori reglementări aplicabile, inclusiv prin pătrunderea pe proprietăți private sau în zone cu acces restricționat ori interzis;</li>
        <li>interferezi cu Serviciul, să îl perturbi sau să încerci să obții acces neautorizat la acesta, la serverele sale ori la rețelele conectate;</li>
        <li>utilizezi mijloace automatizate (boți, instrumente de scraping sau crawlere) pentru a accesa ori extrage date din Serviciu fără acordul nostru scris prealabil;</li>
        <li>denaturezi informațiile despre hărți, trasee sau siguranță din Serviciu ori să încarci conținut ilegal, dăunător sau care încalcă drepturile altora;</li>
        <li>eludezi restricțiile privind hărțile offline, licențierea sau accesul, implementate în Aplicație.</li>
      </ul>
      <p>Putem suspenda sau înceta accesul tău la Serviciu dacă avem motive rezonabile să credem că ai încălcat acești Termeni.</p>

      <h2>5. Date cartografice și date de la terți</h2>
      <p>Aplicația afișează hărți tematice și seturi de date furnizate de terți. Aceste seturi de date sunt furnizate de sursele respective „ca atare”, iar fiecare este supus propriilor condiții de licențiere și atribuire, afișate în Aplicație atunci când este necesar.</p>
      <p>Nu creăm, verificăm și nu garantăm exactitatea, integralitatea sau actualitatea datelor cartografice furnizate de terți. Starea traseelor, limitele ariilor protejate, informațiile despre locurile de campare și datele similare pot fi depășite, incomplete sau inexacte și pot să nu reflecte condițiile reale, închiderile sezoniere, limitele proprietăților private sau restricțiile locale.</p>

      <h2>6. Importuri GPX și conținutul utilizatorului</h2>
      <p>Aplicația îți permite să imporți propriile fișiere cu trasee GPX pentru a le afișa pe hartă. Orice fișiere imporți rămân responsabilitatea ta. Declari că ai dreptul de a utiliza și importa fișierele încărcate și că acest lucru nu încalcă drepturile unei terțe părți. Traseele importate sunt procesate și stocate local pe dispozitivul tău, iar noi nu le verificăm conținutul, exactitatea sau siguranța.</p>

      <h2>7. Hărți offline</h2>
      <p>Aplicația îți permite să descarci date și hărți tematice pentru utilizare offline. Hărțile offline sunt oferite pentru comoditate și, la fel ca toate datele cartografice din Serviciu, pot deveni depășite și sunt supuse limitărilor de exactitate descrise în Secțiunea 5. Ești responsabil să menții descărcările offline actualizate și să verifici informațiile importante prin surse oficiale înainte de a te baza pe ele pe teren.</p>

      <h2>8. Conturi</h2>
      <p>În prezent, Serviciul nu necesită un cont de utilizator. Dacă vom introduce conturi în viitor, termenii suplimentari privind înregistrarea, datele de autentificare și securitatea contului îți vor fi prezentați la acel moment.</p>

      <h2>9. Funcții plătite în viitor</h2>
      <p>În prezent, Serviciul este oferit gratuit. În viitor, putem introduce funcții plătite, abonamente sau achiziții în aplicație (de exemplu, hărți tematice premium ori spațiu offline extins). Dacă vom face acest lucru, prețurile, condițiile de facturare, reînnoire și anulare și politica de rambursare aplicabile vor fi comunicate înainte de achiziție și, după caz, procesate prin Apple App Store sau Google Play, conform condițiilor acestora. Acești Termeni vor fi actualizați înainte de introducerea oricăror funcții plătite.</p>

      <h2>10. Activități în aer liber — asumarea riscurilor</h2>
      <p><strong>Activitățile în aer liber și cele montane implică riscuri inerente, inclusiv, fără limitare, pericole ale terenului, vreme nefavorabilă, animale sălbatice, distanța față de ajutor, erori de orientare și vătămări corporale sau deces.</strong> Prin utilizarea Serviciului pentru planificarea sau sprijinirea activităților în aer liber, recunoști și accepți că:</p>
      <ul>
        <li>ești singurul responsabil pentru evaluarea condiției fizice, abilităților, echipamentului și pregătirii tale;</li>
        <li>nu te vei baza exclusiv pe Aplicație pentru decizii de orientare, siguranță sau planificare și vei avea asupra ta mijloace alternative de orientare, provizii și echipament de siguranță adecvat;</li>
        <li>îți asumi întreaga responsabilitate pentru siguranța ta și a oricărei persoane aflate în grija ta și pentru respectarea legilor locale, a permiselor și a regulilor ariilor protejate;</li>
        <li>LowRange Labs nu organizează, supraveghează și nu recomandă oficial nicio activitate pe care o desfășori folosind informații din Serviciu.</li>
      </ul>
      <p>În măsura maximă permisă de lege, LowRange Labs nu răspunde pentru vătămări, decese, pierderi sau prejudicii rezultate din ori legate de utilizarea Serviciului în contextul activităților în aer liber, inclusiv atunci când acestea sunt cauzate, integral sau parțial, de date cartografice sau despre trasee inexacte, incomplete ori depășite.</p>

      <h2>11. Excluderea garanțiilor</h2>
      <p>SERVICIUL ESTE FURNIZAT „CA ATARE” ȘI „AȘA CUM ESTE DISPONIBIL”, FĂRĂ GARANȚII DE NICIUN FEL, EXPRESE SAU IMPLICITE, INCLUSIV, FĂRĂ LIMITARE, GARANȚII DE VANDABILITATE, POTRIVIRE PENTRU UN ANUMIT SCOP, EXACTITATE SAU NEÎNCĂLCARE A DREPTURILOR. NU GARANTĂM CĂ SERVICIUL VA FI NEÎNTRERUPT, FĂRĂ ERORI SAU SIGUR ORI CĂ DATELE DESPRE HĂRȚI, TRASEE SAU LOCAȚIE VOR FI EXACTE SAU ACTUALE.</p>

      <h2>12. Limitarea răspunderii</h2>
      <p>ÎN MĂSURA MAXIMĂ PERMISĂ DE LEGEA APLICABILĂ, LOWRANGE LABS ȘI FUNCȚIONARII, ANGAJAȚII ȘI CONTRACTORII SĂI NU VOR FI RĂSPUNZĂTORI PENTRU NICIUN PREJUDICIU INDIRECT, INCIDENTAL, SPECIAL, SUBSECVENT SAU PUNITIV ȘI NICI PENTRU PIERDERI DE DATE, PROFITURI SAU VENITURI REZULTATE DIN SAU LEGATE DE UTILIZAREA SAU IMPOSIBILITATEA DE A UTILIZA SERVICIUL, CHIAR DACĂ AM FOST INFORMAȚI CU PRIVIRE LA POSIBILITATEA UNOR ASTFEL DE PREJUDICII.</p>
      <p>NIMIC DIN ACEȘTI TERMENI NU EXCLUDE SAU LIMITEAZĂ RĂSPUNDEREA CARE NU POATE FI EXCLUSĂ SAU LIMITATĂ POTRIVIT LEGII APLICABILE, INCLUSIV RĂSPUNDEREA PENTRU DECES SAU VĂTĂMARE CORPORALĂ CAUZATĂ DE NEGLIJENȚA GRAVĂ SAU CONDUITA VĂDIT ILICITĂ A NOASTRĂ ORI RĂSPUNDEREA CARE NU POATE FI LIMITATĂ POTRIVIT LEGISLAȚIEI ROMÂNE PRIVIND PROTECȚIA CONSUMATORILOR.</p>
      <p>Atunci când răspunderea nu poate fi exclusă, răspunderea noastră totală pentru Serviciu nu va depăși suma plătită de tine, dacă există, pentru Serviciu în cele douăsprezece (12) luni anterioare reclamației, în măsura maximă permisă de legea aplicabilă.</p>

      <h2>13. Proprietate intelectuală</h2>
      <p>Aplicația, inclusiv software-ul, designul, elementele de branding și conținutul original (cu excepția datelor cartografice furnizate de terți și a conținutului importat de tine), este proprietatea LowRange Labs și este protejată de legislația privind drepturile de autor și alte drepturi de proprietate intelectuală. Acești Termeni reglementează și utilizarea software-ului de bază. Toate drepturile care nu îți sunt acordate în mod expres sunt rezervate.</p>

      <h2>14. Confidențialitate</h2>
      <p>Modul în care gestionăm datele cu caracter personal este descris în <a href="privacy.html">Politica de confidențialitate</a>. Te rugăm să consulți această politică înainte de a utiliza Serviciul.</p>

      <h2>15. Modificarea Serviciului sau a Termenilor</h2>
      <p>Putem modifica, suspenda sau întrerupe Serviciul sau orice parte a acestuia în orice moment, fără răspundere față de tine. Putem actualiza acești Termeni periodic. Dacă facem modificări importante, vom oferi o notificare rezonabilă. Continuarea utilizării Serviciului după intrarea în vigoare a modificărilor constituie acceptarea Termenilor revizuiți.</p>

      <h2>16. Încetare</h2>
      <p>Putem suspenda sau înceta accesul tău la Serviciu în orice moment, cu sau fără motiv ori notificare, inclusiv pentru încălcarea acestor Termeni. Poți înceta utilizarea Serviciului în orice moment prin dezinstalarea Aplicației.</p>

      <h2>17. Legea aplicabilă și litigii</h2>
      <p>Acești Termeni sunt guvernați de legile României, fără a ține cont de principiile privind conflictul de legi. Orice litigiu rezultat din sau legat de acești Termeni ori de Serviciu va fi supus jurisdicției exclusive a instanțelor competente din România, cu excepția cazului în care normele obligatorii de protecție a consumatorilor din țara ta de reședință îți permit să inițiezi proceduri în altă parte.</p>

      <h2>18. Diverse</h2>
      <p>Dacă o prevedere a acestor Termeni este considerată neexecutorie, celelalte prevederi vor rămâne pe deplin în vigoare. Neaplicarea unei prevederi de către noi nu reprezintă o renunțare la aceasta. Acești Termeni reprezintă acordul integral dintre tine și LowRange Labs cu privire la Serviciu și înlocuiesc orice acorduri anterioare privind acest subiect.</p>

      <h2>19. Contact</h2>
      <p>Întrebările despre acești Termeni pot fi trimise la <a href="mailto:lowrangelabs@gmail.com">lowrangelabs@gmail.com</a>.</p>
      <p class="tc-notice">Acest document ar trebui revizuit de un avocat înainte de a fi indicat în Aplicația live sau în listările din App Store și Play Store.</p>
    `,
    privacy: `
      <a href="index.html" class="back-link">← Înapoi la LowRange Labs</a>
      <p class="eyebrow">Legal</p>
      <h1>Politica de confidențialitate</h1>
      <p class="legal-meta">Ultima actualizare: 18 septembrie 2026 · Acest document este disponibil în limba română și în limba engleză.</p>
      <p>Această Politică de confidențialitate explică modul în care <strong>LowRange Labs</strong> („noi”, „nouă”, „al nostru”) colectează, utilizează și protejează informațiile atunci când folosești website-urile și aplicațiile noastre, inclusiv <strong>Outroads</strong> și orice alte aplicații sau jocuri publicate de noi (fiecare, o „Aplicație”). Politica se aplică tuturor produselor noastre; detaliile specifice fiecărei aplicații sunt prezentate în secțiunea <a href="#apps">Date colectate pentru fiecare aplicație</a>.</p>
      <p>Dacă nu ești de acord cu această politică, te rugăm să nu utilizezi aplicațiile sau website-ul nostru.</p>
      <h2>1. Informațiile pe care le colectăm</h2>
      <p>Datele colectate depind de aplicația utilizată — consultă secțiunea <a href="#apps">Date colectate pentru fiecare aplicație</a> pentru lista exactă. În general, putem colecta:</p>
      <ul>
        <li><strong>Date de localizare.</strong> Atunci când o aplicație oferă funcții de navigație, cartografiere sau localizare, accesăm locația GPS a dispozitivului pentru a furniza funcționalitatea respectivă.</li>
        <li><strong>Informații despre dispozitiv și date despre erori.</strong> Utilizăm <strong>Firebase Crashlytics</strong> (un serviciu Google) pentru a colecta automat informații despre dispozitiv și jurnale de erori atunci când o aplicație se închide neașteptat. Acest lucru ne ajută să diagnosticăm și să remediem problemele.</li>
        <li><strong>Informații de utilizare de bază</strong> furnizate agregat de Apple App Store și Google Play, precum numărul de instalări și de erori.</li>
      </ul>
      <p>Aplicațiile noastre actuale nu necesită crearea unui cont și nu colectăm în mod conștient informații în afara celor descrise aici sau în secțiunea specifică fiecărei aplicații.</p>
      <h2>2. Cum utilizăm informațiile</h2>
      <p>Prelucrăm aceste date în baza interesului nostru legitim de a opera și îmbunătăți aplicațiile (date despre dispozitiv și erori) și pentru a furniza serviciul solicitat (date de localizare, pentru afișarea poziției pe hartă).</p>
      <ul><li>Pentru a furniza și opera funcțiile principale ale aplicației.</li><li>Pentru a diagnostica erori, a remedia probleme și a îmbunătăți stabilitatea și performanța.</li><li>Pentru a respecta obligațiile legale și a aplica termenii noștri.</li></ul>
      <p>Nu vindem datele tale cu caracter personal și nu le utilizăm pentru publicitate de la terți.</p>
      <h2>3. Servicii de la terți</h2>
      <p>Ne bazăm pe următoarele servicii de la terți pentru operarea aplicațiilor:</p>
      <ul><li><strong>Firebase Crashlytics (Google LLC).</strong> Colectează informații despre dispozitiv și jurnale de erori. Consultă <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">politica Firebase privind confidențialitatea și securitatea</a> și <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Politica de confidențialitate Google</a>.</li><li><strong>Serverele de hărți MapTiler și OpenStreetMap.</strong> Pentru afișarea hărților, aplicația poate solicita dale de hartă pe baza zonei vizualizate. Solicitarea include adresa IP și coordonatele zonei vizibile.</li></ul>
      <p>Putem adăuga sau schimba serviciile de la terți pe măsură ce aplicațiile evoluează; politica va fi actualizată în consecință.</p>
      <h2>4. Partajarea și divulgarea datelor</h2><p>Nu vindem și nu închiriem informațiile tale personale. Partajăm date doar cu furnizorii de servicii enumerați mai sus, în măsura necesară funcționării lor, sau atunci când legea ne obligă, pentru protejarea drepturilor noastre ori în legătură cu un transfer de activitate.</p>
      <h2>5. Păstrarea datelor</h2><p>Păstrăm datele despre erori și diagnostic atât timp cât este necesar pentru diagnosticarea și remedierea problemelor. Datele de localizare utilizate pentru afișarea hărții pe dispozitiv nu sunt transmise sau stocate pe serverele noastre decât dacă se precizează în mod expres în secțiunea unei aplicații. Solicitările de dale de hartă sunt transmise furnizorilor ca parte normală a încărcării hărților.</p>
      <h2>6. Drepturile tale</h2><p>Dacă te afli în Spațiul Economic European, Regatul Unit sau într-o jurisdicție cu legi similare privind protecția datelor, ai dreptul să:</p><ul><li>soliciți accesul la datele personale pe care le deținem;</li><li>soliciți corectarea sau ștergerea datelor;</li><li>te opui anumitor prelucrări sau să soliciți restricționarea lor;</li><li>soliciți portabilitatea datelor, dacă este aplicabil;</li><li>depui o plângere la autoritatea locală de protecție a datelor.</li></ul><p>Pentru exercitarea acestor drepturi, contactează-ne la <a href="mailto:lowrangelabs@gmail.com">lowrangelabs@gmail.com</a>.</p>
      <h2>7. Confidențialitatea copiilor</h2><p>Aplicațiile noastre nu sunt destinate copiilor sub 16 ani sau sub vârsta aplicabilă a consimțământului digital și nu colectăm cu bună știință date personale de la copii sub această vârstă. Dacă ai motive să crezi că un copil ne-a furnizat date personale, contactează-ne pentru a putea lua măsuri de ștergere.</p>
      <h2>8. Securitate</h2><p>Luăm măsuri tehnice și organizatorice rezonabile pentru protejarea informațiilor împotriva accesului neautorizat, modificării sau pierderii. Totuși, nicio metodă de stocare sau transmitere electronică nu este 100% sigură.</p>
      <h2>9. Modificarea politicii</h2><p>Putem actualiza această Politică de confidențialitate periodic. Modificările importante vor fi reflectate prin actualizarea datei „Ultima actualizare”. Îți recomandăm să consulți periodic această pagină.</p>
      <h2>10. Contact</h2><p>Întrebările despre această Politică de confidențialitate sau practicile noastre privind datele pot fi trimise la <a href="mailto:lowrangelabs@gmail.com">lowrangelabs@gmail.com</a>.</p>
      <h2 id="apps">Date colectate pentru fiecare aplicație</h2><h3>Outroads</h3><ul><li><strong>Date de localizare</strong> — utilizate pentru afișarea poziției pe hartă și pentru funcții de orientare în raport cu ariile protejate și traseele. Sunt procesate pe dispozitiv pentru a alimenta afișarea hărții.</li><li><strong>Informații despre dispozitiv și jurnale de erori</strong> — colectate prin Firebase Crashlytics pentru diagnosticarea erorilor și îmbunătățirea stabilității.</li></ul>
      <p style="margin-top:2.5em; font-size:0.85rem;">Alte aplicații vor fi adăugate pe măsură ce sunt lansate.</p>
    `
  };

  const apply = (lang) => {
    body.innerHTML = lang === "ro" ? ro[page] : english;
  };

  window.lrlApplyLegalLanguage = apply;
  document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lrl-lang") === "en" ? "en" : "ro";
    apply(lang);
  });
})();
