
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/chistes', {
    });
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error);
  }
};

module.exports = connectDB;
