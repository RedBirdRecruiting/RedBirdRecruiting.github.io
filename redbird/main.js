/* Redbird Recruiting — main.js */
document.addEventListener("DOMContentLoaded", () => {

  /* ── Mobile nav toggle ──────────────────────────────────── */
  const toggle = document.querySelector(".menu-toggle");
  const links  = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", links.classList.contains("open"));
    });
  }

  /* ── Highlight current nav link ─────────────────────────── */
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === page) a.style.color = "var(--red-dark)";
  });

  /* ── Contact form handler ────────────────────────────────── */
  const form = document.querySelector("form[data-contact]");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const status = form.querySelector(".form-status");
      if (status) {
        status.textContent = "Thanks — your message has been noted. We'll be in touch shortly.";
        status.style.color = "#2a8a3b";
      }
      form.reset();
    });
  }

  /* ── Jobs page filter ────────────────────────────────────── */
  const jobList     = document.getElementById("job-list");
  const noJobs      = document.getElementById("no-jobs");
  const countEl     = document.getElementById("jobs-count");
  const searchInput = document.querySelector(".js-search");
  const clearBtn    = document.getElementById("js-clear");
  const filterToggle = document.getElementById("js-filter-toggle");
  const filterSide   = document.getElementById("js-side");

  if (!jobList) return; // not on jobs page

  /* Mobile filter panel toggle */
  if (filterToggle && filterSide) {
    filterToggle.addEventListener("click", () => {
      const open = filterSide.classList.toggle("open");
      filterToggle.setAttribute("aria-expanded", open);
    });
  }

  function applyFilters() {
    const items      = jobList.querySelectorAll(".js-item");
    const query      = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const checked    = cb => [...document.querySelectorAll(`input[data-filter="${cb}"]:checked`)].map(x => x.value);
    const roles      = checked("role");
    const types      = checked("type");
    const regions    = checked("region");

    let visible = 0;
    items.forEach(item => {
      const matchRole   = !roles.length   || roles.includes(item.dataset.role);
      const matchType   = !types.length   || types.includes(item.dataset.type);
      const matchRegion = !regions.length || regions.includes(item.dataset.region);
      const matchSearch = !query          || item.textContent.toLowerCase().includes(query);
      const show = matchRole && matchType && matchRegion && matchSearch;
      item.style.display = show ? "" : "none";
      if (show) visible++;
    });

    if (countEl) countEl.textContent = `${visible} role${visible !== 1 ? "s" : ""} shown`;
    if (noJobs)  noJobs.classList.toggle("visible", visible === 0);
  }

  /* Attach listeners */
  document.querySelectorAll("input[data-filter]").forEach(cb =>
    cb.addEventListener("change", applyFilters)
  );
  if (searchInput) searchInput.addEventListener("input", applyFilters);

  /* Clear filters */
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      document.querySelectorAll("input[data-filter]").forEach(cb => cb.checked = false);
      if (searchInput) searchInput.value = "";
      applyFilters();
    });
  }

  /* Initial count */
  applyFilters();
});
