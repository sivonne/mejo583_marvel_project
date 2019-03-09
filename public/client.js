/*global ScrollMagic */
/*global Chart */
                  
 
   'use strict';
var endpoint = '/series/x-men/characters'

function setChart(data){
    var characters = data.marvel.map(e=>e.marvel.characters.findAll());
    var comics_per_character = data.members.map(e=>e.characters.comic);
    var percentagePositionWeights = data.percentagePositionWeights;
    Chart.defaults.global.defaultFontColor = '#75787c';
    // ------------------------------------------------------- //
    // Bar Chart Custom 1
    // ------------------------------------------------------ //
    var $chart = $('#myChart');
    var barChartHome = new Chart($chart[0].getContext("2d"), {
        type: 'bar',
        options: {
            scales: {
                xAxes: [{ display: true, barPercentage: 0.2 }],
                yAxes: [{ ticks: { max: 100, min: 0 }, display: false }],
            },
            legend: { display: false }
        },
        data: {
            labels: characters,
            datasets: [
                {
                    label: "Data Set 1",
                    backgroundColor: [  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99'],
                    borderColor: [  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99'],
                    borderWidth: 0.3,
                    data: comics_per_character
                }
            ]
        }
    })
}



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
