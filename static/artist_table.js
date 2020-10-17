var tbody = d3.select("tbody");

var artists = userData["top_50_artists"];

var topartist = artists[0]['artist']

console.log(topartists);

d3.select("#top_artist").text(topartist)


function copyObjectProps(source, keys) {
   
   var artist_deets = []
   
   
   
	 source.forEach (function(item) {
		 var newObject = {} 
		
		keys.forEach(function(key) {
		newObject[key] = item[key]
		
		
   })
   artist_deets.push(newObject)

   
})
	   return artist_deets
	   
   };
   
 

var results = copyObjectProps(artists, ['artist', 'image'])


results.forEach((results) => {
  var row = tbody.append("tr");
  Object.entries(results).forEach(([key, value]) => {
	if (key === 'image') {
	var cell = row.append("td");
	var player = `<img src="${value}" alt = "Artist Image" >`
	cell.append("img").attr('src', value).attr('class','artist_image');
	} else {
    var cell = row.append("td").attr('style','text-align:center; vertical-align: middle')
    cell.text(value);
	}
  });
});


