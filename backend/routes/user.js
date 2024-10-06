const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt')

// Create
router.post('/register', async (req, res) => {
    try {
     /* const { name, email } = req.body;
      const newUser = new User({ name, email });
      const savedUser = await newUser.save();
      res.json(savedUser); */
     
      const {email,name,password}=req.body.formData;
      const userName = await User.findOne({name});
      const userEmail = await User.findOne({email});

      if(typeof email === 'string' && typeof name === 'string' && typeof password === 'string'
         && (email.trim() === "" || name.trim() === "" || password.trim() === "")){
          if (email.trim() === "") {
            return res.status(204).json({ message: "Email is empty" });
          } else if (name.trim() === "") {
            return res.status(204).json({ message: "Name is empty" });
          } else if (password.trim() === "") {
            return res.status(204).json({ message: "Password is empty" });
          }
      }
       
      if(userEmail){
        return res.status(409).json({message:"Email already exits",inmesg:"email"});
      }
      if(userName){
        return res.status(409).json({message:"User already exits",inmesg:"name"})
      }
      
      const hashPassword= await bcrypt.hash(password,10) // password hassing
      const data= await new User({email,name,password:hashPassword})
      await data.save()
      res.status(200).json({message:"user registered successfully"})
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
