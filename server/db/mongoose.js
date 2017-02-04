var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_ORANGE_URI  || 'mongodb://localhost:39160/TodoApp');

module.exports = { mongoose };