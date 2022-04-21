/* const PetModel = require('../models/PetModel');

PetModel.create({
	kind: 'cat',
	breed: 'mixed siamese',
	age: 3,
	color: 'white & gray',
	adopted: false,
})
	.then((dt) => console.log(dt))
	.catch((err) => console.log(err)); */

const petsGet = (req, res) => {
	res.status(200).send({
		message: 'Success',
	});
};

module.exports = {
	petsGet,
};
