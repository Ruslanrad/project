"use strict";

//alert('Hello');
//const result = confirm("Вы здесь?");
//console.log(result);
//const answer = +prompt("Вам есть 18?", "18");
//console.log(answer + 5);

//Вся информация которая приходится от пользователя, то она будет строкой
const answers = [];

answers[0] = prompt('Как ваше имя?','');
answers[1] = prompt('Как ваша фамилия?','');
answers[2] = prompt('Сколько вам лет?','');

console.log(typeof(answers));
console.log(typeof(null));