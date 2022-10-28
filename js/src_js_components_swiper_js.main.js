"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_swiper_js"],{

/***/ "./src/js/components/swiper.js":
/*!*************************************!*\
  !*** ./src/js/components/swiper.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Grid]);
const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.anime-swiper', {
  pagination: {
    el: '.swiper-nav-pagination',
    clickable: true,
    type: 'bullets',
    dynamicBullets: true,
    dynamicMainBullets: 4
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
  simulateTouch: true
});

/***/ })

}]);
//# sourceMappingURL=src_js_components_swiper_js.main.js.map