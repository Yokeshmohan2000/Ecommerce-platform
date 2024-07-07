// models/Product.js

const mongoose = require('mongoose');

// Define the schema for the Product model
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        
    },
    productPrice: {
        type: Number,
        
    },
    description: {
        type: String,
        
    },
    productPrice: {
        type: Number,  
        
    },
    category: {
        type: String,
        
    },
    imageUrl: {
        type: String,
    }
    
      
});

// Create the Product model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
