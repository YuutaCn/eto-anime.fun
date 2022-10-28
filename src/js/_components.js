import './components/news.js';
import './components/aside-nav';
import './components/new-series-upd';
import './components/cross-page'
import './components/search'

if (document.querySelector('.player')) {
  import('./components/player')
};

if (document.querySelector('.anime-page')) {
  import('./components/anime-pages')
};

if (document.querySelector('.ongoing')) {
  import('./components/ongoing')
}
