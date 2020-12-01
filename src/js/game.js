import { getRandomIntInclusive, getRandColor } from './utils.js';

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
};
let playingGame = false;
let time = 10000;
let totalPoints = null;
let name = '';

refs.startButton.addEventListener('click', startGame);
refs.veiwPort.addEventListener('click', clickDestroyBoxes);
refs.saveButton.addEventListener('click', savePoints);

function clickDestroyBoxes(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  const currentBoxRef = event.target;
  totalPoints += 1;
  refs.points.textContent = totalPoints;

  currentBoxRef.remove();
  createBoxes();
}

function startGame() {
  playingGame = true;
  createBoxes();
  startTimer();
  return;
}

function startTimer() {
  const timerId = setInterval(() => {
    time -= 1000;
    refs.timer.textContent = time / 1000;
    if (time === 0) {
      clearInterval(timerId);
      openModal();
    }
  }, 1000);
}

function openModal() {
  clearAllboxes();
  refs.modal.classList.add('is-open');
  refs.modalPointsField.textContent = totalPoints;
}

function savePoints(event) {
  name = refs.modalInput.value;
  refs.modal.classList.remove('is-open');
  refs.recordsList.insertAdjacentHTML(
    'beforeend',
    `<li class="list-item">${name}..........${totalPoints} points</li>`,
  );
  event.preventDefault();
}

function createBoxes() {
  const amount = getRandomIntInclusive(1, 3);

  for (let i = 0; i < amount; i += 1) {
    const positionTop = getRandomIntInclusive(5, 90);
    const positionLeft = getRandomIntInclusive(90, 5);
    const box = document.createElement('div');
    const size = getRandomIntInclusive(10, 30);
    box.setAttribute(
      'style',
      `width: ${size}px; height: ${size}px;
     position: absolute; top: ${positionTop}%; left: ${positionLeft}%; background-color: ${getRandColor()}`,
    );
    refs.veiwPort.appendChild(box);
  }
}

function clearAllboxes() {
  while (refs.veiwPort.firstChild) {
    refs.veiwPort.firstChild.remove();
  }
}
