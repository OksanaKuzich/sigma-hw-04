const formEl = document.querySelector('.signUp__form');

const getFormData = e => {
  e.preventDefault();
  const person = {
    name: e.target.elements.name.value,
    surname: e.target.elements.surname.value,
    email: e.target.elements.email.value,
  };
  console.log(person);

  localStorage.setItem('person', JSON.stringify(person));
};

formEl.addEventListener('submit', getFormData);
