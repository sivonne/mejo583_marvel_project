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


// Initialize Marvel API wrapper
//used https://www.npmjs.com/package/marvel-api for setting up the API
var api = require('marvel-api');
 
var marvel = api.createClient({
  publicKey: process.env.publicKey
, privateKey: process.env.privateKey
});



//-------------------------------------------------------------//
//------------------------- API CALLS -------------------------//
//-------------------------------------------------------------//
//gets data for: how many x-men characters are there in the series?
app.get('/series/x-men/characters', function (request, response) {
  // Used some code from Resource https://www.npmjs.com/package/marvel-api
  //tried looping through data
  //for the sake of the size of the data, I only showed 100 characters for now (couldn't figure out how to loop through, below this code are some attempts to show where I was headed.
  marvel.characters.findAll(limit = 100, offset=0)
  .then(function(data) {
      response.send(data);
       })
  .fail(console.error)
  .done();
  
  
  //attempt at looping through offsets, modelled off of spotify assignment
//  let amountOfCalls = marvel.characters.findAll([
//     {
//       offset: 0,
//       count:100
//     },
//     {
//       offset: 100,
//       count:200
//     },
//     {
//       offset: 200,
//       count: 300
      
//     }
//   ]);
    

// amountOfCalls.forEach((c) => {
//     amountOfCalls({amountOfCalls: c.offset, limit : 100})
//   .then((data) => {
//         // Persist the data on this country object
//         c.data = data.body;
//     }, function(err) {
//       console.error(err);
//     });
//   });

  
});


//-------------------------------------------------------------//
//------------------------ WEB SERVER -------------------------//
//-------------------------------------------------------------//


// Listen for requests to our app
// We make these requests from client.js
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});