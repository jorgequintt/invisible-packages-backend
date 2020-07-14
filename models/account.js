const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updated: {
		type: Date,
	},
});

module.exports = mongoose.model("Account", accountSchema);
