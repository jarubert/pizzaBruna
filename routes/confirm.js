var express = require('express');
var router = express.Router();
var PriceCalculator = require('../priceCalculator');

/* GET home page. */
router.post('/', function(req, res, next){
  
	// load json data into an object
    var data = require("../data.json");

    // // Function to calculate price
    // function calculatePrice(formBody) {
    	
    // 	// Start with price 0
    // 	//var price = 0;

    // 	// Add crust cost
    // 	var crust = data.crusts[formBody.crust];

    // 	// Add size cost
    // 	var size= data.sizes[formBody.size];


    //     var topping = 0;
    // 	// Add topping cost
    // 	for (topping in data.toppings){  // Loop through every topping in the json file
    // 		if (formBody[topping]) { // Get checkbox state from the form data (came from the client)
    // 			toppings += data.toppings[topping]; // Add topping price (came from data) to the price
    // 		}
    // 	}

    // 	return price;
    // }

// Simple Validator 
    if (!req.body.firstName || !req.body.lastName || !req.body.phone || !req.body.email || !req.body.address) {
    	res.render('error', {"formData": req.body});
    	return;
    }

    // Prepare a list of the chosen toppings
    var chosenToppings = [];
    for (topping in data.toppings){
		if (req.body[topping]) {
			chosenToppings.push(topping);
		}
	}

    var crust = data.crusts[req.body[crust]];
        
    // Add size cost
    var size= data.sizes[req.body[size]];
        
    var topping = 0;
    // Add topping cost
    for (topping in data.toppings){  // Loop through every topping in the json file
        if (req.body[topping]) { // Get checkbox state from the form data (came from the client)
            topping += data.toppings[topping]; // Add topping price (came from data) to the price
        }
    }

    console.log('antes de criar classe');

    var priceCalculator = new PriceCalculator(crust, size, topping);



    console.log('d de criar classe');
    // Result data
    resultData = {
    	"price": priceCalculator.calculate(),
    	"formData": req.body,
    	"chosenToppings": chosenToppings
    }

    // load a template file, then render it with data
    res.render('confirm', resultData);

});

    // //Write json file when confirming order 
    // router.post('thanks', function(req, res){
    //     writeJsonFile('order.json', resultData).then(() => {
    //     res.render('thanks');

    // });
    
    
// });

module.exports = router;