const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector('#value');

let counterValue = 0;
counterEl.textContent = counterValue;

decrementBtn.addEventListener('click', makeLowerClick);
incrementBtn.addEventListener('click', makeHigherClick);

function makeLowerClick() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
};
function makeHigherClick() {
    counterValue += 1;
    counterEl.textContent = counterValue;
};