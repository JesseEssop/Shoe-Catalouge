function ShoeFactory() {
    var message;
    var alreadyExists = false;
    var cart = [];
    var total = 0;
    var stocks = 0;




    function addShoe(brand, color, size, price, stock) {
        var theSize = Number(size)
        var thePrice = Number(price)
        var theStock = Number(stock)
        var found = false;

        for (var z = 0; z < shoes.length; z++) {
            if (brand === shoes[z].brand && color === shoes[z].color && theSize === shoes[z].size && thePrice === shoes[z].price) {
                alreadyExists = true;
                shoes[z].stock += theStock;
                console.log(shoes)
                found = true;
                message = "Stock updated"
            };
        }
        if (!found) {
            alreadyExists = false;

            newshoe = {
                brand: brand,
                color: color,
                size: Number(size),
                price: Number(price),
                stock: Number(stock)
            }
            shoes.push(newshoe);
            console.log(shoes);
            message = "Catalouge has been updated"
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
        alreadyExists = false;
        for (var y = 0; y < shoes.length; y++) 
        {
            if (brand === shoes[y].brand && color === shoes[y].color && Number(size) === shoes[y].size) {
                total += shoes[y].price;
                shoes[y].stock--;
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

        console.log(cart);
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

