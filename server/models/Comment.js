const { Schema } = require('mongoose');

const commentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
  },
  postId: {
    type: Schema.Types.ObjectId,
  },
  commentText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp),
  },
  username: String,
});

module.exports = commentSchema;
