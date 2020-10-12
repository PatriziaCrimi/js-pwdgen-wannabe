var user_name = prompt('What is your name?');
var user_surname = prompt('What is you surname?');
var user_favorite_color = prompt('What is your favorite color?');
const current_year = '20';

var user_password = user_name + user_surname + user_favorite_color + current_year;

console.log("Name is " + user_name + "; Surname is " + user_surname + "; Favorite color is " + user_favorite_color);

console.log(user_password);
