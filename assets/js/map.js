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
        // map.addSource('rbd', {
        //     'type': 'geojson',
        //     'data': 'data/rbd_cat.geojson'
        // });

        // map.addLayer({
        //     'id': 'rbd_value',
        //     'source': 'rbd',
        //     'maxzoom': 1,
        //     'minzoom': 5,
        //     'type': 'fill',
        //     'paint': {
        //         'fill-color': [
        //             'interpolate',
        //             ['linear'],
        //             ['get', 'group'],
        //             1,
        //             '#b92727',
        //             2,
        //             '#f2ee0f',
        //             3,
        //             '#1a8812'
        //         ],
        //         'fill-opacity': 0.75
        //     }
        // }, );

        map.addSource('mc', {
            'type': 'geojson',
            'data': 'data/mc_cat.geojson'
        });

        map.addLayer({
            'id': 'mc_value',
            'source': 'mc',
            'maxzoom': 8,
            'minzoom': 5,
            'type': 'fill',
            'paint': {
                'fill-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'group'],
                    1,
                    '#b92727',
                    2,
                    '#f2ee0f',
                    3,
                    '#1a8812'
                ],
                'fill-opacity': 0.75
            }
        }, );

        // map.addLayer({
        //     'id': 'outline',
        //     'maxzoom':11,
        //     'minzoom': 9.1,
        //     'type': 'line',
        //     'source': 'mc',
        //     'layout': {},
        //     'paint': {
        //         'line-color': '#000',
        //         'line-width': 3
        //     }
        // });

        map.addSource('oc', {
            'type': 'geojson',
            'data': 'data/oc_cat.geojson'
        });

        map.addLayer({
            'maxzoom': 11,
            'minzoom': 8,
            'id': 'oc',
            'source': 'oc',
            'type': 'fill',
            // only include features for which the "isCounty"
            // property is "true"
            'paint': {
                'fill-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'group'],
                    1,
                    '#b92727',
                    2,
                    '#f2ee0f',
                    3,
                    '#1a8812'
                ],

                'fill-opacity': 0.75
            }
        });


        map.addSource('wb', {
            'type': 'geojson',
            'data': 'data/lines.geojson'
        });

        map.addLayer({
            'id': 'wb_value',
            'source': 'wb',
            'maxzoom': 5,
            'minzoom': 20,
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
                feature['place_name'] = `🌊  ${feature.properties.Name}`;
                feature['center'] = feature.geometry.coordinates;
              
                matchingFeatures.push(feature);
            }
        }
        return matchingFeatures;
    }



    map.on('click', 'mc_value', (e) => {
        // Copy coordinates array.
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<p> Managment catchment: ' + e.features[0].properties.MC + "</br> <p> Waterbody sentiment score: " + parseFloat(e.features[0].properties.senticent_polarity).toFixed(4))
            .addTo(map);

    });

    map.on('click', 'oc', (e) => {
        // Copy coordinates array.
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<p> Operational catchment: ' + e.features[0].properties.OC + "</br> <p> Waterbody sentiment score: " + parseFloat(e.features[0].properties.senticent_polarity).toFixed(4))
            .addTo(map);
    });

    map.on('click', 'wb_value', (e) => {

        // Copy coordinates array.
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<p> Waterbody name: ' + e.features[0].properties.name + "</br> <p> Waterbody sentiment score: " + parseFloat(e.features[0].properties.senticent_polarity).toFixed(4) + "</br> <p> Waterbody ecological status: " + e.features[0].properties.status)
            .addTo(map);
    });

    map.on('mouseenter', 'oc', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'oc', () => {
        map.getCanvas().style.cursor = '';
    });

    map.on('mouseenter', 'mc', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'mc', () => {
        map.getCanvas().style.cursor = '';
    });

    // map.on('hover','mc', (e) => {

    // })
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        countries: 'gb',
        zoom: 12,
        localGeocoder: forwardGeocoder
    });

    map.addControl(new mapboxgl.NavigationControl());

    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

    const ocLegendEl = document.getElementById('oc-legend');
    const mcLegendEl = document.getElementById('mc-legend');
    const riverLegendEl = document.getElementById('wb-legend');

    
    geocoder.on('result', (e) => {
        d3.selectAll("#my_dataviz > *").remove();
        let WBID_Select = e.result.properties.WBID;

        var eco = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/eco-class.csv" 
        var senti = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/emolex-frequency.csv" 
        var rnag = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/rnag.csv" 
         var noun = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/common-nounphrase.csv" 

         var polarity = "https://raw.githubusercontent.com/Digital-Water-Publics/Thames21-Socio-Ecological-Data/main/pot-mi/Open-Data/Thames/" + WBID_Select + "/polarity-score.csv" 

         chart(polarity)

        });

        geocoder.on('clear', () => {
            results.innerText = '';
            });

    map.on('zoom', () => {

        if (map.getZoom() < 8) {
            ocLegendEl.style.display = 'none';
            riverLegendEl.style.display = 'none';
            mcLegendEl.style.display = 'block';
            document.getElementById("scale").innerHTML = "You are viewing at the Management Catchment scale"
        }


        if (map.getZoom() < 11 && map.getZoom() > 8) {
            ocLegendEl.style.display = 'block';
            mcLegendEl.style.display = 'none';
            riverLegendEl.style.display = 'none';
            document.getElementById("scale").innerHTML = "You are viewing at the Operational Catchment scale"
        }

        if (map.getZoom() > 11) {
            ocLegendEl.style.display = 'none';
            riverLegendEl.style.display = 'block';
            mcLegendEl.style.display = 'none';
            document.getElementById("scale").innerHTML = "You are viewing at the Waterbody scale"
        }

    });
};