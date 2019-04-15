'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  return login.length <= 16 && login.length >= 4;
};

const isLoginUnique = function(allLogins, login) {
  return allLogins.includes(login);
};

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  if (isLoginUnique(allLogins, login)) {
    return 'Такой логин уже используется!';
  } else {
    allLogins.push(login);
    return 'Логин успешно добавлен!'
  }
};

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// -------check -list----------
// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// console.log(addLogin(logins, 'qwerty123'));

