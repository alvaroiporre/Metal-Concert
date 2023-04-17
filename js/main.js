const hamburguer = document.querySelector('.hamburguer');
const nav_main = document.querySelector('.nav-main');


hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    nav_main.classList.toggle('menu_active');
});