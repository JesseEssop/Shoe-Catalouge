describe('Shoe Catalouge tests', function () {
    it('This test takes in a shoe brand, colour, size, price and quantity, and adds it to the shoe log.', function () {
        var testInstance = ShoeFactory();
        testInstance.add("Reebok", "green", 8, 350, 5)
        assert.deepEqual(testInstance.text("Reebok", "green", 8, 350, 5), "Catalouge has been updated");
    });

    it('This test takes in a shoe and only updates the stock its added more than once.', function () {
        var testInstance = ShoeFactory();
        testInstance.add("Vans", 'grey', 12, 750, 5);
        testInstance.add("Vans", 'grey', 12, 750, 5);
        assert.deepEqual(testInstance.text(), "Stock updated")
    });
    
    it('This test returns an error message when all the fields are not filled.', function () {
        var testInstance = ShoeFactory();
        testInstance.add("", "", "", "", "", "");
        assert.equal(testInstance.text(), "Enter valid shoe name")
    });

    it('This test put the shoes in the cart and returns the total amount of cart.', function () {
        var testInstance = ShoeFactory();
        testInstance.basket("Nike", 'Blue', 9, 350, 1);
        testInstance.basket("Nike", 'Blue', 9, 350, 1);
        assert.equal(testInstance.total(), 700)
    });
    
    it('This test searches for a shoe in the shoe log and returns a message when the shoe is found.', function () {
        var testInstance = ShoeFactory();
        testInstance.select("Jordan", 'Red', 11, 500, 2);
        assert.equal(testInstance.text(),"We have 2 Red Jordans in stock @ R500." )
    });
    
    it('This test searches for a shoe in the shoe log and returns a message when the shoe is not found.', function () {
        var testInstance = ShoeFactory();
        testInstance.select("Nike", 'red', 6, 500, 2);
        assert.equal(testInstance.text(),"Shoe not found" )
    });

})