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

function setImage(id, src, altText, objectPosition) {
  const el = byId(id);
  if (!el) return;
  if (src) el.src = src;
  if (altText) el.alt = altText;
  if (objectPosition) el.style.objectPosition = objectPosition;
}

function renderSkills(skills) {
  const wrap = byId("skillsGrid");
  if (!wrap) return;

  wrap.innerHTML = skills
    .map((group) => {
      const items = group.items.map((item) => `<li>${item}</li>`).join("");
      return `
      <article class="skill-card reveal">
        <h3>${group.category}</h3>
        <ul>${items}</ul>
      </article>
    `;
    })
    .join("");
}

function renderSoftSkills(skills) {
  const list = byId("softSkillsList");
  if (!list) return;

  list.innerHTML = skills.map((skill) => `<li>${skill}</li>`).join("");
}

function renderEducation(education) {
  const wrap = byId("educationList");
  if (!wrap) return;

  wrap.innerHTML = education
    .map(
      (item) => `
      <article class="timeline-card reveal">
        <p class="timeline-date">${item.timeline}</p>
        <h3>${item.institution}</h3>
        <p>${item.qualification}</p>
        <p class="muted-text">${item.score}</p>
      </article>
    `
    )
    .join("");
}

function renderToolkit(toolkit) {
  const wrap = byId("toolkitGrid");
  if (!wrap || !Array.isArray(toolkit)) return;

  wrap.innerHTML = toolkit
    .map((group) => {
      const chips = group.tools.map((tool) => `<li>${tool}</li>`).join("");
      return `
      <article class="toolkit-card reveal">
        <h3>${group.title}</h3>
        <ul class="toolkit-chip-list">${chips}</ul>
      </article>
    `;
    })
    .join("");
}

function renderCapabilities(capabilities) {
  const wrap = byId("capabilityList");
  if (!wrap || !Array.isArray(capabilities)) return;

  wrap.innerHTML = capabilities
    .map(
      (capability) => `
      <article class="capability-card reveal">
        <h3>${capability.title}</h3>
        <p>${capability.details}</p>
      </article>
    `
    )
    .join("");
}

function renderFeaturedProjects(projects) {
  const wrap = byId("featuredProjectsGrid");
  if (!wrap) return;

  wrap.innerHTML = projects
    .slice(0, 3)
    .map((project) => {
      const stack = project.stack
        .slice(0, 4)
        .map((tech) => `<li>${tech}</li>`)
        .join("");
      return `
      <article class="project-card reveal">
        <div class="project-card-head">
          <p class="status-badge">${project.status}</p>
          <h3>${project.title}</h3>
        </div>
        <p>${project.summary}</p>
        <ul class="chip-list">${stack}</ul>
        <a class="text-link" href="projects.html#${project.id}">Read Full Case Study</a>
      </article>
    `;
    })
    .join("");
}

function renderStackList(id, items, formatter) {
  const wrap = byId(id);
  if (!wrap) return;

  wrap.innerHTML = items
    .map((item) => {
      const certLink = item.certificatePath
        ? `<a class="cert-link" href="${item.certificatePath}" target="_blank" rel="noopener">View Certificate</a>`
        : "";
      return `
      <article class="stack-item reveal">
        <h3>${item.title}</h3>
        <p class="muted-text">${formatter(item)}</p>
        <p>${item.details}</p>
        ${certLink}
      </article>
    `
    })
    .join("");
}

function bindResumeLinks(path) {
  document.querySelectorAll(".resume-link").forEach((link) => {
    link.setAttribute("href", path);
  });
}

function setupRevealDelays() {
  document.querySelectorAll(".reveal").forEach((item, index) => {
    const delay = Math.min(index * 60, 500);
    item.style.setProperty("--reveal-delay", `${delay}ms`);
  });
}

