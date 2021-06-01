'use strict';
const refs = {
    targetSpan: document.querySelector('span#text'),
    inputControl: document.querySelector('input#font-size-control'),
}

refs.inputControl.addEventListener('input', changeSize);

function changeSize() {
    refs.targetSpan.style.fontSize = `${refs.inputControl.value}px`;
}