const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
	kind: { type: String, required: true },
	breed: { type: String, required: true },
	age: { type: Number, required: true },
	color: { type: String, required: true },
	adopted: { type: Boolean, required: true },
});

const PetModel = mongoose.model('Pets', PetSchema);

class Pet extends PetModel {}

module.exports = Pet;
