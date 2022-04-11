const mongoose = require("mongoose");

const pendingTransactionsSchema = new mongoose.Schema({
    hash: {
        type: String,
        },
    toAdd: {
        type: String,
    },
    gas:{
        type:String,
    },
    gasPrice:{
        type:String,
    },
    maxFeePerGas:{
        type:String,
    },
    maxPriorityFeePerGas:{
        type:String,
    },
    time:{
        type:String,
    },
},{timestamps:true});

module.exports = mongoose.model('Transactions', pendingTransactionsSchema);