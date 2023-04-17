const hamburguer = document.querySelector('.hamburguer');
const navMain = document.querySelector('.nav-main');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMain.classList.toggle('menu_active');
});