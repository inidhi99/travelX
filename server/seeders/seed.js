const connection = require('../config/connection');
const { User, Post, Comment, Reaction } = require('../models');
const posts = require('./postSeeds');
const users = require('./userSeeds');
const comments = require('./commentSeeds');
const reactions = require('./reactionSeeds');
// const { ObjectId } = require('')
const mongoose = require('mongoose');

connection.on('error', err => err);

connection.once('open', async () => {
  mongoose.connection.db.dropDatabase();
  console.log('connected');
  await Post.deleteMany({});
  await User.deleteMany({});

  await Promise.all(users.map(async user => await User.create(user)));
  const createdUsers = await User.find();

  const postsToInsert = [];
  // go through each post datum
  posts.map(async post => {
    // get random user
    const randomIndex = Math.floor(Math.random() * createdUsers.length);
    const randomUser = createdUsers[randomIndex];
    postsToInsert.push({
      ...post,
      userId: randomUser._id,
      username: randomUser.username,
    });
  });

  await Post.collection.insertMany(postsToInsert);

  const createdPosts = await Post.find();

  // go through each comment datum
  const commentsToInsert = await Promise.all(
    comments.map(async comment => {
      // get random post
      const randomIndex = Math.floor(Math.random() * createdPosts.length);
      const randomPost = createdPosts[randomIndex];
      // const user = await User.findOne({ _id: randomPost.userId });

      // get index to select random user
      let randomUserIndex;
      // ensure random user and the user behind the post are not the same
      do {
        randomUserIndex = Math.floor(Math.random() * createdUsers.length);
      } while (createdUsers[randomUserIndex]._id === randomPost.userId);
      const randomUser = createdUsers[randomUserIndex];

      return {
        ...comment,
        postId: randomPost._id,
        userId: randomUser._id,
        username: randomUser.username,
      };
    })
  );

  await Comment.insertMany(commentsToInsert);
  const createdComments = await Comment.find();
  for (const comment of createdComments) {
    await Post.findOneAndUpdate(
      { _id: comment.postId },
      {
        $addToSet: {
          comments: comment._id,
        },
      }
    );
  }

  // go through each reaction datum
  const reactionsToInsert = await Promise.all(
    reactions.map(async reaction => {
      // get random user
      const randomIndex = Math.floor(Math.random() * createdPosts.length);
      const randomPost = createdPosts[randomIndex];

      const user = await User.findOne({ _id: randomPost.userId });

      return {
        ...reaction,
        postId: randomPost._id,
        userId: randomPost.userId,
        username: user.username,
      };
    })
  );

  await Reaction.insertMany(reactionsToInsert);

  const createdReactions = await Reaction.find();

  for (const reaction of createdReactions) {
    await Post.findOneAndUpdate(
      { _id: reaction.postId },
      {
        $addToSet: {
          reactions: reaction._id,
        },
      }
    );
  }

  const updatedPosts = await Post.find();

  for (const post of updatedPosts) {
    await User.findOneAndUpdate(
      { _id: post.userId },
      {
        $addToSet: {
          posts: post._id,
        },
      }
    );
  }

  const updatedUsers = await User.find();

  // following
  for (let i = 0; i < updatedUsers.length; i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * updatedUsers.length);
    } while (randomIndex === i);
    const randomUser = updatedUsers[randomIndex];
    await User.findOneAndUpdate(
      { _id: updatedUsers[i]._id },
      {
        $addToSet: {
          following: randomUser._id,
        },
      }
    );
  }
  // followers
  for (let i = 0; i < updatedUsers.length; i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * updatedUsers.length);
    } while (randomIndex === i);
    const randomUser = updatedUsers[randomIndex];
    await User.findOneAndUpdate(
      { _id: updatedUsers[i]._id },
      {
        $addToSet: {
          followers: randomUser._id,
        },
      }
    );
  }

  const finalUsers = await User.find();
  console.log(finalUsers);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
