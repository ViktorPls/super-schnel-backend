const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();
console.log(router)

// GET all products
router.get('/', (req, res) => {
    res.send('GET request to the homepage')
});

// GET a specific product
router.get('/:id', (req, res) => {
    const productId = req.params.id;

    const product = {
        id: productId,
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price()
    };

    res.json(product);
});

// POST a new product
router.post('/', (req, res) => {
    // Your code here
});

// PUT update a product
router.put('/:id', (req, res) => {
    // Your code here
});

// DELETE a product
router.delete('/:id', (req, res) => {
    // Your code here
});

module.exports = router;