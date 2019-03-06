document.addEventListener('DOMContentLoaded', function() {

fetch('/search-track').then(resp => resp.json()).then((data) => {
  marvel.characters.findAll()
  .then(console.log)
  .fail(console.error)
  .done();
  
});