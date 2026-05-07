const mongoose = require('mongoose');

const orderScheme = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
});

const Order = mongoose.model('Order', orderScheme);
module.exports = Order;