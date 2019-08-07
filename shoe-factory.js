function ShoeFactory() {
    var message;
    var alreadyExists = false;


    function addShoe(brand, color, size, price, stock) {
        //console.log(shoes);
        for (var i = 0; i < shoes.length; i++) {
            if (brand !== shoes[i].brand || color !== shoes[i].color || size !== shoes[i].size || price === shoes[i].price || stock === shoes[i].price) {
                var newshoe = {
                    brand: brand,
                    color: color,
                    size: Number(size),
                    price: Number(price),
                    stock: Number(stock)
                }
            }
            shoes.push(newshoe);
            console.log(shoes);
            return "Catalouge has been updated"
        }
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


    function ShoeBasket() {
        var cart = [];
        for (var b = 0; b < shoes.length; b++) { }
    }



    function ShoeTxt() {
        return message;
    }


    return {
        add: addShoe,
        select: FindShoe,
        text: ShoeTxt,
        basket: ShoeBasket
    }
}
