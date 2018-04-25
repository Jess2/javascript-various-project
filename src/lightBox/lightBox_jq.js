window.onload = function() {
    //변수 초기화
    var $indicators = $('.indicator button');
    var $lightbox = $('#lightbox');
    var $block = $('#block');
    var $imgs = $('figure > img');

    //라이트박스 표시
    function lightbox_open(num) {
        $lightbox.addClass('active'); //라이트박스 창 active
        $block.addClass('active'); //라이트박스 배경 active
        change_img(num); //해당 이미지만 active 클래스 주기 위해 함수 호출
        $indicators.eq(num).focus(); //해당 버튼에 css 주기 위해 focus
    }

    //라이트박스 닫기
    function lightbox_close() {
        $lightbox.removeAttr('class');
        $block.removeAttr('class');
    }

    //이미지 전환 표시 함수
    function change_img(val) {
        for(var i=0; i<$imgs.length; i++) {
            $imgs.eq(i).removeAttr('class');
        }

        $imgs.eq(val).attr('class', 'active');
    }

    //이미지 목록 click 이벤트
    $('img.thumb').click(function() {
        var img_num = $(this).index() - 1;
        lightbox_open(img_num);
    });

    //라이트박스 닫기 버튼 click 이벤트
    $('.btn-close').click(function() {
        lightbox_close();
    });

    //인디케이터 클릭 시 click 이벤트
    $indicators.click(function() {
        var img_num = $(this).index(); //index() 메소드는 현재 이미지 객체의 배열 변호를 반환함.
        change_img(img_num);
    });

    //라이트박스 안에 있는 이미지 클릭 시 click 이벤트
    $imgs.click(function() {
        var num = $(this).index();
        $indicators.eq(num).focus(); //해당 버튼에 css 주기 위해 focus
    })

}