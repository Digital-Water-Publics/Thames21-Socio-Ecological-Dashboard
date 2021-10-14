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

    const zoomThreshold = 9;
    const zoomMid = 7;
    const zoomMin = 5;

    map.on('load', () => {
        map.addSource('mc', {
            'type': 'geojson',
            'data': 'data/mc.geojson'
        });

        map.addLayer({
            'id': 'mc_value',
            'source': 'mc',
            'maxzoom': 9,
            'minzoom': 7,
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

        map.addLayer({
            'id': 'outline',
            'maxzoom':11,
            'minzoom': 9.1,
            'type': 'line',
            'source': 'mc',
            'layout': {},
            'paint': {
                'line-color': '#000',
                'line-width': 3
            }
        });

        map.addSource('oc', {
            'type': 'geojson',
            'data': 'data/oc.geojson'
        });

        map.addLayer({
            'maxzoom': 14,
            'minzoom': 11.1,
            'id': 'oc',
            'source': 'oc',
            'minzoom': zoomMin,
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
            'minzoom': 16.1,
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
    });


    map.on('click', 'oc', (e) => {
        // Copy coordinates array.
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.OC + "</br>" + e.features[0].properties.senticent_polarity)
            .addTo(map);
    });

    map.on('click', 'mc_value', (e) => {
        // Copy coordinates array.
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.MC + "</br>" + e.features[0].properties.senticent_polarity)
            .addTo(map);
    });

    map.on('click', 'wb_value', (e) => {
        // Copy coordinates array.
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.name + "</br>" + e.features[0].properties.senticent_polarity)
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
        mapboxgl: mapboxgl
    });

    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
    const stateLegendEl = document.getElementById('oc-legend');
    const countyLegendEl = document.getElementById('mc-legend');
    const riverLegendEl = document.getElementById('wb-legend');
    map.on('zoom', () => {
        if (map.getZoom() > zoomThreshold) {
            stateLegendEl.style.display = 'none';
            riverLegendEl.style.display = 'none';
            countyLegendEl.style.display = 'block';
        } else {
            stateLegendEl.style.display = 'block';
            countyLegendEl.style.display = 'none';
        }

        if (map.getZoom() <= 2) {
            stateLegendEl.style.display = 'none';
            riverLegendEl.style.display = 'block';
            countyLegendEl.style.display = 'none';
        }

    });
};