'use strict';
const country = prompt('Введите страну доставки');
let message;
switch (country) {
    case 'Индия':
    message = `Доставка в ${country} будет стоить 80 кредитов`;
    break;
    case 'Китай':
    message = `Доставка в ${country} будет стоить 100 кредитов`;
    break;
    case 'Австралия':
    message = `Доставка в ${country} будет стоить 170 кредитов`;
    break;
    case 'Южная Америка':
    message = `Доставка в ${country} будет стоить 250 кредитов`;
    break;
    case 'Ямайка':
    message = `Доставка в ${country} будет стоить 120 кредитов`;
    break;
    default:
    message = `В вашей стране доствка не доступна!`;
}
console.log(message);