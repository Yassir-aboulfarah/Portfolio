// Scroll reveal
const io = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
  { threshold: 0.07 }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Nav active link
const secs  = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-ul a');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 80) cur = s.id; });
  links.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--white)' : '';
  });
}, { passive: true });
