class NewSeries {

  render() {
    let htmlNewSeries = '';
    const newSeriesArray = [...ANIME_PAGE_1];
    newSeriesArray.sort((x, y) => y.last_upd - x.last_upd);
    let lastUpdAnime = newSeriesArray.splice(0, 5);
    lastUpdAnime.forEach(({ name, series, cover, href }) => {
      htmlNewSeries += `
      <li class="aside__new-series-list-item">
        <a class="aside__new-series-list-item-href transition" href="${href}">
          <picture>
            <img loading="lazy" src="${cover}" class="image aside__new-series-list-item-img" width="45" height="45" alt="обложка ${name}">
          </picture>
          <div class="aside__new-series-list-item-text">
            <p class="aside__new-series-list-item-text-name">${name.ru}</p>
            <span class="aside__new-series-list-item-text-series">${series.last} серия</span>
          </div>
        </a>
      </li>
      `;
    });
    document.querySelector('.aside__new-series-list').innerHTML = htmlNewSeries;
  }
}

let newSeries = new NewSeries()
newSeries.render()
