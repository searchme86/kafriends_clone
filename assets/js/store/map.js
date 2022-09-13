(function gangnam() {
  var mapContainer = document.getElementById("fgang"),
    mapOption = {
      center: new kakao.maps.LatLng(37.500818, 127.025855),
      level: 3,
    };
  var map = new kakao.maps.Map(mapContainer, mapOption);

  var markerPosition = new kakao.maps.LatLng(37.500818, 127.025855);
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  marker.setMap(map);
})();

(function hongdae() {
  var mapContainer = document.getElementById("fhong"),
    mapOption = {
      center: new kakao.maps.LatLng(37.556456, 126.92382),
      level: 3,
    };
  var map = new kakao.maps.Map(mapContainer, mapOption);

  var markerPosition = new kakao.maps.LatLng(37.556456, 126.92382);
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  marker.setMap(map);
})();

(function pusan() {
  var mapContainer = document.getElementById("fpusan"),
    mapOption = {
      center: new kakao.maps.LatLng(35.099058, 129.031606),
      level: 3,
    };
  var map = new kakao.maps.Map(mapContainer, mapOption);

  var markerPosition = new kakao.maps.LatLng(35.099058, 129.031606);
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  marker.setMap(map);
})();

(function japan() {
  var myLatlng = new google.maps.LatLng(35.837143, 128.558612); // 위치값 위도 경도
  // 35.668794, 139.708012
  var Y_point = 35.668794; // Y 좌표
  var X_point = 139.708012; // X 좌표
  var zoomLevel = 18; // 지도의 확대 레벨 : 숫자가 클수록 확대정도가 큼

  var myLatlng = new google.maps.LatLng(Y_point, X_point);
  var mapOptions = {
    zoom: zoomLevel,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var map = new google.maps.Map(document.getElementById("fjapan"), mapOptions);
})();
