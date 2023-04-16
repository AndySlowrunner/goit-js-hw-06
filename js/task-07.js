const inputEl = document.getElementById('font-size-control');
const newTextSize = document.getElementById('text');

inputEl.addEventListener('input', changeTextSize);

function changeTextSize(event) {
    newTextSize.style.fontSize = `${event.target.value}px`;
};