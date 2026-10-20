// assets/js/mkvision-interactions.js
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Drawer Navigation
  const menuToggle = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-links a');

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

  menuToggle?.addEventListener('click', () => {
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

  // 2. Smooth Section Scrolling with Offset for Floating Header
  const headerOffset = 90;
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL hash without jump
        if (history.pushState) {
          history.pushState(null, null, targetId);
        } else {
          location.hash = targetId;
        }
      }
    });
  });

  // 3. Active Nav Link Intersection Observer
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = 'var(--text-white)';
          } else {
            link.style.color = 'var(--text-muted)';
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
});
