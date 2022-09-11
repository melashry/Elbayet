jQuery(function($) {
// Asynchronously Load the map API 
var script = document.createElement('script');
script.src = "https://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
document.body.appendChild(script);
});
function initialize() {
var map;
var bounds = new google.maps.LatLngBounds();
var mapOptions = {
mapTypeId: 'roadmap'
};
// Display a map on the page
map = new google.maps.Map(document.getElementById("map_tuts"), mapOptions);
map.setTilt(45);
// Multiple Markers
var markers = [
['Riyadh', 24.7253981, 47.3830275, 4],
['Medina', 24.4713203, 39.7576452, 5],
['Mecca ', 21.4362767, 39.9866346, 5],
['Jeddah', 21.9622121,38.2164519,6.87],
['Taif', 21.3861026,40.7156736,11],
];
// Info Window Content
var infoWindowContent = [
['<div class="info_content map-content">' +
'<img src="img/bg/supplier.png"/>'+
'<h3>Union Doors</h3>' +
'<a href="supplier-details.html"> Details </a>' +'</div>'],
['<div class="info_content map-content">' +
'<img src="img/bg/supplier.png"/>'+
'<h3>Union Doors</h3>' +
'<a href="supplier-details.html"> Details </a>' +'</div>'],
['<div class="info_content map-content">' +
'<img src="img/bg/supplier.png"/>'+
'<h3>Union Doors</h3>' +
'<a href="supplier-details.html"> Details </a>' +'</div>'],  
['<div class="info_content map-content">' +
'<img src="img/bg/supplier.png"/>'+
'<h3>Union Doors</h3>' +
'<a href="supplier-details.html"> Details </a>' +'</div>'],
['<div class="info_content map-content">' +
'<img src="img/bg/supplier.png"/>'+
'<h3>Union Doors</h3>' +
'<a href="supplier-details.html"> Details </a>' +'</div>'],
];
// Display multiple markers on a map
var infoWindow = new google.maps.InfoWindow(), marker, i;
// Loop through our array of markers & place each one on the map  
for( i = 0; i < markers.length; i++ ) {
var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
bounds.extend(position);
marker = new google.maps.Marker({
position: position,
map: map,
title: markers[i][0]
});
// Each marker to have an info window    
google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
infoWindow.setContent(infoWindowContent[i][0]);
infoWindow.open(map, marker);
}
})(marker, i));
// Automatically center the map fitting all markers on the screen
map.fitBounds(bounds);
}
// Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
this.setZoom(5);
google.maps.event.removeListener(boundsListener);
});
}   