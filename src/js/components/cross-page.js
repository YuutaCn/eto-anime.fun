document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.site-container').style.opacity = '1';
});

document.querySelectorAll('.transition').forEach(e => {
  e.addEventListener('click', () => {
    if (e.href != window.location.href) {
      event.preventDefault();
      document.querySelector('.site-container').style.opacity = '0';
      setTimeout(() => {
        window.location = e.href;
      }, 250);
    } else {
      event.preventDefault();
    }
  })
});
