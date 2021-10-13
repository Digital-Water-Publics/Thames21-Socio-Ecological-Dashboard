window.onload = function() {
    mapboxgl.accessToken =
    'pk.eyJ1IjoibmF0aGFuYWVsaXNhbWFwcGVyIiwiYSI6ImNrODNiZzdoZTA4Y2gzZ281YmJiMHNwOWIifQ.d2ntY86sJ7DR7011dUJ2cw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/nathanaelisamapper/cku1gp11z0ixn17pucvmhd1at',
    center: [-0.118092, 51.509865],
    minZoom: 3,
    zoom: 7
});

const zoomThreshold = 9;

map.on('load', () => {
    // Add a custom vector tileset source. The tileset used in
    // this example contains a feature for every state and
    // county in the U.S.
    // Each state contains four properties. For example:
    //     {
    //         isState: true,
    //         name: "Wyoming",
    //         population: 584153,
    //         state: 56
    //     }
    // Each county contains four properties. For example:
    //     {
    //         county: 16049,
    //         isCounty: true,
    //         name: "Idaho County",
    //         population: 16315
    //     }
    map.addSource('mc', {
        'type': 'geojson',
        'data': 'data/mc.geojson'
    });

    map.addLayer({
            'id': 'mc_value',
            'source': 'mc',
            'maxzoom': zoomThreshold,
            'type': 'fill',
            'paint': {
                'fill-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'senticent_polarity'],
                    0,
                    '#d9ed92',
                    0.1,
                    '#b5e48c',
                    0.2,
                    '#99d98c',
                    0.3,
                    '#76c893',
                    0.4,
                    '#52b69a',
                    0.5,
                    '#34a0a4',
                    0.6,
                    '#168aad',
                    0.7,
                    '#1a759f',
                    0.8,
                    '#1e6091'
                ],
                'fill-opacity': 0.75
            }
        },
    );

    map.addLayer({
        'id': 'outline',
        'minzoom': zoomThreshold,
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
            'id': 'oc',
            'source': 'oc',
            'minzoom': zoomThreshold,
            'type': 'fill',
            // only include features for which the "isCounty"
            // property is "true"
            'paint': {
                'fill-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'senticent_polarity'],
                    0,
                    '#d9ed92',
                    0.1,
                    '#b5e48c',
                    0.2,
                    '#99d98c',
                    0.3,
                    '#76c893',
                    0.4,
                    '#52b69a',
                    0.5,
                    '#34a0a4',
                    0.6,
                    '#168aad',
                    0.7,
                    '#1a759f',
                    0.8,
                    '#1e6091'
                ],
                'fill-opacity': 0.75
            }
        }
    );
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
const stateLegendEl = document.getElementById('state-legend');
const countyLegendEl = document.getElementById('county-legend');
map.on('zoom', () => {
    if (map.getZoom() > zoomThreshold) {
        stateLegendEl.style.display = 'none';
        countyLegendEl.style.display = 'block';
    } else {
        stateLegendEl.style.display = 'block';
        countyLegendEl.style.display = 'none';
    }
});
};