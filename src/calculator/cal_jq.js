window.onload = function() {
    var $frm = $('form[name=cal]') //name이 'frm'인 form객체를 선택
    var $inputs = $frm.find('input'); //태그명이 input인 문서 객체를 지정. 배열로 참조됨
    var $result = $frm.find('input[name=result]'); //결과창

    //계산기 입력 처리 함수
    function inp(value) {
        if($result.val() == 0) { //입력이 들어가면 0을 지움
            $result.val('');
        }
    
        $result.val($result.val() + value); //입력 값을 결과 창에 추가하여 출력
    }

    //숫자 및 사칙 연산 버튼
    $('input').click(function(){
        if($(this).val() != '=' && $(this).val() != 'clear') {
            inp($(this).val());
        }
    });

    //계산기 초기화
    $('input[name=cls_btn]').click(function(){
        $result.val(0);
    });

    //결과 버튼
    $('input[name=result_btn]').click(function(){
        try{
            $result.val(eval($result.val()));
        }
        catch(err) {
            $result.val('입력오류');
        }
    });

}