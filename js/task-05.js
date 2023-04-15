const newName = document.getElementById('name-input');
const newSpan = document.getElementById('name-output');

newName.addEventListner('input', (event) => {
    newSpan.textContent = event.currentTarget.value;
};
)

console.log('Hello world!');
