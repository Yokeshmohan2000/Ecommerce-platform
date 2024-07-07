const express = require('express');
const router = express.Router();
const User = require('../models/Users');

// Create
router.post('/', async (req, res) => {
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
router.get('/', async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      res.status(500).send(error);
    }
});

// Update
router.put('/:userId', (req, res) => {
  const { userId } = req.params;
  const { name, email } = req.body;

  User.findByIdAndUpdate(userId, { name, email }, { new: true }, (err, user) => {
    if (err) return res.status(500).send(err);
    res.json(user);
  });
});

// Delete
router.delete('/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
      const deletedUser = await User.findByIdAndRemove(userId);
      res.json(deletedUser);
    } catch (error) {
      res.status(500).send(error);
    }
});

module.exports = router;
