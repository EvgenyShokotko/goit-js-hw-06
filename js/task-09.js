
const changeColorBtn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
changeColorBtn.addEventListener('click', onchangeColorBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function onchangeColorBtn() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = `${color}`;
  spanEl.textContent = color;
}