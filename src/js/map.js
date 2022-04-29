window.onload = function () {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
      });
    
      
    /**
     * Set mapbox access
     */
    mapboxgl.accessToken =
        'pk.eyJ1IjoibmF0aGFuYWVsaXNhbWFwcGVyIiwiYSI6ImNrODNiZzdoZTA4Y2gzZ281YmJiMHNwOWIifQ.d2ntY86sJ7DR7011dUJ2cw';
    /**
     * Set mapbox map
     */
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/nathanaelisamapper/cl26px4kg000h14lp32zp2c6p', // style URL
        center: [-0.118092, 51.509865],
        minZoom: 3,
        bearing: 15,
        zoom: 7
    });

    /**
     *  Trigger functions when the map is loaded
     */
    map.on('load', () => {

        /**
         * Add layer for waterbodies
         */
        map.addSource('wb', {
            'type': 'geojson',
            'data': 'lines.geojson'
        });

        /**
         * Style waterbody values by sentiment score
         */
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

    /**
     * @param {string} query - user waterbody search input
     */
    function forwardGeocoder(query) {
        const matchingFeatures = [];
        for (const feature of centroids.features) {
            // Handle queries with different capitalization
            // than the source data by calling toLowerCase().
            if (
                feature.properties.name
                .toLowerCase()
                .includes(query.toLowerCase())
            ) {
                feature['place_name'] = `${feature.properties.name}`;
                feature['center'] = feature.geometry.coordinates;

                matchingFeatures.push(feature);
            }
        }
        return matchingFeatures;
    }

    /**
     * Set mapbox popup
     */
    map.on('click', 'wb_value', (e) => {
        // Copy coordinates array.
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<p> Waterbody name: ' + e.features[0].properties.name + "</br> <p> Waterbody sentiment score: " + parseFloat(e.features[0].properties.senticent_polarity).toFixed(4) + "</br> <p> Waterbody ecological status: " + e.features[0].properties.status)
            .addTo(map);
    });

    /**
     * Set mapbox geocoder
     */
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        countries: 'gb',
        placeholder: 'Search for a river',
        zoom: 12,
        localGeocoder: forwardGeocoder
    });

    map.addControl(new mapboxgl.NavigationControl());
    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

    /**
     * Trigger chart and map functions when user searches for a waterbody
     */
    geocoder.on('result', (e) => {
        document.querySelector('table').remove()
        let WBID_Select = e.result.properties.WBID;
        let Name_Select = e.result.properties.Name;


        d3.selectAll("#my_dataviz > *").remove();
        d3.selectAll("#my_dataviz1 > *").remove();
        d3.selectAll("#my_dataviz2 > *").remove();
        d3.selectAll("#my_dataviz4 > *").remove();
        d3.selectAll("#chart > *").remove();


        document.getElementById("twitter_feels").innerHTML = "How do people feel about " + Name_Select;
        document.getElementById("temporal_graph_text").innerHTML = "How people feel about " + Name_Select;
        document.getElementById("emotions_graph_text").innerHTML = "Basic emotions associated with " + Name_Select;
        document.getElementById("phrases_graph_text").innerHTML = "Common phrases associated with " + Name_Select;
        document.getElementById("eco_status_text").innerHTML = "Ecological status of " + Name_Select;
        document.getElementById("rngag_graph_text").innerHTML = "Why is " + Name_Select + "not achieving good status?"
        document.getElementById("rngag_graph_text").innerHTML = "Reasons for not achieving good ecological status of " + Name_Select;

        var eco = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/eco-class.csv"
        var emo_freq_path = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/emolex-frequency.csv"
        var rnag_path = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/rnag.csv"
        var nounphrase_path = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/common-nounphrase.csv"
        var polarity = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/polarity-score.csv"

        document.getElementById("raw_data").href = polarity;
        document.getElementById("raw_data1").href = emo_freq_path;
        document.getElementById("raw_data2").href = nounphrase_path;
        chart(polarity, eco, emo_freq_path, nounphrase_path, rnag_path)

    });

};