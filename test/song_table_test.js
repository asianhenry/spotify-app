var tbody = d3.select("#track_table");


var songs = hdata["top_50_tracks"];

// console.log(songs);


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




console.log(results);

   


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
