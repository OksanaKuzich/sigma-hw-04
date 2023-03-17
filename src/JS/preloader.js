const preloader = document.querySelector('.preloader');
const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {
  body.classList.add('stopScroll');

  setTimeout(() => {
    preloader.classList.add('visually-hidden');
    preloader.classList.remove('active');
    body.classList.remove('stopScroll');
  }, 5000);
});
