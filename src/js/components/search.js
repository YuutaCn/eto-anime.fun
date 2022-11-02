let searchZone = document.querySelector('.header__form-search-zone');
const minlength = 3;

document.querySelector('.header__form-label-input').addEventListener('input', e => {
  let inputData = document.querySelector('.header__form-label-input').value.valueOf()
  if (inputData === '') {
    searchZone.classList.remove('--active');
  } else {
    if (inputData.length > 0 && inputData.length < minlength) {
      searchZone.classList.add('--active');
      searchZone.innerHTML = `Минимальная длинна запроса ${minlength} символа`;
    } else if (inputData.length >= minlength) {
      let searchHtml = '';
      const searchArray = [...ANIME_PAGE_1].filter(e => e.name.ru.toLowerCase().substr(0, inputData.length) == `${inputData.toLowerCase()}`);
      if (searchArray.length == 0) {
        searchZone.innerHTML = 'По твоему запросу ничего не найдено :('
      } else {
        searchArray.forEach(el => {
          searchHtml += `
        <a href="/${el.href}">${el.name.ru}</a>
        `;
          searchZone.innerHTML = searchHtml;
        });
      }
    };
  };
});

window.addEventListener('click', function(e){
  if (document.querySelector('.header__form').contains(e.target)){
    // Clicked in box
  } else{
    searchZone.classList.remove('--active');
  }
});

if (window.innerWidth < 1024 && window.innerWidth >= 768) {
  let searchStatus = false;
  document.querySelector('.header__form-btn').disabled = false;
  document.querySelector('.header__form-btn').addEventListener('click', () => {
    if (searchStatus == false) {
      document.querySelector('.header__form').style.width = '350px';
      document.querySelector('.header__form').style.gap = '10px';
      document.querySelector('.header__form').style.padding = '5px';
      document.querySelector('.header__form-label').style.width = '450px';
      searchStatus = true;
    } else {
      document.querySelector('.header__form').style.width = '';
      document.querySelector('.header__form').style.gap = '';
      document.querySelector('.header__form').style.padding = '';
      document.querySelector('.header__form-label').style.width = '';
      searchZone.classList.remove('--active');
      searchStatus = false;
    };
  });
  window.addEventListener('click', function(e){
    if (document.querySelector('.header__form').contains(e.target)){
      // Clicked in box
    } else{
      document.querySelector('.header__form').style.width = '';
      document.querySelector('.header__form').style.gap = '';
      document.querySelector('.header__form').style.padding = '';
      document.querySelector('.header__form-label').style.width = '';
      searchZone.classList.remove('--active');
      searchStatus = false;
    }
  });
};

if (window.innerWidth < 768 && window.innerWidth > 0) {
  let searchStatus = false;
  document.querySelector('.header__form-btn').disabled = false;
  document.querySelector('.header__form-btn').addEventListener('click', () => {
    if (searchStatus == false) {
      document.querySelector('.header__form').style.width = '90vw';
      document.querySelector('.header__form').style.gap = '10px';
      document.querySelector('.header__form').style.padding = '5px';
      document.querySelector('.header__form-label').style.width = '450px';
      document.querySelector('.header__burger').style.transition = 'all 250ms var(--default-cubic)';
      document.querySelector('.header__logo').style.transition = 'all 250ms var(--default-cubic)';
      document.querySelector('.header__burger').style.opacity = '0';
      document.querySelector('.header__burger').style.visibility = 'hidden';
      document.querySelector('.header__logo').style.opacity = '0';
      document.querySelector('.header__logo').style.visibility = 'hidden';
      searchStatus = true;
    } else {
      document.querySelector('.header__form').style.width = '';
      document.querySelector('.header__form').style.gap = '';
      document.querySelector('.header__form').style.padding = '';
      document.querySelector('.header__form-label').style.width = '';
      document.querySelector('.header__burger').style.opacity = '';
      document.querySelector('.header__burger').style.visibility = '';
      document.querySelector('.header__logo').style.opacity = '';
      document.querySelector('.header__logo').style.visibility = '';
      searchZone.classList.remove('--active');
      searchStatus = false;
    };
  });
  window.addEventListener('click', function(e){
    if (document.querySelector('.header__form').contains(e.target)){
      // Clicked in box
    } else{
      document.querySelector('.header__form').style.width = '';
      document.querySelector('.header__form').style.gap = '';
      document.querySelector('.header__form').style.padding = '';
      document.querySelector('.header__form-label').style.width = '';
      document.querySelector('.header__burger').style.opacity = '';
      document.querySelector('.header__burger').style.visibility = '';
      document.querySelector('.header__logo').style.opacity = '';
      document.querySelector('.header__logo').style.visibility = '';
      searchZone.classList.remove('--active');
      searchStatus = false;
    };
  });
};

