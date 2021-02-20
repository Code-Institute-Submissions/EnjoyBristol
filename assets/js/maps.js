let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 51.4545, lng: -2.5879 },
    });

    /****************************Variable to for markers***********************************/

    var activeMarkers = [];

    /****************************Info window variable for each location***********************************/

    var infoWindow = new google.maps.InfoWindow();

    /****************************Function for markers to appear when button clicked***********************************/

    function addMarker(property) {
        var marker = new google.maps.Marker({
            position: property.location,
            map: map,
        });

        activeMarkers.push(marker);

        marker.addListener("click", function () {
            infoWindow.close();
            infoWindow.setContent(property.content);
            infoWindow.open(map, marker);
        });
    }

    /****************************Function for clearing markers***********************************/

    function clearMarkers() {
        for (let i = 0; i < activeMarkers.length; i++) {
            activeMarkers[i].setMap(null);
        }
        activeMarkers = [];
    }

    /****************************On click functions for each button***********************************/

    $(document).ready(function () {
        $("#rest-button").on("click", function () {
            clearMarkers();
            showMarkers(restMarkers);
        })
    })

    $(document).ready(function () {
        $("#bars-button").on("click", function () {
            clearMarkers();
            showMarkers(barsMarkers);
        })
    })

    $(document).ready(function () {
        $("#places-button").on("click", function () {
            clearMarkers();
            showMarkers(placesMarkers);
        })
    })

    $(document).ready(function () {
        $("#family-button").on("click", function () {
            clearMarkers();
            showMarkers(familyMarkers);
        })
    })

    /****************************Loop to show markers on map***********************************/

    function showMarkers(markers) {
        for (i = 0; i < markers.length; i++) {
            addMarker(markers[i]);
        }
        map.setCenter({ lat: 51.4545, lng: -2.5879 });
    }

    /****************************Markers locations and content of info windows***********************************/

    var restMarkers = [
        {
            location: { lat: 51.46332801777284, lng: -2.5627903647382144 },
            content: "<h6>Pipal Tree:</h6><p>Punjabi cuisine with a unique British fusion flavour</p>"
        },
        {
            location: { lat: 51.46321702996142, lng: -2.579255137623604 },
            content: "<h6>Baba Ganoush Kitchen</h6><p>Baba Ganoush offers authentic, delicious and freshly prepared vegan and vegetarian traditional Mediterranean and Middle Eastern food!</p>"
        },
        {
            location: { lat: 51.44731223181664, lng: -2.6187742524261095 },
            content: "<h6>The Chefs Table</h6><p></p>"
        },
        {
            location: { lat: 51.454101827474275, lng: -2.5935277771187497 },
            content: "<h6></h6><p></p>"
        },
        {
            location: { lat: 51.44557902145428, lng: -2.6111742578997177 },
            content: "<h6></h6><p></p>"
        },
        {
            location: { lat: 51.4545486706721, lng: -2.5937861803603552 },
            content: "<h6></h6><p></p>"
        },
        {
            location: { lat: 51.44761837714534, lng: -2.59841982225568 },
            content: "<h6></h6><p></p>"
        },
        {
            location: { lat: 51.44251114136632, lng: -2.563195005366259 },
            content: "<h6></h6><p></p>"
        },
        {
            location: { lat: 51.45058508187981, lng: -2.619806222576851 },
            content: "<h6></h6><p></p>"
        },
        {
            location: { lat: 51.4602982057476, lng: -2.601098539142902 },
            content: "<h6></h6><p></p>"
        }
    ];

    var barsMarkers = [
        {
            location: { lat: 51.470074208865434, lng: -2.5938513378313366 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.45208019765397, lng: -2.5923166461624367 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.45713373493726, lng: -2.6078536473964733 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.451586137870684, lng: -2.607606084177607 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.456568190306896, lng: -2.6067294631679627 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.453875443172066, lng: -2.5947276641388126 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.4546788839588, lng: -2.6208507362603837 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.4615883490576, lng: -2.6024596358927505 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.45245290596501, lng: -2.589354949872197 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.4491199329655, lng: -2.594165370302849 },
            content: "<h2></h2><p></p>"
        }
    ];

    var placesMarkers = [
        {
            location: { lat: 51.45048111779881, lng: -2.596900962807662 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.458090604581166, lng: -2.5934628946480163 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.456876660042084, lng: -2.5965847203284547 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.50768985843812, lng: -2.6314929365391877 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.45485461263951, lng: -2.594085994648224 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.453747501473316, lng: -2.5890886521066347 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.45841577822839, lng: -2.583538603068652 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.451739837203796, lng: -2.585091037204776 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.459850708910885, lng: -2.5888149927138038 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.45191562119472, lng: -2.5929617345911224 },
            content: "<h2></h2><p></p>"
        }
    ];

    var familyMarkers = [
        {
            location: { lat: 51.44931157194498, lng: -2.6084165222549127 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.45498908507747, lng: -2.6278660251383763 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.454153285216385, lng: -2.6067886362179586 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.45061172300533, lng: -2.6001070657589733 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.44778219047801, lng: -2.5982665803615017 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.44951648579274, lng: -2.5961216381474217 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.456622378146974, lng: -2.605063107326814 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.46738463942296, lng: -2.7163303329706956 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.46388059513754, lng: -2.622000263814203 },
            content: "<h2></h2><p></p>"
        },
        {
            location: { lat: 51.45678321963877, lng: -2.6265033505104163 },
            content: "<h2></h2><p></p>"
        }
    ];
}