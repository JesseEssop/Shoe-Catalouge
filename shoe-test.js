describe('Shoe Catalouge tests', function () {
    it('This test takes in a new shoe brand, colour, size, price and quantity, and adds it to the shoe log ', function () {
        var testInstance = ShoeFactory();
        assert.equal(testInstance.add(color = "green", brand = "Reebok", size = 8, price = 260, stock = 3), {color: "green", brand: "Reebok", size: 8, price: 260, stock: 3});
    });
})