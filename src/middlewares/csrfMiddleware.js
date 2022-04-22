const checkCsrfErr = (err, req, res, next) => {
	if (err?.code === 'EBADCSRFTOKEN') {
		return res.status(403).send({ message: 'Invalid CSRF' });
	}
};

const csrfToken = (req, res, next) => {
	res.locals.csrfToken = req.csrfToken();
	next();
};

module.exports = {
	checkCsrfErr,
	csrfToken,
};
