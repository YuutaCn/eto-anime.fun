let rimaStatus = false;

document.querySelector('.site-container').innerHTML += `
  <div class="rima">
  <div class="rima__one">
    <div class="rima__one-warning">
      <svg class="rima__one-warning-svg">
        <use xlink:href="/img/sprite.svg#bell"></use>
      </svg>
    </div>
    <picture>
      <source srcset="/img/rima_one.avif" type="image/avif">
      <source srcset="/img/rima_one.webp" type="image/webp">
      <img loading="lazy" src="/img/rima_one.png" class="image rima__one-img" width="150" height="150" alt="rima image">
    </picture>
  </div>
  <div class="rima__two">
    <div class="rima__two-donate">
      <a class="rima__two-donate-href" href="https://www.donationalerts.com/r/yuutasegawa" target="_blank">Поддержать проект</a>
    </div>
    <picture>
      <source srcset="/img/rima_two.avif" type="image/avif">
      <source srcset="/img/rima_two.webp" type="image/webp">
      <img loading="lazy" src="/img/rima_two.png" class="image rima__two-img" width="150" height="150" alt="rima image">
    </picture>
  </div>
</div>
  `;


document.addEventListener('DOMContentLoaded', () => {
  const rimaSection = document.querySelector('.rima');
  const rimaOne = document.querySelector('.rima__one');
  const rimaTwo = document.querySelector('.rima__two');
  function rimaRender() {
    setTimeout(() => {
      rimaOne.classList.add('active');
    }, 3000);
  };
  rimaRender();
  rimaSection.addEventListener('mouseover', () => {
    rimaOne.classList.remove('active');
    rimaTwo.classList.add('active');
    rimaStatus = true;
  });

  rimaSection.addEventListener('mouseout', () => {
    rimaOne.classList.add('active');
    rimaTwo.classList.remove('active');
    rimaStatus = false;
  });
});
