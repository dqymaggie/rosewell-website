// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

if (menuIcon && mobileMenu && closeMenu) {
  menuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('show');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });
}
