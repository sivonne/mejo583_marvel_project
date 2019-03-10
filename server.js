

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
// for(var i = 0; i < 200; i++){
  //for the sake of the size of the data, I only showed 400 characters for now 
  // marvel.characters.findAll(limit = 100, offset=0), 
  //   marvel.characters.findAll(limit = 100, offset=100),
  //   marvel.characters.findAll(limit = 100, offset=200), 
  //   marvel.characters.findAll(limit = 100, offset=300)
  // forEach(marvel.characters.[findAll(limit = 100, offset=0))//come back to this later
  // .then(function(data) {
  //     response.send(data);
  //      })
  // .fail(console.error)
  // .done();
 let amountOfCalls = [
    {
      offset: 0
    },
    {
      offset: 100
    },
    {
      offset: 200
    }
  ];
    

amountOfCalls.forEach((c) => {
    marvel.characters.findAll(c)
    
  .then(function(data) {
      response.send(data);
       })
  .fail(console.error)
  .done();
  });








  
  
  
  
  
  
  
  
  
// }
//   var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// 		var color = Chart.helpers.color;
// 		var barChartData = {
// 			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// 			datasets: [{
// 				label: 'Dataset 1',
// 				backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
// 				borderColor: window.chartColors.red,
// 				borderWidth: 1,
// 				data: [marvel.characters.findAll(limit = 99)
// 				]
// 			}, {
// 				label: 'Dataset 2',
// 				backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
// 				borderColor: window.chartColors.blue,
// 				borderWidth: 1,
// 				data: [
// 					marvel.characters.comics(limit = 99)
// 				]
// 			}]

// 		};
// 			window.myBar.update();
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