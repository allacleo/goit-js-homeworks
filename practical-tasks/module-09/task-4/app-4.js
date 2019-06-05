'use strict';
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/
const optionsList = document.querySelector('.options');
const results = document.querySelector('.result');
const check = document.querySelector('.question-form');

optionsList.addEventListener('change', handleChange);
check.addEventListener('submit', handleSubmit);

let output = '';

function handleSubmit(e) {
 e.preventDefault();
 
results.textContent = 'Result: ' + output;
console.log (e.target);
};

function handleChange(e) {
  output = e.target.value;
};