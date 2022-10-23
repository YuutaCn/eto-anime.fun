const NEWS = [
  {
    "tittle": "Ищем редактора",
    "href": "#no-scrolling"
  },
  {
    "tittle": "Ищем разработчика",
    "href": "#no-scrolling"
  },
  {
    "tittle": "Ищем тебя",
    "href": "#no-scrolling"
  },
  {
    "tittle": "Ищем качественный хентай с лолями",
    "href": "#no-scrolling"
  },
]

class NewsCard {
  render() {
    let htmlNews = '';
    NEWS.forEach(({ tittle, href }) => {
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
let card = new NewsCard()
card.render()
