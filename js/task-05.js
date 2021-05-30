'use strict';
const refs = {
    nameInput: document.querySelector('input#name-input'),
    nameSpan: document.querySelector('span#name-output'),
};

refs.nameInput.addEventListener('input', onKeypress);

function onKeypress() {
    refs.nameSpan.textContent = (refs.nameInput.value === "")? 'незнакомец': refs.nameInput.value;
}