/*global ScrollMagic */
/*global Chart */
document.addEventListener('DOMContentLoaded', function() {
//link from  https://developer.marvel.com/docs#!/public/getComicCharacterCollection_get_8
fetch('/series/x-men/characters').then(resp => resp.json()).then((data) => {
    console.group('%cResponse from /series', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    });
  
  

// init
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});

		// get all slides
		var slides = document.querySelectorAll("section.panel");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setPin(slides[i])
				.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
		}
                  
  


  
  
  
  
  
  
  
  
});
