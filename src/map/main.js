
function initMap() {
    // 맵 스타일 정의
    var styleArray = [
    {
        featureType: 'all',
        stylers: [
        { saturation: -80 }
        ]
    },{
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
        { hue: '#00ffee' },
        { saturation: 50 }
        ]
    },{
        featureType: 'poi.business',
        elementType: 'labels',
        stylers: [
        { visibility: 'off' }
        ]
    }
    ];      
    // 위치 정보 변수
    var my_position = {
        lat: 35.667306, 
        lng: 139.699969
    };
    // 맵 객체를 생성하고 id=‘map’에 지도 표시
    var map = new google.maps.Map(document.getElementById('map'), {
        center: my_position,
        scrollwheel: false,
        zoom: 17,
        styles: styleArray
    });
    // 마커 객체 생성
    var marker = new google.maps.Marker({
        map: map,
        position: my_position,
        title: '여기가 내 위치입니다!'
    });
    
}