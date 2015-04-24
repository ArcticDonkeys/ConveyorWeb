/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*****************************************************/
var borderLocations = [
new google.maps.LatLng(40.989099,29.037552),
new google.maps.LatLng(40.989099,29.037380),
new google.maps.LatLng(40.988580,29.037037),
new google.maps.LatLng(40.988192,29.037037),
new google.maps.LatLng(40.987738,29.036951),
new google.maps.LatLng(40.987285,29.036608),
new google.maps.LatLng(40.986961,29.036436),
new google.maps.LatLng(40.986701,29.036179),
new google.maps.LatLng(40.986313,29.036093),
new google.maps.LatLng(40.985924,29.035921),
new google.maps.LatLng(40.985665,29.035492),
new google.maps.LatLng(40.985470,29.035406),
new google.maps.LatLng(40.985017,29.034805),
new google.maps.LatLng(40.984758,29.034634),
new google.maps.LatLng(40.984498,29.034719),
new google.maps.LatLng(40.984110,29.034548),
new google.maps.LatLng(40.983786,29.034548),
new google.maps.LatLng(40.983429,29.034548),
new google.maps.LatLng(40.983267,29.034462),
new google.maps.LatLng(40.983105,29.034505),
new google.maps.LatLng(40.982976,29.034505),
new google.maps.LatLng(40.982717,29.034419),
new google.maps.LatLng(40.982652,29.034419),
new google.maps.LatLng(40.982555,29.034419),
new google.maps.LatLng(40.982425,29.034419),
new google.maps.LatLng(40.982263,29.034419),
new google.maps.LatLng(40.981939,29.034462),
new google.maps.LatLng(40.981712,29.034462),
new google.maps.LatLng(40.981583,29.034591),
new google.maps.LatLng(40.981259,29.034934),
new google.maps.LatLng(40.981129,29.035192),
new google.maps.LatLng(40.980935,29.035406),
new google.maps.LatLng(40.980676,29.035707),
new google.maps.LatLng(40.980352,29.036136),
new google.maps.LatLng(40.980028,29.036479),
new google.maps.LatLng(40.979866,29.036822),
new google.maps.LatLng(40.979542,29.037209),
new google.maps.LatLng(40.979347,29.037509),
new google.maps.LatLng(40.978926,29.037895),
new google.maps.LatLng(40.978537,29.038281),
new google.maps.LatLng(40.978213,29.038324),
new google.maps.LatLng(40.977987,29.038281),
new google.maps.LatLng(40.977825,29.038239),
new google.maps.LatLng(40.977760,29.038582),
new google.maps.LatLng(40.977598,29.038968),
new google.maps.LatLng(40.977436,29.038925),
new google.maps.LatLng(40.977015,29.039183),
new google.maps.LatLng(40.976496,29.039354),
new google.maps.LatLng(40.976107,29.039612),
new google.maps.LatLng(40.975751,29.039783),
new google.maps.LatLng(40.975233,29.039698),
new google.maps.LatLng(40.974779,29.038582),
new google.maps.LatLng(40.974325,29.037638),
new google.maps.LatLng(40.974131,29.037380),
new google.maps.LatLng(40.973612,29.037380),
new google.maps.LatLng(40.973029,29.037724),
new google.maps.LatLng(40.972187,29.038153),
new google.maps.LatLng(40.971474,29.038067),
new google.maps.LatLng(40.970631,29.038067),
new google.maps.LatLng(40.970113,29.037466),
new google.maps.LatLng(40.969724,29.037037),
new google.maps.LatLng(40.969530,29.036608),
new google.maps.LatLng(40.969789,29.036093),
new google.maps.LatLng(40.970955,29.035492),
new google.maps.LatLng(40.970955,29.034634),
new google.maps.LatLng(40.970955,29.033947),
new google.maps.LatLng(40.970437,29.033432),
new google.maps.LatLng(40.970178,29.032917),
new google.maps.LatLng(40.969530,29.032402),
new google.maps.LatLng(40.968493,29.031887),
new google.maps.LatLng(40.967585,29.031544),
new google.maps.LatLng(40.967326,29.032402),
new google.maps.LatLng(40.966937,29.032574),
new google.maps.LatLng(40.966549,29.032917),
new google.maps.LatLng(40.966289,29.033260),
new google.maps.LatLng(40.966289,29.034462),
new google.maps.LatLng(40.966937,29.035149),
new google.maps.LatLng(40.967845,29.035664),
new google.maps.LatLng(40.968104,29.036007),
new google.maps.LatLng(40.968493,29.036865),
new google.maps.LatLng(40.968493,29.037895),
new google.maps.LatLng(40.968234,29.038925),
new google.maps.LatLng(40.967326,29.039612),
new google.maps.LatLng(40.966937,29.039955),
new google.maps.LatLng(40.966160,29.040470),
new google.maps.LatLng(40.965641,29.041328),
new google.maps.LatLng(40.965900,29.042702),
new google.maps.LatLng(40.966937,29.044418),
new google.maps.LatLng(40.968882,29.045448),
new google.maps.LatLng(40.969530,29.046307),
new google.maps.LatLng(40.969400,29.047337),
new google.maps.LatLng(40.968882,29.049225),
new google.maps.LatLng(40.968104,29.051113),
new google.maps.LatLng(40.967715,29.051800),
new google.maps.LatLng(40.967845,29.052830),
new google.maps.LatLng(40.967456,29.053516),
new google.maps.LatLng(40.966937,29.053860),
new google.maps.LatLng(40.966289,29.054203),
new google.maps.LatLng(40.965382,29.054375),
new google.maps.LatLng(40.963826,29.056091),
new google.maps.LatLng(40.964215,29.056778),
new google.maps.LatLng(40.964475,29.057293),
new google.maps.LatLng(40.964215,29.058323),
new google.maps.LatLng(40.963697,29.058495),
new google.maps.LatLng(40.962919,29.058495),
new google.maps.LatLng(40.962660,29.059353),
new google.maps.LatLng(40.962919,29.060383),
new google.maps.LatLng(40.962660,29.061069),
new google.maps.LatLng(40.962012,29.062099),
new google.maps.LatLng(40.962012,29.062614),
new google.maps.LatLng(40.962271,29.064503),
new google.maps.LatLng(40.962789,29.066219),
new google.maps.LatLng(40.962660,29.068451),
new google.maps.LatLng(40.962012,29.069481),
new google.maps.LatLng(40.960326,29.070683),
new google.maps.LatLng(40.958901,29.071026),
new google.maps.LatLng(40.958382,29.071026),
new google.maps.LatLng(40.957215,29.072914),
new google.maps.LatLng(40.956567,29.074631),
new google.maps.LatLng(40.956567,29.075832),
new google.maps.LatLng(40.956567,29.076691),
new google.maps.LatLng(40.955789,29.078922),
new google.maps.LatLng(40.954363,29.079609),
new google.maps.LatLng(40.953456,29.081497),
new google.maps.LatLng(40.953326,29.083042),
new google.maps.LatLng(40.954104,29.084244),
new google.maps.LatLng(40.954622,29.085960),
new google.maps.LatLng(40.954104,29.087849),
new google.maps.LatLng(40.952937,29.089050),
new google.maps.LatLng(40.951770,29.090080),
new google.maps.LatLng(40.951511,29.091282),
new google.maps.LatLng(40.951900,29.092999),
new google.maps.LatLng(40.952029,29.094543),
new google.maps.LatLng(40.951252,29.095745),
new google.maps.LatLng(40.950603,29.096603),
new google.maps.LatLng(40.951900,29.098492),
new google.maps.LatLng(40.953326,29.099865),
new google.maps.LatLng(40.954622,29.100723),
new google.maps.LatLng(40.955400,29.100380),
new google.maps.LatLng(40.956697,29.100208),
new google.maps.LatLng(40.958641,29.101582),
new google.maps.LatLng(40.960067,29.102268),
new google.maps.LatLng(40.962271,29.103642),
new google.maps.LatLng(40.963826,29.105873),
new google.maps.LatLng(40.964993,29.105701),
new google.maps.LatLng(40.967456,29.104328),
new google.maps.LatLng(40.969400,29.102955),
new google.maps.LatLng(40.972511,29.101410),
new google.maps.LatLng(40.975362,29.099522),
new google.maps.LatLng(40.978732,29.097805),
new google.maps.LatLng(40.980935,29.095402),
new google.maps.LatLng(40.981324,29.098663),
new google.maps.LatLng(40.982360,29.100895),
new google.maps.LatLng(40.984693,29.105358),
new google.maps.LatLng(40.986896,29.107761),
new google.maps.LatLng(40.989487,29.110851),
new google.maps.LatLng(40.991949,29.113083),
new google.maps.LatLng(40.994281,29.116001),
new google.maps.LatLng(40.995577,29.116344),
new google.maps.LatLng(40.996484,29.113426),
new google.maps.LatLng(40.998557,29.109993),
new google.maps.LatLng(41.000759,29.106388),
new google.maps.LatLng(41.003350,29.102955),
new google.maps.LatLng(41.005423,29.100037),
new google.maps.LatLng(41.007496,29.096603),
new google.maps.LatLng(41.008662,29.093342),
new google.maps.LatLng(41.009568,29.090080),
new google.maps.LatLng(41.009050,29.084072),
new google.maps.LatLng(41.007496,29.079781),
new google.maps.LatLng(41.006848,29.076347),
new google.maps.LatLng(41.006071,29.070511),
new google.maps.LatLng(41.006848,29.066048),
new google.maps.LatLng(41.012030,29.060211),
new google.maps.LatLng(41.013713,29.058666),
new google.maps.LatLng(41.016433,29.055061),
new google.maps.LatLng(41.018765,29.051628),
new google.maps.LatLng(41.020578,29.049225),
new google.maps.LatLng(41.022650,29.047680),
new google.maps.LatLng(41.021226,29.046650),
new google.maps.LatLng(41.018765,29.045277),
new google.maps.LatLng(41.016304,29.043903),
new google.maps.LatLng(41.014491,29.042873),
new google.maps.LatLng(41.013584,29.043045),
new google.maps.LatLng(41.010475,29.042702),
new google.maps.LatLng(41.007755,29.042873),
new google.maps.LatLng(41.002832,29.044418),
new google.maps.LatLng(41.000630,29.043388),
new google.maps.LatLng(40.998168,29.042187),
new google.maps.LatLng(40.994411,29.039783),
new google.maps.LatLng(40.990006,29.038067),
new google.maps.LatLng(40.988969,29.037552)
];
var kadikoy = new google.maps.Polygon({
    paths: borderLocations
  });
  
