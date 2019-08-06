function ShoeFactory() {
    var message;
    var alreadyExists = false;


    function addShoe(brand, color, size, price, stock) {
        //console.log(shoes);
        if (brand === undefined || color === undefined || size === undefined || price === undefined || stock === undefined) {
        }
        var newshoe = {
            brand: brand,
            color: color,
            size: Number(size),
            price: Number(price),
            stock: Number(stock)
        }
        shoes.push(newshoe)
        console.log(shoes)
        return "Catalouge updated"
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


    function ShoeBasket (){
        var cart = [];
        


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
