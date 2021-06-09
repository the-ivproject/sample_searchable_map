// Mapbox token
const mapbox_token = 'pk.eyJ1IjoiaXZwcm9qZWN0IiwiYSI6ImNrcDZuOWltYzJyeGMycW1jNDVlbDQwejQifQ.97Y2eucdbVp1F2Ow8EHgBQ'

//YOUR TURN: add your Mapbox token
mapboxgl.accessToken = mapbox_token

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // YOUR TURN: choose a style: https://docs.mapbox.com/api/maps/#styles
    center: [35.83855676526138, 40.593159332776224], // starting position [lng, lat]
    zoom: 2, // starting zoom
    // transformRequest: transformRequest
});

map.addControl(new mapboxgl.NavigationControl(), 'top-left');

map.on('load', () => {
    document.getElementById('basemaps').addEventListener('change', function () {
        map.setStyle(`mapbox://styles/mapbox/${this.value}`)
    });
});

// Add the control to the map.
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);