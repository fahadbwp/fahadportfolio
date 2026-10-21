// assets/js/mkvision-interactions.js
// MK Vision Studio inspired interactions: Drawer navigation, vertical scroll reveal, case study lightbox modals, FAQ accordion

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Drawer Navigation
  const menuToggle = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-links a, .mobile-drawer-footer a');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    menuToggle?.setAttribute('aria-expanded', 'true');
    drawerClose?.focus();
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-active');
    document.body.style.overflow = '';
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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (drawer?.classList.contains('is-active')) {
        closeDrawer();
      }
      closeAllModals();
    }
  });

  // 2. Subtle Scroll-Reveal Animation for Vertical Projects & Case Studies
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

  // 3. Data Research Case Study Lightbox Modals
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const caseModals = document.querySelectorAll('.case-modal');
  const modalCloses = document.querySelectorAll('.case-modal-close, .case-modal-backdrop');

  function openModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (!targetModal) return;
    targetModal.classList.add('is-open');
    targetModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const closeBtn = targetModal.querySelector('.case-modal-close');
    closeBtn?.focus();
  }

  function closeAllModals() {
    caseModals.forEach(modal => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
    });
    // Only restore body overflow if drawer is not open
    if (!drawer?.classList.contains('is-active')) {
      document.body.style.overflow = '';
    }
  }

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-modal-target');
      if (target) openModal(target);
    });
  });

  modalCloses.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeAllModals();
    });
  });

  // 4. Editorial FAQ Accordion: Clean Single-Open Behavior
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
});
