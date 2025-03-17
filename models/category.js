const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
