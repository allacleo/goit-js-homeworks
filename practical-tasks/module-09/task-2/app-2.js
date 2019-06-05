'use strict';
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
const refs = {
    result: document.querySelector('.result'),
    inputs: document.querySelectorAll('input'),
     button: document.querySelector('.container button[data-action="add"]'),
    };
    
    let value = 0;
    
    const handleInput = e => {
      value += Number(e.target.value);
      console.log(e.target.value);
    };
    
    const handleButton = e => {
      refs.result.textContent = value;
    };
    
    refs.inputs[0].addEventListener('change', handleInput);
    refs.inputs[1].addEventListener('change', handleInput);
    refs.button.addEventListener('click', handleButton);