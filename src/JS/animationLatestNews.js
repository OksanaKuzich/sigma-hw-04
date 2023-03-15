(function () {
  let listEl = document.querySelector('.news__list');
  let itemsEl = listEl.querySelectorAll('.news__item');
  itemsEl.forEach(itemEl => itemEl.classList.remove('news__transition'));

  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (
        typeof getCurrentAnimationPreference === 'function' &&
        !getCurrentAnimationPreference()
      ) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('news__transition');
        return;
      }

      entry.target.classList.remove('news__transition');
    });
  });

  itemsEl.forEach(itemEl => observer.observe(itemEl));
})();
