const { Schema } = require('mongoose');

const reactionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
  },
  postId: {
    type: Schema.Types.ObjectId,
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

module.exports = reactionSchema;
