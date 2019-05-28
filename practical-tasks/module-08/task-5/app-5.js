/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/
'use strict';

const inputs = document.querySelectorAll('.size-filter input[checked]');
const collectInputData = inputs =>
inputs.forEach(input => console.log(input.getAttribute('value')));
collectInputData(inputs);