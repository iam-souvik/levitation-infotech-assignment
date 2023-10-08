const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Userform = require('../models/Submission');








router.get('/', async (req, res) => {
  try {
    const users = await Userform.find();
    res.send({ users, message: "user Data successful" });
  } catch (error) {
    console.log('error:', error)
    res.status(500).send({ message: 'Server error' });
  }
});



router.post('/multiform', async (req, res) => {
  const { name, email, phonenum,files, address1, address2, state, country, city, pincode, geolocation, selectedOptions } = req.body;

  if (!name || !email || !phonenum || !selectedOptions || !files || !address1 || !address2 || !country || !state || !city || !pincode || !geolocation ) return res.status(400).send({ message: "Please provide proper data for the form!" });

  try {

    // Check if a user with the same email already exists
    const existingUser = await Userform.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: 'User with this email already exists' });
    }

   
    const newUsers = new Userform({
      name,
      email,
      phonenum,
      files,
      address1,
      address2,
      country,
      state,
      city,
      pincode,
      selectedOptions,
      geolocation
    });

    await newUsers.save();
    res.status(201).send({ message: ' form filled successfully' });
  } catch (error) {
    console.log({ error })
    res.status(500).send({ message: 'Server error' });
  }
});



module.exports = router;