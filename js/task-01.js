'use strict';
const submitBtn = document.querySelector('.submitButton');
const allItems = document.querySelectorAll('.item');
const resultSec = document.querySelector('.resultSection');

const calculate = () => {
    console.log( `В списке ${allItems.length} категории.`)
    allItems.forEach(item => {
        console.log(`Категория: ` + item.querySelector('h2').textContent);
        console.log(`Количество элементов: ` + item.querySelectorAll('li').length);
    });
}

submitBtn.addEventListener('click', calculate);
