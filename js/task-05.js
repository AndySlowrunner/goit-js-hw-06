const newName = document.getElementById('name-input');
const newSpan = document.getElementById('name-output');

newName.addEventListener('input', (event) => {
    const newInputValue = event.target.value.trim();
    newSpan.textContent = newInputValue ? newInputValue : 'Anonymous';
});