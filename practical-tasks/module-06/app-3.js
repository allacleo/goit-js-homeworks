'use strict';

/*
 * Напиши класс Car с указанными свойствами и методами
*/

class Car {
    constructor({ speed = 0, maxSpeed = 0, running = false, distance = 0 }) {
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
}
  
  const car = new Car({ maxSpeed: 100 });
  