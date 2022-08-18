let counterValue = 0;
value.textContent = counterValue;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick);

     function onIncrementClick () {
        counterValue += 1;
        value.textContent = counterValue;
};
    function onDecrementClick () {
        counterValue -= 1;
        value.textContent = counterValue;
};


