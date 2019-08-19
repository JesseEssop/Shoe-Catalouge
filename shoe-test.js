describe('Shoe Catalouge tests', function () {
    it('This test takes in a new shoe brand, colour, size, price and quantity, and adds it to the shoe log ', function () {
        var testInstance = ShoeFactory();
        testInstance.add("Reebok", "green", 8, 350, 5)
        assert.deepEqual(testInstance.text("Reebok", "green", 8, 350, 5), "Catalouge has been updated");
    });

    it('This test returns the shoe/s from the cart and adds it back to the shoe log ', function () {
        var testInstance = ShoeFactory();
        testInstance.basket("Nike", 'blue', 9, 350, 5);
    });
})