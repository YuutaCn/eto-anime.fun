document.querySelectorAll('.select-anime__list-item-score').forEach(el => {
  if (parseFloat(el.innerHTML) < 7) {
    el.style.background = 'var(--secondary-color)';
  };
  if (parseFloat(el.innerHTML) < 6) {
    el.style.background = 'var(--secondary_shade-color)';
  };
  if (parseFloat(el.innerHTML) < 4) {
    el.style.background = 'var(--grey_shade-color)';
  };
});
