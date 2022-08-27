const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const InvoiceSchema = new Schema({
    date: {
        type: String,
    },
    number: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        deafult: true
    }
});


const Invoice = mongoose.model('invoice',InvoiceSchema);

module.exports = Invoice;