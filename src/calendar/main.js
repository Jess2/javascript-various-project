//calendar 함수
function calendar(new_year, new_month) {
    //특정 연월을 시작일부터 조회
    var d = new Date(new_year, new_month-1, 1), //(year, month, date)
        d_length = 32 - new Date(new_year, new_month, 32).getDate(), //월별 일수 구하기
        year = d.getFullYear(),
        month = d.getMonth(),
        date = d.getDate(),
        day = d.getDay();

    //caption 영역 날짜 표시 객체
    var caption_year = document.querySelector('.year'),
        caption_month = document.querySelector('.month');
    
    //caption 날짜 표시
    caption_year.innerHTML = year;
    caption_month.innerHTML = month + 1;

    var dates = document.querySelectorAll('tr td');

    //테이블 초기화
    for(var i = 0; i < dates.length; i++) {
        dates[i].innerHTML = '&nbsp;';
    }

    //한 달 치 날짜를 테이블에 시작 요일부터 순서대로 표시
    for(var i = day; i < day + d_length; i++) {
        dates[i].innerHTML = date;
        date++;
    }

}

window.onload = function() {
    var prev = document.getElementById('prev'),
        next = document.getElementById('next'),
        year = new Date().getFullYear(),
        month = new Date().getMonth() + 1;

    calendar(year, month);
    
    //이전 달
    prev.addEventListener('click', function() {
        calendar(year, --month);
        console.log(month);
    });

    //다음 달
    next.addEventListener('click', function() {
        calendar(year, ++month);
        console.log(month);
    });
}