document.addEventListener('DOMContentLoaded', function() {

fetch('/v1/public/characters').then(resp => resp.json()).then((data) => {
  console.group('%cResponse from /v1/public/characters', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
  
  
});
});