const spanEl = document.querySelector('#footerDate');

const today = new Date();
const year = today.getFullYear();

spanEl.innerHTML = year;
