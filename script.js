(() => {
 const button = document.querySelector('.theme-button');
 const apply = theme => {
  document.documentElement.dataset.theme = theme;
  button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#1c1d1b' : '#faf9f6';
 };
 try { const saved = localStorage.getItem('portfolio-theme'); if (saved === 'dark' || saved === 'light') apply(saved); } catch {}
 button.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  apply(theme); try { localStorage.setItem('portfolio-theme', theme); } catch {}
 });
 document.getElementById('year').textContent = new Date().getFullYear();
 if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => {
   const visible = entries.filter(entry => entry.isIntersecting);
   if (!visible.length) return;
   const id = visible[0].target.id;
   links.forEach(link => { if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  }, { rootMargin: '-10% 0px -55% 0px' });
  links.forEach(link => { const section = document.querySelector(link.hash); if (section) observer.observe(section); });
 }
})();
