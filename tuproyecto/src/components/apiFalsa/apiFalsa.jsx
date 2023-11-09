

const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

function crearUsuario() {
  return {
    _id: faker.datatype.uuid(),
    primerNombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    numeroTelefono: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    contrasena: faker.internet.password(),
  };
}

function crearEmpresa() {
  return {
    _id: faker.datatype.uuid(),
    nombre: faker.company.companyName(),
    direccion: {
      calle: faker.address.streetName(),
      ciudad: faker.address.city(),
      estado: faker.address.state(),
      codigoPostal: faker.address.zipCode(),
      pais: faker.address.country(),
    },
  };
}

app.get('/usuario', (req, res) => {
  const nuevoUsuario = crearUsuario();
  res.json(nuevoUsuario);
});

app.get('/empresa', (req, res) => {
  const nuevaEmpresa = crearEmpresa();
  res.json(nuevaEmpresa);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:3000`);
});


module.exports = { crearUsuario, crearEmpresa };