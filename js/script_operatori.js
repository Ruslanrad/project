"use strict";

 console.log('arr' + " - object");
 console.log(4 + "5");

 let incr = 10,
     decr = 10;

  //  ++incr;//префиксный
    //decr--;//постфиксное
    console.log(incr++);//постфиксное возвращает старое, а потом увеличивает
    console.log(--decr);//префиксное сразу возвращает новое значение

    console.log(5%2);
    // если один знак = то присвоение значение
    console.log(2+2*2 != '6');//=== строгое сравнение, числа с числами

    const isChecked = true,
          isClose = false;
    console.log(!isChecked || isClose);