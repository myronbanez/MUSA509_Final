import pred_nhood from "../data/prediction_nhoods.js";
// import pred_bg from "../data/prediction_blockgroup.js";
  
//https://api.mapbox.com/styles/v1/keelbn/cl8c2nvmq003114li896sf85z/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2VlbGJuIiwiYSI6ImNqaWVseGZjZzA3emMzdnAxM296OTFjNG8ifQ.W2j9Y2mz4t6vGRyKJk_Nyw

function initMap() {
    //Making base tile layer
    const map = L.map('map', {maxZoom:22}).setView([39.95, -75.15], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Address
    // L.vectorGrid.protobuf("https://storage.googleapis.com/fire_recovery_data_lake/tiles/{z}/{x}/{y}.pbf", {
    //     vectorTileLayerStyles: {
    //         test01: {
    //             weight:0,
    //             fillColor: '#7B230B',
    //             fillOpacity: 0.5,
    //             fill: false,
    //             radius: 0.1
    //         }
    //     }
    // }).addTo(map);

    return map;
}

/* NEIGHBORHOOD LEVEL */
// Vacant
const vacantCheckbox = document.querySelector('.vacant-checkbox');
vacantCheckbox.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.86 ? '#7B230B' :
        s > 0.11  ? '#D55816' :
        s > 0.05  ? '#E19825' :
                          '#F1C82B';
    }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.spread1_vacant),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
  
  L.geoJson(pred_nhood, {style: style})
  .bindPopup(layer => `
    <h6>${layer.feature.properties['neighborhood']}</h6>
    <h6>Probability: ${layer.feature.properties['spread1_vacant']}</h6>
`).openPopup(). addTo(map)

  return map
});

const vacantCheckbox2 = document.querySelector('.vacant-checkbox2');
vacantCheckbox2.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.86 ? '#7B230B' :
        s > 0.11  ? '#D55816' :
        s > 0.05  ? '#E19825' :
                          '#F1C82B';
    }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.spread2_vacant),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
  
L.geoJson(pred_nhood, {style: style})
.bindPopup(layer => `
  <h6>${layer.feature.properties['neighborhood']}</h6>
  <h6>Probability: ${layer.feature.properties['spread2_vacant']}</h6>
`).openPopup(). addTo(map)

  return map
});

const vacantCheckbox3 = document.querySelector('.vacant-checkbox3');
vacantCheckbox3.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.86 ? '#7B230B' :
        s > 0.11  ? '#D55816' :
        s > 0.05  ? '#E19825' :
                          '#F1C82B';
    }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.spread3_vacant),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
  
L.geoJson(pred_nhood, {style: style})
.bindPopup(layer => `
  <h6>${layer.feature.properties['neighborhood']}</h6>
  <h6>Probability: ${layer.feature.properties['spread3_vacant']}</h6>
`).openPopup(). addTo(map)

  return map
});

const vacantCheckbox4 = document.querySelector('.vacant-checkbox4');
vacantCheckbox4.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.86 ? '#7B230B' :
        s > 0.11  ? '#D55816' :
        s > 0.05  ? '#E19825' :
                          '#F1C82B';
    }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.spread4_vacant),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
  
L.geoJson(pred_nhood, {style: style})
.bindPopup(layer => `
  <h6>${layer.feature.properties['neighborhood']}</h6>
  <h6>Probability: ${layer.feature.properties['spread4_vacant']}</h6>
`).openPopup(). addTo(map)

  return map
});

const vacantCheckbox5 = document.querySelector('.vacant-checkbox5');
vacantCheckbox5.addEventListener('click', function() {
function getColor(s) {
    return s > 0.86 ? '#7B230B' :
    s > 0.11  ? '#D55816' :
    s > 0.05  ? '#E19825' :
                      '#F1C82B';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.spread5_vacant),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
  
L.geoJson(pred_nhood, {style: style})
.bindPopup(layer => `
  <h6>${layer.feature.properties['neighborhood']}</h6>
  <h6>Probability: ${layer.feature.properties['spread5_vacant']}</h6>
`).openPopup(). addTo(map)

  return map
});

// Permit
const permitCheckbox = document.querySelector('.permit-checkbox');
permitCheckbox.addEventListener('click', function() {
function getColor(s) {
    return s > 0.35 ? '#7B230B' :
    s > 0.21  ? '#D55816' :
    s > 0.04  ? '#E19825' :
                      '#F1C82B';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.spread1_permit),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
  
L.geoJson(pred_nhood, {style: style})
.bindPopup(layer => `
  <h6>${layer.feature.properties['neighborhood']}</h6>
  <h6>Probability: ${layer.feature.properties['spread1_permit']}</h6>
`).openPopup(). addTo(map)

  return map
});

const permitCheckbox2 = document.querySelector('.permit-checkbox2');
permitCheckbox2.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.35 ? '#7B230B' :
        s > 0.21  ? '#D55816' :
        s > 0.04  ? '#E19825' :
                          '#F1C82B';
    }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.spread2_permit),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
  
