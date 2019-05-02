/* module-02-02
* Есть массив имен пользователей users
*
* Напиши цикл, который для каждого пользователя будет выводить в консоль
* сообщение в формате [номер элемента] - [значение элемента]. 
* 
* Нумерация должна начинаться с 1. К примеру для первого элемента массива
* с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
*
* Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
*/

const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
for (let i = 0; i < users.length; i += 1) {
  console.log(`${[i + 1]} - ${users[i]}`);
}

/*module-02-03
* Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
* Гравировка одного слова стоит 10 кредитов.
*/

// В переменной message хранится произвольная строка
const message = "Proin sociis natoque et magnis parturient montes mus";
let price = 0;

const words = message.split(' ');
// Разбить строку в массив, разделитель - пробел, и записать в переменную words
console.log(words);
console.log(words.length);
// Выведи в консоли длину массива words
// console.log(); // 8

for (price of words)
console.log(price);

// 02-04
// Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
// /console.log(price); // 
/*
  Напиши цикл, который просит, через prompt, ввести число больше 100. 
  
  Если посетитель нажал Cancel - завершить цикл.
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, 
  и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, 
  обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
  
  PS: используй бесконечный цикл с прерыванием
*/
let numbersToEnter;
while (true) {
numbersToEnter = prompt('Enter a number more than 100');
if (numbersToEnter === null) {
  break;
}
}

// module 02-05
/*
  Напиши скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив matched.
      
  В результате в массиве matched будут все подходяшие числа.
      
  PS: используй цикл for или for...of и оператор ветвления if
*/

const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const matched = [];
for (number of numbers) {
  if (number > num) {
    matched.push(numbers);
  }
}
console.log(matched);

// console.log(matched); // [17, 14, 14, 32, 18, 26]

