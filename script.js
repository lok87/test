const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.site-nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
}));

const reveal = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
