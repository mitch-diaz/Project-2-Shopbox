const { Schema, model } = mongoose;
const mongoose = require('mongoose');


const customerSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    apartmentNumber: Number,
    zip: Number,
    city: String,
    state: String,
    purchases: {type: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Purchase'
        }
      ]
    }
}, { 
    timestamps: true
})

const Customer = model('Customer', customerSchema);
module.exports = Customer;