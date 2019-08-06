var addBasketBtn = document.querySelector(".addBasketBtn");
var searchBtn = document.querySelector(".searchBtn");
var checkoutBtn = document.querySelector(".checkoutBtn");
var removeBtn = document.querySelector(".removeBtn");
var brandDropDown = document.querySelector(".shoeDropDown");
var sizeDropDown = document.querySelector(".shoeSizeDropDown");
var colourDropDown = document.querySelector(".shoeColourDropDown");

var addShoeBtn = document.querySelector(".addShoeBtn");
var update = document.querySelector(".update");
var searchBtn = document.querySelector(".searchBtn");
var addBtn = document.querySelector(".addBtn");
var message = document.querySelector(".message");

var brandInput = document.querySelector(".Brand");
var sizeInput = document.querySelector(".Size");
var colourInput = document.querySelector(".Colour");
var priceInput = document.querySelector(".Price");
var stockInput = document.querySelector(".Stock")



var shoeInstance = ShoeFactory();
var active;

window.onload = function () {
    update.style.display = 'none';
    active = false;
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

});

searchBtn.addEventListener("click", function (){
    var findshoe = shoeInstance.select(brandDropDown.value, colourDropDown.value, sizeDropDown.value );

    message.innerHTML = shoeInstance.text()
    
    if (brandDropDown.value === '' || sizeDropDown.value === '' || colourDropDown.value === '' ){
        return message.innerHTML = "Please select all options to find shoe"    
    }
});

addBasketBtn.addEventListener("click", function(){
    shoeInstance.basket();
    



});
