const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')

inputEl.addEventListener("input", onChangeTextSize);
spanEl.style.fontSize = `56px`

function onChangeTextSize(event) {
    const size = event.currentTarget.value;
    console.log(size);
    spanEl.style.fontSize = `${size}px`
}