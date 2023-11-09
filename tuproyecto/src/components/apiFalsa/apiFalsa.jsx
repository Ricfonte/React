const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

class Usuario {
  constructor() {
    this._id = faker.datatype.uuid();
    this.primerNombre = faker.name.firstName();
    this.apellido = faker.name.lastName();
    this.numeroTelefono = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.contrasena = faker.internet.password();
  }
}

class Empresa {
  constructor() {
    this._id = faker.datatype.uuid();
    this.nombre = faker.company.companyName();
    this.direccion = {
      calle: faker.address.streetName(),
      ciudad: faker.address.city(),
      estado: faker.address.state(),
      codigoPostal: faker.address.zipCode(),
      pais: faker.address.country(),
    };
  }
}

app.get('/usuario', (req, res) => {
  const nuevoUsuario = new Usuario();
  res.json(nuevoUsuario);
});

app.get('/empresa', (req, res) => {
  const nuevaEmpresa = new Empresa();
  res.json(nuevaEmpresa);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


module.exports = { Usuario, Empresa };


module.exports = { Usuario, Empresa };

