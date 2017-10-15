    // function calculatePrice(formBody) {
    	
    // 	// Start with price 0
    // 	var price = 0;

    // 	// Add crust cost
    // 	price += data.crusts[formBody.crust];

    // 	// Add size cost
    // 	price += data.sizes[formBody.size];

    // 	// Add topping cost
    // 	for (topping in data.toppings){  // Loop through every topping in the json file
    // 		if (formBody[topping]) { // Get checkbox state from the form data (came from the client)
    // 			price += data.toppings[topping]; // Add topping price (came from data) to the price
    // 		}
    // 	}

    // 	return price;
    // }

class PriceCalculator{

     constructor(crust, size, topping){
        this.topping = topping;
        this.crust = crust;
        this.size = size;
     }

     calculate(){
        totalPrice = (topping + crust + size ) * 1.12;

        return totalPrice;
     }
}

exports.PriceCalculator = PriceCalculator;