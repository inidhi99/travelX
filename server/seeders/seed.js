const connection = require('../config/connection');
const { User, Post, Comment, Reaction } = require('../models');
const posts = require('./postSeeds');
const users = require('./userSeeds');
// const comment = require('./commentSeeds')
// const reactions = require('./reactionSeeds')

connection.on('error', err => err);

connection.once('open', async () => {
  console.log('connected');
  await Post.deleteMany({});
  await User.deleteMany({});

  //   const users = [];
  //   const applications = getRandomApplications(10);

  //   for (let i = 0; i < 20; i++) {
  //     const fullName = getRandomName();
  //     const first = fullName.split(' ')[0];
  //     const last = fullName.split(' ')[1];

  //     users.push({
  //       first,
  //       last,
  //       age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
  //     });
  //   }

  await User.collection.insertMany(users);
  const createdUsers = await User.find();
  //   console.log(createdUsers)

  const postsToInsert = [];
  // go through each post datum
  posts.map(async post => {
    // get random user
    const randomIndex = Math.floor(Math.random() * createdUsers.length);
    const randomUser = createdUsers[randomIndex];
    postsToInsert.push({
      ...post,
      userId: randomUser.userId,
      username: randomUser.username,
    });
  });

  await Post.collection.insertMany(postsToInsert);

  const createdPosts = await Post.find();

  // // go through each comment datum
  // comments.map(async (comment) => {
  //     // get random user
  //     const randomIndex = Math.floor(Math.random() * createdPosts.length);
  //     const randomPost = createdPosts[randomIndex];
  //     const user = await User.findById(randomPost.userId);
  //     await Comment.create({
  //         ...comment,
  //         postId: randomPost._id,
  //         userId: randomPost.userId,
  //         username: user.username
  //     })
  // })

  // // go through each reaction datum
  // reactions.map(async (reaction) => {
  //     // get random user
  //     const randomIndex = Math.floor(Math.random() * createdPosts.length);
  //     const randomPost = createdPosts[randomIndex];
  //     const user = await User.findById(randomPost.userId);
  //     await Reaction.create({
  //         ...reaction,
  //         postId: randomPost._id,
  //         userId: randomPost.userId,
  //         username: user.username
  //     })
  // })

  //   await Post.collection.insertMany(applications);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.log(createdUsers);
  console.log(createdPosts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
