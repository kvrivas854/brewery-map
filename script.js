
// This is my JavaScript File
$(document).ready(
  function () {
    $('.ui.dropdown')
    .dropdown(itemList);
   });

   var coordinatesArray = []

   var lat=10;
   var lon=-90;
    
  // Search button click event
$("#search-button").on("click", function (e) {
  e.preventDefault()
  $(".warning").empty()

  var byCity = $("#city-input").val();
  var byState = $("#state-options").val();
  var byZip = $("#zipcode-input").val();
  var queryURL = "https://api.openbrewerydb.org/breweries?" + "by_city=" + byCity + "&by_state=" + byState + "&by_postal=" + byZip;

  console.log(byCity)
  console.log(byState)
  console.log(byZip)
  console.log(queryURL)

 
  // Searches by city & state


  // error message for when both city & state aren't inputted
  if ((byCity ==="" &&byState!=="") || (byCity!==""&&byState==="")) {
    let div = $("<div>")
    div.attr("class","warning")
    div.text("You must fill out state and city OR zip code")

    $("#state-input").append(div)

  }

  
  // if statement for search by city & state

  if ((byCity !== "" && byState !== "") && byZip === "") {

  $.ajax({
    url: queryURL,
    method: "GET"
  })

      .then(function (response) {
        $("#search-results").empty();
        console.log(queryURL);

        console.log(response);

        console.log()

        // for loop to loop thru results and display on page
        for (var i = 0; i < response.length; i++) {

          // Creating the cards if the response has a website URL
          if(response[i].website_url) {
          var temp = `<div class="ui cards">
        <div class="card">
          <div class="content">
    
            <div class="header">
              ${response[i].name}
            </div>
            <div class="description">
              Phone number: ${response[i].phone}
              <br>
              Address: ${response[i].street}
            </div>
          </div>
          
              <a href=${response[i].website_url} class="ui basic green button" target="_blank">Visit Website</a>
        </div>`
          }
          // Creating the cards if the response does not have a website URL
          else{
            var temp = `<div class="ui cards">
        <div class="card">
          <div class="content">
    
            <div class="header">
              ${response[i].name}
            </div>
            <div class="description">
            Phone number: ${response[i].phone}
            <br>
            Address: ${response[i].street}
            </div>
          </div>
        </div>`
          }

          $("#search-results").append(temp);

          // Sets the coordinates for the markers
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


// Search by Zip code

  
  // if statement to search by zip code

  if ((byCity === "" && byState === "") && byZip !== "") {

    $.ajax({
      url: queryURL,
      method: "GET"
    })

      .then(function (response) {
        $("#search-results").empty();
        console.log(queryURL);

        console.log(response);

        console.log()

        // for loop to loop thru results and display on page
        for (var i = 0; i < response.length; i++) {

          // Creating the cards if the response has a website URL
          if(response[i].website_url) {
          var temp = `<div class="ui cards">
        <div class="card">
          <div class="content">
    
            <div class="header">
              ${response[i].name}
            </div>
            <div class="description">
            Phone number: ${response[i].phone}
            <br>
            Address: ${response[i].street}
            </div>
          </div>
          
              <a href=${response[i].website_url} class="ui basic green button" target="_blank">Visit Website</a>
        </div>`
          }
          // Creating the cards if the response does not have a website URL
          else{
            var temp = `<div class="ui cards">
        <div class="card">
          <div class="content">
    
            <div class="header">
              ${response[i].name}
            </div>
            <div class="description">
            Phone number: ${response[i].phone}
            <br>
            Address: ${response[i].street}
            </div>
          </div>
        </div>`
          }

          $("#search-results").append(temp);

          // Sets the coordinates for the markers
          var obj = {
            lat: response[i].latitude,
            lon: response[i].longitude
          }
          coordinatesArray.push(obj)
        }
        addMarker() 

      });
   }
});

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
