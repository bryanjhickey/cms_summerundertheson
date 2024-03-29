$(document).foundation({
  "magellan-expedition": {
    // active_class: 'active', // specify the class used for active sections
    // threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
    // destination_threshold: 0, // pixels from the top of destination for it to be considered active
    // throttle_delay: 50, // calculation throttling to increase framerate
    // fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll
    // offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
  }
});

// Google Maps Scripts
// // When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, "load", init);

// function init() {
//   // Basic options for a simple Google Map
//   // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//   var mapOptions = {
//     // How zoomed in you want the map to start at (always required)
//     zoom: 11,

//     // The latitude and longitude to center the map (always required)
//     center: new google.maps.LatLng(-37.8590287, 145.1679862), // New York

//     // Disables the default Google Maps UI components
//     disableDefaultUI: false,
//     scrollwheel: false,
//     draggable: false,

//     // How you would like to style the map.
//     // This is where you would paste any style found on Snazzy Maps.
//     styles: [
//       {
//         featureType: "water",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#e9e9e9"
//           },
//           {
//             lightness: 17
//           }
//         ]
//       },
//       {
//         featureType: "landscape",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#f5f5f5"
//           },
//           {
//             lightness: 20
//           }
//         ]
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry.fill",
//         stylers: [
//           {
//             color: "#ffffff"
//           },
//           {
//             lightness: 17
//           }
//         ]
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry.stroke",
//         stylers: [
//           {
//             color: "#ffffff"
//           },
//           {
//             lightness: 29
//           },
//           {
//             weight: 0.2
//           }
//         ]
//       },
//       {
//         featureType: "road.arterial",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#ffffff"
//           },
//           {
//             lightness: 18
//           }
//         ]
//       },
//       {
//         featureType: "road.local",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#ffffff"
//           },
//           {
//             lightness: 16
//           }
//         ]
//       },
//       {
//         featureType: "poi",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#f5f5f5"
//           },
//           {
//             lightness: 21
//           }
//         ]
//       },
//       {
//         featureType: "poi.park",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#dedede"
//           },
//           {
//             lightness: 21
//           }
//         ]
//       },
//       {
//         elementType: "labels.text.stroke",
//         stylers: [
//           {
//             visibility: "on"
//           },
//           {
//             color: "#ffffff"
//           },
//           {
//             lightness: 16
//           }
//         ]
//       },
//       {
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             saturation: 36
//           },
//           {
//             color: "#333333"
//           },
//           {
//             lightness: 40
//           }
//         ]
//       },
//       {
//         elementType: "labels.icon",
//         stylers: [
//           {
//             visibility: "off"
//           }
//         ]
//       },
//       {
//         featureType: "transit",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#f2f2f2"
//           },
//           {
//             lightness: 19
//           }
//         ]
//       },
//       {
//         featureType: "administrative",
//         elementType: "geometry.fill",
//         stylers: [
//           {
//             color: "#fefefe"
//           },
//           {
//             lightness: 20
//           }
//         ]
//       },
//       {
//         featureType: "administrative",
//         elementType: "geometry.stroke",
//         stylers: [
//           {
//             color: "#fefefe"
//           },
//           {
//             lightness: 17
//           },
//           {
//             weight: 1.2
//           }
//         ]
//       }
//     ]
//   };

//   // Get the HTML DOM element that will contain your map
//   // We are using a div with id="map" seen below in the <body>
//   var mapElement = document.getElementById("map");

//   // Create the Google Map using out element and options defined above
//   var map = new google.maps.Map(mapElement, mapOptions);

//   // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
//   var image = "img/map-marker.png";
//   var myLatLng = new google.maps.LatLng(-37.8590287, 145.1679862);
//   var beachMarker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     icon: image
//   });
// }
