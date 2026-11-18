(() => {
 document.getElementById('year').textContent = new Date().getFullYear();
 const normalize = path => path.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
 const current = normalize(location.pathname);
 document.querySelectorAll('#topnav nav a').forEach(link => {
  if (link.hasAttribute('download')) return;
  if (normalize(new URL(link.href).pathname) === current) link.setAttribute('aria-current', 'page');
 });
})();

(() => {
 const inner = document.querySelector('.cv-pages-inner');
 if (!inner) return;
 let zoom = 100;
 const output = document.getElementById('cv-zoom');
 document.querySelectorAll('[data-zoom]').forEach(button => button.addEventListener('click', () => {
  const action = button.dataset.zoom;
  zoom = action === 'fit' ? 100 : Math.max(100, Math.min(200, zoom + (action === 'in' ? 25 : -25)));
  inner.style.width = `${zoom}%`;
  output.value = `${zoom}%`;
  document.querySelector('[data-zoom="out"]').disabled = zoom === 100;
  document.querySelector('[data-zoom="in"]').disabled = zoom === 200;
 }));
 document.querySelector('[data-zoom="out"]').disabled = true;
})();

(() => {
 const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
 const diagrams = [...document.querySelectorAll('.robot-demo')];
 const sync = demo => {
  const visible = demo.dataset.visible === 'true' && !document.hidden;
  demo.classList.toggle('has-animation', !reduced.matches);
  demo.classList.toggle('is-running', visible && !reduced.matches);
 };
 diagrams.forEach(demo => {
  if ('IntersectionObserver' in window) {
   new IntersectionObserver(entries => {
    demo.dataset.visible = String(entries[0].isIntersecting);
    sync(demo);
   }, { threshold: .15 }).observe(demo);
  }
  sync(demo);
 });
 reduced.addEventListener('change', () => diagrams.forEach(sync));
 document.addEventListener('visibilitychange', () => diagrams.forEach(sync));
})();
