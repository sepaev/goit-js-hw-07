'use strict';
const targetSpan = document.querySelector('span#value');
const buttonIncrease = document.querySelector('button[data-action="increment"]');
const buttonDecrease = document.querySelector('button[data-action="decrement"]');

buttonIncrease.addEventListener('click', () =>  changeValue('+'))
buttonDecrease.addEventListener('click', () =>  changeValue('-'))

function changeValue(sign) {
    let value = targetSpan.textContent;
    value = (sign === '+') ? ++value : --value;
    targetSpan.textContent = value;
}
// •	Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// •	Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// •	Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
