'use strict';
const refs = {
    nameInput: document.querySelector('input#name-input'),
    nameSpan: document.querySelector('span#name-output'),
};

refs.nameInput.addEventListener('input', onInput);

function onInput() {
    const valueInput = refs.nameInput.value
    
    refs.nameSpan.textContent = (valueInput === "" || valueInput[0] === " ") ? 'незнакомец' : valueInput;
    
    // const text = (valueInput === "") ? 'незнакомец' : valueInput;
    // const textArray = text.split(' ');
    // let fixedTextArray = [];
    // textArray.forEach(element => {
    //     if (element !== "") {
    //         fixedTextArray.push(element);
    //     }
    // });
    // const returnText = fixedTextArray.join(' ');
    // refs.nameSpan.textContent = returnText===""? 'незнакомец' : returnText;
 
}