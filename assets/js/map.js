window.onload = function () {
    mapboxgl.accessToken =
        'pk.eyJ1IjoibmF0aGFuYWVsaXNhbWFwcGVyIiwiYSI6ImNrODNiZzdoZTA4Y2gzZ281YmJiMHNwOWIifQ.d2ntY86sJ7DR7011dUJ2cw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/nathanaelisamapper/cku35o63u0ccs18mno2qb0wel',
        center: [-0.118092, 51.509865],
        minZoom: 3,
        bearing: 15,
        zoom: 7
    });

    map.on('load', () => {
        map.addSource('mc', {
            'type': 'geojson',
            'data': 'data/mc.geojson'
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
                    ['get', 'senticent_polarity'],
                    -0.01549,
                    '#d9ed92',
                    0.05870,
                    '#b5e48c',
                    0.11758,
                    '#99d98c',
                    0.13783,
                    '#52b69a',
                    0.17332,
                    '#34a0a4',
                    0.55357,
                    '#168aad'
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
            'data': 'data/oc.geojson'
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
                    ['get', 'senticent_polarity'],
                    -0.03899,
                    '#d9ed92',
                    0.07205,
                    '#b5e48c',
                    0.11972,
                    '#99d98c',
                    0.14414,
                    '#52b69a',
                    0.17022,
                    '#34a0a4',
                    0.63468,
                    '#168aad'
                ],

                'fill-opacity': 0.75
            }
        });


        map.addSource('wb', {
            'type': 'geojson',
            'data': 'data/wb.geojson'
        });

        map.addLayer({
            'id': 'wb_value',
            'source': 'wb',
            'maxzoom': 14,
            'minzoom': 11,
            'type': 'fill',
            'paint': {
                'fill-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'senticent_polarity'],
                    -1.794540,
                    '#d9ed92',
                    0.008247,
                    '#b5e48c',
                    0.091171,
                    '#52b69a',
                    0.100054,
                    '#99d98c',
                    0.195504,
                    '#34a0a4',
                    0.855051,
                    '#168aad'
                ],
                'fill-opacity': 0.75
            }
        }, );
    });

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
                // Add a tree emoji as a prefix for custom
                // data results using carmen geojson format:
                // https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
                feature['place_name'] = `🌊  ${feature.properties.name}`;
                feature['center'] = feature.geometry.coordinates;
                feature['place_type'] = ['park'];
                matchingFeatures.push(feature);
            }
        }
        return matchingFeatures;
    }


    map.on('click', 'mc_value', (e) => {
        // Copy coordinates array.
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<p> Management catchment: ' + e.features[0].properties.MC + "</br> <p> Waterbody sentiment score: " + e.features[0].properties.senticent_polarity)
            .addTo(map);
    });

    map.on('click', 'oc', (e) => {
        // Copy coordinates array.
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<p> Operational catchment: ' + e.features[0].properties.OC + "</br> <p> Waterbody sentiment score: " + e.features[0].properties.senticent_polarity)
            .addTo(map);
    });

    map.on('click', 'wb_value', (e) => {
        // Copy coordinates array.
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<p> Waterbody name: ' + e.features[0].properties.name + "</br> <p> Waterbody sentiment score: " + e.features[0].properties.senticent_polarity + "</br> <p> Waterbody ecological status: " + e.features[0].properties.status)
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