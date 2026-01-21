// Example: Add touch event support for mobile devices
document.addEventListener('touchstart', function(event) {
    // Handle touch interactions
}, { passive: true });

// Example: Ensure dropdowns or menus are mobile-friendly
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('open');
});