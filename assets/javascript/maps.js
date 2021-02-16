let map;

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 13,
        center: {
            lat: 51.45711869385962, 
            lng: -2.58831034673346
        }
    });
}