let lightStatus = false
function lightMod() {
  if (lightStatus) {
    document.querySelector('.player-light').classList.remove('active');
    document.querySelector('.player').classList.remove('active-light');
    document.querySelector('.player__header-btn-light').innerHTML = 'Выключить свет';
    lightStatus = false;
  } else {
    document.querySelector('.player-light').classList.add('active');
    document.querySelector('.player__header-btn-light').innerHTML = 'Включить свет';
    document.querySelector('.player').classList.add('active-light');
    lightStatus = true;
  }
}

document.querySelector('.player__header-btn-light').addEventListener('click', () => {
  lightMod()
});

document.querySelector('.player-light').addEventListener('click', () => {
  lightMod()
});
