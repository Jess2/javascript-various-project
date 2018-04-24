window.onload = function() {
    var lightbox = document.getElementById('#lightbox');
    var block = document.getElementById('#block');
}

//라이트 박스 표시
function lightbox_open(num) {
    var indicators = document.querySelectorAll('.indicator button');
    lightbox.setAttribute('class', 'active'); //라이트박스 창 active
    block.setAttribute('class', 'active'); //라이트박스 배경 active
    change_img(num); //해당 이미지에만 active 클래스를 주기 위해 함수 호출
    indicators[num-1].focus(); //해당 버튼에 css 주기 위해 focus
}

//라이트 박스 닫기
function lightbox_close() {
    lightbox.removeAttribute('class');
    block.removeAttribute('class');
}

//이미지 전환 표시 함수
function change_img(val) {
    var imgs = document.querySelectorAll('figure > img');

    for(var i=0; i<imgs.length; i++) {
        imgs[i].removeAttribute('class');
    }

    imgs[val-1].setAttribute('class', 'active');
}