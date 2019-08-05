function ShoeFactory() {
    console.log(shoes)
    var cart = [];
    var message;
    var alreadyExists = false;

    function ShoeTxt() {
        return message;
    }

    function FindShoe(brand, color, size) {

        for (var i = 0; i < shoes.length; i++) {
            if (brand === shoes[i].brand && color === shoes[i].color && Number(size) === shoes[i].size) {
                message = 'We have ' + shoes[i].stock + ' ' + color + ' ' + brand + 's in stock' + ' ' + '@' + ' ' + 'R' + shoes[i].price + '.';
                return 1;
            }

        }
        message = 'Shoe not found';
    }

    function addShoe(brand, color, size, price, stock) {

        for (var z = 0; z < shoes.length; z++) {
            if (brand === undefined && color === undefined && Number(size) === undefined && Number(price) === undefined) {
            }
            var newshoe = {
                color: shoes[z].color,
                brand: shoes[z].brand,
                size: shoes[z].size,
                price: shoes[z].price,
                stock: shoes[z].stock,



            }
            shoes.push(newshoe)

        }
        return newshoe


    }

    function ShoeBasket(brand, color, size) {
        console.log(shoes)
        for (var y = 0; y < shoes.length; y++) {
            if (brand === shoes[y].brand && color === shoes[y].color && Number(size) === shoes[y].size) {
                shoes[z].stock = -1;
            }
            var kicks = {
                brand: shoes[y].brand,
                colour: shoes[y].color,
                size: shoes[y].size,
                price: shoes[y].price
            }
            cart.push(kicks)

        }
        console.log(kicks)
        return kicks
    }




    return {
        add: addShoe,
        select: FindShoe,
        text: ShoeTxt,
        basket: ShoeBasket
    }
}
