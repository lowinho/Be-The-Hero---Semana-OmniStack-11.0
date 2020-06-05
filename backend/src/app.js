const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');


const app = express();

app.use(cors()); // segurança

app.use(express.json()); // converte para json
app.use(routes); // tem que ser abaixo do json
app.use(errors()); // tem que ser abaixo do routes





module.exports = app;