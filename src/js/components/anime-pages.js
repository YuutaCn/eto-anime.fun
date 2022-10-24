class AnimePageUpd {

  render() {
    let realPage = window.location.pathname.slice(4, -5)
    let pageArray = ANIME_PAGE_1.filter(el => el.id == realPage)
    pageArray.forEach((e) => {
      document.querySelector('.anime-page__tittle-ru').innerHTML = e.name.ru;
      document.querySelector('.anime-page__tittle-en').innerHTML = e.name.en;
      document.querySelector('.anime-page__short-cover').src = e.cover;
      document.querySelector('.anime-page__short-cover').alt = `обложка аниме ${e.name.ru}`;
      document.querySelector('.anime-page__short-sheet-list-item-status').innerHTML = e.status;
      document.querySelector('.anime-page__short-sheet-list-item-ep').innerHTML =
        `${e.series.last}/${e.series.all}`;
      document.querySelector('.anime-page__short-sheet-list-item-season').innerHTML = e.season;
      document.querySelector('.anime-page__short-sheet-list-item-type').innerHTML = e.type;
      e.genre.forEach((genre) => {
        document.querySelector('.anime-page__short-sheet-list-item-genre').innerHTML += `
        <li class="anime-page__short-sheet-list-item-genre-item"><a
        class="anime-page__short-sheet-list-item-genre-item-href link t-cap"
        href="#no-scrolling">${genre.a}</a></li>
        `;
      });
      e.translate.forEach((translate) => {
        document.querySelector('.anime-page__short-sheet-list-item-translate').innerHTML += `
        <li class="anime-page__short-sheet-list-item-translate-item">
          <a class="anime-page__short-sheet-list-item-translate-item-href link" href="#no-scrolling">${translate.a}</a>
        </li>
        `;
      });
      document.querySelector('.anime-page__short-sheet-list-item-studio').innerHTML = e.studio;
      document.querySelector('.player-tittle__anime').innerHTML = e.name.ru;
      document.querySelector('.anime-page__desc-tittle-anime').innerHTML = e.name.ru;
      document.querySelector('.anime-page__desc-text').innerHTML = e.desc;
      document.querySelector('.player__video').src = e.frame;
      document.querySelector('.footer__chibi-img').src = e.chibi;
    })
  }
}

let animePageUpd = new AnimePageUpd()
animePageUpd.render()
