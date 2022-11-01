"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_ongoing_js"],{

/***/ "./src/js/components/ongoing.js":
/*!**************************************!*\
  !*** ./src/js/components/ongoing.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Grid, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);
const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.anime-swiper', {
  pagination: {
    el: '.swiper-nav-pagination',
    clickable: true,
    type: 'bullets',
    dynamicBullets: true,
    dynamicMainBullets: 13
  },
  navigation: {
    nextEl: '.swiper-nav-next',
    prevEl: '.swiper-nav-prev'
  },
  slidesPerView: 6,
  slidesPerGroup: 6,
  spaceBetween: 46,
  speed: 800,
  grid: {
    fill: 'row',
    rows: 2
  },
  simulateTouch: true,
  on: {
    slideChange: function () {
      document.querySelector('.swiper-pages-pos').innerHTML = `${Math.round(swiper.realIndex / 6) + 1} из ${Math.round(swiper.slides.length / (6 * 2))}`;
    }
  }
});
class OngoingCard {
  render() {
    let count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Онгоинг';
    const limit = 25;
    function maxLenght(e) {
      if (String(e).length >= limit) {
        return String(e).slice(0, limit).trim() + '...';
      } else {
        return String(e);
      }
      ;
    }
    ;
    let htmlOngoingCard = '';
    const ongoingArray = [...ANIME_PAGE_1].filter(el => el.status == `${count}`);
    ongoingArray.forEach(e => {
      htmlOngoingCard += `
      <div class="swiper-slide anime-swiper__ongoing-slide">
      <a class="swiper-slide anime-swiper__ongoing-slide-href transition" href="${e.href}">
        <div class="anime-swiper__ongoing-slide-prew">
          <picture>
            <img loading="lazy" src="${e.cover}"
              class="image anime-swiper__ongoing-slide-prew-img" width="158" height="245" alt="обложка аниме ${e.name.ru}">
          </picture>
          <div class="anime-swiper__ongoing-slide-prew-score">${e.score}</div>
          <div class="anime-swiper__ongoing-slide-prew-series">${e.series.last}/${e.series.all} серий</div>
        </div>
        ${maxLenght(e.name.ru)}
      </a>
    </div>`;
    });
    document.querySelector('.anime-swiper__ongoing').innerHTML += htmlOngoingCard;
  }
}
;
let ongoingPageUpd = new OngoingCard();
ongoingPageUpd.render();

/***/ })

}]);
//# sourceMappingURL=src_js_components_ongoing_js.main.js.map