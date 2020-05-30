// This is my JavaScript File

$.ajax({
    url: "https://api.openbrewerydb.org/breweries",
    method: "get",
  }).then(function (res) {
    console.log(res);
  });

  $.ajax({
    url: "https://api.openbrewerydb.org/breweries?by_city=san_francisco",
    method: "get",
  }).then(function (res) {
    console.log(res);
  });

  $.ajax({
    url: "https://api.openbrewerydb.org/breweries?by_city=charlotte",
    method: "get",
  }).then(function (res) {
    console.log(res);
  });

  $.ajax({
    url: "https://api.openbrewerydb.org/breweries?by_postal=28173",
    method: "get",
  }).then(function (res) {
    console.log(res);
  });

  $.ajax({
    url: "https://api.openbrewerydb.org/breweries?by_state=north_carolina",
    method: "get",
  }).then(function (res) {
    console.log(res);
  });

  $.ajax({
    url: "https://api.openbrewerydb.org/breweries?per_page=25",
    method: "get",
  }).then(function (res) {
    console.log(res);
  });

  