'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const DAO = require('./DAO');
const CatRepository = require('./CatRepository');

// Initialize DB & DAO
const dao = new DAO('./db/cats.db');
const catRepo = new CatRepository(dao);
catRepo.createTable();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json()); // for parsing application/json

// Endpoints
app.get('/', (req, res) => {
	catRepo.getAllByName('Meli').then((data) => res.json(data));
});

app.get('/Salem', (req, res) => {
	catRepo.getAllByName('Salem').then((data) => res.json(data));
});

app.post('/new', (req, res) => {
	var newCat = req.body;
	catRepo.create(newCat.name, newCat.weight, newCat.datum);
	res.sendStatus(200);
});

//app.listen(PORT, HOST);
app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);
