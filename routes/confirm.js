var express = require('express');
var router = express.Router();
var {PriceCalculator} = require('../priceCalculator');

/* GET home page. */
router.post('/', function(req, res, next){
  
	// load json data into an object
    var data = require("../data.json");

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

    var crust = data.crusts[req.body['crust']];
        
    // Add size cost
    var size= data.sizes[req.body['size']];
        
    var toppingValue = 0;
    // Add topping cost
    for (topping in data.toppings){  // Loop through every topping in the json file
        if (req.body[topping]) { // Get checkbox state from the form data (came from the client)
            toppingValue += data.toppings[topping]; // Add topping price (came from data) to the price
        }
    }


    var priceCalculator = new PriceCalculator(crust, size, toppingValue);


    // Result data
    resultData = {
    	"price": priceCalculator.calculate(),
    	"formData": req.body,
    	"chosenToppings": chosenToppings
    }

    // load a template file, then render it with data
    res.render('confirm', resultData);

});


module.exports = router;