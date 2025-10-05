// The Koncept Studio - interactions and enhancements
// Mobile navigation toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

// Smooth scroll for internal links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Simple contact form handler (demo only)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name')?.value || '';
    alert(`Thank you, ${name || 'there'}! We'll get back to you shortly.`);
    form.reset();
  });
}

// Accessibility: close mobile menu on resize wider than breakpoint
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) navMenu?.classList.remove('open');
});
