/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var markers = [];

function removeOtherMarkers(){
    for(var i = 0; i < markers.length; i++)
    {
        markers[i].setMap(null);
    }
    
    markers = [];
}

function addMarker(e, map){
    
    var marker = new google.maps.Marker({
            position: e.latLng,
            map: map
        });
    
    map.setZoom(10);

    markers.push(marker);
}

function doubleClickListener(map){
    google.maps.event.addListener(map, 'dblclick', function (e){
        var latitude = document.getElementById('latitude');
        var longitude = document.getElementById('longitude');
        
        latitude.value = e.latLng.lat();
        longitude.value = e.latLng.lng();
        
        removeOtherMarkers(); /*Marker koymadan önce haritadan diğer markerları siler.*/
        
        addMarker(e, map); /*Markerı bu fonksiyon oluşturur*/
        
    });
}


function initializeMap()
{
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(41.002731, 28.995700),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(mapCanvas,mapOptions);
    
    doubleClickListener(map); /*Haritada double click'i handle eder.*/
}

$(document).ready(function(){
    
   google.maps.event.addDomListener(window, 'load', initializeMap);
   
   
});



