(self.webpackChunkgulp_builder=self.webpackChunkgulp_builder||[]).push([[231],{231:()=>{class e{renderGenre(e){let t="",n=ANIME_PAGE_1.filter((t=>t.genre[0]==e||t.genre[1]==e||t.genre[2]==e||t.genre[3]==e||t.genre[4]==e||t.genre[5]==e||t.genre[6]==e||t.genre[7]==e||t.genre[9]==e||t.genre[8]==e||t.genre[10]==e||t.genre[11]==e||t.genre[12]==e||t.genre[13]==e||t.genre[14]==e||t.genre[15]==e));n.sort(((e,t)=>t.score-e.score)),n.forEach((e=>{let{name:n,score:i,cover:s,href:l}=e;t+=`\n      <li class="select-anime__list-item">\n      <div class="select-anime__list-item-shadow"></div>\n      <a class="select-anime__list-item-href transition" href="/${l}">\n      <picture>\n      <img loading="lazy" src="${s}"\n      class="image select-anime__list-item-img" width="333" height="125" alt="обложка аниме ${n.ru}">\n      </picture>\n      <h3 class="select-anime__list-item-tittle">${n.ru}</h3>\n      <div class="link-clikcable"></div>\n      </a>\n      <span class="select-anime__list-item-score">${i}</span>\n      </li>\n      `})),document.querySelector(".select-anime__list").innerHTML=t}renderStatus(e){let t="",n=ANIME_PAGE_1.filter((t=>t.status==e));n.sort(((e,t)=>t.score-e.score)),n.forEach((e=>{let{name:n,score:i,cover:s,href:l}=e;t+=`\n      <li class="select-anime__list-item">\n      <div class="select-anime__list-item-shadow"></div>\n      <a class="select-anime__list-item-href transition" href="/${l}">\n      <picture>\n      <img loading="lazy" src="${s}"\n      class="image select-anime__list-item-img" width="333" height="125" alt="обложка аниме ${n.ru}">\n      </picture>\n      <h3 class="select-anime__list-item-tittle">${n.ru}</h3>\n      <div class="link-clikcable"></div>\n      </a>\n      <span class="select-anime__list-item-score">${i}</span>\n      </li>\n      `})),document.querySelector(".select-anime__list").innerHTML=t}renderType(e){let t="",n=ANIME_PAGE_1.filter((t=>t.type==e));n.sort(((e,t)=>t.score-e.score)),n.forEach((e=>{let{name:n,score:i,cover:s,href:l}=e;t+=`\n      <li class="select-anime__list-item">\n      <div class="select-anime__list-item-shadow"></div>\n      <a class="select-anime__list-item-href transition" href="/${l}">\n      <picture>\n      <img loading="lazy" src="${s}"\n      class="image select-anime__list-item-img" width="333" height="125" alt="обложка аниме ${n.ru}">\n      </picture>\n      <h3 class="select-anime__list-item-tittle">${n.ru}</h3>\n      <div class="link-clikcable"></div>\n      </a>\n      <span class="select-anime__list-item-score">${i}</span>\n      </li>\n      `})),document.querySelector(".select-anime__list").innerHTML=t}}"/pages/genre"==window.location.pathname.split("/").slice(0,3).join("/")&&(new e).renderGenre(document.querySelector(".main__content_h1").textContent.split(" ").slice(0,1).join(" ")),"/pages/status"==window.location.pathname.split("/").slice(0,3).join("/")&&(new e).renderStatus(document.querySelector(".main__content_h1").textContent.split(" ").slice(0,1).join(" ")),"/pages/type"==window.location.pathname.split("/").slice(0,3).join("/")&&(new e).renderType(document.querySelector(".main__content_h1").textContent.split(" ").slice(0,1).join(" "))}}]);