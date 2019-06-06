'use strict';
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

const items = document.querySelector('.list');
items.addEventListener('click', handleButton);

function removeItem(el) {
const listItem = el.parentNode;
listItem.remove();
};

function handleButton(e) {
  removeItem(e.target);
};