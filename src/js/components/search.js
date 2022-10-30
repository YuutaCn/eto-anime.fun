// const minLenght = 3;
// let stringi = '';

// document.querySelector('.header__form-label-input').addEventListener('input', e => {
//   if (document.querySelector('.header__form-label-input').value === '') {
//     document.querySelector('.header__form-search-zone').classList.remove('--active');
//     stringi = '';
//   } else {
//     if (e.data) {
//       stringi += e.data;
//     } else if (e.data == null) {
//       stringi = stringi.slice(0, -1);
//     };

//     if (stringi.length > 0 && stringi.length < minLenght) {
//       document.querySelector('.header__form-search-zone').classList.add('--active');
//       document.querySelector('.header__form-search-zone').innerHTML = `Минимальная длиннаа запроса ${minLenght} символа`;
//     } else if (stringi.length >= 4) {
//       let searchHtml = '';
//       const searchArray = [...ANIME_PAGE_1].filter(e => e.name.ru.toLowerCase().substr(0, stringi.length) == `${document.querySelector('.header__form-label-input').value.toLowerCase()}`)
//       searchArray.forEach(el => {
//         searchHtml += `
//         <a href="${el.href}">${el.name.ru}</a>
//         `;
//       });
//       console.log(stringi);
//       document.querySelector('.header__form-search-zone').innerHTML = searchHtml;
//     };
//   };
// });
