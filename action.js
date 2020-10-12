// Variables & constants initialization and assignment
var user_name = prompt('What is your name?');
var user_surname = prompt('What is you surname?');
var user_favorite_color = prompt('What is your favorite color?');
const current_year = '20';

// Password generation
var user_password = user_name + user_surname + user_favorite_color + current_year;

// Output in Console
console.log('The user\'s name is ' + user_name + '; his/her surname is ' + user_surname + '; his/her favorite color is ' + user_favorite_color + '.');

console.log('The user\'s password is: ' + user_password);

// Output in HTML
document.getElementById('user-name').innerHTML = user_name;
document.getElementById('user-surname').innerHTML = user_surname;
document.getElementById('user-fav-color').innerHTML = user_favorite_color;

document.getElementById('user-password').innerHTML = user_password;
