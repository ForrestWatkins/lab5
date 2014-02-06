var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('add' );
	
	var newName = req.query.name;
	var newDes = req.query.description;
	
		
		data["friends"].push({
			"name": newName,
			"description": newDes,
			"imageURL": "http://lorempixel.com/400/400/people"			
		});
 }