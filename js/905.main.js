"use strict";(self.webpackChunkgulp_builder=self.webpackChunkgulp_builder||[]).push([[905],{905:(e,i,n)=>{n.r(i);var s=n(803);s.ZP.use([s.tl,s.rj,s.W_]),new s.ZP(".anime-swiper",{pagination:{el:".swiper-nav-pagination",clickable:!0,type:"bullets",dynamicBullets:!0,dynamicMainBullets:13},navigation:{nextEl:".swiper-nav-next",prevEl:".swiper-nav-prev"},slidesPerView:6,slidesPerGroup:6,spaceBetween:46,speed:800,grid:{fill:"row",rows:2},simulateTouch:!0}),(new class{render(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Онгоинг",i="";[...ANIME_PAGE_1].filter((i=>i.status==`${e}`)).forEach((e=>{i+=`\n      <div class="swiper-slide anime-swiper__ongoing-slide">\n      <a class="swiper-slide anime-swiper__ongoing-slide-href transition" href="${e.href}">\n        <div class="anime-swiper__ongoing-slide-prew">\n          <picture>\n            <img loading="lazy" src="${e.cover}"\n              class="image anime-swiper__ongoing-slide-prew-img" width="158" height="245" alt="обложка аниме ${e.name.ru}">\n          </picture>\n          <div class="anime-swiper__ongoing-slide-prew-score">${e.score}</div>\n          <div class="anime-swiper__ongoing-slide-prew-series">${e.series.last}/${e.series.all} серий</div>\n        </div>\n        ${function(e){return String(e).length>=25?String(e).slice(0,25).trim()+"...":String(e)}(e.name.ru)}\n      </a>\n    </div>`})),document.querySelector(".anime-swiper__ongoing").innerHTML+=i}}).render()}}]);