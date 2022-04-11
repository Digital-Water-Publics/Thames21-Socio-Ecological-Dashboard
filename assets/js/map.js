window.onload = function () {
    mapboxgl.accessToken =
        'pk.eyJ1IjoibmF0aGFuYWVsaXNhbWFwcGVyIiwiYSI6ImNrODNiZzdoZTA4Y2gzZ281YmJiMHNwOWIifQ.d2ntY86sJ7DR7011dUJ2cw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-v9', // style URL
        center: [-0.118092, 51.509865],
        minZoom: 3,
        bearing: 15,
        zoom: 7
    });

    // Load map
    map.on('load', () => {


        map.addSource('wb', {
            'type': 'geojson',
            'data': 'data/lines.geojson'
        });

        map.addLayer({
            'id': 'wb_value',
            'source': 'wb',
            'type': 'line',
            'paint': {
                'line-width': 5,
                'line-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'group'],
                    1,
                    '#b92727',
                    2,
                    '#f2ee0f',
                    3,
                    '#1a8812'
                ]
            }
        });
    });

    function forwardGeocoder(query) {
        const matchingFeatures = [];
        for (const feature of centroids.features) {
            // Handle queries with different capitalization
            // than the source data by calling toLowerCase().
            if (
                feature.properties.Name
                .toLowerCase()
                .includes(query.toLowerCase())
            ) {
                // Add a tree emoji as a prefix for custom
                // data results using carmen geojson format:
                // https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
                feature['place_name'] = `${feature.properties.Name}`;
                feature['center'] = feature.geometry.coordinates;
              
                matchingFeatures.push(feature);
            }
        }
        return matchingFeatures;
    }


    map.on('click', 'wb_value', (e) => {

        // Copy coordinates array.
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<p> Waterbody name: ' + e.features[0].properties.name + "</br> <p> Waterbody sentiment score: " + parseFloat(e.features[0].properties.senticent_polarity).toFixed(4) + "</br> <p> Waterbody ecological status: " + e.features[0].properties.status)
            .addTo(map);
    });





    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        countries: 'gb',
        zoom: 12,
        localGeocoder: forwardGeocoder
    });

    map.addControl(new mapboxgl.NavigationControl());

    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

  
    geocoder.on('result', (e) => {
        let WBID_Select = e.result.properties.WBID;
        let Name_Select = e.result.properties.Name;
 

        d3.selectAll("#my_dataviz > *").remove();
        d3.selectAll("#my_dataviz1 > *").remove();
        d3.selectAll("#my_dataviz2 > *").remove();
        d3.selectAll("#my_dataviz4 > *").remove();

        document.getElementById("scale").innerHTML = "You are viewing the latest data for: " + Name_Select;

        var eco = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/eco-class.csv" 
        var emo_freq_path = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/emolex-frequency.csv" 
        var rnag = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/rnag.csv" 
         var nounphrase_path = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/common-nounphrase.csv" 

         var polarity = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/polarity-score.csv" 

         chart(polarity,eco,emo_freq_path,nounphrase_path)

        });

};