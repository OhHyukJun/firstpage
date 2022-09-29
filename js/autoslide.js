var current = 0;
showSlides(); //첫 번째 이미지 표시

function showSlides() {
    var slides = document.querySelectorAll("#slides > img");
    for(let i=0 ; i<slides.length; i++){
        slides[i].style.display = "none";//모든 이미지 감춤
    }
    current++;
    if(current > slides.length) current=1;//마지막 이미지라면 1번째로
    slides[current-1].style.display = "block";
    setTimeout(showSlides, 2400);//2초마다 반복
}