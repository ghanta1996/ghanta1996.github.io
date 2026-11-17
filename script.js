(() => {
 document.getElementById('year').textContent = new Date().getFullYear();
 const current = location.pathname.split('/').pop() || 'index.html';
 document.querySelectorAll('nav a').forEach(link => {
  if (link.hasAttribute('download')) return;
  const target = new URL(link.href).pathname.split('/').pop() || 'index.html';
  if (target === current) link.setAttribute('aria-current', 'page');
 });
})();
