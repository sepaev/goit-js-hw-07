'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('ul#ingredients');
const publishList = (array) => {
  let text = "";
  array.forEach(ingridient => text += `<li>${ingridient}</li>`);
  list.insertAdjacentHTML('beforeend', text);
};


document.querySelector('#mainButton').onclick = () => publishList(ingredients);