const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElements = document.querySelector('#ingredients');

const makeElements = ingredients.map (function (ingredient) {
      const liEl = document.createElement('li');
    liEl.classList.add('item');
  liEl.textContent = ingredient;
  console.log(liEl);
  return liEl;
});

ulElements.append(...makeElements);

