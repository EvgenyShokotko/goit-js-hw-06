const box = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]')

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
inputEl.addEventListener('blur', getAmount);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function getAmount(event) {
  let amount = 0;
  amount = event.currentTarget.value;
  event.currentTarget.value = '';
  
  if (amount === '') {
      alert(`You must input number. PLEASE TRY AGAIN!!!`);
      return
  } 
  
  return createBoxes(amount);
};

function createBoxes(amount) {
  let boxes = [];
    if (amount > Number(inputEl.max)) {
      alert(`You can input number only from ${inputEl.min} to ${inputEl.max}. PLEASE TRY AGAIN!!!` );
      return
     } if(amount < Number(inputEl.min)) {
      alert(`You can input number only from ${inputEl.min} to ${inputEl.max}. PLEASE TRY AGAIN!!!` );
      return
     } 
  
  for (let i = amount; i > 0; i -= 1) {
    const size = 20 + i * 10;
    const el = document.createElement('div');
    if (amount === 1) { el.style.width = "30px" } else el.style.width = `${size}px`;
    if (amount === 1) { el.style.height = "30px" } else el.style.height = `${size}px`;
    // el.style.width = `${size}px`;
    // el.style.height = `${size}px`;
    el.style.backgroundColor = getRandomHexColor();
    // console.log(el);
    boxes.push(el);
   }
  console.log(boxes);
  box.append(...boxes);
};

function destroyBoxes() {
  box.innerHTML = '';
}
