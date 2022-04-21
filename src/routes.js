const route = require('express').Router();

const { homeGet } = require('./controllers/homeController');

route.get('/', homeGet);

module.exports = route;
