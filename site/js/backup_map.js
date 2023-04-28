// ORIGINAL
// const permitCheckbox = document.querySelector('.permit-checkbox');
// permitCheckbox.addEventListener('click', function() {
//   const spreadSelect = document.querySelector('#spread-select');
//   const spreadValue = spreadSelect.value;
//   let spread1_permit = 0;
//   let spread2_permit = 0;
//   let spread3_permit = 0;
//   let spread4_permit = 0;
//   let spread5_permit = 0;
//   if (spreadValue === '1') {
//     if (permitCheckbox.checked) {
//       spread1_permit = 1;
//     }
//     else {
//       spread1_permit = 0;
//     }
//   }
//   else if (spreadValue === '2') {
//     if (permitCheckbox.checked) {
//       spread2_permit = 1;
//     }
//     else {
//       spread2_permit = 0;
//     }
//   }
//   else if (spreadValue === '3') {
//     if (permitCheckbox.checked) {
//       spread3_permit = 1;
//     }
//     else {
//       spread3_permit = 0;
//     }
//   }
//   else if (spreadValue === '4') {
//     if (permitCheckbox.checked) {
//       spread4_permit = 1;
//     }
//     else {
//       spread4_permit = 0;
//     }
//   }
//   else if (spreadValue === '5') {
//     if (permitCheckbox.checked) {
//       spread5_permit = 1;
//     }
//     else {
//       spread5_permit = 0;
//     }
//   }

//   function getColor(s) {
//     return s > 0.35 ? '#FD8D3C' :
//            s > 0.21  ? '#FEB24C' :
//            s > 0.04  ? '#FED976' :
//                       '#FFEDA0';
//     }

// // `spread${spread_variable}_${outcome_variable}`

// function updatedStyle(s) {
//     return {
//             fillColor: getColor(s),
//             weight: 2,
//             opacity: 1,
//             color: 'white',
//             dashArray: '3',
//             fillOpacity: 0.7
//             };
//     }

// //   const updatedStyle = {
// //     fillColor: getColor(spread1_permit, spread2_permit, spread3_permit, spread4_permit, spread5_permit),
// //     weight: 2,
// //     opacity: 1,
// //     color: 'white',
// //     dashArray: '3',
// //     fillOpacity: 0.7
// //   };
  
//   L.geoJson(pred_nhood, {style: updatedStyle}).addTo(map);

// //   const pred_nhood_layer = L.geoJson(pred_nhood, {style: style}).addTo(map);
// //   pred_nhood_layer.setStyle(updatedStyle);

//   return map
// });