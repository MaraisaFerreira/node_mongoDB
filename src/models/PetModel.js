const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
	name: { type: String },
	kind: { type: String, required: true },
	age: { type: Number, required: true },
	color: { type: String, required: true },
	adopted: { type: Boolean, required: true },
	url_img: String,
});

const PetModel = mongoose.model('Pets', PetSchema);

class Pet extends PetModel {}

module.exports = Pet;
