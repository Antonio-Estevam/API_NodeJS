const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest2',{useMongoClient: true});

mongoose.Promise = global.Promise;

module.exports = mongoose;



