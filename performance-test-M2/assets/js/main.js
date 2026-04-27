(() => {

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  const header = document.querySelector(".header");
  const nav = document.querySelector("[data-nav]");
  const menuToggle = document.querySelector("[data-menu-toggle]");

  const setMenuOpen = (open) => {
    if (!header || !menuToggle) return;
    header.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  };

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = header?.classList.contains("is-open") ?? false;
      setMenuOpen(!isOpen);
    });
  }

  if (nav) {
    nav.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.matches('a[href^="#"]')) setMenuOpen(false);
    });
  }

  document.addEventListener("click", (event) => {
    if (!header || !menuToggle) return;
    const isOpen = header.classList.contains("is-open");
    if (!isOpen) return;

    const target = event.target;
    if (!(target instanceof Node)) return;
    if (header.contains(target)) return;
    setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  
  const toastEl = document.querySelector("[data-toast]");
  let toastTimeoutId = null;

  const showToast = (message) => {
    if (!(toastEl instanceof HTMLElement)) return;
    toastEl.textContent = message;
    toastEl.hidden = false;

    if (toastTimeoutId) window.clearTimeout(toastTimeoutId);
    toastTimeoutId = window.setTimeout(() => {
      toastEl.hidden = true;
    }, 2600);
  };

  const modal = document.querySelector("[data-modal]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  const openModal = (title, text) => {
    if (!(modal instanceof HTMLElement)) return;
    if (modalTitle) modalTitle.textContent = title;
    if (modalText) modalText.textContent = text;

    
    if (typeof modal.showModal === "function") {
      modal.showModal();
      return;
    }
    modal.setAttribute("open", "");
  };

  
  document.querySelectorAll("[data-ticket]").forEach((button) => {
    button.addEventListener("click", () => {
      const eventName = button.getAttribute("data-event") || "el evento";
      const eventDate = button.getAttribute("data-date") || "la fecha seleccionada";
      openModal(
        "Entradas (Demo)",
        `Accion simulada. Seleccionaste: ${eventName} - ${eventDate}.`
      );
    });
  });

 
  const embedButton = document.querySelector("[data-embed]");
  if (embedButton) {
    embedButton.addEventListener("click", () => {
      openModal(
        "Video (Demo)",
        "Este es un embed simulado. Aqui puedes reemplazarlo por un embed real (YouTube/Spotify)."
      );
    });
  }

  document.querySelectorAll("[data-play]").forEach((button) => {
    button.addEventListener("click", () => {
      const track = button.getAttribute("data-track") || "track";
      showToast(`Reproduciendo preview: ${track} (demo)`);
    });
  });

 
  const navLinks = nav ? Array.from(nav.querySelectorAll('a[href^="#"]')) : [];
  const sectionIds = navLinks
    .map((a) => a.getAttribute("href")?.slice(1))
    .filter(Boolean);
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const setActiveLink = (activeId) => {
    navLinks.forEach((a) => {
      const id = a.getAttribute("href")?.slice(1);
      a.classList.toggle("is-active", id === activeId);
    });
  };

  if ("IntersectionObserver" in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (visible?.target && visible.target instanceof HTMLElement) {
          setActiveLink(visible.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.05, 0.2, 0.4, 0.6, 0.8] }
    );

    sections.forEach((section) => observer.observe(section));
  }
})();
