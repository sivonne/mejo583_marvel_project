document.addEventListener('DOMContentLoaded', function() {

fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=5a9b29e7ed2141b0cda10a06ec71d3a5').then(resp => resp.json()).then((data) => {
    console.group('%cResponse from /characters', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
 
});
});