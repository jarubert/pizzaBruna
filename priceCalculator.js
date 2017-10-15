
class PriceCalculator{

     constructor(crust, size, topping){
        this.topping = topping;
        this.crust = crust;
        this.size = size;
     }

     calculate(){
        
        var totalPrice = (this.topping + this.crust + this.size ) * 1.12;
        return totalPrice;
     }
}

exports.PriceCalculator = PriceCalculator;