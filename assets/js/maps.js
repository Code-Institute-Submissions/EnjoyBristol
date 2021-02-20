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
            content: "<h6>The Chefs Table</h6><p>The Chef's Table Bistro is a unique dining experience based in the Cumberland Basin, Bristol.</p>"
        },
        {
            location: { lat: 51.454101827474275, lng: -2.5935277771187497 },
            content: "<h6>Mugshot Restaurants</h6><p>British Steakhouse with shimmering chandeliers, signature Mugshot wall, wood panelling and its striking rich parquet flooring through the centre, the feeling of a true vintage British restaurant is ensured.</p>"
        },
        {
            location: { lat: 51.44557902145428, lng: -2.6111742578997177 },
            content: "<h6>Coronation Curry House</h6><p>An array of classic Indian dishes for dine-in & take-away in a relaxed, family-friendly setting.</p>"
        },
        {
            location: { lat: 51.4545486706721, lng: -2.5937861803603552 },
            content: "<h6>Eatchu</h6><p>Eatchu is an award winning street food takeaway based on Exchange Avenue in Bristol's historic St Nicks Market.</p>"
        },
        {
            location: { lat: 51.44761837714534, lng: -2.59841982225568 },
            content: "<h6>Tare</h6><p>Small, intimate restaurant in a cargo shipping container, serving modern British 5 course set menus.</p>"
        },
        {
            location: { lat: 51.44251114136632, lng: -2.563195005366259 },
            content: "<h6>Curry House</h6><p>The sumptuous refurbished restaurant offers a fantastic cuisine from our a la carte menu ranging from tasty Korma’s to unique dishes such as spicy calamari, salmon tikka and our famous chef special.</p>"
        },
        {
            location: { lat: 51.45058508187981, lng: -2.619806222576851 },
            content: "<h6>Indian Rassasy</h6><p>In Indian Rassasy we brings you the real taste of India with our experienced and qualified chefs. The restaurant provides the food according to the taste bud of the guest.</p>"
        },
        {
            location: { lat: 51.4602982057476, lng: -2.601098539142902 },
            content: "<h6>Chris and Jo's Kitchen</h6><p>As an independently-run restaurant, we pride ourselves on serving great quality, unpretentious food, made from scratch on site daily.</p>"
        }
    ];

    var barsMarkers = [
        {
            location: { lat: 51.470074208865434, lng: -2.5938513378313366 },
            content: "<h2>The Bootlegger</h2><p>Opened in Bristol in April 2014 - The Bristol Bootlegger - Prohibition inspired Performance and Cocktails - The accessible speakeasy</p>"
        },
        {
            location: { lat: 51.45208019765397, lng: -2.5923166461624367 },
            content: "<h2>The Apple</h2><p>Bustling cider pub on 2 floors of a moored boat with bench seats on the cobblestone quayside.</p>"
        },
        {
            location: { lat: 51.45713373493726, lng: -2.6078536473964733 },
            content: "<h2>London Cocktail Club Bristol</h2><p>Leave your inhibitions at the door & let your fantasies run wild; it’s LCC’s twisted ode to Neverland at night.</p>"
        },
        {
            location: { lat: 51.451586137870684, lng: -2.607606084177607 },
            content: "<h2>Bag of Nails, Bristol</h2><p>The bestest pub in the world. Or at least that street. Official. There are cats!</p>"
        },
        {
            location: { lat: 51.456568190306896, lng: -2.6067294631679627 },
            content: "<h2>Be At One Bristol</h2><p>Lively chain bar that serves sweet, sour and spicy cocktails, and offers mixing masterclasses.</p>"
        },
        {
            location: { lat: 51.453875443172066, lng: -2.5947276641388126 },
            content: "<h2>Brozen Bar</h2><p>A speciality cocktail bar situated in the heart of the city. Come and try our delicious frozen cocktails and alcoholic ice creams made in front of your eyes</p>"
        },
        {
            location: { lat: 51.4546788839588, lng: -2.6208507362603837 },
            content: "<h2>The Bristol Fringe</h2><p>Entertainment 7 days a week From comedy to Jazz and free live music gigs The Bristol Fringe is a leading live music venue in Clifton Village.</p>"
        },
        {
            location: { lat: 51.4615883490576, lng: -2.6024596358927505 },
            content: "<h2>Highbury Vaults</h2><p>Real ales and comfort food in snug, 19th-century pub with dark-wood panelling, plus patio garden.</p>"
        },
        {
            location: { lat: 51.45245290596501, lng: -2.589354949872197 },
            content: "<h2>The Fleece</h2><p>Independent live music venue situated in the heart of Bristol offering gigs and club nights 7 nights per week since 1982!</p>"
        },
        {
            location: { lat: 51.4491199329655, lng: -2.594165370302849 },
            content: "<h2>Thekla</h2><p>Thekla is a world-famous, award-winning live music venue and club space on board a converted German cargo ship, moored in Bristol's Floating Harbour since 1984.</p>"
        }
    ];

    var placesMarkers = [
        {
            location: { lat: 51.45048111779881, lng: -2.596900962807662 },
            content: "<h2>The Bristol</h2><p>Welcome to The Bristol! Anyone spending any length of time in Bristol is likely to come across our iconic building. Enviably situated on the quayside of the Floating Harbour, this luxury Bristol hotel is surrounded by the best of Bristol's Old City</p>"
        },
        {
            location: { lat: 51.458090604581166, lng: -2.5934628946480163 },
            content: "<h2>Premier Inn Bristol City Centre (Lewins Mead) Hotel</h2><p>For the best of Bristol old and new, stay at Premier Inn Bristol City Centre (Lewins Mead). Our new-generation bedrooms, each featuring and impressive 40 inch flat screen TV, bright, modern bathroom with a large shower head, and extra-comfy Hypnos bed are a great contrast to the quirky Christmas Steps Arts Quarter and the Unitarian Meeting House.</p>"
        },
        {
            location: { lat: 51.456876660042084, lng: -2.5965847203284547 },
            content: "<h2>Hotel du Vin Bristol</h2><p>See why so many travelers make Hotel du Vin & Bistro their hotel of choice when visiting Bristol. Providing an ideal mix of value, comfort and convenience, it offers a romantic setting with an array of amenities designed for travelers like you.</p>"
        },
        {
            location: { lat: 51.50768985843812, lng: -2.6314929365391877 },
            content: "<h2>Best Western Henbury Lodge Hotel</h2><p>his stylish country house hotel in Bristol offers spacious rooms, an award-winning restaurant, free Wi-Fi and large gardens. Housed in a Georgian building and converted Stable block, each room at the Henbury Lodge has a flat-screen TV with Freeview channels, Tea & Coffee facilities.</p>"
        },
        {
            location: { lat: 51.45485461263951, lng: -2.594085994648224 },
            content: "<h2>Bristol Harbour Hotel & Spa</h2><p>Bristol Harbour Hotel & Spa, located right in the heart of the historic city centre on Corn Street, offers contemporary, luxurious accommodation. The hotel leads the way in city luxury with 42 en-suite bedrooms, the Kitchen, Bar & Terrace restaurant and Gold Bar and indulgent HarSPA.</p>"
        },
        {
            location: { lat: 51.453747501473316, lng: -2.5890886521066347 },
            content: "<h2>Premier Inn Bristol City Centre (Finzels Reach) Hotel</h2><p>When you're staying with us at our Premier Inn Bristol City Centre (Finzel's Reach) hotel, a fun family day out is just a short stroll away. Have a picnic in the lush green oasis of Castle Park, take the kids to meet the mermaids at Bristol Aquarium or catch your favourite superstar performing at the o2 Academy Bristol.</p>"
        },
        {
            location: { lat: 51.45841577822839, lng: -2.583538603068652 },
            content: "<h2>Future Inn Cabot Circus Hotel</h2><p>See why so many travellers make Future Inn Cabot Circus Hotel their hotel of choice when visiting Bristol. Providing an ideal mix of value, comfort and convenience, it offers a family-friendly setting with an array of amenities designed for travellers like you.</p>"
        },
        {
            location: { lat: 51.451739837203796, lng: -2.585091037204776 },
            content: "<h2>Hilton Garden Inn Bristol City Centre</h2><p>Hilton Garden Inn Bristol City Centre is situated in the modern business district. We are three minutes from Temple Meads Station with regular trains to London, Cardiff and Bath. Our contemporary hotel is ideally located for exploring all the city and West Country have to offer.</p>"
        },
        {
            location: { lat: 51.459850708910885, lng: -2.5888149927138038 },
            content: "<h2>Hampton by Hilton Bristol Airport</h2><p>Hampton by Hilton Bristol Airport is ideally situated within walking distance of the main terminal. Our welcoming hotel provides the perfect start or end to any adventure or business trip.</p>"
        },
        {
            location: { lat: 51.45191562119472, lng: -2.5929617345911224 },
            content: "<h2>Premier Inn Bristol City Centre (King Street) Hotel</h2><p>Shipshape, Bristol fashion, and so much more... It's all on your doorstep at the Premier Inn Hotel Bristol City Centre King Street. Based in the historic harbourside, you can walk to most of the major attractions, transport links and nightlife. Catch a show at the Bristol Hippodrome or Old Vic Theatre.</p>"
        }
    ];

    var familyMarkers = [
        {
            location: { lat: 51.44931157194498, lng: -2.6084165222549127 },
            content: "<h2>Brunel's SS Great Britain</h2><p>Step back in time when you board Brunel’s SS Great Britain. Discover the true stories behind the ship that changed the world. Experience the sights, sounds and smells of life on board for Victorian passengers and crew. Descend under water below the glass ‘sea’ to touch the world’s first great ocean liner.</p>"
        },
        {
            location: { lat: 51.45498908507747, lng: -2.6278660251383763 },
            content: "<h2>Clifton Suspension Bridge</h2><p>Designed and built in 1836 by a young engineer, Isambard Kingdom Brunel, this 702-foot-long, 250-foot-high suspension bridge gracefully spans the Avon Gorge between Clifton and Leigh Woods.</p>"
        },
        {
            location: { lat: 51.454153285216385, lng: -2.6067886362179586 },
            content: "<h2>Cabot Tower</h2><p>32-metre viewing tower, built in 1897, for 400th anniversary of John Cabot's voyage to Newfoundland.</p>"
        },
        {
            location: { lat: 51.45061172300533, lng: -2.6001070657589733 },
            content: "<h2>We The Curious</h2><p>We The Curious was previously known as At-Bristol Science Centre; an educational charity with an aim to “make science accessible to all”, it opened in 2000, and welcomed over 5 million visitors in the past 17 years. At-Bristol relaunched as We The Curious in September 2017, with a new vision that is committed to creating a culture of curiosity. We The Curious is an idea and a place for everyone.</p>"
        },
        {
            location: { lat: 51.44778219047801, lng: -2.5982665803615017 },
            content: "<h2>M Shed</h2><p>See amazing film and photographs, listen to moving personal stories, encounter rare and quirky objects and add your own memories of Bristol through the interactive displays. From prehistoric times to the present day, M Shed tells the story of the city and its unique place in the world.</p>"
        },
        {
            location: { lat: 51.44951648579274, lng: -2.5961216381474217 },
            content: "<h2>Bristol Ferry Boats</h2><p>Bristol Ferry is a not-for-profit organisation offering boat trips around Bristol, as well as boat parties, interactive tours, wildlife spotting & storytelling, celebrations and wedding parties. We work with many local organisations, festivals and events, contributing to the vibrant culture in and around Bristol Harbour and delivering visitors to the door. Bristol Ferry is a 'community benefit society', whose main goal is keeping Bristol's iconic blue and yellow boats sailing.</p>"
        },
        {
            location: { lat: 51.456622378146974, lng: -2.605063107326814 },
            content: "<h2>Bristol Museum & Art Gallery</h2><p>Explore our free collections of art, nature and history on display in this beautiful building. Find out about the last billion years of earth's history, explore the region's natural wonders and discover more about peoples' lives, past and present.</p>"
        },
        {
            location: { lat: 51.46738463942296, lng: -2.7163303329706956 },
            content: "<h2>Oakham Treasures</h2><p>Homespun museum of retail & farming history, with vintage tractors & sweet shop & grocery displays.</p>"
        },
        {
            location: { lat: 51.46388059513754, lng: -2.622000263814203 },
            content: "<h2>Bristol Zoo Gardens</h2><p>Discover over 400 species of exotic and endangered animals from across the globe at Bristol Zoo Gardens, all set within award-winning gardens spanning over 12 acres. Journey into an amazing animal kingdom and get closer than ever before with spectacular immersive experiences.</p>"
        },
        {
            location: { lat: 51.45678321963877, lng: -2.6265033505104163 },
            content: "<h2>Clifton Observatory and Caves</h2><p>The Clifton Observatory and Caves sits above the Avon Gorge offering superb views of the Clifton Suspension Bridge and the city of Bristol. The Observatory houses one of the only camera obscuras still open to the public in the UK.</p>"
        }
    ];
}