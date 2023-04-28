import pred_nhood from "../data/prediction_nhoods.js";
import pred_bg from "../data/prediction_blockgroup.js";
  
//https://api.mapbox.com/styles/v1/keelbn/cl8c2nvmq003114li896sf85z/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2VlbGJuIiwiYSI6ImNqaWVseGZjZzA3emMzdnAxM296OTFjNG8ifQ.W2j9Y2mz4t6vGRyKJk_Nyw

function initMap() {
    //Making base tile layer
    const map = L.map('map', {maxZoom:22}).setView([39.95, -75.15], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // // Address
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
const nhoodCheckbox = document.querySelector('.nhood-checkbox');
nhoodCheckbox.addEventListener ('click', function() {

 // Vacant
const vacantCheckbox = document.querySelector('.vacant-checkbox');
let geojsonLayer;
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

  if (vacantCheckbox.checked) {
    geojsonLayer = L.geoJson(pred_nhood, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['neighborhood']}</h6>
        <h6>Probability: ${layer.feature.properties['spread1_vacant']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer) {
      map.removeLayer(geojsonLayer);
    }
  }
});

const vacantCheckbox2 = document.querySelector('.vacant-checkbox2');
let geojsonLayer2;
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

  if (vacantCheckbox2.checked) {
    geojsonLayer2 = L.geoJson(pred_nhood, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['neighborhood']}</h6>
        <h6>Probability: ${layer.feature.properties['spread2_vacant']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer2) {
      map.removeLayer(geojsonLayer2);
    }
  }
});

const vacantCheckbox3 = document.querySelector('.vacant-checkbox3');
let geojsonLayer3;
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

  if (vacantCheckbox3.checked) {
    geojsonLayer3 = L.geoJson(pred_nhood, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['neighborhood']}</h6>
        <h6>Probability: ${layer.feature.properties['spread3_vacant']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer3) {
      map.removeLayer(geojsonLayer3);
    }
  }
});


const vacantCheckbox4 = document.querySelector('.vacant-checkbox4');
let geojsonLayer4;
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

  if (vacantCheckbox4.checked) {
    geojsonLayer4 = L.geoJson(pred_nhood, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['neighborhood']}</h6>
        <h6>Probability: ${layer.feature.properties['spread4_vacant']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer4) {
      map.removeLayer(geojsonLayer4);
    }
  }
});

const vacantCheckbox5 = document.querySelector('.vacant-checkbox5');
let geojsonLayer5;
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

  if (vacantCheckbox5.checked) {
    geojsonLayer5 = L.geoJson(pred_nhood, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['neighborhood']}</h6>
        <h6>Probability: ${layer.feature.properties['spread5_vacant']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer5) {
      map.removeLayer(geojsonLayer5);
    }
  }
});


// Permit
const permitCheckbox = document.querySelector('.permit-checkbox');
let geojsonLayer_permit1;
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

  if (permitCheckbox.checked) {
    geojsonLayer_permit1 = L.geoJson(pred_nhood, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['neighborhood']}</h6>
        <h6>Probability: ${layer.feature.properties['spread1_permit']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_permit1) {
      map.removeLayer(geojsonLayer_permit1);
    }
  }
});

const permitCheckbox2 = document.querySelector('.permit-checkbox2');
let geojsonLayer_permit2;
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

  if (permitCheckbox2.checked) {
    geojsonLayer_permit2 = L.geoJson(pred_nhood, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['neighborhood']}</h6>
        <h6>Probability: ${layer.feature.properties['spread2_permit']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_permit2) {
      map.removeLayer(geojsonLayer_permit2);
    }
  }
});

const permitCheckbox3 = document.querySelector('.permit-checkbox3');
let geojsonLayer_permit3;
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

  if (permitCheckbox3.checked) {
    geojsonLayer_permit3 = L.geoJson(pred_nhood, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['neighborhood']}</h6>
        <h6>Probability: ${layer.feature.properties['spread3_permit']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_permit3) {
      map.removeLayer(geojsonLayer_permit3);
    }
  }
});

const permitCheckbox4 = document.querySelector('.permit-checkbox4');
let geojsonLayer_permit4;
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

  if (permitCheckbox4.checked) {
    geojsonLayer_permit4 = L.geoJson(pred_nhood, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['neighborhood']}</h6>
        <h6>Probability: ${layer.feature.properties['spread4_permit']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_permit4) {
      map.removeLayer(geojsonLayer_permit4);
    }
  }
});

