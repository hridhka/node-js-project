const mongoose = require("mongoose");

// Define the User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
    unique: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  rating: {
    type: [Number],
    default: ["user"], 
  },
  menu: {
    name: String,
    description: String,
    price : Number
  },

});

// Export the model
const User = mongoose.model("User", userSchema);
module.exports = User;