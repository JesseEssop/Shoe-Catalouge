function ShoeFactory() {
    var message;
    var alreadyExists = false;
    var cart = [];
    var total = 0; 
    var stocks = 0;


    function addShoe(brand, color, size, price, stock) {
        for (var z = 0; z < shoes.length; z++) {
            if (brand !== shoes[z].brand && color !== shoes[z].color && size !== shoes[z].size) {
                var newshoe = {
                    brand: brand,
                    color: color,
                    size: Number(size),
                    price: Number(price),
                    stock: Number(stock)
                }
                shoes.push(newshoe);
                console.log(shoes);
                message = "Catalouge has been updated"
                return message;
            }
        }
    }

    function FindShoe(brand, color, size) {

        for (var i = 0; i < shoes.length; i++) {
            if (brand === shoes[i].brand && color === shoes[i].color && Number(size) === shoes[i].size) {
                message = 'We have ' + shoes[i].stock + ' ' + color + ' ' + brand + 's in stock' + ' ' + '@' + ' ' + 'R' + shoes[i].price + '.';
                //console.log(shoes[i])
                return 1;
            }

        }
        message = 'Shoe not found';
    }


    function ShoeBasket(brand, color, size, stock) {
        for (var y = 0; y < shoes.length; y++) {
            if (brand === shoes[y].brand && color === shoes[y].color && Number(size) === shoes[y].size){
                var sneaker = {
                    brand: shoes[y].brand,
                    color: shoes[y].color,
                    size: Number(shoes[y].size),
                    price: Number(shoes[y].price),
                    stock: Number(stocks += 1),
                }
                    total += shoes[y].price
                // console.log(sneaker)
                cart.push(sneaker);
                
            }   
        }
        return cart
    }

    function totalReturn (){
        // console.log(total)
        return total;
        
    }

    function Checkout (){

    }



    function ShoeTxt() {
        return message;
    }


    return {
        add: addShoe,
        select: FindShoe,
        text: ShoeTxt,
        basket: ShoeBasket,
        total : totalReturn,
        checkout: Checkout,
    }
}
