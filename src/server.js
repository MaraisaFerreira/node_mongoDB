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

const session = require('express-session');
const MongoStore = require('connect-mongo');

const routes = require('./routes');

const sessionOpt = session({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: false,
	store: MongoStore.create({
		mongoUrl: process.env.URL_CONNECTION,
	}),
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7,
		httpOnly: true,
	},
});

app.use(express.urlencoded({ extended: true }));
app.use(sessionOpt);
app.use(routes);

app.on('db_connection_started', () => {
	app.listen(3000, () => {
		console.log('http://localhost:3000');
		console.log('Server running on port 3000...');
	});
});
