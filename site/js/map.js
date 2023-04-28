//https://api.mapbox.com/styles/v1/keelbn/cl8c2nvmq003114li896sf85z/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2VlbGJuIiwiYSI6ImNqaWVseGZjZzA3emMzdnAxM296OTFjNG8ifQ.W2j9Y2mz4t6vGRyKJk_Nyw

function initMap() {
    //Making base tile layer
    const map = L.map('map', {maxZoom:22}).setView([39.95, -75.15], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // address dots
    L.vectorGrid.protobuf("https://storage.googleapis.com/fire_recovery_data_lake/tiles/{z}/{x}/{y}.pbf", {
        vectorTileLayerStyles: {
            test01: {
                weight:0,
                fillColor: '#7B230B',
                fillOpacity: 1,
                fill: true,
                radius: 0.5
            }
        }
    }).addTo(map);

    return map;
}

export {
    initMap,
}