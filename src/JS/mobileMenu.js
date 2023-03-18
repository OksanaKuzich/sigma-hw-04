const mobileBtnOpen = document.querySelector('.mobile-menu__btn');
const mobileBtnClose = document.querySelector('.mobile__menu-close');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.mobile__menu-link');
const backdrop = document.querySelector('.mobile__menu-wrapper');

const modalOpen = () => {
  body.classList.add('stopScroll');
  backdrop.classList.remove('visually-hidden');
};

const modalClose = () => {
  backdrop.classList.add('visually-hidden');
  body.classList.remove('stopScroll');
};

const closeForBackDrop = e => {
  if (!e.target.className.includes('mobile__menu-wrapper')) {
    return;
  }

  modalClose();
};

mobileBtnOpen.addEventListener('click', modalOpen);
mobileBtnClose.addEventListener('click', modalClose);
navLinks.forEach(link => link.addEventListener('click', modalClose));
backdrop.addEventListener('click', closeForBackDrop);
