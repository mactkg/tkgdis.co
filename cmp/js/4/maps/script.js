$(function() {
  map = new GMaps( { 
    div: '#map',
    zoom: 15,
    lat: 35.7066,
    lng: 139.6633,
  });
  
  map.drawRoute({
    origin:[35.7070168,139.6596177],
    destination: [35.707271,139.6666377],
    travelMode: 'walking',
    strokeColor: '#881540',
    strokeOpacity: 0.6,
    strokeWeight: 6
  })
});