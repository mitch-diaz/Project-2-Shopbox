const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    firstName: {
      type: String, 
      default: '', 
      required: true
    },
    lastName: {
      type: String, 
      default: '', 
      required: true
    },
    email: {
      type: String, 
      default: '', 
      required: true
    },
    password: {
      type: String, 
      required: true
    },
    role: {
      type: String, 
      enum: ['ADMIN', 'STAFF'],
      default: '',
    },
    storeType: {
      type: String, 
      enum: ['ONLINE STORE', 'PHYSICAL STORE', 'ONLINE AND PHYSICAL STORE'],
      default: 'ONLINE STORE',
    },
    address: {
      type: String, 
      default: '** add address **'
    },
    unitNumber: {
      type: String, 
      default: '** add suite/bldg# **'
    },
    city: {
      type: String, 
      default: '** add city **'
    },
    state: {
      type: String, 
      default: '** add state **'
    },
    zip: {
      type: Number, 
      default: 0
    }
},
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;