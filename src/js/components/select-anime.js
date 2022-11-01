class AnimeSelect {

  renderGenre(genreModificator) {
    let htmlSelectCard = '';
    let selectResAnime = ANIME_PAGE_1.filter(e => {
      // for (let i = 0; i < 20; i++) {
      //   return e.genre[i] == genreModificator;
      // };
      return e.genre[0] == genreModificator || e.genre[1] == genreModificator || e.genre[2] == genreModificator || e.genre[3] == genreModificator || e.genre[4] == genreModificator || e.genre[5] == genreModificator || e.genre[6] == genreModificator || e.genre[7] == genreModificator || e.genre[9] == genreModificator || e.genre[8] == genreModificator || e.genre[10] == genreModificator || e.genre[11] == genreModificator || e.genre[12] == genreModificator || e.genre[13] == genreModificator || e.genre[14] == genreModificator || e.genre[15] == genreModificator;
    });
    selectResAnime.sort((x, y) => y.score - x.score);
    selectResAnime.forEach(({ name, score, cover, href }) => {
      htmlSelectCard += `
      <li class="select-anime__list-item">
      <div class="select-anime__list-item-shadow"></div>
      <a class="select-anime__list-item-href transition" href="/${href}">
      <picture>
      <img loading="lazy" src="${cover}"
      class="image select-anime__list-item-img" width="333" height="125" alt="обложка аниме ${name.ru}">
      </picture>
      <h3 class="select-anime__list-item-tittle">${name.ru}</h3>
      <div class="link-clikcable"></div>
      </a>
      <span class="select-anime__list-item-score">${score}</span>
      </li>
      `;
    });
    document.querySelector('.select-anime__list').innerHTML = htmlSelectCard;
  };

  renderStatus(statusModificator) {
    let htmlSelectCard = '';
    let selectResAnime = ANIME_PAGE_1.filter(e => e.status == statusModificator);
    selectResAnime.sort((x, y) => y.score - x.score);
    selectResAnime.forEach(({ name, score, cover, href }) => {
      htmlSelectCard += `
      <li class="select-anime__list-item">
      <div class="select-anime__list-item-shadow"></div>
      <a class="select-anime__list-item-href transition" href="/${href}">
      <picture>
      <img loading="lazy" src="${cover}"
      class="image select-anime__list-item-img" width="333" height="125" alt="обложка аниме ${name.ru}">
      </picture>
      <h3 class="select-anime__list-item-tittle">${name.ru}</h3>
      <div class="link-clikcable"></div>
      </a>
      <span class="select-anime__list-item-score">${score}</span>
      </li>
      `;
    });
    document.querySelector('.select-anime__list').innerHTML = htmlSelectCard;
  };

  renderType(typeModificator) {
    let htmlSelectCard = '';
    let selectResAnime = ANIME_PAGE_1.filter(e => e.type == typeModificator);
    selectResAnime.sort((x, y) => y.score - x.score);
    selectResAnime.forEach(({ name, score, cover, href }) => {
      htmlSelectCard += `
      <li class="select-anime__list-item">
      <div class="select-anime__list-item-shadow"></div>
      <a class="select-anime__list-item-href transition" href="/${href}">
      <picture>
      <img loading="lazy" src="${cover}"
      class="image select-anime__list-item-img" width="333" height="125" alt="обложка аниме ${name.ru}">
      </picture>
      <h3 class="select-anime__list-item-tittle">${name.ru}</h3>
      <div class="link-clikcable"></div>
      </a>
      <span class="select-anime__list-item-score">${score}</span>
      </li>
      `;
    });
    document.querySelector('.select-anime__list').innerHTML = htmlSelectCard;
  };
};

if (window.location.pathname.split('/').slice(0,3).join('/') == '/pages/genre') {
  let animeSelect = new AnimeSelect();
  animeSelect.renderGenre(document.querySelector('.main__content_h1').textContent.split(' ').slice(0,1).join(' '));
};

if (window.location.pathname.split('/').slice(0,3).join('/') == '/pages/status') {
  let animeSelect = new AnimeSelect();
  animeSelect.renderStatus(document.querySelector('.main__content_h1').textContent.split(' ').slice(0,1).join(' '));
};

if (window.location.pathname.split('/').slice(0,3).join('/') == '/pages/type') {
  let animeSelect = new AnimeSelect();
  animeSelect.renderType(document.querySelector('.main__content_h1').textContent.split(' ').slice(0,1).join(' '));
};
