'use strict';
/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const list = document.querySelector('.list');

const markup = elements.reduce
((string, item) => string + `<li>${item}</li>`,
 "");
console.log(markup);
list.innerHTML = markup;