const permitCheckbox5 = document.querySelector('.permit-checkbox5');
let geojsonLayer_permit5;
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

  if (permitCheckbox5.checked) {
    geojsonLayer_permit5 = L.geoJson(pred_nhood, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['neighborhood']}</h6>
        <h6>Probability: ${layer.feature.properties['spread5_permit']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_permit5) {
      map.removeLayer(geojsonLayer_permit5);
    }
  }
});

// Transfer
const transferCheckbox = document.querySelector('.transfer-checkbox');
let geojsonLayer_transfer;
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

  if (transferCheckbox.checked) {
    geojsonLayer_transfer = L.geoJson(pred_nhood, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['neighborhood']}</h6>
        <h6>Probability: ${layer.feature.properties['spread1_transfer']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_transfer) {
      map.removeLayer(geojsonLayer_transfer);
    }
  }
});

const transferCheckbox2 = document.querySelector('.transfer-checkbox2');
let geojsonLayer_transfer2;
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

  if (transferCheckbox2.checked) {
    geojsonLayer_transfer2 = L.geoJson(pred_nhood, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['neighborhood']}</h6>
        <h6>Probability: ${layer.feature.properties['spread2_transfer']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_transfer2) {
      map.removeLayer(geojsonLayer_transfer2);
    }
  }
});

const transferCheckbox3 = document.querySelector('.transfer-checkbox3');
let geojsonLayer_transfer3;
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

  if (transferCheckbox3.checked) {
    geojsonLayer_transfer3 = L.geoJson(pred_nhood, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['neighborhood']}</h6>
        <h6>Probability: ${layer.feature.properties['spread3_transfer']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_transfer3) {
      map.removeLayer(geojsonLayer_transfer3);
    }
  }
});

const transferCheckbox4 = document.querySelector('.transfer-checkbox4');
let geojsonLayer_transfer4;
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

  if (transferCheckbox4.checked) {
    geojsonLayer_transfer4 = L.geoJson(pred_nhood, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['neighborhood']}</h6>
        <h6>Probability: ${layer.feature.properties['spread4_transfer']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_transfer4) {
      map.removeLayer(geojsonLayer_transfer4);
    }
  }
});

const transferCheckbox5 = document.querySelector('.transfer-checkbox5');
let geojsonLayer_transfer5;
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

  if (transferCheckbox5.checked) {
    geojsonLayer_transfer5 = L.geoJson(pred_nhood, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['neighborhood']}</h6>
        <h6>Probability: ${layer.feature.properties['spread5_transfer']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_transfer5) {
      map.removeLayer(geojsonLayer_transfer5);
    }
  }
});

})

