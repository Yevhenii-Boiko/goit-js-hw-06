const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const itemEl = document.createElement('li');
itemEl.textContent = '';
itemEl.classList.toggle('item');
console.log(itemEl);
