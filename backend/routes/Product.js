const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const upload = require('../middlewares/Upload');

// Create a new product with image upload
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { productName, description, productPrice, category } = req.body;
        const imageUrl = req.file.path;
        const product = new Product({ productName, description, productPrice, category, imageUrl });
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Get a single product by ID
router.get('/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
