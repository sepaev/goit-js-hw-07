'use strict';
const refs = {
    createButton: document.querySelector('button[data-action="render"]'),
    clearButton: document.querySelector('button[data-action="destroy"]'),
    userInput: document.querySelector('input'),
    divBoxes: document.querySelector('div#boxes'),
    startWH: 30,
    makeColor: function() {
        const r = Math.round(Math.random() * 255);
        const g = Math.round(Math.random() * 255);
        const b = Math.round(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }
}
refs.createButton.addEventListener('click', () => createBoxes(refs.userInput.value))
function createBoxes(amount) {
    if (!amount) {
        alert('Введите число.');
        return;
    };
    if (amount < 0) amount = amount * (-1);
    for (let i = 1; i <= amount; i++) {
        const htmlString = `<div style="background-color: ${refs.makeColor()}; width: ${refs.startWH}px; height: ${refs.startWH}px"></div>`;
        refs.startWH += 10;
        refs.divBoxes.insertAdjacentHTML('beforeend', htmlString);
    }
};

refs.clearButton.addEventListener('click', destroyBoxes)
function destroyBoxes() {
    refs.startWH = 30;
    refs.divBoxes.innerHTML = '<div id="boxes"></div>';
    refs.userInput.value = 0;
};