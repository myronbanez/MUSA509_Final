
const colors = ["#f0bc1f", "#827345", "#9b76b8", "#482863"]

var map = L.map('map').setView([39.95, -75.2], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// L.vectorGrid.protobuf("https://storage.googleapis.com/fire_recovery_data_lake/tiles/properties/{z}/{x}/{y}.pbf", {
//     vectorTileLayerStyles: { 
//         fill: true,
//         weight: 1,
//         fillColor: colors[0],
//         color: colors[0],
//         fillOpacity: 0.8,
//         opacity: 1,
//     },
// }).addTo(map); 

L.vectorGrid.protobuf("https://storage.googleapis.com/fire_recovery_data_lake/tiles/blockgroups/{z}/{x}/{y}.pbf", {
    vectorTileLayerStyles: { 
        fill: true,
        weight: 1,
        fillColor: colors[0],
        color: colors[0],
        fillOpacity: 0.8,
        opacity: 1,
    },
}).addTo(map); 

// L.vectorGrid.protobuf("https://storage.googleapis.com/fire_recovery_data_lake/tiles/neighborhoods/{z}/{x}/{y}.pbf", {
//     vectorTileLayerStyles: { 
//         fill: true,
//         weight: 1,
//         fillColor: colors[0],
//         color: colors[0],
//         fillOpacity: 0.8,
//         opacity: 1,
//     },
// }).addTo(map); 

map.on("zoomstart", function (e) { console.log("ZOOMSTART", e); });
map.on("zoomend", function (e) { console.log("ZOOMEND", e); });