/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*****************************************************/
var borderLocations = [
new google.maps.LatLng(41.056961,28.810787),
new google.maps.LatLng(41.057609,28.811817),
new google.maps.LatLng(41.058126,28.813019),
new google.maps.LatLng(41.058644,28.813705),
new google.maps.LatLng(41.059162,28.815250),
new google.maps.LatLng(41.059550,28.815765),
new google.maps.LatLng(41.059680,28.817139),
new google.maps.LatLng(41.059680,28.818169),
new google.maps.LatLng(41.060327,28.818512),
new google.maps.LatLng(41.060974,28.818340),
new google.maps.LatLng(41.061621,28.818340),
new google.maps.LatLng(41.062527,28.817654),
new google.maps.LatLng(41.063304,28.816795),
new google.maps.LatLng(41.063822,28.816280),
new google.maps.LatLng(41.064339,28.815765),
new google.maps.LatLng(41.064986,28.816109),
new google.maps.LatLng(41.065763,28.816795),
new google.maps.LatLng(41.066281,28.817482),
new google.maps.LatLng(41.067057,28.818169),
new google.maps.LatLng(41.067445,28.818684),
new google.maps.LatLng(41.068093,28.819199),
new google.maps.LatLng(41.068610,28.819542),
new google.maps.LatLng(41.069387,28.819542),
new google.maps.LatLng(41.070293,28.819714),
new google.maps.LatLng(41.070551,28.820057),
new google.maps.LatLng(41.070422,28.821087),
new google.maps.LatLng(41.069904,28.821774),
new google.maps.LatLng(41.069646,28.822632),
new google.maps.LatLng(41.069775,28.823318),
new google.maps.LatLng(41.069904,28.824692),
new google.maps.LatLng(41.069904,28.825722),
new google.maps.LatLng(41.070034,28.827095),
new google.maps.LatLng(41.069775,28.827953),
new google.maps.LatLng(41.069646,28.828468),
new google.maps.LatLng(41.069128,28.829842),
new google.maps.LatLng(41.068351,28.831902),
new google.maps.LatLng(41.067834,28.832760),
new google.maps.LatLng(41.067575,28.834305),
new google.maps.LatLng(41.067057,28.835850),
new google.maps.LatLng(41.066539,28.837738),
new google.maps.LatLng(41.066410,28.838596),
new google.maps.LatLng(41.065245,28.839283),
new google.maps.LatLng(41.064210,28.839455),
new google.maps.LatLng(41.063433,28.839111),
new google.maps.LatLng(41.062786,28.839283),
new google.maps.LatLng(41.062527,28.840828),
new google.maps.LatLng(41.062009,28.841858),
new google.maps.LatLng(41.061751,28.842373),
new google.maps.LatLng(41.061621,28.843060),
new google.maps.LatLng(41.061362,28.844604),
new google.maps.LatLng(41.062139,28.846321),
new google.maps.LatLng(41.063045,28.847694),
new google.maps.LatLng(41.064469,28.848038),
new google.maps.LatLng(41.066151,28.848209),
new google.maps.LatLng(41.066928,28.848724),
new google.maps.LatLng(41.067187,28.849583),
new google.maps.LatLng(41.067445,28.850784),
new google.maps.LatLng(41.068222,28.851643),
new google.maps.LatLng(41.069128,28.852158),
new google.maps.LatLng(41.070293,28.852158),
new google.maps.LatLng(41.070810,28.853016),
new google.maps.LatLng(41.071457,28.853359),
new google.maps.LatLng(41.071716,28.854561),
new google.maps.LatLng(41.071716,28.855591),
new google.maps.LatLng(41.071975,28.856621),
new google.maps.LatLng(41.071846,28.857994),
new google.maps.LatLng(41.071328,28.859711),
new google.maps.LatLng(41.070681,28.860912),
new google.maps.LatLng(41.069904,28.860226),
new google.maps.LatLng(41.069128,28.859711),
new google.maps.LatLng(41.068222,28.859539),
new google.maps.LatLng(41.067575,28.858337),
new google.maps.LatLng(41.067057,28.856964),
new google.maps.LatLng(41.065245,28.856621),
new google.maps.LatLng(41.064210,28.855934),
new google.maps.LatLng(41.062527,28.855419),
new google.maps.LatLng(41.061233,28.855076),
new google.maps.LatLng(41.059680,28.855076),
new google.maps.LatLng(41.057220,28.855419),
new google.maps.LatLng(41.056444,28.855591),
new google.maps.LatLng(41.055149,28.855934),
new google.maps.LatLng(41.053855,28.856621),
new google.maps.LatLng(41.052431,28.857479),
new google.maps.LatLng(41.050489,28.858509),
new google.maps.LatLng(41.049194,28.859367),
new google.maps.LatLng(41.048159,28.859539),
new google.maps.LatLng(41.045181,28.859367),
new google.maps.LatLng(41.042851,28.859367),
new google.maps.LatLng(41.040909,28.859196),
new google.maps.LatLng(41.040132,28.859711),
new google.maps.LatLng(41.039873,28.861599),
new google.maps.LatLng(41.039484,28.862972),
new google.maps.LatLng(41.039096,28.864517),
new google.maps.LatLng(41.039096,28.865547),
new google.maps.LatLng(41.038837,28.866920),
new google.maps.LatLng(41.038707,28.868294),
new google.maps.LatLng(41.038319,28.869839),
new google.maps.LatLng(41.037931,28.871040),
new google.maps.LatLng(41.036895,28.871384),
new google.maps.LatLng(41.035729,28.871727),
new google.maps.LatLng(41.033269,28.871727),
new google.maps.LatLng(41.032104,28.871727),
new google.maps.LatLng(41.031197,28.872070),
new google.maps.LatLng(41.029125,28.872414),
new google.maps.LatLng(41.029125,28.871899),
new google.maps.LatLng(41.029384,28.870697),
new google.maps.LatLng(41.030032,28.869667),
new google.maps.LatLng(41.030420,28.867950),
new google.maps.LatLng(41.030809,28.865719),
new google.maps.LatLng(41.031586,28.863659),
new google.maps.LatLng(41.032104,28.862286),
new google.maps.LatLng(41.032363,28.860397),
new google.maps.LatLng(41.031974,28.859024),
new google.maps.LatLng(41.030809,28.858337),
new google.maps.LatLng(41.028996,28.859367),
new google.maps.LatLng(41.027053,28.859367),
new google.maps.LatLng(41.025240,28.859711),
new google.maps.LatLng(41.024075,28.860226),
new google.maps.LatLng(41.022780,28.861256),
new google.maps.LatLng(41.021614,28.862457),
new google.maps.LatLng(41.020967,28.862457),
new google.maps.LatLng(41.020708,28.861942),
new google.maps.LatLng(41.020449,28.860741),
new google.maps.LatLng(41.020319,28.860569),
new google.maps.LatLng(41.020060,28.859367),
new google.maps.LatLng(41.019801,28.858852),
new google.maps.LatLng(41.020578,28.858166),
new google.maps.LatLng(41.022391,28.857651),
new google.maps.LatLng(41.023686,28.857479),
new google.maps.LatLng(41.024075,28.856621),
new google.maps.LatLng(41.022521,28.856277),
new google.maps.LatLng(41.021614,28.855762),
new google.maps.LatLng(41.021873,28.854733),
new google.maps.LatLng(41.022521,28.853703),
new google.maps.LatLng(41.023816,28.854046),
new google.maps.LatLng(41.024334,28.852673),
new google.maps.LatLng(41.024334,28.850956),
new google.maps.LatLng(41.024204,28.849411),
new google.maps.LatLng(41.024334,28.847694),
new google.maps.LatLng(41.025888,28.847523),
new google.maps.LatLng(41.024334,28.845978),
new google.maps.LatLng(41.023945,28.845463),
new google.maps.LatLng(41.022650,28.844261),
new google.maps.LatLng(41.021873,28.843575),
new google.maps.LatLng(41.021355,28.841858),
new google.maps.LatLng(41.021485,28.839970),
new google.maps.LatLng(41.022391,28.839111),
new google.maps.LatLng(41.023557,28.838081),
new google.maps.LatLng(41.023427,28.836880),
new google.maps.LatLng(41.022780,28.833790),
new google.maps.LatLng(41.022262,28.831387),
new google.maps.LatLng(41.022262,28.828640),
new google.maps.LatLng(41.022132,28.826580),
new google.maps.LatLng(41.021614,28.825207),
new google.maps.LatLng(41.021485,28.824348),
new google.maps.LatLng(41.020708,28.824177),
new google.maps.LatLng(41.019542,28.823490),
new google.maps.LatLng(41.019930,28.821602),
new google.maps.LatLng(41.020578,28.819885),
new google.maps.LatLng(41.021485,28.817482),
new google.maps.LatLng(41.022521,28.816452),
new google.maps.LatLng(41.023427,28.814392),
new google.maps.LatLng(41.023945,28.813190),
new google.maps.LatLng(41.025111,28.812847),
new google.maps.LatLng(41.025758,28.811302),
new google.maps.LatLng(41.028219,28.810787),
new google.maps.LatLng(41.029773,28.810959),
new google.maps.LatLng(41.031456,28.811131),
new google.maps.LatLng(41.034435,28.810616),
new google.maps.LatLng(41.036765,28.810616),
new google.maps.LatLng(41.038190,28.810444),
new google.maps.LatLng(41.040002,28.809071),
new google.maps.LatLng(41.041685,28.808384),
new google.maps.LatLng(41.043757,28.808212),
new google.maps.LatLng(41.046994,28.807869),
new google.maps.LatLng(41.048418,28.808384),
new google.maps.LatLng(41.050748,28.808556),
new google.maps.LatLng(41.053207,28.809242),
new google.maps.LatLng(41.054502,28.809929),
new google.maps.LatLng(41.056703,28.810616),
new google.maps.LatLng(41.056959,28.810786)
];
var bagcilar = new google.maps.Polygon({
    paths: borderLocations
  });
  
