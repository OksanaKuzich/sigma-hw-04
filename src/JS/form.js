import { format } from 'date-fns';

// confetti
let end = Date.now() + 5 * 1000;
let colors = ['#bb0000', '#ffffff'];
const frame = () => {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.9 },
    colors: colors,
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.9 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
};

const today = format(new Date(), 'd.MM.yyy');
const message = `Only today ${today} you have a 120% discount :)`;

const formEl = document.querySelector('.signUp__form');

const getFormData = e => {
  e.preventDefault();
  const person = {
    name: e.target.elements.name.value,
    surname: e.target.elements.surname.value,
    email: e.target.elements.email.value,
  };

  localStorage.setItem('person', JSON.stringify(person));

  if (person.name === 'Oksana') {
    frame();
    setTimeout(() => {
      alert(message);
    }, 4000);
  }

  formEl.reset();
};

formEl.addEventListener('submit', getFormData);