L.geoJson(pred_nhood, {style: style})
.bindPopup(layer => `
  <h6>${layer.feature.properties['neighborhood']}</h6>
  <h6>Probability: ${layer.feature.properties['spread2_permit']}</h6>
`).openPopup(). addTo(map)

  return map
});

const permitCheckbox3 = document.querySelector('.permit-checkbox3');
permitCheckbox3.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.35 ? '#7B230B' :
        s > 0.21  ? '#D55816' :
        s > 0.04  ? '#E19825' :
                          '#F1C82B';
    }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.spread3_permit),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
  
L.geoJson(pred_nhood, {style: style})
.bindPopup(layer => `
  <h6>${layer.feature.properties['neighborhood']}</h6>
  <h6>Probability: ${layer.feature.properties['spread3_permit']}</h6>
`).openPopup(). addTo(map)

  return map
});

const permitCheckbox4 = document.querySelector('.permit-checkbox4');
permitCheckbox4.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.35 ? '#7B230B' :
        s > 0.21  ? '#D55816' :
        s > 0.04  ? '#E19825' :
                          '#F1C82B';
    }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.spread4_permit),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
  
L.geoJson(pred_nhood, {style: style})
.bindPopup(layer => `
  <h6>${layer.feature.properties['neighborhood']}</h6>
  <h6>Probability: ${layer.feature.properties['spread4_permit']}</h6>
`).openPopup(). addTo(map)

  return map
});

const permitCheckbox5 = document.querySelector('.permit-checkbox5');
permitCheckbox5.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.35 ? '#7B230B' :
        s > 0.21  ? '#D55816' :
        s > 0.04  ? '#E19825' :
                          '#F1C82B';
    }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.spread5_permit),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
  
L.geoJson(pred_nhood, {style: style})
.bindPopup(layer => `
  <h6>${layer.feature.properties['neighborhood']}</h6>
  <h6>Probability: ${layer.feature.properties['spread5_permit']}</h6>
`).openPopup(). addTo(map)

  return map
});

// Transfer
const transferCheckbox = document.querySelector('.transfer-checkbox');
transferCheckbox.addEventListener('click', function() {
function getColor(s) {
    return s > 0.97 ? '#7B230B' :
    s > 0.31  ? '#D55816' :
    s > 0.25  ? '#E19825' :
                      '#F1C82B';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.spread1_transfer),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
  
L.geoJson(pred_nhood, {style: style})
.bindPopup(layer => `
  <h6>${layer.feature.properties['neighborhood']}</h6>
  <h6>Probability: ${layer.feature.properties['spread1_transfer']}</h6>
`).openPopup(). addTo(map)

  return map
});

const transferCheckbox2 = document.querySelector('.transfer-checkbox2');
transferCheckbox2.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.97 ? '#7B230B' :
        s > 0.31  ? '#D55816' :
        s > 0.25  ? '#E19825' :
                          '#F1C82B';
    }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.spread2_transfer),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
  
L.geoJson(pred_nhood, {style: style})
.bindPopup(layer => `
  <h6>${layer.feature.properties['neighborhood']}</h6>
  <h6>Probability: ${layer.feature.properties['spread2_transfer']}</h6>
`).openPopup(). addTo(map)

  return map
});

const transferCheckbox3 = document.querySelector('.transfer-checkbox3');
transferCheckbox3.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.97 ? '#7B230B' :
        s > 0.31  ? '#D55816' :
        s > 0.25  ? '#E19825' :
                          '#F1C82B';
    }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.spread3_transfer),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
  
L.geoJson(pred_nhood, {style: style})
.bindPopup(layer => `
  <h6>${layer.feature.properties['neighborhood']}</h6>
  <h6>Probability: ${layer.feature.properties['spread3_transfer']}</h6>
`).openPopup(). addTo(map)

  return map
});

const transferCheckbox4 = document.querySelector('.transfer-checkbox4');
transferCheckbox4.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.97 ? '#7B230B' :
        s > 0.31  ? '#D55816' :
        s > 0.25  ? '#E19825' :
                          '#F1C82B';
    }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.spread4_transfer),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
  
L.geoJson(pred_nhood, {style: style})
.bindPopup(layer => `
  <h6>${layer.feature.properties['neighborhood']}</h6>
  <h6>Probability: ${layer.feature.properties['spread4_transfer']}</h6>
`).openPopup(). addTo(map)

  return map
});

const transferCheckbox5 = document.querySelector('.transfer-checkbox5');
transferCheckbox5.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.97 ? '#7B230B' :
        s > 0.31  ? '#D55816' :
        s > 0.25  ? '#E19825' :
                          '#F1C82B';
    }

function style(feature) {
    return {
        fillColor: getColor(feature.properties.spread5_transfer),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
  
L.geoJson(pred_nhood, {style: style})
.bindPopup(layer => `
  <h6>${layer.feature.properties['neighborhood']}</h6>
  <h6>Probability: ${layer.feature.properties['spread5_transfer']}</h6>
`).openPopup(). addTo(map)

  return map
});

export {
    initMap,
}