//var point = new google.maps.LatLng(60.981068, 29.061937);




/*****************************************************/

var markers = [];

var buildingLocations;
        
        /*[
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
                        ];*/

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var start = new google.maps.LatLng(40.974070, 29.063311);
var end = new google.maps.LatLng(40.985345, 29.067602);

/***********SILINECEK*******/
function createPoints()
{
var differenceBetweenXCoords = 29.123726 - 29.009056;
var differenceBetweenYCoords = 41.009180 - 40.935303;
var latitude;
var longitude;
for(var i = 0; i<25328; i++)
{
    latitude = (Math.random() * (differenceBetweenYCoords) + 40.935303);
    longitude = (Math.random() * (differenceBetweenXCoords) + 29.009056);
    var point = new google.maps.LatLng(latitude, longitude);
    var output = google.maps.geometry.poly.containsLocation(point, kadikoy);
    if(output)
    {
        buildingLocations[i] = {location: point, weight: 0.5}
    }
    else
        i--;
}
}




//////////////////


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
    
    createPoints();
    /*Haritada heat map oluşturur.*/
    buildHeatMap(map);
    
    /*Haritada route oluşturur.*/
    calculateRoute(start, end);
//    calculateRoute(start, end1);
    
    
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

function calculateRoute(start, end)
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



