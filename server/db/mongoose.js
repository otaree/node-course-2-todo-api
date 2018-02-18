var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.PROD_MONGODB || process.env.MONGODB_URI);

module.exports = { mongoose };