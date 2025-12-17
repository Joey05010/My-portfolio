// Smooth scroll adjustment for fixed nav height
const nav = document.querySelector('nav');
const navHeight = nav.offsetHeight; // Gets the height dynamically

document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    // Close the mobile menu on link click
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    }

    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Recalculate nav height just in case
      const currentNavHeight = document.querySelector('nav').offsetHeight;
      // Adjust target position by the navigation bar's height plus a small margin (10px)
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - currentNavHeight - 10;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });
});

// Toggle hamburger menu (Added for mobile view)
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Check if elements exist before adding listeners
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });

    // Close menu when a link is clicked (useful for mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
  }
});