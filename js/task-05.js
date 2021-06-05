'use strict';
const refs = {
    nameInput: document.querySelector('input#name-input'),
    nameSpan: document.querySelector('span#name-output'),
};

refs.nameInput.addEventListener('input', onInput);

function onInput() {
    const valueInput = refs.nameInput.value.trim()
    
    refs.nameSpan.textContent = (valueInput === "" ) ? 'незнакомец' : valueInput;

}