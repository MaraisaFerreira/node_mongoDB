require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose
	.connect(process.env.URL_CONNECTION)
	.then(() => {
		console.log('Connected on db...');
		app.emit('db_connection_started');
	})
	.catch((err) => console.log(err));

const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.on('db_connection_started', () => {
	app.listen(3000, () => {
		console.log('http://localhost:3000');
		console.log('Server running on port 3000...');
	});
});
