let body = document.querySelector('body');
// MENÚ
let headerContainer = document.getElementById('header-container'),
    menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', () => {
    headerContainer.classList.toggle('menu-active');
    body.classList.toggle('body_withoutScroll');
})