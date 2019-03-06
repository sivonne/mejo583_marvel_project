document.addEventListener('DOMContentLoaded', function() {

fetch('/characters').then(resp => resp.json()).then((data) => {
  console.group('%cResponse from /characters', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
  
  
  // Display the top tracks
    //   data.map(function(track, i) {
    //   var character= document.createElement('character');
    //   character.innerHTML = '<li>' + track.name + '</li>'
    //   document.getElementById('top-tracks-container').append(trackName);
    // });

  
});
});