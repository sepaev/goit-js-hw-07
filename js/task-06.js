'use strict';
const targetInput = document.querySelector('input#validation-input');

targetInput.addEventListener('blur', onCheck);
function validation(isValid) {
    return isValid ? { toAdd: 'valid', toRemove: 'invalid' }:{ toAdd: 'invalid', toRemove: 'valid' }
}

function onCheck() {
    const actions = validation(targetInput.value.length >= targetInput.getAttribute('data-length'));

    targetInput.classList.add(actions.toAdd);
    targetInput.classList.remove(actions.toRemove);
}

// •	Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// •	Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
