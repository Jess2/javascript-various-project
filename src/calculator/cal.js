window.onload = function() {
    var inp = document.forms['cal']; //name이 'frm'인 form객체를 선택
    var input = cal.getElementsByTagName('input'); //태그명이 input인 문서 객체를 지정. 배열로 참조됨
    var cls_btn = document.getElementsByClassName('cls_btn')[0]; //초기화 버튼을 지정. 배열로 참조됨
    var result_btn = document.getElementsByClassName('result_btn')[0]; //결과 버튼을 지정. 배열로 참조됨

    function clr() {
        inp['result'].value = 0;
    }

    //계산기 입력 처리 함수
    function calc(value) {
        //입력이 들어가면 0을 지움
        if(inp['result'].value == 0) {
            inp['result'].value = '';
        }
    
        //입력 값을 결과 창에 출력
        inp['result'].value += value;
    }
    
    //계산 결과 처리 함수
    function my_result() {
        var result = document.forms['cal']['result'];
        var cal = eval(result.value);

        //결과창에 표시
        inp['result'].value = cal;
    }


    //숫자 및 사칙 연산 버튼
    for(var i=0; i<input.length; i++) {
        //숫자와 사칙 연산자만 입력 처리
        if(input[i].value != '=' && input[i].value != 'clear') {
            input[i].onclick = function() {
                calc(this.value); //헌재 클릭한 버튼 객체의 value 값을 calc 함수에 전달함
            }
        }
    }

    //초기화 버튼
    cls_btn.onclick = function() {
        clr();
    }

    //결과 버튼
    result_btn.onclick = function() {
        try {
            my_result();
        }
        catch(err) {
            var result = inp['result'];
            result.value = '입력 오류';
        }
    }
    
   

}