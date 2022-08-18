const inputEl = document.querySelector('#name-input')
const spanEl = document.querySelector('#name-output')

inputEl.addEventListener ('input',onChangeName )

function onChangeName(event) {
    console.log(event.currentTarget.value);
    spanEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {spanEl.textContent = "Anonymous"}
}