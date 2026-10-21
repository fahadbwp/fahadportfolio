// assets/js/mkvision-interactions.js
// MK Vision Studio inspired interactions: Drawer navigation, carousel controls, FAQ accordion

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

  // 2. Horizontal Project Carousel Track Controls with Full Cyclic Navigation & Card Snapping
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (track && prevBtn && nextBtn) {
    const cards = Array.from(track.querySelectorAll('.carousel-card'));

    function getActiveIndex() {
      const trackLeft = track.getBoundingClientRect().left;
      let closestIdx = 0;
      let minDistance = Infinity;

      cards.forEach((card, idx) => {
        const cardBox = card.getBoundingClientRect();
        const distance = Math.abs(cardBox.left - trackLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });
      return closestIdx;
    }

    function scrollToCard(index, behavior = 'smooth') {
      if (index < 0) index = cards.length - 1;
      if (index >= cards.length) index = 0;
      const targetCard = cards[index];
      if (!targetCard) return;

      const trackRect = track.getBoundingClientRect();
      const targetRect = targetCard.getBoundingClientRect();
      const scrollOffset = targetRect.left - trackRect.left + track.scrollLeft;

      track.scrollTo({
        left: scrollOffset,
        behavior: behavior
      });
    }

    nextBtn.addEventListener('click', () => {
      const current = getActiveIndex();
      const nextIndex = (current + 1) % cards.length;
      scrollToCard(nextIndex);
    });

    prevBtn.addEventListener('click', () => {
      const current = getActiveIndex();
      const prevIndex = (current - 1 + cards.length) % cards.length;
      scrollToCard(prevIndex);
    });
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
