'use strict';
const refs = {
    nameInput: document.querySelector('input#name-input'),
    nameSpan: document.querySelector('span#name-output'),
};

refs.nameInput.addEventListener('input', onInput);

function onInput() {
    const text = (refs.nameInput.value === "") ? 'незнакомец' : refs.nameInput.value;
    const textArray = text.split(' ');
    let fixedTextArray = [];
    textArray.forEach(element => {
        if (element !== "") {
            fixedTextArray.push(element);
        }
    });
    const returnText = fixedTextArray.join(' ');
    refs.nameSpan.textContent = returnText===""? 'незнакомец' : returnText;
 
}