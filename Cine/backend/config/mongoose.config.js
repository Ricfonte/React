const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1/films", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("YOU ARE CONNECT"))
    .catch(err => console.log("SORRY IS NOT CONNECT " + err))