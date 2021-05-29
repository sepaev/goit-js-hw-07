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
    array.forEach(ingridient => {
        list.insertAdjacentHTML('beforeend', `<li>${ingridient}</li>`);
    });
    
};


document.querySelector('#mainButton').onclick = () => publishList(ingredients);