(() => {
 document.getElementById('year').textContent = new Date().getFullYear();
 const normalize = path => path.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
 const current = normalize(location.pathname);
 document.querySelectorAll('#topnav nav a').forEach(link => {
  if (link.hasAttribute('download')) return;
  if (normalize(new URL(link.href).pathname) === current) link.setAttribute('aria-current', 'page');
 });
})();
