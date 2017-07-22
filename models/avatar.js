const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
  user: {type: Schema.Types.ObjectId},
  avatarType: {type: String, required: true},
  level: {type: Number, required: true},
  health: {type: Number, required: true},
  strength: {type: Number, required: true},
  defense: {type: Number, required: true},
  speed: {type: Number, required: true},
  stamina: {type: Number, required: true}
});

module.exports = mongoose.model('Avatar', schema);
