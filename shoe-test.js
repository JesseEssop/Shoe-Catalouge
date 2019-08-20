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
        assert.equal(testInstance.text(), "Please fill in all the fields")
    });

    it('This test put the shoes in the cart and returns the total amount of cart.', function () {
        var testInstance = ShoeFactory();
        testInstance.basket("Nike", 'blue', 9, 350, 5);
        testInstance.basket("Nike", 'blue', 9, 350, 5);
        assert.equal(testInstance.total(), 700)
    });
    
    it('This test searches for a shoe in the shoe log and returns a message when the shoe is found.', function () {
        var testInstance = ShoeFactory();
        testInstance.select("Jordan", 'red', 11, 500, 2);
        assert.equal(testInstance.text(),"We have 2 red Jordans in stock @ R500." )
    });
    
    it('This test searches for a shoe in the shoe log and returns a message when the shoe is not found.', function () {
        var testInstance = ShoeFactory();
        testInstance.select("Nike", 'red', 6, 500, 2);
        assert.equal(testInstance.text(),"Shoe not found" )
    });

})