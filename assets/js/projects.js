function byId(id) {
  return document.getElementById(id);
}

function setText(id, value) {
  const el = byId(id);
  if (el) {
    el.textContent = value;
  }
}

function setAnchor(id, href, label) {
  const el = byId(id);
  if (el) {
    el.href = href;
    el.textContent = label;
  }
}

function bindResumeLinks(path) {
  document.querySelectorAll(".resume-link").forEach((link) => {
    link.setAttribute("href", path);
  });
}

function renderProjectLinks(links) {
  if (!Array.isArray(links) || links.length === 0) {
    return `<p class="muted-text">Public repository or demo link can be shared on request.</p>`;
  }

  return `
    <div class="link-row">
      ${links
        .map(
          (link) =>
            `<a class="btn btn-outline" href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`
        )
        .join("")}
    </div>
  `;
}

function renderProjects(projects) {
  const wrap = byId("projectCards");
  if (!wrap) return;

  wrap.innerHTML = projects
    .map((project) => {
      const stack = project.stack.map((item) => `<li>${item}</li>`).join("");
      const highlights = project.highlights.map((item) => `<li>${item}</li>`).join("");

      return `
      <article class="project-detail-card reveal" id="${project.id}">
        <div class="project-detail-head">
          <p class="status-badge">${project.status}</p>
          <h2>${project.title}</h2>
        </div>
        <p class="project-detail-summary">${project.summary}</p>
        <div class="project-detail-columns">
          <div>
            <h3>My Contribution</h3>
            <p>${project.contribution}</p>
          </div>
          <div>
            <h3>Outcome</h3>
            <p>${project.outcome}</p>
          </div>
        </div>
        <h3>Tech Stack</h3>
        <ul class="chip-list">${stack}</ul>
        <h3>Key Highlights</h3>
        <ul class="highlight-list">${highlights}</ul>
        ${renderProjectLinks(project.links)}
      </article>
    `;
    })
    .join("");
}

function renderToolHighlights(tools) {
  const wrap = byId("projectToolChips");
  if (!wrap || !Array.isArray(tools)) return;
  wrap.innerHTML = tools.map((tool) => `<span>${tool}</span>`).join("");
}

function setupRevealDelays() {
  document.querySelectorAll(".reveal").forEach((item, index) => {
    const delay = Math.min(index * 70, 650);
    item.style.setProperty("--reveal-delay", `${delay}ms`);
  });
}

function setupRevealAnimation() {
  const items = document.querySelectorAll(".reveal, .project-detail-card");
  if (!items.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((item) => observer.observe(item));
}

function setupScrollProgress() {
  const bar = byId("scrollProgressBar");
  if (!bar) return;

  const update = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = `${Math.min(Math.max(pct, 0), 100)}%`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function setupHeaderState() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const update = () => {
    if (window.scrollY > 24) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupMobileNav() {
  const toggle = byId("navToggle");
  const nav = byId("primaryNav");
  const shell = document.querySelector(".nav-shell");
  if (!toggle || !nav) return;

  const closeNav = () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("mobile-nav-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("mobile-nav-open", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 900px)").matches) {
        closeNav();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (!window.matchMedia("(max-width: 900px)").matches) {
      closeNav();
    }
  });

  document.addEventListener("click", (event) => {
    if (!window.matchMedia("(max-width: 900px)").matches) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (!shell || shell.contains(target)) return;
    closeNav();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });
}

function init() {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  setText("projectOwnerName", data.profile.fullName);
  setText(
    "projectIntroText",
    "A curated collection of practical projects that highlight algorithmic thinking, applied software design, and product-focused implementation."
  );

  setAnchor("projectEmailLink", `mailto:${data.contacts.email}`, data.contacts.email);
  setAnchor("projectPhoneLink", `tel:${data.contacts.phone.replace(/\s+/g, "")}`, data.contacts.phone);
  setAnchor("projectLinkedinLink", data.contacts.linkedin, "LinkedIn");
  setAnchor("projectGithubLink", data.contacts.github, "GitHub Projects");

  setText("footerName", data.profile.fullName);
  setText("footerYear", `Updated ${new Date().getFullYear()}`);

  bindResumeLinks(data.profile.resumePath);
  renderProjects(data.projects);
  renderToolHighlights(data.projectToolHighlights || []);

  setupRevealDelays();
  setupRevealAnimation();
  setupScrollProgress();
  setupHeaderState();
  setupMobileNav();
}

document.addEventListener("DOMContentLoaded", init);
