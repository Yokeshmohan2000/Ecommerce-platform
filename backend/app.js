const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// const upload = require('./middlewares/Upload');
const Product = require('./models/Products');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Multer', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Check MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');   
});


// Define the schema
const userSchema = new mongoose.Schema({
  name: String, 
  email: String,
});

const User = mongoose.model('User', userSchema);

// CRUD routes

// Create
app.post('/users', async (req, res) => {
    try {
      const { name, email } = req.body;
      const newUser = new User({ name, email });
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  

// Read
app.get('/users', async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  


// Update
app.put('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const { name, email } = req.body;

  User.findByIdAndUpdate(userId, { name, email }, { new: true }, (err, user) => {
    if (err) return res.status(500).send(err);
    res.json(user);
  });
});

// Delete
app.delete('/users/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
      const deletedUser = await User.findByIdAndRemove(userId);
      res.json(deletedUser);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Create a new product with image upload
  app.post('/api/products', async (req, res) => {
    try {
      const { productName,productPrice ,description,category } = req.body;
      const newUser = new User({ productName, productPrice,description,category });
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (error) {
      res.status(500).send(error);
    }
  });

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
    console.log('Products get');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
