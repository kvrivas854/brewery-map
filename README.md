# Brewery Map

Brewery map is an application that maps breweries by specific locations entered by the end user. Users can search by zip code and be presented with a list of local breweries to visit.

[GitHub Pages Link](Insert Deployed Link)

## Table of Contents
- [Overview](#Overview)
- [User Story](#User-Story)
- [Future Development](#Future-Development)
- [Notes](#Notes)
- [Credits](#Credits)

### Overview
This application presents the user with local brewery locations, so that they can plan trips to these destinations accordingly.
The user searches for locations by zip code, and breweries within that zipcode are listed and appear on a localized map display. Listed information includes the brewery's name, address, phone number, the type of brewery that they are, and a link to their website.

### User-Story
As a frequent traveler and avid beer drinker, 
I want to be able to locate local breweries on a map, 
so that I can plan in advance what breweries I should visit before I travel to a location.

### Future-Development
This application has great potential to become a unique and valuable resource. Future development areas include:

- Map markers that display each brewery's name.
- Activating filter form so that breweries can be filtered by certain tags or properties.
- A hover feature on the listed results. Hovering over the listed brewery will illuminate the corresponding marker on the Leaflet map.
- A profile log in system to keep track of favorite and visited breweries.
- A personalized rating system for visited breweries in said profile.

Many of these areas for future developemnt rely on exploring alternative brewery APIs that are more robust than Open Brewery DB.

### Notes

Instructions:
1. When the user opens the browser they will be presented with a search form to search by zip code.
2. User enters the zip code of their intended travel destinations and presses the search button.
3. Search results are listed below the map and markers placed on their location.

CSS
- The CSS is linked using an external style sheet and utilizes Semantic UI.

JavaScript
- The JavaScript is linked using an external script and utilizes the Leaflet, LocationIQ, and Open Brewery DB APIs.

### Credits
Brewery Map was created by @kvrivas854, @sarahshea12, @jsuderman, and @aflavors. Feel free to contact us! :v: