(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_top-anime_js"],{

/***/ "./src/js/components/top-anime.js":
/*!****************************************!*\
  !*** ./src/js/components/top-anime.js ***!
  \****************************************/
/***/ (() => {

animePosition = 1;
class TopCard {
  render() {
    let htmlTopCard = '';
    const topAnimeArray = [...ANIME_PAGE_1];
    topAnimeArray.sort((x, y) => y.score - x.score);
    let ohAnime = topAnimeArray.splice(685, 100);
    ohAnime.forEach(_ref => {
      let {
        name,
        score,
        cover,
        href
      } = _ref;
      htmlTopCard += `
        <li class="top-anime__list-item">
        <div class="top-anime__list-item-shadow"></div>
        <a class="top-anime__list-item-href" href="${href}">
        <picture>
        <img loading="lazy" src="${cover}"
        class="image top-anime__list-item-img" width="333" height="125" alt="обложка аниме ${name.ru}">
        </picture>
        <div class="top-anime__list-item-position">
        <span class="top-anime__list-item-position-text">${animePosition}</span>
        </div>
        <h3 class="top-anime__list-item-tittle">${name.ru}</h3>
        </a>
        <span class="top-anime__list-item-score">${score}</span>
        </li>
        `;
      animePosition++;
    });
    document.querySelector('.top-anime__list').innerHTML = htmlTopCard;
  }
}
;
let topAnime = new TopCard();
topAnime.render();

/***/ })

}]);
//# sourceMappingURL=src_js_components_top-anime_js.main.js.map