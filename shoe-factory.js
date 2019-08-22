function ShoeFactory() {
    var message;
    var alreadyExists = false;
    var cart = [];
    var total = 0;
    var stocks = 0;
    var regex = /[a-zA-Z]/g;




    function addShoe(brand, color, size, price, stock) {
        var theBrand = brand.charAt(0).toUpperCase() + brand.slice(1);;
        var theColor = color.charAt(0).toUpperCase() + color.slice(1);
        var theSize = Number(size)
        var thePrice = Number(price)
        var theStock = Number(stock)
        var found = false;
        var wack = regex.test(theBrand, theColor);

        if (wack === true) {

            for (var z = 0; z < shoes.length; z++) {
                if (theBrand === shoes[z].brand && theColor === shoes[z].color && theSize === shoes[z].size && thePrice === shoes[z].price) {
                    alreadyExists = true;
                    shoes[z].stock += theStock;
                    console.log(shoes)
                    found = true;
                    message = "Stock updated"
                }
            }

            if (!found) {
                alreadyExists = false;

                var newshoe = {
                    brand: theBrand,
                    color: theColor,
                    size: Number(size),
                    price: Number(price),
                    stock: Number(stock)
                }

                if (brand === "" && color === "" && size === "" && price === "" && stock === "") {
                    message = "Please fill in all the fields"
                }
                else {
                    shoes.push(newshoe);
                    console.log(shoes);
                    message = "Catalouge has been updated";
                }

            }
        }
        if (wack === false) {
            message = "Enter valid shoe name"
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
        console.log(brand)
        console.log(color)
        console.log(size)
        
        alreadyExists = false;
        for (var y = 0; y < shoes.length; y++) {
            if (brand === shoes[y].brand && color === shoes[y].color && Number(size) === shoes[y].size) {
                total += shoes[y].price;
                shoes[y].stock--;
                
                if (shoes[y].stock <= 0) {
                shoes.splice(y,1);
            }
            
    


                for (let x = 0; x < cart.length; x++) {
                    // console.log(x)
                    // console.log(cart[x].brand, cart[x].color, cart[x].size)
                    // console.log('-------------------------------------------------------------');
                    // console.log(brand, color, size)
                    if (cart[x].brand === brand && cart[x].color === color && cart[x].size === Number(size)) {
                        cart[x].qty++;
                        alreadyExists = true;
                    }
                }
            }

            
        
        }

        if (!alreadyExists) {
            var sneaker = {
                brand: brand,
                color: color,
                size: Number(size),
                qty: 1
            }
            cart.push(sneaker)
        }
        // console.log(cart);
    }

    function totalReturn() {
        // console.log(total)
        return total;

    }

    function ShoeReturn() {
        for (var k = 0; k < cart.length; k++) {
            var shoe = cart[k];
            console.log(shoe);
            for (var b = 0; b < shoes.length; b++) {
                if (shoe.brand === shoes[b].brand && shoe.color === shoes[b].color && Number(shoe.size) === shoes[b].size) {
                    console.log(shoe.qty);
                    console.log(shoes[b].stock);
                    shoes[b].stock = shoes[b].stock + shoe.qty;
                }
            }
        }
        total = 0;
        cart = [];
    };



    function ShoeTxt() {
        return message;
    }


    return {
        add: addShoe,
        select: FindShoe,
        text: ShoeTxt,
        basket: ShoeBasket,
        total: totalReturn,
        return: ShoeReturn
    }
}

