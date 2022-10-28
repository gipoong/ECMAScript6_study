"use strict";
let book; // 값을 할당하지 않고 선언만 하면 디폴트 값으로 undefined가 할당
let sports = "축구";
sports = "농구";

// let sports = "배구"; // 같은 scope에 같은 변수명으로 선언 및 대입하면 SyntaxError 발생
let one = 1, two = 2, three;
// let four = 4, let five = 5; // , 이후에 또 let을 쓰면 SyntaxError 발생
// let six = 6, var seven = 7; // , 이후에 let과 var를 같이 사용할 수 없음 SyntaxError 발생