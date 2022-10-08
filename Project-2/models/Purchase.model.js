const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const purchaseSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId, 
        ref: 'Customer'
    },
    book: {
        type: Schema.Types.ObjectId, 
        ref: 'Book'
    },
    movie: {
        type: Schema.Types.ObjectId, 
        ref: 'Movie'
    }
}, { 
    timestamps: true
})

const Purchase = model('Purchase', purchaseSchema);
module.exports = Purchase;