const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const outcomeAreaSchema = new Schema({
	title: { type: String, trim: true, required: true, index: {
		unique: true,
		partialFilterExpression: { active: { $eq: true } }
		}
	},
	copy: { type: String, trim: true },
	// route in App.js for this outcome area
	route: { type: String, trim: true, lowercase: true, required: true, index: {
			unique: true,
			partialFilterExpression: { active: { $eq: true } }
		}
	},
	image: String,
	active: { type: Boolean, default: false },
	order: { type: Number, default: 100 },
	notes: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model('OutcomeArea', outcomeAreaSchema);