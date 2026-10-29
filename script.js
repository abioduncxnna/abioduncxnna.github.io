// 1. Fade sections in as they scroll into view
const sections = document.querySelectorAll('section');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach((section) => {
  section.classList.add('reveal');
  revealObserver.observe(section);
});

// 2. Highlight the menu link for the section on screen
const navLinks = document.querySelectorAll('.nav-links a');

function setActive(id) {
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
  });
}

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setActive(entry.target.id);
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((section) => navObserver.observe(section));

// 3. At the very bottom of the page, highlight Contact
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    setActive('contact');
  }
});