// const express = require('express');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());
// const router = express.Router();
// const Product = require('./models/Product');
// const upload = require('./middlewares/upload');

// Create a new product with image upload
// router.post('/api/products', upload.single('image'), async (req, res) => {
//     try {
//         const { name, description, price, category } = req.body;
//         const imageUrl = req.file.path;
//         const product = new Product({ name, description, price, category, imageUrl });
//         await product.save();
//         res.status(201).send(product);
//         console.log('Addproducts send');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// });

// Other routes remain the same       
// Update, delete, get all, get single
// ...

// module.exports = router;