//var point = new google.maps.LatLng(60.981068, 29.061937);

var mapCanvas = document.getElementById('map-canvas');
var mapOptions = {
    center: new google.maps.LatLng(40.98352660152382, 29.07308578491211),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(mapCanvas,mapOptions);


var realTimeCanvas = document.getElementById('realTime-canvas');
var realTimeMap = new google.maps.Map(realTimeCanvas, mapOptions);


/*****************************************************/

var markers = [];

var buildingLocations = [];
  



//var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var start = new google.maps.LatLng(40.974070, 29.063311);
var end = new google.maps.LatLng(40.985345, 29.067602);

/***********SILINECEK*******/
function createPoints()
{
var differenceBetweenXCoords = 28.879623 - 28.4092;
var differenceBetweenYCoords = 41.075987 - 41.013584;
var latitude;
var longitude;
for(var i = 0; i<29530; i++)
{
    latitude = (Math.random() * (differenceBetweenYCoords) + 41.013584);
    longitude = (Math.random() * (differenceBetweenXCoords) + 28.4092);
    var point = new google.maps.LatLng(latitude, longitude);
    var output = google.maps.geometry.poly.containsLocation(point, bagcilar);
    if(output)
    {
        buildingLocations[i] = {location: point, weight: 0.2}
        //console.log(point.lat() + " " + point.lng());
    }
    else
        i--;
}
}




//////////////////


function buildHeatMap(){
    
    var heatmap = new google.maps.visualization.HeatmapLayer({
       data: buildingLocations,
       dissipating: true,
       map: map,
       radius: 15,
       maxIntensity: 1
    });
    
    //console.log(buildingLocations);
    
    
    heatmap.setMap(map);
  
}


function removeOtherMarkers(){
    for(var i = 0; i < markers.length; i++)
    {
        markers[i].setMap(null);
    }
    
    markers = [];
}

function addMarker(e){
    
    var marker = new google.maps.Marker({
            position: e.latLng,
            map: map
        });
    
    map.setZoom(10);

    markers.push(marker);
}

function rightClickListener(){
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

function mouseMoveListener(){
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
    //directionsDisplay = new google.maps.DirectionsRenderer();
    
    
    
    /*Direction Map'ini set eder*/
    //directionsDisplay.setMap(map);
    
    /*Haritada mouse move handle eder. Mouse hareket ettikçe lat ve lon bilgilerini günceller.*/
    //mouseMoveListener(map); 
    
    /*Haritada right click'i handle eder.*/
    rightClickListener(map); 
    
    //createPoints();
    /*Haritada heat map oluşturur.*/
    //buildHeatMap(map);
    //buildRoute(map);
    /*Haritada route oluşturur.*/
    //calculateRoute(start, end);
//    calculateRoute(start, end1);
    
    
}

function parseAndPush(dataFromController)
{
    var splittedByComma = dataFromController.split(",");
    for(var i = 0; i<splittedByComma.length; i++)
    {
        var splittedBySpace = splittedByComma[i].split(" ");
        
        var building = {
            location: new google.maps.LatLng(splittedBySpace[0], splittedBySpace[1]),
            weight: parseFloat(splittedBySpace[2])
        };
        
        buildingLocations.push(building);
    
        
    }
    buildHeatMap(map);
    buildRoute(map);
    
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
            window.alert("Success");
            parseAndPush(responseData);
        },
        error : function(responseData) {
            console.log(responseData); 
        }
    });

    /*var millisecondsToWait = 10000;
    setTimeout(function() {
       location.href = " sendOutput.html"
     //building location doldurulacak
    $.ajax({
        url:'http://localhost:8080/Conveyor/sendOutput.html',
        data: {},
        type:"GET",
        success:function(data) {
        console.log("essseek")
        console.log(data);
        },
         error : function(responseData) {

            console.log(responseData); 
            console.log("errror");
        }
    })
}, millisecondsToWait);
    */
    
    
}


