'use strict';
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
let clickCount = 0; 

document.querySelector('.button').addEventListener('click', (e) => {
const element = e.currentTarget;
 clickCount += 1;
  element.textContent = clickCount;
})