const route = require('express').Router();

const { petsGet } = require('./controllers/petsController');

route.get('/', petsGet);

module.exports = route;
