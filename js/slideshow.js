var slides = document.querySelectorAll("#slides > img");
//이미지 가져오기
var prev = document.getElementById("prev");
//버튼은 id값으로 사용했으므로 getElementById 메서드로 가져옴
var next = document.getElementById("next");
var current = 0;//슬라이드 번호를 저장할 인덱스 변수

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;
//n번쨰 슬라이드 이미지를 화면에 표시하는 함수
function showSlides(n){
    for(let i=0; i<slides.length;i++){//베열의 처음부터 끝까지 반복
        slides[i].style.display = "none"; //모든 이미지를 화면에서 감춤
    }
    slides[n].style.display = "block"; //n번쨰 이미지 화면에 표시
}

function prevSlide() {
    if(current>0) current -= 1; //current값이 0보다 크면 이전 위치로
    else current = slides.length - 1; //마지막 위치로 이동
        showSlides(current); //이동한 위치의 이미지 표시
}

function nextSlide() {
    if(current < slides.length -1) current +=1;
    else current = 0; //첫번째 위치로 이동
    showSlides(current);
}