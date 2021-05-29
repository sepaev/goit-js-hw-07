'use strict';
const targetSpan = document.querySelector('span#value');
const buttonIncrease = document.querySelector('button[data-action="increment"]');
const buttonDecrease = document.querySelector('button[data-action="decrement"]');

const changeValue = (value, sign) => {
    value = (sign === '+') ? ++value : --value;
    targetSpan.textContent = value;
}
buttonIncrease.addEventListener('click', () =>  changeValue(targetSpan.textContent, '+'))
buttonDecrease.addEventListener('click', () =>  changeValue(targetSpan.textContent, '-'))

// •	Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// •	Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// •	Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
