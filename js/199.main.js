(self.webpackChunkgulp_builder=self.webpackChunkgulp_builder||[]).push([[199],{199:()=>{let e=document.querySelector(".header__form-search-zone");document.querySelector(".header__form-label-input").addEventListener("input",(r=>{let l=document.querySelector(".header__form-label-input").value.valueOf();if(""===l)e.classList.remove("--active");else if(l.length>0&&l.length<3)e.classList.add("--active"),e.innerHTML="Минимальная длинна запроса 3 символа";else if(l.length>=3){let r="";const t=[...ANIME_PAGE_1].filter((e=>e.name.ru.toLowerCase().substr(0,l.length)==`${l.toLowerCase()}`));0==t.length?e.innerHTML="По твоему запросу ничего не найдено :(":t.forEach((l=>{r+=`\n        <a href="/${l.href}">${l.name.ru}</a>\n        `,e.innerHTML=r}))}}))}}]);