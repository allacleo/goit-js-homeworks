'use strict';
const password = prompt('Confirm your administration rights');
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
if (password === null) {
    alert(message = 'Cancelled by user');
} else if (password !==  ADMIN_PASSWORD) {
    alert(message = 'Access denied, wrong password');
} else {
    alert(message = 'Welcome');
}
console.log(message);
