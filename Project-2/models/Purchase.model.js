const { Schema, model } = mongoose;
const mongoose = require('mongoose');


const purchaseSchema = new Schema({
    customer: {type: Schema.Types.ObjectId, ref: 'Customer'}
}, { 
    timestamps: true
})

const Purchase = model('Purchase', purchaseSchema);
module.exports = Purchase;