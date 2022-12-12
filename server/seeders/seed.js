const connection = require('../config/connection');
const { User, Post } = require('../models');
const posts = require('./postSeeds');
const users = require('./userSeeds')

connection.on('error', (err) => err);

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
//   await Post.collection.insertMany(applications);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
//   console.table(posts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
