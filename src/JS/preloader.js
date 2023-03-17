const preloader = document.querySelector('.preloader');

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    preloader.classList.add('visually-hidden');
  }, 5000);
});
