// Nav Menu
const openMenu = document.querySelector('.navbar-main__toggler');
const closeMenu = document.querySelector('.navbar-button__close');
const menu = document.querySelector('.navbar-main__nav');
const menuLinks = document.querySelectorAll('.navbar-main__list li');

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