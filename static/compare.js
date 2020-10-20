console.log(userStats)


function artistBar(data){
	
 var artists = data['most_common_artists'].reverse()
 var counts = data['most_common_artists_counts'].reverse()
console.log(artists)
console.log(counts)
    
      


    var data = {
        y: artists,
        x: counts,
        type: 'bar',
        orientation: 'h',
        marker: {
            color: "#1e90ff"
          }
	};
		  
    var layout = {
        

        title: {text: "Top Artists Among Users <br> (Top 50 Artist Appearances) <br>" ,
        font: {
        color: "white"
        }},
		legend:{
			font: {
        color: "white"
        }
			
		},
        xaxis: { 
		title: {text: "",  font: {
        color: "white"
        },
				}, 
				dtick: 2,
        tickfont: {
        color: "#FFFFFF",
    },

    },
        yaxis:{
		
		tickfont: {
        color: "#FFFFFF"},
		dtick: 1
	},
        margin: {
        t: 75,
        l:100,
        b:50,
        pad: 4
        },
        // hovermode:'closest',
        plot_bgcolor :'#212529',
        paper_bgcolor: "#212529"
};

var config = {responsive: true}

    Plotly.newPlot("artist-bar", [data], layout, config);

};

(async function(){

    artistBar(userStats);
 })();






function comparePop(data){


var trace1 = {
  y: ['You'],
  x: [data['average_user_artist_popularity']],

  type: 'bar',
  orientation: 'h',
};


var trace2 = {
  y: ['All Users'],
  x: [data['average_alluser_artist_popularity']],

  type: 'bar',
  orientation: 'h',
};
  var layout = {
        
		barmode: 'group',
        title: {text: "Average Top Artist Popularity" ,
        font: {
        color: "white"
        }},
		legend:{
			font: {
        color: "white"
        }
			
		},
        xaxis: { 
		title: {text: "",  font: {
        color: "white"
        },
				}, 
				dtick: 10,
        tickfont: {
        color: "#FFFFFF",
    },

    },
        yaxis:{
		
		tickfont: {
        color: "#FFFFFF"},
		dtick: 1
	},
        margin: {
        t: 50,
        l:10,
        b:50,
        pad: 4
        },
        // hovermode:'closest',
        plot_bgcolor :'#212529',
        paper_bgcolor: "#212529"
};

var data = [trace1,trace2]

var config = {responsive: true}



Plotly.newPlot('pop-compare', data, layout, config);

}


(async function(){

    comparePop(userStats);
 })();





function compareGenre(data){


var trace1 = {
  y: ['You'],
  x: [data['user_unique_genres']],

  type: 'bar',
  orientation: 'h',
};


var trace2 = {
  y: ['All Users'],
  x: [data['average_unique_genres']],

  type: 'bar',
  orientation: 'h',
};
var layout = {
        
		barmode: 'group',
        title: {text: "Unique Genres" ,
        font: {
        color: "white"
        }},
		legend:{
			font: {
        color: "white"
        }
			
		},
        xaxis: { 
		title: {text: "",  font: {
        color: "white"
        },
				}, 
				dtick: 10,
        tickfont: {
        color: "#FFFFFF",
    },

    },
        yaxis:{
		
		tickfont: {
        color: "#FFFFFF"},
		dtick: 1
	},
        margin: {
        t: 50,
        l:10,
        b:50,
        pad: 4
        },
        // hovermode:'closest',
        plot_bgcolor :'#212529',
        paper_bgcolor: "#212529"
};

var data = [trace1,trace2]

var config = {responsive: true}



Plotly.newPlot('genre-compare', data, layout, config);

}






(async function(){

    compareGenre(userStats);
 })();