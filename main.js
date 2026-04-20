// Mobile menu toggle + simple form UX
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      const open = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Highlight current nav link
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.style.color = "var(--red-dark)";
  });

  // Basic contact form handler (client-side only, user should wire up to email/backend)
  const form = document.querySelector("form[data-contact]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = form.querySelector(".form-status");
      if (status) {
        status.textContent = "Thanks, your message has been noted. We'll be in touch shortly.";
        status.style.color = "#2a8a3b";
      }
      form.reset();
    });
  }
});
