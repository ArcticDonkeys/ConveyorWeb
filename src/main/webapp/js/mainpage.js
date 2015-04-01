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

function rightClickListener(map){
    google.maps.event.addListener(map, 'rightclick', function (e){
        var latitude = document.getElementById('latitude');
        var longitude = document.getElementById('longitude');
        
        latitude.value = e.latLng.lat();
        longitude.value = e.latLng.lng();
        
        /*Marker koymadan önce haritadan diğer markerları siler.*/
        removeOtherMarkers(); 
        
        /*Markerı bu fonksiyon oluşturur*/
        addMarker(e, map); 
        
    });
}

function mouseMoveListener(map){
    google.maps.event.addListener(map, 'mousemove', function (e){
        var latitude = document.getElementById('latitude');
        var longitude = document.getElementById('longitude');
        
        latitude.value = e.latLng.lat();
        longitude.value = e.latLng.lng();
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
    
    /*Haritada mouse move handle eder. Mouse hareket ettikçe lat ve lon bilgilerini günceller.*/
    //mouseMoveListener(map); 
    
    /*Haritada right click'i handle eder.*/
    rightClickListener(map); 
}

function sendInput() // Sends user input to backend
{
    var latitude = (document.getElementById('latitude')).value;
    var longitude = (document.getElementById('longitude')).value;
    var magnitude = (document.getElementById('magnitude')).value;
    var focalDepth = (document.getElementById('focaldepth')).value;
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/Conveyor/mainpage.html",
        data:  {latData : latitude, lonData : longitude, magData : magnitude, focData : focalDepth} ,
        success: function(responseData, textStatus) {
           console.log("Data sent successfully");
        },
        error : function(responseData) {
            console.log("Error in sending data"); 
        }
    });
    
}

$(document).ready(function(){
    
   google.maps.event.addDomListener(window, 'load', initializeMap);
   
   
});



