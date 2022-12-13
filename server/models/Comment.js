const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const commentSchema = new Schema({
  userId: {
    type: String,
  },
  username: {
    type: String,
  },
  postId: {
    type: String,
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
const Comment = model('Comment', commentSchema);

module.exports = Comment;
