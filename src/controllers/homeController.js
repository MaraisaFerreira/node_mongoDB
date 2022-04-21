const homeGet = (req, res) => {
	res.status(200).send({
		message: 'Success',
	});
};

module.exports = {
	homeGet,
};
