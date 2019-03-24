'use strict';
const credits = 23580;
const pricePerDroid = 3000;
const quantity = 12;
let totalPrice = quantity * pricePerDroid;
if (totalPrice > credits) {
    totalPrice = `Недостаточно средств на счету!`;
} else {
    totalPrice = `Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice}`;
}
console.log(totalPrice);