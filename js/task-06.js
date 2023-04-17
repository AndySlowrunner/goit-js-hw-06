const inputEl = document.getElementById('validation-input');
const numberOfSymbols = document.getElementById('validation-input');

inputEl.addEventListener('blur', changeBorderColor);

function changeBorderColor(event) {
    const inputAtribute = Number(numberOfSymbols.getAttribute('data-length'));
    const inputTextLength = event.target.value.trim().length;
    if (inputAtribute === inputTextLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}