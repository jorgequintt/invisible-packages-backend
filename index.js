require("dotenv").config();
const mongoose = require("mongoose");
const app = require("express")();

mongoose.connect(
	process.env.DB_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

db.on("error", (err) => console.log("mongoose error:", err));
db.once("open", () => {
	console.log("mongoose connected to db");
});
