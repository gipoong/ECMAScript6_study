const obj = {language: "한글"};
try{
    obj = {};
}catch(e){
    console.log("const 재할당 불가");
}
obj.language = "영어"; // obj Object를 할당할 수는 없지만, 프로퍼티 값은 할당할 수 있음
console.log(obj.language);