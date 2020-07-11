const mongoose = require("mongoose");

// User Schema set up
const userSchema = new mongoose.Schema({
	username: String,
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
	name: String,
	avatar: {
		type: String,
		default:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1KYdVbr_q9oPjjbBDx9se1reB9_DhUcpwwzGtkeLCSyp8v9dr&usqp=CAU",
	},
	telephone: String,
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updated: {
		type: Date,
	},
	cart: [
		{
			id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Package",
			},
			quantity: Number,
			price: String,
		},
	],
	purchases: [
		{
			id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Purchase",
			}
		},
	],
});

module.exports = mongoose.model("User", userSchema);
