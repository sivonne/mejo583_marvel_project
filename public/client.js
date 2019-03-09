/*global ScrollMagic */
/*global Chart */
                  
 //Based off of code from https://stackoverflow.com/questions/49574172/how-to-integrate-data-from-ajax-into-chart-js
//Data from https://developer.marvel.com/docs#!/public/getSeriesCharacterWrapper_get_27
'use strict';
var endpoint = '/series/x-men/characters'

function setChart(data){
    var characters = [];
    data.data.forEach((e) => {
      characters.push(e.name);
    });
  
    var comics_per_character = data.data.map((e) => { //comics_per_character contains a list of comic items for each character
      return e.comics.items;
    });
  //oh, yes in the specific dataset of series/characters, the number of comics available for each character 
  //trying to chart character names on X axis and # of comics they have on Y access (in X-men series)
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


  
  
  
  
  
  
  
  
});
