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
        <a href="${el.href}">${el.name.ru}</a>
        `;
          searchZone.innerHTML = searchHtml;
        });
      }
    };
  };
});
