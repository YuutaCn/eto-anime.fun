animePosition = 1;
seasYear = 2022;
class YearCard {

  render() {
    let htmlTopCard = '';
    const yearAnimeArray = [...ANIME_PAGE_1];
    let yearResArray = yearAnimeArray.filter(el => {
      return el.season == `Лето ${String(seasYear)}` || el.season == `Осень ${String(seasYear)}` || el.season == `Зима ${String(seasYear)}` || el.season == `Весна ${String(seasYear)}`
    })
    yearResArray.sort((x, y) => y.score - x.score);
    yearResArray.forEach(({ name, score, cover, href }) => {
        htmlTopCard += `
        <li class="years-anime__list-item">
        <div class="years-anime__list-item-shadow"></div>
        <a class="years-anime__list-item-href" href="${href}">
        <picture>
        <img loading="lazy" src="${cover}"
        class="image years-anime__list-item-img" width="333" height="125" alt="обложка аниме ${name.ru}">
        </picture>
        <div class="years-anime__list-item-position">
        <span class="years-anime__list-item-position-text">${animePosition}</span>
        </div>
        <h3 class="years-anime__list-item-tittle">${name.ru}</h3>
        <div class="link-clikcable"></div>
        </a>
        <span class="years-anime__list-item-score">${score}</span>
        </li>
        `
        animePosition++
      });
    document.querySelector('.years-anime__list').innerHTML = htmlTopCard;
  };
};

let yearCard = new YearCard();
yearCard.render();
