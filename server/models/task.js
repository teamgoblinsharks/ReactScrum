const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskModel = new Schema({
   boardId: { type: String, required: true },
   task: { type: String, required: true },
});

module.exports = mongoose.model('Task', taskModel);