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
                  
  'use strict';
var endpoint = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'

function setChart(data){
    var portfolioInstruments = data.members.map(e=>e.name);
    var absolutPositionValues = data.members.map(e=>e.age);
    var percentagePositionWeights = data.percentagePositionWeights;
    Chart.defaults.global.defaultFontColor = '#75787c';
    // ------------------------------------------------------- //
    // Bar Chart Custom 1
    // ------------------------------------------------------ //
    var $chart = $('#barChartCustom1');
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
            labels: portfolioInstruments,
            datasets: [
                {
                    label: "Data Set 1",
                    backgroundColor: [  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99'],
                    borderColor: [  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99',  '#EF8C99'],
                    borderWidth: 0.3,
                    data: absolutPositionValues
                }
            ]
        }
    })
}

$.ajax({
    method: "GET",
    url: endpoint,
    success: function(data){
        setChart(data);
    },
    error: function(error_data){
        console.log("Endpoint GET request error");
        // console.log(error_data)
    }
})

$(document).ready(function () {

});


  
  
  
  
  
  
  
  
});
