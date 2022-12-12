const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = require('./Comment');
const reactionSchema = require('./Reaction');

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  body: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 4096,
  },
  country: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
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
    get: timestamp => dateFormat(timestamp),
  },
  comments: [
    {
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
    },
  ],
  reactions: [
    {
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
    },
  ],
});

// Create a virtual property `commentCount` that gets the amount of comments per post
postSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

// Create a virtual property `reactioncount ` that gets the amount of comments per post
postSchema.virtual('likeCount').get(function () {
  return this.reactions.filter(reaction => reaction.reactionType === 'like').length;
});

postSchema.virtual('dislikeCount').get(function () {
  return this.reactions.filter(reaction => reaction.reactionType === 'dislike').length;
});
// const Post = model('Post', postSchema);

module.exports = postSchema;
