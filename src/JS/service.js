const servicesMarkup = arr => {
  const listEl = document.querySelector('.service__card-list');
  const markUp = arr
    .map(
      item => `<li class="service__card-item">
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
    btns.forEach(item => item.classList.remove('active'));
    e.target.classList.add('active');

    const filterWord = e.target.dataset.category;
    let filteredArray = [];

    console.log(e.target.classList[1]);

    if (filterWord === 'all' || e.target.classList[1] === 'active') {
      filteredArray = allServices(services);
    } else {
      filteredArray = services.filter(item => item.category === filterWord);
    }
    servicesMarkup(filteredArray);
  };

  btns.forEach(btn => btn.addEventListener('click', filterData));
};

serv();
