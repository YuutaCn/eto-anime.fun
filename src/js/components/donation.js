let rimaStatus = false;

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
