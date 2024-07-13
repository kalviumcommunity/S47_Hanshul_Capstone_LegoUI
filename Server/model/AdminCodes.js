const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
  title: String,
  description: String,
  imagePath: String,
  sourceCodePath: String,
  html: String,
  css: String,
  js: String,
});

const Code = mongoose.model('admincodes', codeSchema);

module.exports = Code;
