function ShoeFactory() {
    shoes;


    function ShoeStock(brand, color, size, price, stock) {


        for (var z = 0; z < shoes.length; z++) {
            if (brand === shoes[z].brand && color === shoes[z].color && size === shoes[z].size && price === shoes[z].price) {
                shoes[z].stock += stock;
            } else {
                var newShoe = {
                    color: color,
                    brand: brand,
                    size: size,
                    price: price,
                    in_stock: stock
                }

                shoes.push(newShoe)
            }
        }
    }



    function shoeBrand() {
        var allShoes = shoes;
        var nike = [];
        var adidas = [];
        var converse = [];
        var jordan = [];
        var puma = [];

        for (var i = 0; i < allShoes.legnth; i++) {
            if (allShoes[i].brand === "Nike") {
                nike.push(allShoes[i]);
            }
            return nike
        }

        for (var x = 0; x < allShoes.length; x++) {
            if (allShoes[x].brand === "Adidas") {
                adidas.push(allShoes[x]);
            }
            return adidas;

        }

        for (var y = 0; y < allShoes.length; y++) {
            if (allShoes[y].brand === "Converse") {
                converse.push(allShoes[y]);
            }
            return converse;

        }

        for (var z = 0; z < allShoes.length; z++) {
            if (allShoes[z].brand === "Jordan") {
                jordan.push(allShoes[z]);
            }
            return jordan;
        }

        for (var p = 0; p < allShoes.length; p++) {
            if (allShoes[p].brand === "Puma") {
                puma.push(allShoes[p]);
            }
            return puma;
        }
    }

    function shoeColour() {
        var allColours = shoes;
        var blue = [];
        var orange = [];
        var red = [];
        var yellow = [];
        var white = [];
        for (var b = 0; b < allColours.length; b++) {
            if (allColours[b].color === "blue") {
                blue.push(allColours[b]);
            }
            return blue;
        }
        for (var o = 0; o < allColours.length; o++) {
            if (allColours[o].color === "orange") {
                orange.push(allColours[o]);
            }
            return orange;
        }
        for (var r = 0; r < allColours.length; r++) {
            if (allColours[r].color === "red") {
                red.push(allColours[r]);
            }
            return red;
        }
        for (var y = 0; y < allColours.length; y++) {
            if (allColours[y].color === "yellow") {
                yello1.push(allColours[y]);
            }
            return yellow;
        }
        for (var w = 0; w < allColours.length; w++) {
            if (allColours[w].color === "white") {
                white.push(allColours[w]);
            }
            return white;
        }
    }

    function shoeSize() {
        var allSizes = shoes;
        var three = [];
        var four = [];
        var five = [];
        var six = [];
        var seven = [];
        var eight = [];
        var nine = [];
        var ten = [];
        var eleven = [];

        for (var a = 0; a < allSizes.length; a++) {
            if (allSizes[a].size === 3) {
                three.push(allSizes[a]);
            }
            return three;
        }

        for (var s = 0; s < allSizes.length; s++) {
            if (allSizes[s].size === 4) {
                four.push(allSizes[s]);
            }
            return four;

        }

        for (var d = 0; d < allSizes.length; d++) {
            if (allSizes[d].size === 5) {
                five.push(allSizes[d]);
            }
            return five;
        }

        for (var f = 0; f < allSizes.length; f++) {
            if (allSizes[f].size === 6) {
                six.push(allSizes[f]);
            }
            return six;
        }

        for (var g = 0; g < allSizes.length; g++) {
            if (allSizes[g].size === 7) {
                seven.push(allSizes[g]);
            }
            return seven;
        }

        for (var h = 0; h < allSizes.length; h++) {
            if (allSizes[h].size === 8) {
                eight.push(allSizes[h]);
            }
            return eight;
        }

        for (var j = 0; j < allSizes.length; j++) {
            if (allSizes[j].size === 9) {
                nine.push(allSizes[j]);
            }
            return nine;
        }

        for (var k = 0; k < allSizes.length; k++) {
            if (allSizes[k].size === 10) {
                ten.push(allSizes[k]);
            }
            return ten;
        }

        for (var l = 0; l < allSizes.length; l++) {
            if (allSizes[l].size === 11) {
                eleven.push(allSizes[l]);
            }
            return eleven;
        }
    }

    return {
        add: ShoeStock,
        brand: shoeBrand,
        colour: shoeColour,
        size: shoeSize,
    }

}