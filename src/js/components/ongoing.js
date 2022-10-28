import Swiper, { Grid, Navigation, Pagination } from 'swiper';
Swiper.use([Pagination, Grid, Navigation]);
const swiper = new Swiper('.anime-swiper', {
  pagination: {
    el: '.swiper-nav-pagination',
    clickable: true,
    type: 'bullets',
    dynamicBullets: true,
    dynamicMainBullets: 13,
  },
  navigation:{
    nextEl: '.swiper-nav-next',
    prevEl: '.swiper-nav-prev',
  },
  slidesPerView: 6,
  slidesPerGroup: 6,
  spaceBetween: 46,
  speed: 800,
  grid: {
    fill: 'row',
    rows: 2,
  },
  simulateTouch: true
});


class OngoingCard {


  render(count = 'Онгоинг') {
    const limit = 25;

    function maxLenght(e) {
      if (String(e).length >= limit) {
        return String(e).slice(0, limit).trim() + '...';
      } else {
        return String(e);
      };
    };

    let htmlOngoingCard = '';
    const ongoingArray = [...ANIME_PAGE_1].filter(el => el.status == `${count}`);
    ongoingArray.forEach(e => {
      htmlOngoingCard += `
      <div class="swiper-slide anime-swiper__ongoing-slide">
      <a class="swiper-slide anime-swiper__ongoing-slide-href transition" href="${e.href}">
        <div class="anime-swiper__ongoing-slide-prew">
          <picture>
            <img loading="lazy" src="${e.cover}"
              class="image anime-swiper__ongoing-slide-prew-img" width="158" height="245" alt="обложка аниме ${e.name.ru}">
          </picture>
          <div class="anime-swiper__ongoing-slide-prew-score">${e.score}</div>
          <div class="anime-swiper__ongoing-slide-prew-series">${e.series.last}/${e.series.all} серий</div>
        </div>
        ${maxLenght(e.name.ru)}
      </a>
    </div>`;
    });
    document.querySelector('.anime-swiper__ongoing').innerHTML += htmlOngoingCard;
  };
};

let ongoingPageUpd = new OngoingCard();
ongoingPageUpd.render();
