function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
const getBodyStyle = document.body;

changeColorBtn.addEventListener('click', getNewStyleForBody);

function getNewStyleForBody(event) {
  const getNewColor = getRandomHexColor();
  getBodyStyle.style.backgroundColor = getNewColor;
  colorName.textContent = getNewColor;
}