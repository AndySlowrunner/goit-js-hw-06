const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector('#value');

const counterValue = 0;
counterEl.textContent = number(counterValue);

decrementBtn.addEventListener('click', makeLowerClick);
incrementBtn.addEventListener('click', makeHigherClick);

function makeLowerClick() {
    const newCounterValue -= counterValue;

};
// function makeHigherClick() {
//     counterEl.textContent += 1;
// };

console.log(counterEl.textContent)