/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function initializeMap()
{
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(41.002731, 28.995700),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(mapCanvas,mapOptions);
    
    google.maps.event.addListener(map, 'click', function (e){
        var latitude = document.getElementById('latitude');
        var longitude = document.getElementById('longitude');
        
        latitude.value = e.latLng.lat();
        longitude.value = e.latLng.lng();
    });
}

$(document).ready(function(){
    
   google.maps.event.addDomListener(window, 'load', initializeMap);
   
   
});



