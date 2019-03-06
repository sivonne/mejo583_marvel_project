document.addEventListener('DOMContentLoaded', function() {

fetch('/characters').then(resp => resp.json()).then((data) => {
  console.group('%cResponse from /characters', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
  

  
});
});