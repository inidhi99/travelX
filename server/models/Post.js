const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  country: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId
  },
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
      userId: {
        type: Schema.Types.ObjectId
      },
      postId: {
        type: Schema.Types.ObjectId
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
        get: (timestamp) => dateFormat(timestamp),
      },
      username: String,
    },
  ],
  reactions: [
    {
      userId: {
        type: Schema.Types.ObjectId
      },
      postId: {
        type: Schema.Types.ObjectId
      },
      reactionType: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
      username: String,     
    },
  ],
});

// Create a virtual property `commentCount` that gets the amount of comments per post
postSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

// Create a virtual property `reactioncount ` that gets the amount of comments per post
postSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Post = model('Post', postSchema);

module.exports = Post;
