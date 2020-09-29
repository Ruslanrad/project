"use strict";
let num=20;
function showFirstMessage(text){
    console.log(text);
   // let num = 10;
    console.log(num);
}
showFirstMessage("Hello");
console.log(num);
function calc(a, b){
    return (a + b);
}
console.log(calc(10,30));

const logger = function(){
    console.log("Hello world!");//Такая функция будет видна только после объявления
};
logger();

const calc1 = (a, b) => a + b;// такую функцию нельзя вызвать
const calc2 = (a, b) => {
    console.log('1');
    return a+b;
};