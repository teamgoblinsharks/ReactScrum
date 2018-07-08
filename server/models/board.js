const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardModel = new Schema({
   id: { type: String, required: true },
   name: { type: String, required: true },
});

module.exports = mongoose.model('Board', boardModel);