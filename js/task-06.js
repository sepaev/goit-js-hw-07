'use strict';
const targetInput = document.querySelector('input#validation-input');

targetInput.addEventListener('blur', onCheck);

function onCheck() {
    if (targetInput.value.length < targetInput.getAttribute('data-length')) {
        targetInput.classList.add('invalid');
        targetInput.classList.remove('valid');
    } else {
        targetInput.classList.add('valid');
        targetInput.classList.remove('invalid');
    }
}

// •	Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// •	Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
