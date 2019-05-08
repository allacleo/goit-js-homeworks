/*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/
'use strict';

class Car {
    constructor({ speed = 0, maxSpeed = 0, running = false, distance = 0, price = 1000 }) {
      /*
        Добавь свойства:
          - speed - для отслеживания текущей скорости, изначально 0.
          - maxSpeed - для хранения максимальной скорости 
          - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
          - distance - содержит общий киллометраж, изначально с 0
      */
      this.speed = speed;
      this.maxSpeed = maxSpeed;
      this.running = running;
      this.distance = distance;
      this.price = price;
    }
  
    turnOn() {
      // Добавь код для того чтобы завести автомобиль
      // Просто записывает в свойство running значание true
      this.running = true;
    }
  
    turnOff() {
      // Добавь код для того чтобы заглушить автомобиль
      // Просто записывает в свойство running значание false
      this.running = false;
    }
  
    accelerate(spd) {
      // Записывает в поле speed полученное значение, при условии что
      // оно не больше чем значение свойства maxSpeed
      if (spd < this.maxSpeed) {
        this.speed = spd;
      }
    }
  
    decelerate(spd) {
      // Записывает в поле speed полученное значение, при условии что
      // оно не больше чем значение свойства maxSpeed и не меньше нуля
      if (spd < this.maxSpeed && spd > 0) {
        this.speed = speed;
      }
    }
  
    drive(hours) {
      // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
      // но только в том случае если машина заведена!
      if (this.running) {
        this.distance = hours * this.speed;
      }
    }

    get value() {
        return this.price;
    }

    set value(price) {
        this.price;

    }
}
  
  
const car = new Car({ maxSpeed: 50, price: 2000 });
console.log(car.value); // 2000

 car.value = 4000;
console.log(car.value); // 4000