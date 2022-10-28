//"use strict"; <- 주석을 풀면 var 키워드를 작성하지 않아 에러가 발생
one = 100; // var 키워드를 사용하지 않고 변수를 선언하였으므로 one은 글로벌 변수 입니다.
function get(){
    one = 300;
    console.log("함수:", one); // 함수:300
    one = 200;
}
get();
console.log("글로벌:", one); // 글로벌:100