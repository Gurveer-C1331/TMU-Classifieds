const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category_id: { type: [String], required: true },
    category_type: { type: [String], required: true }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;