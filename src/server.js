require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const helmet = require('helmet');
const csrf = require('csurf');

mongoose
	.connect(process.env.URL_CONNECTION)
	.then(() => {
		console.log('Connected on db...');
		app.emit('db_connection_started');
	})
	.catch((err) => console.log(err));

const session = require('express-session');
const MongoStore = require('connect-mongo');

const { checkCsrfErr, csrfToken } = require('./middlewares/csrfMiddleware');
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

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(sessionOpt);
app.use(csrf());
app.use(checkCsrfErr);
app.use(csrfToken);
app.use(routes);

app.on('db_connection_started', () => {
	app.listen(3000, () => {
		console.log('http://localhost:3000');
		console.log('Server running on port 3000...');
	});
});
