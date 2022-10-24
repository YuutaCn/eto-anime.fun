import Swiper, { Grid, Pagination } from 'swiper';
Swiper.use([Pagination, Grid]);
const swiper = new Swiper('.anime-swiper', {
  pagination: {
    el: '.swiper-nav-pagination',
    clickable: true,
    type: 'bullets',
    dynamicBullets: true,
    dynamicMainBullets: 4,
  },
  navigation:{
    nextEl: '.swiper-nav-next',
    prevEl: '.swiper-nav-prev',
  },
  slidesPerView: 6,
  slidesPerGroup: 6,
  spaceBetween: 46,
  speed: 800,
  grid: {
    fill: 'row',
    rows: 2,
  },
  simulateTouch: true
});
