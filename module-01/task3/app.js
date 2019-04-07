'use strict';
const countryToChoose = prompt('Введите страну доставки');

if (countryToChoose === null || countryToChoose === '') {
    console.log('Страна доставки не выбрана!');
  } else {
  const country = countryToChoose.toLowerCase();
  
  switch (country) {
    case 'китай':
      const chinaShipping = 100;
      console.log(`Доставка в ${country} будет стоить ${chinaShipping} кредитов`);
      break;
  
    case 'южная америка':
      const southAmericaShipping = 250;
      console.log(
        `Доставка в ${country} будет стоить ${southAmericaShipping} кредитов`,
      );
      break;
  
    case 'австралия':
      const australiaShipping = 170;
      console.log(
        `Доставка в ${country} будет стоить ${australiaShipping} кредитов`,
      );
      break;
  
    case 'индия':
      const indiaShipping = 80;
      console.log(`Доставка в ${country} будет стоить ${indiaShipping} кредитов`);
      break;
  
    case 'ямайка':
      const jamaicaShipping = 120;
      console.log(
        `Доставка в ${country} будет стоить ${jamaicaShipping} кредитов`,
      );
      break;
  
    default:
      console.log('В вашей стране доставка не доступна');
  }
  }