function buildRoute()
{
	var afadCoordinates = new google.maps.LatLng(40.992936, 29.069479);
	var mostRiskyFirst = new google.maps.LatLng(40.9659004337, 29.0720558166);
	var mostRiskySecond = new google.maps.LatLng(40.9959657667, 29.1098213195);
	var mostRiskyThird = new google.maps.LatLng(40.992337919312, 29.059524536132);

	
		var request1 = {
			origin: afadCoordinates,
			destination : mostRiskyFirst,
			travelMode: google.maps.TravelMode.DRIVING
                    };

		var directionsDisplay = new google.maps.DirectionsRenderer({
                    polylineOptions: {
                        strokeColor: "red",
                        strokeWeight: 7,
                        strokeOpacity: 0.8
                    },
                    preserveViewport: true
                });

		directionsDisplay.setMap(map);	

		directionsService.route(request1, function(response, status){

			if(status === google.maps.DirectionsStatus.OK)
			{
				directionsDisplay.setDirections(response);
			}
		});
                
                var request2 = {
			origin: afadCoordinates,
			destination : mostRiskySecond,
			travelMode: google.maps.TravelMode.DRIVING
                    };

		var directionsDisplay2 = new google.maps.DirectionsRenderer({
                    polylineOptions: {
                        strokeColor: "blue",
                        strokeWeight: 7,
                        strokeOpacity: 0.5
                    },
                    preserveViewport: true
                });

		directionsDisplay2.setMap(map);	

		directionsService.route(request2, function(response, status){

			if(status === google.maps.DirectionsStatus.OK)
			{
				directionsDisplay2.setDirections(response);
			}
		});
                
                var request3 = {
			origin: afadCoordinates,
			destination : mostRiskyThird,
			travelMode: google.maps.TravelMode.DRIVING
                    };

		var directionsDisplay3 = new google.maps.DirectionsRenderer(
                        {
                    polylineOptions: {
                        strokeColor: "#A534C9",
                        strokeWeight: 7,
                        strokeOpacity: 0.7
                    },
                    preserveViewport: true
                });

		directionsDisplay3.setMap(map);	

		directionsService.route(request3, function(response, status){

			if(status === google.maps.DirectionsStatus.OK)
			{
				directionsDisplay3.setDirections(response);
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



