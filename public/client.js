/*global ScrollMagic */
/*global Chart */
                  
//The Chart JS code below was based off code from https://stackoverflow.com/questions/49574172/how-to-integrate-data-from-ajax-into-chart-js
//Data from https://developer.marvel.com/docs#!/public/getSeriesCharacterWrapper_get_27
'use strict';
var endpoint = '/series/x-men/characters'

function setChart(data){
  //for this subsection, I had some help from a friend and then fixed it by myself from what we figured out
    var characters = []; //creates an array of characters
    data.data.forEach((e) => {//for each character, adds name to array
      characters.push(e.name);
    });
  
    var comics_per_character=//creates comics variable, returns the number of comics per character
  data.data.map((e) => { 
      return e.comics.available;
    
    });
 //end help from a friend
  
  //Below is more Chart JS code that I adjusted from ttps://stackoverflow.com/questions/49574172/how-to-integrate-data-from-ajax-into-chart-js
  Chart.defaults.global.defaultFontColor = '#BF9A1E';
    // ------------------------------------------------------- //
    // Bar Chart Custom 1
    // ------------------------------------------------------ //
    var $chart = $('#myChart');
  //sets up a bar chart
    var barChartHome = new Chart($chart[0].getContext("2d"), {
        type: 'bar',
        options: {
            scales: {
                xAxes: [{ display: true, barPercentage: 0.5 }],
                yAxes: [{ ticks: { max: 200, min: 0 }, display: true }],
            },
            legend: { display: false }
        },
        data: {
            labels: characters,
            datasets: [
                {
                    label: "Character",
                    backgroundColor: '#0467A8',
                    borderColor: '#0467A8',
                    borderWidth: 0.3,
                    data: characters.name //for X axis, draws on names of characters
                },
              {
                    label: "Number of Comics",
                    backgroundColor: '#0467A8',
                    borderColor: '#0467A8',
                    borderWidth: 0.3,
                    data: comics_per_character //for Y axis, draws on comics per characters
                }
            ]
        }
    })
}
$.ajax({ //ajax call to retrieve data from API
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



document.addEventListener('DOMContentLoaded', function() {
//link from  https://developer.marvel.com/docs#!/public/getComicCharacterCollection_get_8
fetch('/series/x-men/characters').then(resp => resp.json()).then((data) => {//console logging data to make sure everything is working
    console.group('%cResponse from /series', 'color: #F037A5; font-size: large');
    console.log(data);
    console.groupEnd();
    
    });
  
  
//This section came from Scroll Magic at http://scrollmagic.io/examples/basic/section_wipes_natural.html
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