// Block Group
const bgCheckbox = document.querySelector('.bg-checkbox');
bgCheckbox.addEventListener ('click', function() {

// Vacant
const vacantCheckbox_bg = document.querySelector('.vacant-checkbox');
let geojsonLayer_bg;
vacantCheckbox_bg.addEventListener('click', function() {
  function getColor(s) {
    return s > 0.86 ? '#7B230B' :
    s > 0.11  ? '#D55816' :
    s > 0.05  ? '#E19825' :
                          '#F1C82B';
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.spread1_vacant),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  if (vacantCheckbox_bg.checked) {
    geojsonLayer_bg = L.geoJson(pred_bg, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['block_group']}</h6>
        <h6>Probability: ${layer.feature.properties['spread1_vacant']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_bg) {
      map.removeLayer(geojsonLayer_bg);
    }
  }
});

const vacantCheckbox_bg2 = document.querySelector('.vacant-checkbox2');
let geojsonLayer_bg2;
vacantCheckbox_bg2.addEventListener('click', function() {
  function getColor(s) {
    return s > 0.86 ? '#7B230B' :
    s > 0.11  ? '#D55816' :
    s > 0.05  ? '#E19825' :
                          '#F1C82B';
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.spread2_vacant),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  if (vacantCheckbox_bg2.checked) {
    geojsonLayer_bg2 = L.geoJson(pred_bg, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['block_group']}</h6>
        <h6>Probability: ${layer.feature.properties['spread2_vacant']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_bg2) {
      map.removeLayer(geojsonLayer_bg2);
    }
  }
});

const vacantCheckbox_bg3 = document.querySelector('.vacant-checkbox3');
let geojsonLayer_bg3;
vacantCheckbox_bg3.addEventListener('click', function() {
  function getColor(s) {
    return s > 0.86 ? '#7B230B' :
    s > 0.11  ? '#D55816' :
    s > 0.05  ? '#E19825' :
                          '#F1C82B';
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.spread3_vacant),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  if (vacantCheckbox_bg3.checked) {
    geojsonLayer_bg3 = L.geoJson(pred_bg, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['block_group']}</h6>
        <h6>Probability: ${layer.feature.properties['spread3_vacant']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_bg3) {
      map.removeLayer(geojsonLayer_bg3);
    }
  }
});

const vacantCheckbox_bg4 = document.querySelector('.vacant-checkbox4');
let geojsonLayer_bg4;
vacantCheckbox_bg4.addEventListener('click', function() {
  function getColor(s) {
    return s > 0.86 ? '#7B230B' :
    s > 0.11  ? '#D55816' :
    s > 0.05  ? '#E19825' :
                          '#F1C82B';
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.spread4_vacant),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  if (vacantCheckbox_bg4.checked) {
    geojsonLayer_bg4 = L.geoJson(pred_bg, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['block_group']}</h6>
        <h6>Probability: ${layer.feature.properties['spread4_vacant']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_bg4) {
      map.removeLayer(geojsonLayer_bg4);
    }
  }
});

const vacantCheckbox_bg5 = document.querySelector('.vacant-checkbox5');
let geojsonLayer_bg5;
vacantCheckbox_bg5.addEventListener('click', function() {
  function getColor(s) {
    return s > 0.86 ? '#7B230B' :
    s > 0.11  ? '#D55816' :
    s > 0.05  ? '#E19825' :
                          '#F1C82B';
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.spread5_vacant),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  if (vacantCheckbox_bg5.checked) {
    geojsonLayer_bg5 = L.geoJson(pred_bg, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['block_group']}</h6>
        <h6>Probability: ${layer.feature.properties['spread5_vacant']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_bg5) {
      map.removeLayer(geojsonLayer_bg5);
    }
  }
});

// Permit
const permitCheckbox_bg = document.querySelector('.permit-checkbox');
let geojsonLayer_bg6;
permitCheckbox_bg.addEventListener('click', function() {
  function getColor(s) {
    return s > 0.35 ? '#7B230B' :
    s > 0.21  ? '#D55816' :
    s > 0.04  ? '#E19825' :
                          '#F1C82B';
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.spread1_permit),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  if (permitCheckbox_bg.checked) {
    geojsonLayer_bg6 = L.geoJson(pred_bg, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['block_group']}</h6>
        <h6>Probability: ${layer.feature.properties['spread1_permit']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_bg6) {
      map.removeLayer(geojsonLayer_bg6);
    }
  }
});

const permitCheckbox_bg2 = document.querySelector('.permit-checkbox2');
let geojsonLayer_bg7;
permitCheckbox_bg2.addEventListener('click', function() {
  function getColor(s) {
    return s > 0.35 ? '#7B230B' :
    s > 0.21  ? '#D55816' :
    s > 0.04  ? '#E19825' :
                          '#F1C82B';
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.spread2_permit),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  if (permitCheckbox_bg2.checked) {
    geojsonLayer_bg7 = L.geoJson(pred_bg, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['block_group']}</h6>
        <h6>Probability: ${layer.feature.properties['spread2_permit']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_bg7) {
      map.removeLayer(geojsonLayer_bg7);
    }
  }
});

const permitCheckbox_bg3 = document.querySelector('.permit-checkbox3');
let geojsonLayer_bg8;
permitCheckbox_bg3.addEventListener('click', function() {
  function getColor(s) {
    return s > 0.35 ? '#7B230B' :
    s > 0.21  ? '#D55816' :
    s > 0.04  ? '#E19825' :
                          '#F1C82B';
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.spread3_permit),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  if (permitCheckbox_bg3.checked) {
    geojsonLayer_bg8 = L.geoJson(pred_bg, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['block_group']}</h6>
        <h6>Probability: ${layer.feature.properties['spread3_permit']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_bg8) {
      map.removeLayer(geojsonLayer_bg8);
    }
  }
});

const permitCheckbox_bg4 = document.querySelector('.permit-checkbox4');
let geojsonLayer_bg9;
permitCheckbox_bg4.addEventListener('click', function() {
  function getColor(s) {
    return s > 0.35 ? '#7B230B' :
    s > 0.21  ? '#D55816' :
    s > 0.04  ? '#E19825' :
                          '#F1C82B';
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.spread4_permit),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  if (permitCheckbox_bg4.checked) {
    geojsonLayer_bg9 = L.geoJson(pred_bg, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['block_group']}</h6>
        <h6>Probability: ${layer.feature.properties['spread4_permit']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_bg9) {
      map.removeLayer(geojsonLayer_bg9);
    }
  }
});

const permitCheckbox_bg5 = document.querySelector('.permit-checkbox5');
let geojsonLayer_bg10;
permitCheckbox_bg5.addEventListener('click', function() {
  function getColor(s) {
    return s > 0.35 ? '#7B230B' :
    s > 0.21  ? '#D55816' :
    s > 0.04  ? '#E19825' :
                          '#F1C82B';
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.spread5_permit),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  if (permitCheckbox_bg5.checked) {
    geojsonLayer_bg10 = L.geoJson(pred_bg, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['block_group']}</h6>
        <h6>Probability: ${layer.feature.properties['spread5_permit']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_bg10) {
      map.removeLayer(geojsonLayer_bg10);
    }
  }
});

// Transfer
const transferCheckbox_bg = document.querySelector('.transfer-checkbox');
let geojsonLayer_bg11;
transferCheckbox_bg.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.97 ? '#7B230B' :
        s > 0.31  ? '#D55816' :
        s > 0.25  ? '#E19825' :
                          '#F1C82B';
    }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.spread1_transfer),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  if (transferCheckbox_bg.checked) {
    geojsonLayer_bg11 = L.geoJson(pred_bg, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['block_group']}</h6>
        <h6>Probability: ${layer.feature.properties['spread1_transfer']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_bg11) {
      map.removeLayer(geojsonLayer_bg11);
    }
  }
});

