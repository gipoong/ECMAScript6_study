let sports = "축구", music = "재즈";
function get(){
    let music = "클래식";
    console.log(music);
    console.log(sports); // 함수 안에서 sports 변수를 검색하고, 없으면 함수 밖으로 나가 검색
}

get();