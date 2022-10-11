const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const purchaseSchema = new Schema({
    invoiceTitle: String,
    invoiceId: String,
    invoiceDate: Date,
    invoiceStatus: {
        type: String, 
        enum: ['OPEN', 'CLOSED', 'CANCELLED'],
        default: 'Credit or debit card',
      },
      paymentMethod: {
        type: String, 
        enum: ['Credit or debit card', 'Gift card', 'Cash', 'Mobile wallet'],
        default: 'Credit or debit card',
      },
    customer: {
        type: Schema.Types.ObjectId, 
        ref: 'Customer'
    },
    items: { type: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Book'
        },
        {
            type: Schema.Types.ObjectId, 
            ref: 'Movie'
        }
    ]
    }
}, { 
    timestamps: true
})

const Purchase = model('Purchase', purchaseSchema);
module.exports = Purchase;