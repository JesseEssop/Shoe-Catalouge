var addBasketBtn = document.querySelector(".addBasketBtn");
var searchBtn = document.querySelector(".searchBtn");
var checkoutBtn = document.querySelector(".checkoutBtn");
var removeBtn = document.querySelector(".removeBtn");

var addShoeBtn = document.querySelector(".addShoeBtn");
var update = document.querySelector(".update");
var searchBtn = document.querySelector(".searchBtn");
var addBtn = document.querySelector(".addBtn");
var message = document.querySelector(".message");
var logmsg = document.querySelector(".log")

var brandDropDown = document.querySelector(".shoeDropDown");
var colourDropDown = document.querySelector(".shoeColourDropDown");
var sizeDropDown = document.querySelector(".shoeSizeDropDown");

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

var listTemp = document.querySelector(".shoeLogTemplate").innerHTML;
var shoeListTemp = Handlebars.compile(listTemp);
var userList = document.querySelector(".userData");



var shoeInstance = ShoeFactory();
var active;

window.onload = function () {
    update.style.display = 'none';
    active = false;
    BrandDropdownBuilder();
    SizeDropdown();
    ColorDropdown();
    ShoeTempList();
    

};

addShoeBtn.addEventListener("click", function () {
    if (!active) {
        update.style.display = 'unset';
        active = true;
    }
    else {
        update.style.display = 'none';
        active = false;
    }
});


function ShoeTempList (){
    var userData = {kicks: shoes};
    var userDataHTML = shoeListTemp(userData);
    userList.innerHTML = userDataHTML;
    
}


addBtn.addEventListener("click", function () {

    var newBrand = brandInput.value;
    var newColour = colourInput.value;
    var newSize = sizeInput.value;
    var newPrice = priceInput.value;
    var newStock = stockInput.value;

    shoeInstance.add(newBrand, newColour, newSize, newPrice, newStock);
    message.innerHTML = shoeInstance.text();

    if (newBrand === "" && newColour === "" && newSize === "" && newPrice === "" && newStock === "") {
        message.innerHTML = shoeInstance.text()
    }

    BrandDropdownBuilder();
    SizeDropdown();
    ColorDropdown();
    ShoeTempList();
});


function ShoeSearch() {
    var findshoe = shoeInstance.select(brandDropDown.value, colourDropDown.value, sizeDropDown.value);

    message.innerHTML = shoeInstance.text()

    if (brandDropDown.value === "Select Brand" || sizeDropDown.value === "Select Size" || colourDropDown.value === "Select Color") {
        message.innerHTML = "Please select all options to find shoe"
    }
}
searchBtn.addEventListener("click", ShoeSearch);

function BrandDropdownBuilder() {
    var brandList = ["Select Brand"];
    var brands;

    for (var i = 0; i < shoes.length; i++) {
        brands = shoes[i].brand;
        var found = false;
        // console.log(brands)
        for (var y = 0; y < brandList.length; y++) {
            if (brandList[y] === brands) {
                found = true
            }
        }
        if (found === false) {
            brandList.push(brands)

        }
    }

    // console.log(brandList)
    createBrandDrop(brandList);
}

const createBrandDrop = (brandList) => {
    var createBrand = { brandList };
    var brandHTML = shoeBrandTemp(createBrand);
    shoeName.innerHTML = brandHTML
};

function SizeDropdown() {
    var sizeList = ["Select Size"];
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
        if (sizefound === false) {
            sizeList.push(sizes)
            sizeList.sort(function (a, b) { return a - b })
        }
    }

    var createSize = { brandList: sizeList };
    var sizeHTML = shoeBrandTemp(createSize);
    shoeSize.innerHTML = sizeHTML

}

function ColorDropdown() {
    var colorList = ["Select Color"];
    var colors

    for (var i = 0; i < shoes.length; i++) {
        colors = shoes[i].color;
        var colorfound = false;
        // console.log(brands)
        for (var y = 0; y < colorList.length; y++) {
            // console.log(colorList)
            if (colorList[y] === colors) {
                colorfound = true
            }
        }
        if (colorfound === false) {
            colorList.push(colors)
        }
    }

    var createColor = { brandList: colorList };
    var colorHTML = shoeBrandTemp(createColor);
    shoeColor.innerHTML = colorHTML

}


function ShoesCart() {
    let basket = shoeInstance.basket(brandDropDown.value, colourDropDown.value, sizeDropDown.value);
    var total = shoeInstance.total();
    var createShoe = { shoe: basket, total };
    var kicksHTML = shoeTemp(createShoe);
    basketData.innerHTML = kicksHTML;

    shoeInstance.select(brandDropDown.value, colourDropDown.value, sizeDropDown.value);
    message.innerHTML = shoeInstance.text();
}
addBasketBtn.addEventListener("click", ShoesCart);


checkoutBtn.addEventListener('click', function () {
    basketData.innerHTML = ""
});

removeBtn.addEventListener('click', function () {

    shoeInstance.return(brandDropDown.value, colourDropDown.value, sizeDropDown.value);
    console.log(shoes);
    ShoeSearch();
    // basketData.innerHTML = "";

});

