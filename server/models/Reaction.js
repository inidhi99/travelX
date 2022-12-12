const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
  userId: {
    type: String,
  },
  postId: {
    type: String,
  },
  reactionType: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp),
  },
  username: String,
});

const Reaction = model('Reaction', reactionSchema);
module.exports = Reaction;
