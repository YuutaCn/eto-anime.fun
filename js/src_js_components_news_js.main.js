(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_news_js"],{

/***/ "./src/js/components/news.js":
/*!***********************************!*\
  !*** ./src/js/components/news.js ***!
  \***********************************/
/***/ (() => {

const NEWS = [{
  "tittle": "Ищем редактора",
  "href": "#no-scrolling"
}, {
  "tittle": "Ищем разработчика",
  "href": "#no-scrolling"
}, {
  "tittle": "Ищем тебя",
  "href": "#no-scrolling"
}];
class NewsCard {
  render() {
    let htmlNews = '';
    NEWS.forEach(_ref => {
      let {
        tittle,
        href
      } = _ref;
      htmlNews += `
      <li class="aside__news-list-item">
        <a href="${href}" class="aside__news-btn">
          <div class="aside__news-btn-rect"></div>
          ${tittle}
        </a>
      </li>
      `;
    });
    document.querySelector('.aside__news-list').innerHTML = htmlNews;
  }
}
;
let card = new NewsCard();
card.render();

/***/ })

}]);
//# sourceMappingURL=src_js_components_news_js.main.js.map