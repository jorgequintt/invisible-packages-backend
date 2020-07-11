const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    price: Number,
    image: String,
    name: String,
    description: String,
    availability: Number
})

module.exports = mongoose.model("Product", productSchema);
