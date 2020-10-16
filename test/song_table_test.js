var tbody = d3.select("#track_table");


var songs = hdata["top_50_tracks"];
var genres = hdata["genres"];
// console.log(genres)
var name = hdata['name']
var profpic = hdata['user_image_url']

// console.log(profpic);

d3.select("#userName").text(name);

d3.select("#user_pic").attr('src',profpic);

function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}


var top_genre = mode(genres);
// console.log(top_genre);

d3.select("#top_genre").text(top_genre)









var topsong = songs[0]['track']
var art = songs[0]['artist']

var placetext = `${topsong} by ${art}`

d3.select("#top_song").text(placetext)


function copyObjectProps(source, keys) {
   
   var song_deets = []
   
   
   
	 source.forEach (function(item) {
		 var newObject = {} 
		
		keys.forEach(function(key) {
		newObject[key] = item[key]
		
		
   })
   song_deets.push(newObject)

   
})
	   return song_deets
	   
   };
   
 

var results = copyObjectProps(songs, ['track', 'artist','album','track_url'])




// console.log(results);

   


results.forEach((results) => {
  var row = tbody.append("tr");
  Object.entries(results).forEach(([key, value]) => {
	if (key === 'track_url') {
	var cell = row.append("td");
	cell.append("iframe")
	.attr('src', value)
	.attr('allow', 'encrypted-media')
	.attr('allowtransparency', 'true')
	.attr('height', '80')
	} else {
    var cell = row.append("td").attr('style','text-align:center; vertical-align: middle')
    cell.text(value);
	}
  });
});
