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
marvel.characters.findAll()
  .then(console.log)
  .fail(console.error)
  .done();
  //need to send response
marvel.characters.findAll('female')
  .then(console.log)
  .fail(console.error)
  .done();
  //need to send response
});
//-------------------------------------------------------------//
//------------------------ WEB SERVER -------------------------//
//-------------------------------------------------------------//


// Listen for requests to our app
// We make these requests from client.js
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
