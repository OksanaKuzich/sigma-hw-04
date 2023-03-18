const findIcon = category => {
  let icon;

  switch (category) {
    case 'design':
      icon = ` <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        class="service__card-icon"
      >
        <path
          fill="#000000"
          d="M5 2h-2c-0.55 0-1 0.45-1 1v2c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1z"
        ></path>
        <path
          fill="#000000"
          d="M11 6h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v2c0 0.55 0.45 1 1 1zM11 3h2v2h-2v-2z"
        ></path>
        <path
          fill="#000000"
          d="M5 10h-2c-0.55 0-1 0.45-1 1v2c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1zM5 13h-2v-2h2v2z"
        ></path>
        <path
          fill="#000000"
          d="M13 10h-2c-0.55 0-1 0.45-1 1v2c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1z"
        ></path>
        <path
          fill="#000000"
          d="M14 8h-1c-1.336 0-2.591-0.52-3.536-1.464s-1.464-2.2-1.464-3.536v-1c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v4c0 1.1 0.9 2 2 2h1c1.336 0 2.591 0.52 3.536 1.464s1.464 2.2 1.464 3.536v1c0 1.1 0.9 2 2 2h4c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2zM15 14c0 0.265-0.105 0.515-0.295 0.705s-0.44 0.295-0.705 0.295h-4c-0.265 0-0.515-0.105-0.705-0.295s-0.295-0.44-0.295-0.705v-1c0-3.314-2.686-6-6-6h-1c-0.265 0-0.515-0.105-0.705-0.295s-0.295-0.441-0.295-0.705v-4c0-0.265 0.105-0.515 0.295-0.705s0.44-0.295 0.705-0.295h4c0.265 0 0.515 0.105 0.705 0.295s0.295 0.44 0.295 0.705v1c0 3.314 2.686 6 6 6h1c0.265 0 0.515 0.105 0.705 0.295s0.295 0.44 0.295 0.705v4z"
        ></path>
      </svg>`;
      break;
    case 'architecture':
      icon = `<svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        class="service__card-icon"
      >
        <path
          fill="#000000"
          d="M0 16h8v-16h-8v16zM5 2h2v2h-2v-2zM5 6h2v2h-2v-2zM5 10h2v2h-2v-2zM1 2h2v2h-2v-2zM1 6h2v2h-2v-2zM1 10h2v2h-2v-2zM9 5h7v1h-7zM9 16h2v-4h3v4h2v-9h-7z"
        ></path>
      </svg>`;
      break;
    case 'planning':
      icon = `<svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        class="service__card-icon"

      >
        <path
          fill="#000000"
          d="M5 6h2v2h-2zM8 6h2v2h-2zM11 6h2v2h-2zM2 12h2v2h-2zM5 12h2v2h-2zM8 12h2v2h-2zM5 9h2v2h-2zM8 9h2v2h-2zM11 9h2v2h-2zM2 9h2v2h-2zM13 0v1h-2v-1h-7v1h-2v-1h-2v16h15v-16h-2zM14 15h-13v-11h13v11z"
        ></path>
      </svg>`;
      break;

    default:
      icon = `<svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        class="service__card-icon"

      >
        <path
          fill="#000000"
          d="M5 2h-2c-0.55 0-1 0.45-1 1v2c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1z"
        ></path>
        <path
          fill="#000000"
          d="M11 6h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v2c0 0.55 0.45 1 1 1zM11 3h2v2h-2v-2z"
        ></path>
        <path
          fill="#000000"
          d="M5 10h-2c-0.55 0-1 0.45-1 1v2c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1zM5 13h-2v-2h2v2z"
        ></path>
        <path
          fill="#000000"
          d="M13 10h-2c-0.55 0-1 0.45-1 1v2c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1z"
        ></path>
        <path
          fill="#000000"
          d="M14 8h-1c-1.336 0-2.591-0.52-3.536-1.464s-1.464-2.2-1.464-3.536v-1c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v4c0 1.1 0.9 2 2 2h1c1.336 0 2.591 0.52 3.536 1.464s1.464 2.2 1.464 3.536v1c0 1.1 0.9 2 2 2h4c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2zM15 14c0 0.265-0.105 0.515-0.295 0.705s-0.44 0.295-0.705 0.295h-4c-0.265 0-0.515-0.105-0.705-0.295s-0.295-0.44-0.295-0.705v-1c0-3.314-2.686-6-6-6h-1c-0.265 0-0.515-0.105-0.705-0.295s-0.295-0.441-0.295-0.705v-4c0-0.265 0.105-0.515 0.295-0.705s0.44-0.295 0.705-0.295h4c0.265 0 0.515 0.105 0.705 0.295s0.295 0.44 0.295 0.705v1c0 3.314 2.686 6 6 6h1c0.265 0 0.515 0.105 0.705 0.295s0.295 0.44 0.295 0.705v4z"
        ></path>
      </svg>`;
      break;
  }

  return icon;
};

const servicesMarkup = arr => {
  const listEl = document.querySelector('.service__card-list');
  const markUp = arr
    .map(
      item => `<li class="service__card-item">
      ${findIcon(item.category)}
                <h3 class="service__card-title">${item.title}</h3>
                <p class="service__card-content">
                ${item.subtitle}
                </p>
              </li>`
    )
    .join('');

  listEl.innerHTML = markUp;
};

const allServices = arr => {
  return [...arr].reverse().reduce((acc, service) => {
    if (acc.length > 0 && acc.some(i => i.category === service.category)) {
      return acc;
    }
    return [...acc, service];
  }, []);
};

const serv = async () => {
  const services = await import('../data/service.json');

  const firstRender = allServices(services);
  servicesMarkup(firstRender);

  const btns = document.querySelectorAll('.service__btn');

  const filterData = e => {
    const filterWord = e.target.dataset.category;
    let filteredArray = [];
    if (filterWord === 'all' || [...e.target.classList].includes('active')) {
      e.target.classList.remove('active');
      btns[0].classList.add('active');
      filteredArray = allServices(services);
    } else {
      btns.forEach(item => item.classList.remove('active'));
      e.target.classList.add('active');
      filteredArray = services.filter(item => item.category === filterWord);
    }

    servicesMarkup(filteredArray);
  };

  btns.forEach(btn => btn.addEventListener('click', filterData));
};

serv();
