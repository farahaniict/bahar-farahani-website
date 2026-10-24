(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const syncTheme = () => {
    const dark = root.dataset.theme === 'dark';
    toggle?.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    toggle?.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
    const label = toggle?.querySelector('.theme-label');
    if (label) label.textContent = dark ? 'Light' : 'Dark';
    if (themeMeta) themeMeta.content = dark ? '#102720' : '#f5faf8';
  };
  syncTheme();
  toggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('bahar-theme', next); } catch (e) {}
    syncTheme();
  });
  const menu = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  }));
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
