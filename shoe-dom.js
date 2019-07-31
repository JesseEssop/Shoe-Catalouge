var addBtn = document.querySelector(".addBtn");
var searchBtn = document.querySelector(".searchBtn");
var checkoutBtn = document.querySelector(".checkoutBtn");
var removeBtn = document.querySelector(".removeBtn");
var brandDropDown = document.querySelector(".shoeDropDown");
var sizeDropDown = document.querySelector(".shoeSizeDropDown");
var colourDropDown = document.querySelector(".shoeColourDropDown");
var addShoeBtn = document.querySelector(".addShoeBtn");
var update = document.querySelector(".update");

var shoeInsance = ShoeFactory();
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
        active = false;
    }
});