
if (document.querySelector('.header')) {
  import('./components/news.js');
  import('./components/aside-nav');
  import('./components/new-series-upd');
  import('./components/search');
  import('./components/page-checker');
  document.querySelector('.header__nav-list-item-btn').addEventListener('click', () => {
    alert('Приносим свои глубочайшие извинения «Мяу», но логин временно не работает «Мяу».')
  });
};

if (document.querySelector('.player')) {
  import('./components/player');
};

if (document.querySelector('.anime-page')) {
  import('./components/anime-pages');
};

if (document.querySelector('.ongoing')) {
  import('./components/ongoing');
  document.querySelectorAll('.anime-swiper__ongoing-slide-prew-score').forEach(el => {
    if (parseFloat(el.innerHTML) < 7) {
      el.style.background = 'var(--secondary-color)';
    }
    if (parseFloat(el.innerHTML) < 6) {
      el.style.background = 'var(--secondary_shade-color)';
    }
    if (parseFloat(el.innerHTML) < 4) {
      el.style.background = 'var(--grey_shade-color)';
    }
  });
};

if (document.querySelector('.top-anime')) {
  import('./components/top-anime');
};

if (document.querySelector('.years-anime')) {
  import('./components/years-anime');
};

if (document.querySelector('.select-anime')) {
  import('./components/select-anime');
  import('./components/score-upd');
};

if (document.querySelector('.random__213211197214')) {
  import('./components/randop')
};

import './components/cross-page';
import './components/donation';
