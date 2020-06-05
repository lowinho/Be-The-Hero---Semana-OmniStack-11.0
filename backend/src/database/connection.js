const knex = require('knex'); // importa knex
const configuration = require('../../knexfile'); // importa a configuração feita pelo knex com as tabelas criadas

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;