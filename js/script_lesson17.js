"use strict";

const str="teSt";
const arr =[1, 2, 4, 5, 6];

//console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("e")); //Поиск кода строки

const logg = "Hello world";

console.log(logg.slice(6,11));//первый аргумент с чего начнется, второй оргумент на чем закончится но не включиться в результат

console.log(logg.slice(6));// с шестого и до конца

console.log(logg.slice(-5,-1));// пятый с конца начинается и первый обрезается с конца

console.log(logg.substring(6,11));//аналог slice но без отриц. значений

console.log(logg.substring(6,5));//перый - с чего начать, второй солько симовов

//Math.(различные аргументы) - математические данные

const x = 11.2;
console.log(Math.round(x));
console.log(Math.ceil(x));
console.log(Math.floor(x));

const test = "12.2px";
console.log(parseFloat(test));