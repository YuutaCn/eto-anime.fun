(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_years-anime_js"],{

/***/ "./src/js/components/years-anime.js":
/*!******************************************!*\
  !*** ./src/js/components/years-anime.js ***!
  \******************************************/
/***/ (() => {

animePosition = 1;
seasYear = 2022;
class YearCard {
  render() {
    let htmlTopCard = '';
    const yearAnimeArray = [...ANIME_PAGE_1];
    let yearResArray = yearAnimeArray.filter(el => {
      return el.season == `Лето ${String(seasYear)}` || el.season == `Осень ${String(seasYear)}` || el.season == `Зима ${String(seasYear)}` || el.season == `Весна ${String(seasYear)}`;
    });
    yearResArray.sort((x, y) => y.score - x.score);
    yearResArray.forEach(_ref => {
      let {
        name,
        score,
        cover,
        href
      } = _ref;
      htmlTopCard += `
        <li class="years-anime__list-item">
        <div class="years-anime__list-item-shadow"></div>
        <a class="years-anime__list-item-href" href="${href}">
        <picture>
        <img loading="lazy" src="${cover}"
        class="image years-anime__list-item-img" width="333" height="125" alt="обложка аниме ${name.ru}">
        </picture>
        <div class="years-anime__list-item-position">
        <span class="years-anime__list-item-position-text">${animePosition}</span>
        </div>
        <h3 class="years-anime__list-item-tittle">${name.ru}</h3>
        </a>
        <span class="years-anime__list-item-score">${score}</span>
        </li>
        `;
      animePosition++;
    });
    document.querySelector('.years-anime__list').innerHTML = htmlTopCard;
  }
}
;
let yearCard = new YearCard();
yearCard.render();

/***/ })

}]);
//# sourceMappingURL=src_js_components_years-anime_js.main.js.map