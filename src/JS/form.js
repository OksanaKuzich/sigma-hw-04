import { format } from 'date-fns';
import frame from './confetti';

const formEl = document.querySelector('.signUp__form');

const today = format(new Date(), 'd.MM.yyy');
const message = `Only today ${today} you have a 120% discount :)`;

const getFormData = e => {
  e.preventDefault();
  const timeEnd = new Date().getTime() + 5000;

  const person = {
    name: e.target.elements.name.value,
    surname: e.target.elements.surname.value,
    email: e.target.elements.email.value,
  };

  localStorage.setItem('person', JSON.stringify(person));

  if (person.name === 'Oksana') {
    frame(timeEnd);

    setTimeout(() => {
      alert(message);
    }, 4000);
  }

  formEl.reset();
};

formEl.addEventListener('submit', getFormData);
