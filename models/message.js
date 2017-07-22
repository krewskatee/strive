const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
  title: {type: String, required: true},
  subject: {type: String, required: true},
  body: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Message', schema);
