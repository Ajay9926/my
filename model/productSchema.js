const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const ProductData = mongoose.model('data', ProductSchema)

module.exports = ProductData;
