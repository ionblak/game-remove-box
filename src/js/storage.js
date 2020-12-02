import { refs } from './utils.js';

function getCurrentResult(name, totalPoints) {
  try {
    const result = {
      name,
      totalPoints,
    };
    localStorage.setItem('result', JSON.stringify(result));
  } catch (err) {
    console.error('Set state error: ', err);
  }
}

function loadingResult() {
  try {
    const savedResult = localStorage.getItem('result');
    const parsedresult = JSON.parse(savedResult);
    refs.recordsList.insertAdjacentHTML(
      'beforeend',
      `<li class="list-item">${parsedresult.name}........${parsedresult.totalPoints} points</li>`,
    );
  } catch (err) {
    console.error('Set state error: ', err);
  }
}

export { getCurrentResult, loadingResult };
