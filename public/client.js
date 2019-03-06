/*global ScrollMagic */
document.addEventListener('DOMContentLoaded', function() {
//link from  https://developer.marvel.com/docs#!/public/getComicCharacterCollection_get_8
fetch('/series').then(resp => resp.json()).then((data) => {
    console.group('%cResponse from /series', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    });
  
  

  
  // init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
        duration: 100,    // the scene should last for a scroll distance of 100px
        offset: 50    // start this scene after scrolling for 50px
    })
    .setPin("#sect-1") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller
  
  
  
});


