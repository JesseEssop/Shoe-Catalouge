describe('Shoe Catalouge tests', function () {
    it('This test takes in a new shoe brand, colour, size, price and quantity, and adds it to the shoe log ', function () {
        var testInstance = ShoeFactory();
        assert.equal(testInstance.add( [brand = "Reebok", color = "green", size = 8, price = 350, stock = 5] ), 184 );
    });
})