import './components/news.js';
import './components/aside-nav';
import './components/new-series-upd';
import './components/cross-page'
import './components/search'
import './components/page-checker'

if (document.querySelector('.player')) {
  import('./components/player')
};

if (document.querySelector('.anime-page')) {
  import('./components/anime-pages')
};

if (document.querySelector('.ongoing')) {
  import('./components/ongoing')
}

if (document.querySelector('.top-anime')) {
  import('./components/top-anime')
}

if (document.querySelector('.years-anime')) {
  import('./components/years-anime')
}

if (document.querySelector('.select-anime')) {
  import('./components/select-anime')
}
