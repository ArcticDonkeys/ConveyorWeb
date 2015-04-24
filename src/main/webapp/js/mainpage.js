/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var markers = [];

var buildingLocations = [
                        {location: new google.maps.LatLng(40.958775, 29.11032), weight: 0.5},
                        {location: new google.maps.LatLng(40.951774, 29.089231), weight: 2},
                        {location: new google.maps.LatLng(40.966293, 29.053698), weight: 1},
                        {location: new google.maps.LatLng(40.968756, 29.031725), weight: 1.5},
                        {location: new google.maps.LatLng(40.978995, 29.037905), weight: 3},
                        {location: new google.maps.LatLng(40.986900, 29.019365), weight: 2.5},
                        {location: new google.maps.LatLng(41.001929, 29.026232), weight: 1.5},
                        {location: new google.maps.LatLng(41.009961, 29.042883), weight: 2.0},
                        {location: new google.maps.LatLng(41.001670, 29.047346), weight: 0.5},
                        {location: new google.maps.LatLng(40.988714, 29.084253), weight: 2},
                        {location: new google.maps.LatLng(40.977828, 29.097986), weight: 3}
                        ];

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var start = new google.maps.LatLng(40.974070, 29.063311);
var end = new google.maps.LatLng(40.985345, 29.067602);


function buildHeatMap(map){
    
    var heatmap = new google.maps.visualization.HeatmapLayer({
       data: buildingLocations
    });
    
    heatmap.setMap(map);
}


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
    /*Direction Render eder*/
    directionsDisplay = new google.maps.DirectionsRenderer();
    
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(41.002731, 28.995700),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(mapCanvas,mapOptions);
    
    /*Direction Map'ini set eder*/
    directionsDisplay.setMap(map);
    
    /*Haritada mouse move handle eder. Mouse hareket ettikçe lat ve lon bilgilerini günceller.*/
    //mouseMoveListener(map); 
    
    /*Haritada right click'i handle eder.*/
    rightClickListener(map); 
    
    
    /*Haritada heat map oluşturur.*/
    buildHeatMap(map);
    
    /*Haritada route oluşturur.*/
    calculateRoute();
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

function calculateRoute()
{
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };
    
    directionsService.route(request, function(response,status){
       if(status === google.maps.DirectionsStatus.OK)
       {
           directionsDisplay.setDirections(response);
       }
    });
}

$(document).ready(function(){
    
   google.maps.event.addDomListener(window, 'load', initializeMap);
   
   
});



