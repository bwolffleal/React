const express = require('express');
const cors = require('cors'); 
const { errors } = require('celebrate');
const routes = require('./routes'); // './' serve para dizer que o arquivo está na mesma pasta

const app = express();

app.use(cors());
app.use(express.json()); //Usado para transformar a informação recebida em json
app.use(routes);
app.use(errors());

module.exports = app;

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o simbolo "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo fs requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */



