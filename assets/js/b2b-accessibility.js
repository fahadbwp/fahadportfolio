// Keep the closed drawer out of keyboard navigation and contain focus when open.
const drawer = document.getElementById('mobile-drawer');
if (drawer) {
  let wasOpen = false;
  const syncDrawer = () => {
    const open = drawer.classList.contains('is-active');
    drawer.inert = !open;
    drawer.setAttribute('aria-hidden', String(!open));
    document.querySelectorAll('header, main, footer, .skip-to-content').forEach(element => {
      element.inert = open;
    });
    if (!open && wasOpen) {
      document.getElementById('menu-toggle')?.focus();
    } else if (open && !wasOpen) {
      document.getElementById('drawer-close')?.focus();
    }
    wasOpen = open;
  };
  new MutationObserver(syncDrawer).observe(drawer, { attributes: true, attributeFilter: ['class'] });
  syncDrawer();
  drawer.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = [...drawer.querySelectorAll('a[href], button')];
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}
