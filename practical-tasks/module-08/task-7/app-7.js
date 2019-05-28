/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
const num = 5;

const rootDiv = document.querySelector('#root');

const createBoxes = number => {
  const boxes = [];
  let size = '30px';
};

createBoxes(num);

const color = [];
for (let i = 0; i < 3; i += 1) {
  const value = Math.floor(Math.random() * 255);
  color.push(value);

  // return color;
}
console.log(color[0], ',', color[1], ',', color[2]);