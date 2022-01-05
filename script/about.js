// Nav Menu
const openMenu = document.querySelector('.navbar_toggler');
const closeMenu = document.querySelector('.navbar-button_close');
const menu = document.querySelector('.navbar_nav');
const menuLinks = document.querySelectorAll('.navbar_list li');

closeMenu.addEventListener('click', () => {
  menu.classList.toggle('collapse');
});

openMenu.addEventListener('click', () => {
  menu.classList.toggle('collapse');
});

menuLinks.forEach((li) => {
  li.addEventListener('click', () => {
    menu.classList.toggle('collapse');
  });
});