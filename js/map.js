'use strict';

 function initMap() {
  var uluru = {
    lat: 59.938861,
    lng: 30.323154
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
};
