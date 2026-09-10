// Set this to the contact service endpoint after it has been configured.
// The endpoint must accept JSON { name, email, message } and return a 2xx
// JSON response only after accepting the message, or a non-2xx on failure.
const LRL_CONTACT_ENDPOINT = "";
const LRL_CONTACT_EMAIL = "lowrangelabs@gmail.com";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const button = form.querySelector('button[type="submit"]');
  const status = document.getElementById("contact-status");
  let sending = false;

  function translate(element, key) {
    element.dataset.i18n = key;
    const language = document.documentElement.lang;
    element.textContent = (LRL_I18N[language] || LRL_I18N.ro)[key];
  }

  if (LRL_CONTACT_ENDPOINT || LRL_CONTACT_EMAIL) {
    button.disabled = false;
    status.removeAttribute("data-i18n");
    status.textContent = "";
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if ((!LRL_CONTACT_ENDPOINT && !LRL_CONTACT_EMAIL) || sending || !form.reportValidity()) return;
    const fields = ["name", "email", "message"];
    for (const field of fields) {
      form.elements[field].value = form.elements[field].value.trim();
    }
    if (!form.reportValidity()) return;
    const payload = Object.fromEntries(fields.map(field => [field, form.elements[field].value]));
    if (!LRL_CONTACT_ENDPOINT) {
      const subject = encodeURIComponent(`Mesaj LowRange Labs de la ${payload.name}`);
      const body = encodeURIComponent(`Nume: ${payload.name}\nEmail: ${payload.email}\n\nMesaj:\n${payload.message}`);
      window.location.href = `mailto:${LRL_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }
    sending = true;
    button.disabled = true;
    fields.forEach(field => { form.elements[field].readOnly = true; });
    form.setAttribute("aria-busy", "true");
    translate(button, "contact.sending");
    status.removeAttribute("data-i18n");
    status.textContent = "";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(LRL_CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      if (!response.ok || !(response.headers.get("content-type") || "").includes("application/json")) {
        throw new Error("Message not accepted");
      }
      const result = await response.json();
      if (result.error || result.errors || result.success === false) throw new Error("Message not accepted");
      form.reset();
      translate(status, "contact.success");
    } catch {
      translate(status, "contact.error");
    } finally {
      clearTimeout(timeout);
      sending = false;
      button.disabled = false;
      fields.forEach(field => { form.elements[field].readOnly = false; });
      form.removeAttribute("aria-busy");
      translate(button, "contact.send");
    }
  });
});
