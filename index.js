require('dotenv').config();
const mongoose = require('mongoose');
const app = require('express')();

mongoose.connect("mongodb+srv://admin:VZESSRT0pCfCZcbt@cluster0.gnzax.mongodb.net/invisible-package?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', (err) => console.log("mongoose error:", err));
db.once('open', () => {
	console.log("mongoose connected to db");
})
