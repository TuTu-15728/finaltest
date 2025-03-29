// Mobile menu functionality
function setupMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
      document.querySelector('.menu-icon').classList.toggle('hidden');
      document.querySelector('.close-icon').classList.toggle('hidden');
    });
  }
}

// Initialize when components are loaded
window.addEventListener('components-loaded', setupMobileMenu);

// If components are already loaded
if (document.querySelector('.navbar')) {
  setupMobileMenu();
}