function setupRevealAnimation() {
  const items = document.querySelectorAll(".reveal");
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
    { threshold: 0.18, rootMargin: "0px 0px -5% 0px" }
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

function setupActiveNavLinks() {
  const navLinks = Array.from(document.querySelectorAll('.nav-list a[href^="#"]'));
  if (!navLinks.length) return;

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length) return;

  const linkById = new Map(
    navLinks.map((link) => [link.getAttribute("href").replace("#", ""), link])
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const activeId = entry.target.id;
        navLinks.forEach((link) => link.classList.remove("is-active"));
        const activeLink = linkById.get(activeId);
        if (activeLink) activeLink.classList.add("is-active");
      });
    },
    { threshold: 0.45, rootMargin: "-25% 0px -45% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
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

function animateCount(el, endValue) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    el.textContent = String(endValue);
    return;
  }

  const duration = 900;
  const start = performance.now();

  const frame = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(eased * endValue);
    el.textContent = String(value);
    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  };

  requestAnimationFrame(frame);
}

function setupSnapshotCount() {
  const targets = [
    { id: "snapshotProjects", value: Number(byId("snapshotProjects")?.textContent) || 0 },
    { id: "snapshotCertifications", value: Number(byId("snapshotCertifications")?.textContent) || 0 },
    { id: "snapshotEducation", value: Number(byId("snapshotEducation")?.textContent) || 0 },
    { id: "snapshotSoftSkills", value: Number(byId("snapshotSoftSkills")?.textContent) || 0 }
  ];

  targets.forEach((target) => {
    const el = byId(target.id);
    if (!el || target.value <= 0) return;
    el.textContent = "0";
  });

  const panel = document.querySelector(".hero-panel");
  if (!panel) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        targets.forEach((target) => {
          const el = byId(target.id);
          if (!el || target.value <= 0) return;
          animateCount(el, target.value);
        });
        observer.disconnect();
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(panel);
}

function init() {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  setText("heroRole", data.profile.role);
  setText("heroName", data.profile.fullName);
  setText("heroSubtitle", data.profile.subtitle);
  setText("heroObjective", data.profile.objective);
  setImage(
    "heroProfileImage",
    data.profile.profilePhoto?.path,
    data.profile.profilePhoto?.alt,
    data.profile.profilePhoto?.position
  );
  setText("aboutText", data.profile.objective);
  setText(
    "careerSnapshotText",
    "Focused on shipping practical software solutions through disciplined learning, hands-on execution, and measurable project outcomes."
  );

  setText("snapshotProjects", String(data.projects.length));
  setText("snapshotCertifications", String(data.certifications.length));
  setText("snapshotEducation", String(data.education.length));
  setText("snapshotSoftSkills", String(data.softSkills.length));

  setAnchor("contactEmailInline", `mailto:${data.contacts.email}`, data.contacts.email);
  setAnchor("contactPhoneInline", `tel:${data.contacts.phone.replace(/\s+/g, "")}`, data.contacts.phone);
  setAnchor("contactLinkedinInline", data.contacts.linkedin, "LinkedIn");
  setAnchor("contactGithubInline", data.contacts.github, "GitHub");

  setAnchor("contactEmailMain", `mailto:${data.contacts.email}`, data.contacts.email);
  setAnchor("contactPhoneMain", `tel:${data.contacts.phone.replace(/\s+/g, "")}`, data.contacts.phone);
  setAnchor("contactLinkedinMain", data.contacts.linkedin, "LinkedIn Profile");
  setAnchor("contactGithubMain", data.contacts.github, "GitHub Projects");

  setText("footerName", data.profile.fullName);
  setText("footerYear", `Updated ${new Date().getFullYear()}`);

  bindResumeLinks(data.profile.resumePath);
  renderSoftSkills(data.softSkills);
  renderSkills(data.skills);
  renderToolkit(data.toolkit);
  renderEducation(data.education);
  renderFeaturedProjects(data.projects);
  renderCapabilities(data.capabilities);
  renderStackList(
    "certificationsList",
    data.certifications,
    (item) => `${item.issuer} | ${item.period}`
  );
  renderStackList("achievementsList", data.achievements, (item) => item.period);

  setupRevealDelays();
  setupRevealAnimation();
  setupScrollProgress();
  setupHeaderState();
  setupActiveNavLinks();
  setupMobileNav();
  setupSnapshotCount();
}

document.addEventListener("DOMContentLoaded", init);
