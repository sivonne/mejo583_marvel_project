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
  publicKey: 'my-public-key'
, privateKey: 'my-private-key'
});


//-------------------------------------------------------------//
//------------------------- API CALLS -------------------------//
//-------------------------------------------------------------//
app.get('/characters', function (request, response) {
  
  // Get information about an artist
marvel.characters.findByName('spider-man')
  .then(console.log)
  .fail(console.error)
  .done();
  });
//-------------------------------------------------------------//
//------------------------ WEB SERVER -------------------------//
//-------------------------------------------------------------//


// Listen for requests to our app
// We make these requests from client.js
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
