const mongoose = require('mongoose');
const { environment } = require('./config');
const { transactionShema } = require('./transactionsSchema');
const env = process.env.NODE_ENV || "development";

/**
 * Mongoose Connection
**/

mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const Transactions = mongoose.model('Transactions', transactionShema);

export { Transactions };