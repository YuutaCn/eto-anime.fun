import './components/news.js'
import './components/aside-nav'
import './components/new-series-upd'

if (document.querySelector('.player')) {
  import('./components/player')
}

if (document.querySelector('.anime-page')) {
  import('./components/anime-pages')
}
