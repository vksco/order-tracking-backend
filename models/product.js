const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    sku: { type: String, required: false },
    status: { type: Boolean, required: false, default: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
