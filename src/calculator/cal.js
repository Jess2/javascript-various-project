window.onload = function() {
    var frm = document.forms['cal']; //name이 'frm'인 form객체를 선택
    var inputs = frm.getElementsByTagName('input'); //태그명이 input인 문서 객체를 지정. 배열로 참조됨

    //계산기 입력 처리 함수
    function inp(value) {
        if(frm['result'].value == 0) { //입력이 들어가면 0을 지움
            frm['result'].value = '';
        }
    
        frm['result'].value += value; //입력 값을 결과 창에 추가하여 출력
    }

    //숫자 및 사칙 연산 버튼
    for(var i=0; i<inputs.length; i++) {
        if(inputs[i].value != '=' && inputs[i].value != 'clear') {
            inputs[i].addEventListener('click', function() {
                inp(this.value); //헌재 클릭한 버튼 객체의 value 값을 inp 함수에 전달함
            });
        }
    }

    //계산기 초기화
    frm['cls_btn'].addEventListener('click', function() {
        frm['result'].value = 0;
    });

    //결과 버튼
    frm['result_btn'].addEventListener('click', function() {
        try {
            frm['result'].value = eval(frm['result'].value); //사칙연산을 수행하고 그 값을 결과창에 표시
        }
        catch(err) {
            frm['result'].value = '입력 오류';
        }
    })

}