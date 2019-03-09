// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


//-------------------------------------------------------------//
//----------------------- AUTHORIZATION -----------------------//
//-------------------------------------------------------------//


// Initialize Spotify API wrapper
//used https://www.npmjs.com/package/marvel-api for setting up the API
var api = require('marvel-api');
 
var marvel = api.createClient({
  publicKey: process.env.publicKey
, privateKey: process.env.privateKey
});
// var marvel = api.createClient({
//   publicKey: process.env.publicKey
// , privateKey: process.env.privateKey
// });


//https://gateway.marvel.com:443/v1/public/characters?apikey=publicKey

//-------------------------------------------------------------//
//------------------------- API CALLS -------------------------//
//-------------------------------------------------------------//
//how many x-men characters are there in the series?
app.get('/series/x-men/characters', function (request, response) {
  // Code from Resource https://www.npmjs.com/package/marvel-api
//looping through data
for(var i = 0; i < 100; i++){
  marvel.characters.findAll(limit = 99)//come back to this later
  .then(function(data) {
    
      // Send the first (only) track object
      response.send(data);
       })
    
  .fail(console.error)
  .done();
  
}
});
  
  
  
//   app.get('/series/x-men/characters', function (request, response) {
  
//   // Make an initial list of countries
//   let series_name = [
//     {
//       name: "x-men",
//     },
//     {
//       name: "avengers",
//     },
//   ];
  
  
//   // Get the playlists for the given category for each country
//  series_name.forEach((c) => {
//     marvel.characters.findAll(
//       'series', 
//       {a_series: c.code, limit : 10 }
//     )
//       .then((data) => {
//         // Persist the data on this country object
//         c.data = data.body;
//     }, function(err) {
//       console.error(err);
//     });
//   });
  
//   // Check will see if we have .data on all the country objects
//   // which indicates all requests have returned successfully.
//   // If the lengths don't match then we call check again in 500ms
//   let check = () => {
//     if (series_name.filter(c => c.data !== undefined).length 
//     !== series_name.length) {
//       setTimeout(check, 500);
//     } else {
//       response.send(series_name);
//     }
//   }
  
//   // Call check so we don't send a response until we have all the data back
//   check();

  
  
  

// });
// app.get('/search-track', function (request, response) {
  
//   // Search for a track!
//   spotifyApi.searchTracks('track:proud of u', {limit: 1})
//     .then(function(data) {
    
//       // Send the first (only) track object
//       response.send(data.body.tracks.items[0]);
    
//     }, function(err) {
//       console.error(err);
//     });












//-------------------------------------------------------------//
//------------------------ WEB SERVER -------------------------//
//-------------------------------------------------------------//


// Listen for requests to our app
// We make these requests from client.js
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});