const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phonenum: { type: String, required: true },
  email: { type: String, required: true },
  files: [{ type: String, required: true }],
  address1: { type: String, required: true },
  address2: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  country: { type: String, required: true },
  geolocation:  { type: String, required: true },
  selectedOptions: { type: [String], required: true }
}, { timestamps: true });

const UserForm = mongoose.model('UserForm', formSchema);

module.exports = UserForm;