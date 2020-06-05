
// This is my JavaScript File
$(document).ready(
  function () {
    $('.ui.dropdown')
    .dropdown();
   });

   var coordinatesArray = []

   var lat=10;
   var lon=-90;
    
  //   navigator.geolocation.getCurrentPosition(showPosition);
  //   function showPosition(position) {
  //   // Grab coordinates from the given object
  //   lat = position.coords.latitude;
  //   lon = position.coords.longitude;
  
  //   console.log("Your coordinates are Latitude: " + lat + " Longitude " + lon);
  // };



$("#search-button").on("click", function (e) {
  e.preventDefault()

  var byCity = $("#city-input").val();
  var byState = $("#state-options").val();
  var byZip = $("#zipcode-input").val();
  var queryURL = "https://api.openbrewerydb.org/breweries?" + "by_city=" + byCity + "&by_state=" + byState + "&by_postal=" + byZip;

  console.log(byCity)
  console.log(byState)
  console.log(byZip)
  console.log(queryURL)
 
  if ((byCity !== "" && byState !== "") && byZip === "") {

  $.ajax({
    url: queryURL,
    method: "GET"
  })

      .then(function (response) {
        console.log(queryURL);

        console.log(response);

        console.log()

        for (var i = 0; i < response.length; i++) {

          var cityDiv = $("<div>");

          var cityPara = $("<p>").text(response[i].name);

          cityDiv.append(cityPara);

          $("#search-results").append(cityDiv);

          var obj = {
            lat: response[i].latitude,
            lon: response[i].longitude
          }
          coordinatesArray.push(obj)
        }
        addMarker() 
      });
  }

function addMarker () {
  

  
  for (var i=0; i < coordinatesArray.length; i++) {
  
  lat = coordinatesArray[i].lat;
  lon = coordinatesArray[i].lon;
    if (lat !== null && lon !== null) {
  var marker = L.marker([lat, lon]).addTo(mymap);
}}};
  if ((byCity === "" && byState === "") && byZip !== "") {

    $.ajax({
      url: queryURL,
      method: "GET"
    })

      .then(function (response) {
        console.log(queryURL);

        console.log(response);

        console.log()

        for (var i = 0; i < response.length; i++) {

          var cityDiv = $("<div>");

          var cityPara = $("<p>").text(response[i].name);

          cityDiv.append(cityPara);

          $("#search-results").append(cityDiv);

        }

        

      });

    }
    
  })

    // Leaflet Formatting

    var mymap = L.map('mapid').setView([lat, lon], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FyYWhzaGVhMTIiLCJhIjoiY2thdHNobmR4MGRxcTJxb2Nvc2l2MWUxOSJ9.Zlvr0sq1CQFluFfvrrg5UQ'
    }).addTo(mymap);


