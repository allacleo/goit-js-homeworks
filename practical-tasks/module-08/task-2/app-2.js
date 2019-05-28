/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
'use strict'
const list = document.querySelector('#list');
const firstItem = document.querySelector("li");
firstItem.style.color = '#BF4E30';
console.log(firstItem);

const body = document.body;
const rank = body.firstElementChild;

rank.lastElementChild.style.color = 'blue';
console.log(rank.lastElementChild);
