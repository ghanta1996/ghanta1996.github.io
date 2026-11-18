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
 document.querySelectorAll('.robot-demo').forEach(demo => {
  const toggle = demo.querySelector('.demo-toggle');
  const status = demo.querySelector('.demo-status');
  const noun = demo.dataset.demo === 'coverage' ? 'path' : 'scan';
  let userPaused = false;
  const setRunning = running => {
   demo.classList.toggle('is-running', running);
   toggle.setAttribute('aria-pressed', String(running));
   toggle.textContent = `${running ? 'Pause' : 'Play'} ${noun}`;
   status.textContent = running ? 'Running' : 'Paused';
  };
  toggle.addEventListener('click', () => {
   const running = !demo.classList.contains('is-running');
   userPaused = !running;
   setRunning(running);
  });
  demo.querySelector('.demo-reset')?.addEventListener('click', () => {
   setRunning(false);
   userPaused = true;
   demo.classList.remove('has-animation');
   void demo.offsetWidth;
   demo.classList.add('has-animation');
  });
  demo.classList.add('has-animation');
  if ('IntersectionObserver' in window) {
   new IntersectionObserver(entries => {
    setRunning(entries[0].isIntersecting && !reduced.matches && !userPaused);
   }).observe(demo);
  }
  reduced.addEventListener('change', () => { if (reduced.matches) setRunning(false); });
 });
})();
