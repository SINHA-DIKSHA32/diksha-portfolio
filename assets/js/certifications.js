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

function renderCertifications(certifications) {
  const wrap = byId("certificationsPageList");
  if (!wrap) return;

  wrap.innerHTML = certifications
    .map((item) => {
      const certLink = item.certificatePath
        ? `<a class="cert-link" href="${item.certificatePath}" target="_blank" rel="noopener">View Certificate</a>`
        : `<p class="muted-text">Certificate file is not attached yet.</p>`;

      return `
      <article class="certification-card reveal">
        <h2>${item.title}</h2>
        <p class="muted-text">${item.issuer} | ${item.period}</p>
        <p>${item.details}</p>
        ${certLink}
      </article>
    `;
    })
    .join("");
}

function setupRevealDelays() {
  document.querySelectorAll(".reveal").forEach((item, index) => {
    const delay = Math.min(index * 70, 700);
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
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
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

  setText("certOwnerName", data.profile.fullName);
  setText(
    "certIntroText",
    "A complete list of verified certifications with direct certificate links for quick review."
  );
  setAnchor("certEmailLink", `mailto:${data.contacts.email}`, data.contacts.email);
  setAnchor("certPhoneLink", `tel:${data.contacts.phone.replace(/\s+/g, "")}`, data.contacts.phone);
  setAnchor("certLinkedinLink", data.contacts.linkedin, "LinkedIn");
  setAnchor("certGithubLink", data.contacts.github, "GitHub");
  setText("footerName", data.profile.fullName);
  setText("footerYear", `Updated ${new Date().getFullYear()}`);

  bindResumeLinks(data.profile.resumePath);
  renderCertifications(data.certifications || []);
  setupRevealDelays();
  setupRevealAnimation();
  setupScrollProgress();
  setupHeaderState();
  setupMobileNav();
}

document.addEventListener("DOMContentLoaded", init);
