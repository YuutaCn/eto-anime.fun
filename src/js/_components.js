import './components/news.js';
import './components/aside-nav';

if (document.querySelector('.player')) {
  import('./components/player')
};

if (document.querySelector('.anime-page')) {
  import('./components/anime-pages')
};

document.addEventListener('DOMContentLoaded', () => {
  import('./components/new-series-upd')
})
