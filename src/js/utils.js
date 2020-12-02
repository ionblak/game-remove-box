function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function getRandColor() {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = '0' + color;
  }
  return '#' + color;
}
const refs = {
  startButton: document.querySelector('.js-startButton'),
  veiwPort: document.querySelector('.window-game'),
  timer: document.querySelector('.timer'),
  modal: document.querySelector('.lightbox'),
  saveButton: document.querySelector('.js-modal__button'),
  points: document.querySelector('.js-points'),
  modalPointsField: document.querySelector('.modal-points'),
  modalInput: document.querySelector('.form-control'),
  recordsList: document.querySelector('.list'),
  newGamebutton: document.querySelector('.js-newGameButton'),
};

export { getRandomIntInclusive, getRandColor, refs };
