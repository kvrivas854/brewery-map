
// This is my JavaScript File
$(document).ready(
  function () {
    $('.ui.dropdown')
    .dropdown();
   });


// add click event listener to "search-button"

$("#search-button").on("click", function (e) {
  e.preventDefault()

  var byState = $("#state-options").val();
  var byCity = $("#city-input").val();
  var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + byCity;

  console.log(byCity)
  console.log(byState)


$("#search-button").on("click", function(){
var cityName = $("#city-input").val().trim();
var stateName = $(option.text.trim);
var postalCode = $("#zipcode-input");

  $.ajax({
  url: "https://api.openbrewerydb.org/breweries?by_city=" + cityName,
  method: "get",
  }).then(function (res) {
    console.log(res);
  });

  $.ajax({
    url: "https://api.openbrewerydb.org/breweries?by_postal=" + postalCode,
    method: "get",
  }).then(function (res) {
    console.log(res);
  });

  $.ajax({
    url: "https://api.openbrewerydb.org/breweries?by_state=" + stateName,
    method: "get",
  }).then(function (res) {
    console.log(res);
  });


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
})
//   var byState = $(this).attr("ui dropdown");
//   var queryURL = "https://api.openbrewerydb.org/breweries?by_state=" + byState + "by-zipcode=" + zipcode + "by-state=" +state;

//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   })

//     .then(function (response) {
//       console.log(queryURL);

//       console.log(response);

//       var results = response.data;



//       for (var i = 0; i < results.length; i++) {

//         stateDiv = $("<div>");

//         var statePara = $("<p>").text(results[i].name);

//         stateDiv.append(statePara);

//         $("#search-results").append(stateDiv);
//       }

//     });

//   var byZip = $(this).attr("zipcode-input");
//   var queryURL = "https://api.openbrewerydb.org/breweries?by_postal=" + byZip;

//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   })

//     .then(function (response) {
//       console.log(queryURL);

//       console.log(response);

//       var results = response.data;



//       for (var i = 0; i < results.length; i++) {

//         zipDiv = $("<div>");

//         var zipPara = $("<p>").text(results[i].name);

//         zipDiv.append(zipPara);

//         $("#search-results").append(zipDiv);
//       }

//     });

// })



// // $("#search-button").on("click", function(){
// //   var cityName = $("#city-input").val().trim();
// //   var stateName = $(option.text.trim);
// //   var postalCode = $("#zipcode-input");
  
// //     $.ajax({
// //       url: "https://api.openbrewerydb.org/breweries?by_city=" + cityName,
// //       method: "get",
// //     }).then(function (res) {
// //       console.log(res);
// //     });
  
// //     $.ajax({
// //       url: "https://api.openbrewerydb.org/breweries?by_postal=" + postalCode,
// //       method: "get",
// //     }).then(function (res) {
// //       console.log(res);
// //     });
  
// //     $.ajax({
// //       url: "https://api.openbrewerydb.org/breweries?by_state=" + stateName,
// //       method: "get",
// //     }).then(function (res) {
// //       console.log(res);
// //     });
  
// //     $.ajax({
// //       url: "https://api.openbrewerydb.org/breweries?per_page=25",
// //       method: "get",
// //     }).then(function (res) {
// //       console.log(res);
// //     });
 });   

  // Leaflet Formatting
  var mymap = L.map('mapid').setView([35.227085, -80.843124], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1Ijoic2FyYWhzaGVhMTIiLCJhIjoiY2thdHNobmR4MGRxcTJxb2Nvc2l2MWUxOSJ9.Zlvr0sq1CQFluFfvrrg5UQ'
  }).addTo(mymap);



