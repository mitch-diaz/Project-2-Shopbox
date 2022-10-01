const { Schema, model } = mongoose;
const mongoose = require('mongoose');


const customerSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
}, { 
    timestamps: true
})

const Customer = model('Customer', customerSchema);
module.exports = Customer;