const transferCheckbox_bg2 = document.querySelector('.transfer-checkbox2');
let geojsonLayer_bg12;
transferCheckbox_bg2.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.97 ? '#7B230B' :
        s > 0.31  ? '#D55816' :
        s > 0.25  ? '#E19825' :
                          '#F1C82B';
    }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.spread2_transfer),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  if (transferCheckbox_bg2.checked) {
    geojsonLayer_bg12 = L.geoJson(pred_bg, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['block_group']}</h6>
        <h6>Probability: ${layer.feature.properties['spread2_transfer']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_bg12) {
      map.removeLayer(geojsonLayer_bg12);
    }
  }
});

const transferCheckbox_bg3 = document.querySelector('.transfer-checkbox3');
let geojsonLayer_bg13;
transferCheckbox_bg3.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.97 ? '#7B230B' :
        s > 0.31  ? '#D55816' :
        s > 0.25  ? '#E19825' :
                          '#F1C82B';
    }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.spread3_transfer),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  if (transferCheckbox_bg3.checked) {
    geojsonLayer_bg13 = L.geoJson(pred_bg, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['block_group']}</h6>
        <h6>Probability: ${layer.feature.properties['spread3_transfer']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_bg13) {
      map.removeLayer(geojsonLayer_bg13);
    }
  }
});

const transferCheckbox_bg4 = document.querySelector('.transfer-checkbox4');
let geojsonLayer_bg14;
transferCheckbox_bg4.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.97 ? '#7B230B' :
        s > 0.31  ? '#D55816' :
        s > 0.25  ? '#E19825' :
                          '#F1C82B';
    }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.spread4_transfer),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  if (transferCheckbox_bg4.checked) {
    geojsonLayer_bg14 = L.geoJson(pred_bg, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['block_group']}</h6>
        <h6>Probability: ${layer.feature.properties['spread4_transfer']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_bg14) {
      map.removeLayer(geojsonLayer_bg14);
    }
  }
});

const transferCheckbox_bg5 = document.querySelector('.transfer-checkbox5');
let geojsonLayer_bg15;
transferCheckbox_bg5.addEventListener('click', function() {
    function getColor(s) {
        return s > 0.97 ? '#7B230B' :
        s > 0.31  ? '#D55816' :
        s > 0.25  ? '#E19825' :
                          '#F1C82B';
    }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.spread5_transfer),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  if (transferCheckbox_bg5.checked) {
    geojsonLayer_bg15 = L.geoJson(pred_bg, {style: style})
      .bindPopup(layer => `
        <h6>${layer.feature.properties['block_group']}</h6>
        <h6>Probability: ${layer.feature.properties['spread5_transfer']}</h6>
      `).openPopup().addTo(map);
  } else {
    if (geojsonLayer_bg15) {
      map.removeLayer(geojsonLayer_bg15);
    }
  }
});

})

export {
    initMap,
}