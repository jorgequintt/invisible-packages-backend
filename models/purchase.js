const mongoose = require("mongoose");

const purchaseSchema = mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	total: Number,
	cart: [
		{
			productId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Product",
			},
			quantity: Number,
		},
	],
	location: {
		type: {
			type: Point,
			required: true,
		},
		coordinates: {
			type: [Number],
			required: true,
		},
	},
	state: String
});

module.exports = mongoose.model("Purchase", purchaseSchema);
