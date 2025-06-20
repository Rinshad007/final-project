const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  title: { type: String },
  category: { type: String },
  image: { type: String },
});

module.exports = mongoose.model('Post', Schema);
