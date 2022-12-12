const { Schema } = require('mongoose');

const reactionSchema = new Schema({
  reactionType: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp),
  },
});

module.exports = reactionSchema;
