const petsGet = (req, res) => {
	res.status(200).send({
		message: 'Success',
		token: res.locals.csrfToken,
	});
};

module.exports = {
	petsGet,
};
