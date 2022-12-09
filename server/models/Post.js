const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  country: {
    type: String,
    required: true,
  },
  User: [userSchema],
  city: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
   //api ??
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: Text,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      Post: [postSchema],
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
      username: [userSchema],
    },
  ],
  reactions: [
    {
      reactionType: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
      username: [userSchema],
      Post: [postSchema],
     
    },
  ],
});

const Post = model('Post', postSchema);

module.exports = Post;
