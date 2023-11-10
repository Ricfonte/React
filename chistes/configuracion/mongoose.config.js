// mongoose.config.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chistes', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
