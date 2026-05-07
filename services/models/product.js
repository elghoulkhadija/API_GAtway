const mongoose = require('mongoose');

const productScheme = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

const Product = mongoose.model('Product', productScheme);
module.exports = Product;