var addBasketBtn = document.querySelector(".addBasketBtn");
var searchBtn = document.querySelector(".searchBtn");
var checkoutBtn = document.querySelector(".checkoutBtn");
var removeBtn = document.querySelector(".removeBtn");

var addShoeBtn = document.querySelector(".addShoeBtn");
var update = document.querySelector(".update");
var searchBtn = document.querySelector(".searchBtn");
var addBtn = document.querySelector(".addBtn");
var message = document.querySelector(".message");

var brandInput = document.querySelector(".Brand");
var sizeInput = document.querySelector(".Size");
var colourInput = document.querySelector(".Colour");
var priceInput = document.querySelector(".Price");
var stockInput = document.querySelector(".Stock");

var userTemp = document.querySelector(".userShoeTemplate").innerHTML;
var shoeTemp = Handlebars.compile(userTemp);
var basketData = document.querySelector(".basketData");

var brandTemp = document.querySelector(".BrandDropDownTemplate").innerHTML;
var shoeBrandTemp = Handlebars.compile(brandTemp);
var shoeName = document.querySelector("#shoeName");
var shoeColor = document.querySelector("#shoeColour");
var shoeSize = document.querySelector("#shoeSize");


var shoeInstance = ShoeFactory();
var active;

window.onload = function () {
    update.style.display = 'none';
    active = false;
    BrandDropdown();
    SizeDropdown();
    ColorDropdown();
};

addShoeBtn.addEventListener("click", function () {
    if (!active) {
        update.style.display = 'unset';
        active = true;
    } else {
        update.style.display = 'none';
        acive = false;
    }
});



addBtn.addEventListener("click", function () {

    var newBrand = brandInput.value;
    var newColour = colourInput.value;
    var newSize = sizeInput.value;
    var newPrice = priceInput.value;
    var newStock = stockInput.value;

    message.innerHTML = shoeInstance.add(newBrand, newColour, newSize, newPrice, newStock);

    if (newBrand === "" && newColour === "" && newSize === "" && newPrice === "" && newStock === "") {
        return message.innerHTML = "Please fill in all fields";

    }
    BrandDropdown();
    SizeDropdown();
    ColorDropdown();
});


function ShoeSearch() {
    var findshoe = shoeInstance.select(brandDropDown.value, colourDropDown.value, sizeDropDown.value);

    message.innerHTML = shoeInstance.text()

    if (brandDropDown.value === '' || sizeDropDown.value === '' || colourDropDown.value === '') {
        return message.innerHTML = "Please select all options to find shoe"
    }
}
searchBtn.addEventListener("click", ShoeSearch);

function BrandDropdown() {
    var brandList = [];
    var brands
    
    for (var i = 0; i < shoes.length; i++) {
        brands = shoes[i].brand;
        var found = false;
        // console.log(brands)
        for (var y = 0; y < brandList.length; y++) {
            // console.log(brandList)
            if (brandList[y] === brands) {
                found = true
            }
        }
        if (found === false){
            brandList.push(brands)
          
        }
    }  

    var createBrand = {brandList};
    var brandHTML = shoeBrandTemp(createBrand);
    shoeName.innerHTML = brandHTML
 
}

function SizeDropdown() {
    var sizeList = [];
    var sizes
    
    for (var i = 0; i < shoes.length; i++) {
        sizes = shoes[i].size;
        var sizefound = false;
        // console.log(brands)
        for (var y = 0; y < sizeList.length; y++) {
            // console.log(sizeList)
            if (sizeList[y] === sizes) {
                sizefound = true
            }
        }
        if (sizefound === false){
            sizeList.push(sizes)
            sizeList.sort(function(a, b){return a-b})
          
        }
       
    }  
    
    var createSize = {brandList: sizeList};
    var sizeHTML = shoeBrandTemp(createSize);
    shoeSize.innerHTML = sizeHTML
 
}

function ColorDropdown() {
    var colorList = [];
    var colors
    
    for (var i = 0; i < shoes.length; i++) {
        colors = shoes[i].color;
        var colorfound = false;
        // console.log(brands)
        for (var y = 0; y < colorList.length; y++) {
            console.log(colorList)
            if (colorList[y] === colors) {
                colorfound = true
            }
        }
        if (colorfound === false){
            colorList.push(colors)
          
        }
    }  

    var createColor = {brandList : colorList};
    var colorHTML = shoeBrandTemp(createColor);
    shoeColor.innerHTML = colorHTML
 
}




function ShoesCart(shoe) {
    let basket = shoeInstance.basket(brandDropDown.value, colourDropDown.value, sizeDropDown.value);
    var total = shoeInstance.total();
    var createShoe = { shoe: basket, total };
    var kicksHTML = shoeTemp(createShoe);
    basketData.innerHTML = kicksHTML;

}
addBasketBtn.addEventListener("click", ShoesCart);