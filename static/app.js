
// (async function(){
  // var userData = await d3.json("/user_data").catch(function(error) {
    // console.log(userData);
  // })
// });


d3.json(userData).then(function (data) {
	console.log(data);
});

// console.log(userData);