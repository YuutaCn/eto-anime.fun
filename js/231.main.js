(self.webpackChunkgulp_builder=self.webpackChunkgulp_builder||[]).push([[231],{231:()=>{class e{renderGenre(e){let n="";ANIME_PAGE_1.filter((n=>n.genre[0]==e||n.genre[1]==e||n.genre[2]==e||n.genre[3]==e||n.genre[4]==e||n.genre[5]==e||n.genre[6]==e||n.genre[7]==e||n.genre[9]==e||n.genre[8]==e||n.genre[10]==e||n.genre[11]==e||n.genre[12]==e||n.genre[13]==e||n.genre[14]==e||n.genre[15]==e)).forEach((e=>{let{name:t,score:i,cover:s,href:l}=e;n+=`\n      <li class="select-anime__list-item">\n      <div class="select-anime__list-item-shadow"></div>\n      <a class="select-anime__list-item-href transition" href="/${l}">\n      <picture>\n      <img loading="lazy" src="${s}"\n      class="image select-anime__list-item-img" width="333" height="125" alt="обложка аниме ${t.ru}">\n      </picture>\n      <h3 class="select-anime__list-item-tittle">${t.ru}</h3>\n      <div class="link-clikcable"></div>\n      </a>\n      <span class="select-anime__list-item-score">${i}</span>\n      </li>\n      `})),document.querySelector(".select-anime__list").innerHTML=n}renderStatus(e){let n="",t=ANIME_PAGE_1.filter((n=>n.status==e));t.sort(((e,n)=>n.score-e.score)),t.forEach((e=>{let{name:t,score:i,cover:s,href:l}=e;n+=`\n      <li class="select-anime__list-item">\n      <div class="select-anime__list-item-shadow"></div>\n      <a class="select-anime__list-item-href transition" href="/${l}">\n      <picture>\n      <img loading="lazy" src="${s}"\n      class="image select-anime__list-item-img" width="333" height="125" alt="обложка аниме ${t.ru}">\n      </picture>\n      <h3 class="select-anime__list-item-tittle">${t.ru}</h3>\n      <div class="link-clikcable"></div>\n      </a>\n      <span class="select-anime__list-item-score">${i}</span>\n      </li>\n      `})),document.querySelector(".select-anime__list").innerHTML=n}renderType(e){let n="",t=ANIME_PAGE_1.filter((n=>n.type==e));t.sort(((e,n)=>n.score-e.score)),t.forEach((e=>{let{name:t,score:i,cover:s,href:l}=e;n+=`\n      <li class="select-anime__list-item">\n      <div class="select-anime__list-item-shadow"></div>\n      <a class="select-anime__list-item-href transition" href="/${l}">\n      <picture>\n      <img loading="lazy" src="${s}"\n      class="image select-anime__list-item-img" width="333" height="125" alt="обложка аниме ${t.ru}">\n      </picture>\n      <h3 class="select-anime__list-item-tittle">${t.ru}</h3>\n      <div class="link-clikcable"></div>\n      </a>\n      <span class="select-anime__list-item-score">${i}</span>\n      </li>\n      `})),document.querySelector(".select-anime__list").innerHTML=n}}"/pages/genre"==window.location.pathname.split("/").slice(0,3).join("/")&&(new e).renderGenre(document.querySelector(".main__content_h1").textContent.split(" ").slice(0,1).join(" ")),"/pages/status"==window.location.pathname.split("/").slice(0,3).join("/")&&(new e).renderStatus(document.querySelector(".main__content_h1").textContent.split(" ").slice(0,1).join(" ")),"/pages/type"==window.location.pathname.split("/").slice(0,3).join("/")&&(new e).renderType(document.querySelector(".main__content_h1").textContent.split(" ").slice(0,1).join(" "))}}]);