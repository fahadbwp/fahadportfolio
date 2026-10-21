// assets/js/mkvision-interactions.js
// MK Vision Studio inspired interactions: Drawer navigation, pinned horizontal showcase, cyclic controls, FAQ accordion

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
    if (e.key === 'Escape' && drawer?.classList.contains('is-active')) {
      closeDrawer();
    }
  });

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
        // Inside pinned region
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

    // Keyboard accessibility for carousel
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

    // Lifecycle events
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', calculateLayout);
    window.addEventListener('load', () => {
      calculateLayout();
      updateScroll();
    });

    // Initial setup
    calculateLayout();
    updateScroll();
  }

  // 3. Editorial FAQ Accordion: Clean Single-Open Behavior
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
