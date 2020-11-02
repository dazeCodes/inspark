const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document .querySelectorAll('nav-links li');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})