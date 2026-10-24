// assets/js/mkvision-interactions.js
// MK Vision Studio inspired interactions: Drawer navigation, pinned horizontal showcase, vertical case studies lightbox, FAQ accordion

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Drawer Navigation
  const menuToggle = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-links a, .mobile-drawer-footer a');

  function openDrawer() {
    if (!drawer) return;
    closeAllModals(false);
    drawer.classList.add('is-active');
    document.body.classList.add('drawer-open');
    document.body.style.overflow = 'hidden';
    menuToggle?.setAttribute('aria-expanded', 'true');
    drawerClose?.focus();
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-active');
    document.body.classList.remove('drawer-open');
    if (!activeModal) {
      document.body.style.overflow = '';
    }
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.focus();
  }

  menuToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (drawer?.classList.contains('is-active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawerClose?.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // (Keydown handled unified below with Tab focus trapping)

  // 2. MK Vision Pinned Horizontal Project Gallery & Cyclic Controls
  const hscrollSection = document.querySelector('.showcase-section.hscroll');
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (hscrollSection && track) {
    const cards = Array.from(track.children);
    let dist = 0;
    let isDesktopPinned = false;

    function isReducedMotion() {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function calculateLayout() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const reduce = isReducedMotion();

      if (vw <= 800 || reduce) {
        isDesktopPinned = false;
        hscrollSection.style.height = '';
        track.style.transform = '';
        dist = 0;
        return;
      }

      isDesktopPinned = true;
      dist = Math.max(0, track.scrollWidth - vw);
      hscrollSection.style.height = (vh + dist) + 'px';
      updateScroll();
    }

    function updateScroll() {
      if (!isDesktopPinned || !dist) return;
      const rect = hscrollSection.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const progress = Math.min(1, Math.max(0, -rect.top / dist));
        track.style.transform = `translate3d(${-progress * dist}px, 0, 0)`;
      } else if (rect.top > 0) {
        track.style.transform = 'translate3d(0, 0, 0)';
      } else {
        track.style.transform = `translate3d(${-dist}px, 0, 0)`;
      }
    }

    function getActiveIndex() {
      if (isDesktopPinned && dist > 0) {
        const rect = hscrollSection.getBoundingClientRect();
        const currentTranslated = Math.min(dist, Math.max(0, -rect.top));
        let closest = 0;
        let minDiff = Infinity;
        cards.forEach((c, idx) => {
          const diff = Math.abs(c.offsetLeft - currentTranslated);
          if (diff < minDiff) {
            minDiff = diff;
            closest = idx;
          }
        });
        return closest;
      } else {
        const trackLeft = track.getBoundingClientRect().left;
        let closest = 0;
        let minDiff = Infinity;
        cards.forEach((c, idx) => {
          const cardLeft = c.getBoundingClientRect().left;
          const diff = Math.abs(cardLeft - trackLeft);
          if (diff < minDiff) {
            minDiff = diff;
            closest = idx;
          }
        });
        return closest;
      }
    }

    function navigateToCard(index, behavior = 'smooth') {
      if (index < 0) index = cards.length - 1;
      if (index >= cards.length) index = 0;
      const targetCard = cards[index];
      if (!targetCard) return;

      if (isDesktopPinned && dist > 0) {
        const cardOffset = Math.min(dist, Math.max(0, targetCard.offsetLeft - track.offsetLeft));
        const sectionTop = hscrollSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: sectionTop + cardOffset,
          behavior: behavior
        });
      } else {
        const trackRect = track.getBoundingClientRect();
        const cardRect = targetCard.getBoundingClientRect();
        const targetScrollLeft = cardRect.left - trackRect.left + track.scrollLeft;
        track.scrollTo({
          left: targetScrollLeft,
          behavior: behavior
        });
      }
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const current = getActiveIndex();
        navigateToCard((current + 1) % cards.length);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const current = getActiveIndex();
        navigateToCard((current - 1 + cards.length) % cards.length);
      });
    }

    // Keyboard accessibility for horizontal carousel
    document.addEventListener('keydown', (e) => {
      const rect = hscrollSection.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight') {
        const current = getActiveIndex();
        if (current < cards.length - 1) {
          e.preventDefault();
          navigateToCard(current + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        const current = getActiveIndex();
        if (current > 0) {
          e.preventDefault();
          navigateToCard(current - 1);
        }
      }
    });

    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', calculateLayout);
    window.addEventListener('load', () => {
      calculateLayout();
      updateScroll();
    });

    calculateLayout();
    updateScroll();
  }

  // 3. Subtle Scroll-Reveal Animation for Case Studies
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (revealElements.length > 0) {
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
      revealElements.forEach(el => observer.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('is-revealed'));
    }
  }

  // 4. Case Study Lightbox Modals (with Focus Trapping & Restoration)
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const caseModals = document.querySelectorAll('.case-modal');
  const modalCloses = document.querySelectorAll('.case-modal-close, .case-modal-backdrop');
  let activeModal = null;
  let lastActiveTrigger = null;

  function openModal(modalId, triggerEl) {
    const targetModal = document.getElementById(modalId);
    if (!targetModal) return;

    if (drawer?.classList.contains('is-active')) {
      closeDrawer();
    }
    closeAllModals(false);

    lastActiveTrigger = triggerEl || document.activeElement;
    activeModal = targetModal;

    targetModal.classList.add('is-open');
    targetModal.setAttribute('aria-hidden', 'false');
    targetModal.removeAttribute('inert');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    // Set other elements inert for complete focus containment
    document.querySelectorAll('header, main, footer, .skip-to-content, #mobile-drawer').forEach(el => {
      el.inert = true;
    });

    const closeBtn = targetModal.querySelector('.case-modal-close');
    setTimeout(() => {
      closeBtn?.focus();
    }, 50);
  }

  function closeAllModals(restoreFocus = true) {
    caseModals.forEach(modal => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      modal.inert = true;
    });

    document.body.classList.remove('modal-open');
    if (!drawer?.classList.contains('is-active')) {
      document.body.style.overflow = '';
      document.querySelectorAll('header, main, footer, .skip-to-content').forEach(el => {
        el.inert = false;
      });
    }

    if (restoreFocus && lastActiveTrigger && typeof lastActiveTrigger.focus === 'function') {
      lastActiveTrigger.focus();
    }
    activeModal = null;
  }

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-modal-target');
      if (target) openModal(target, btn);
    });
  });

  modalCloses.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeAllModals(true);
    });
  });

  // Global Keydown Handler: Escape dismissal & Tab Focus Trapping
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (activeModal) {
        e.preventDefault();
        closeAllModals(true);
        return;
      }
      if (drawer?.classList.contains('is-active')) {
        closeDrawer();
      }
    } else if (e.key === 'Tab' && activeModal) {
      const focusables = Array.from(activeModal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Ensure all modals start inert and accessible
  caseModals.forEach(modal => {
    modal.setAttribute('aria-hidden', 'true');
    modal.inert = true;
  });

  // 5. Editorial FAQ Accordion: Clean Single-Open Behavior
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(other => {
          if (other !== item && other.open) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });
  // 6. Smooth Back-to-Top Interaction
  const backToTopBtn = document.getElementById('back-to-top');
  backToTopBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 7. Stacking Cards Depth Controller (Desktop & Mobile)
  function initStackingCards() {
    const cards = document.querySelectorAll('.leadgen-vertical-card');
    if (!cards.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    function updateCardStack() {
      for (let i = 0; i < cards.length - 1; i++) {
        const card = cards[i];
        const nextCard = cards[i + 1];
        const rect = card.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();

        // Calculate overlap
        const overlap = rect.bottom - nextRect.top;
        if (overlap > 0) {
          const progress = Math.min(Math.max(overlap / rect.height, 0), 1);
          const scale = 1 - (progress * 0.035);
          const brightness = 1 - (progress * 0.12);
          card.style.transform = `scale(${scale.toFixed(4)})`;
          card.style.filter = `brightness(${brightness.toFixed(4)})`;
        } else {
          card.style.transform = '';
          card.style.filter = '';
        }
      }
    }

    window.addEventListener('scroll', updateCardStack, { passive: true });
    window.addEventListener('resize', updateCardStack, { passive: true });
    updateCardStack();
  }

  initStackingCards();

});

