
    var map = L.map('map', { zoomSnap: 0.25}).setView([43.0000, -76.0000], 7.75);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,

        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    map.dragging.enable();
    map.touchZoom.enable();
    map.doubleClickZoom.enable();
    map.scrollWheelZoom.disable();
    map.boxZoom.enable();
    map.keyboard.disable();
    if (map.tap) map.tap.disable();
    document.getElementById('map').style.cursor='default';

    var MARKER2 = L.marker([42.47975912090048, -77.46811214311259]).on('click', function() {say("baron")}).addTo(map);
