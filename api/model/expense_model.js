const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Expense
let Expense = new Schema({
    user_id: {
        type: String,
    },
    expense_name: {
        type: String
    },
    expense_amount: {
        type: Number
    },
    expense_category: {
        type: String
    },
    payment_type: {
        type: String
    },
    comments: {
        type: String
    },
    expenseDate: {
        type: Date
    }
},{
    collection: 'expenses'
});

module.exports = mongoose.model('Expense', Expense);