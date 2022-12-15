const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment, Reaction } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('posts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts');
    },
    posts: async () => {
      return Post.find().sort({ createdAt: -1 }).populate('comments').populate('reactions');
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId }).sort({ createdAt: -1 }).populate('comments').populate('reactions');
    },
    myPosts: async (parent, { userId }) => {
      //   const params = username ? { username } : {};
      return Post.find({ userId }).sort({ createdAt: -1 }).populate('comments').populate('reactions');
    },
    comments: async (parent, { postId }) => {
      //   const params = username ? { username } : {};
      return Comment.find({ postId }).sort({ createdAt: -1 });
    },
    comment: async (parent, { commentId }) => {
      //   const params = username ? { username } : {};
      return Comment.findOne({ _id: commentId }).sort({ createdAt: -1 });
    },
    reactions: async (parent, { postId }) => {
      //   const params = username ? { username } : {};
      return Reaction.find({ postId }).sort({ createdAt: -1 });
    },

    reaction: async (parent, { reactionId }) => {
      //   const params = username ? { username } : {};
      return Reaction.findOne({ _id: reactionId }).sort({ createdAt: -1 });
    },

    // post: async (parent, { postId }) => {
    //   return post.findOne({ _id: postId });
    // },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, { title, body, city, country, image }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to preform this action');
      }
      return await Post.create({
        title: title,
        body: body,
        city: city,
        country: country,
        image: image,
        userId: context.user._id,
        username: context.user.username,
      });
    },
    addComment: async (parent, { commentText, postId }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to preform this action');
      }
      const comment = await Comment.create({
        commentText: commentText,
        userId: context.user._id,
        username: context.user.username,
        postId: postId,
      });
      console.log(comment);

      const updatedPost = await Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: {
            comments: comment._id,
          },
        },
        {
          new: true,
        }
      ).populate({
        path: 'comments',
        model: 'Comment',
      });
      return updatedPost;
    },
    addReaction: async (parent, { postId, reactionType }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to preform this action');
      }

      const reaction = await Reaction.create({
        userId: context.user._id,
        username: context.user.username,
        reactionType: reactionType,
      });

      const updatedPost = await Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: {
            reactions: reaction._id,
          },
        },
        {
          new: true,
        }
      ).populate({
        path: 'reactions',
        model: 'Reaction',
      });
      return updatedPost;
    },
    login: async (parent, { username, email, password }) => {
      const user = await User.findOne({ $or: [{ username }, { email }] });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
  },

  //   Mutation: {
  // addUser: async (parent, { username, email, password }) => {
  //   const user = await User.create({ username, email, password });
  //   const token = signToken(user);
  //   return { token, user };
  // },
  //     login: async (parent, { email, password }) => {
  //       const user = await User.findOne({ email });

  //       if (!user) {
  //         throw new AuthenticationError('No user found with this email address');
  //       }

  //       const correctPw = await user.isCorrectPassword(password);

  //       if (!correctPw) {
  //         throw new AuthenticationError('Incorrect credentials');
  //       }

  //       const token = signToken(user);

  //       return { token, user };
  //     },
  //     addThought: async (parent, { thoughtText }, context) => {
  //       if (context.user) {
  //         const thought = await Thought.create({
  //           thoughtText,
  //           thoughtAuthor: context.user.username,
  //         });

  //         await User.findOneAndUpdate(
  //           { _id: context.user._id },
  //           { $addToSet: { thoughts: thought._id } }
  //         );

  //         return thought;
  //       }
  //       throw new AuthenticationError('You need to be logged in!');
  //     },
  //     addComment: async (parent, { thoughtId, commentText }, context) => {
  //       if (context.user) {
  //         return Thought.findOneAndUpdate(
  //           { _id: thoughtId },
  //           {
  //             $addToSet: {
  //               comments: { commentText, commentAuthor: context.user.username },
  //             },
  //           },
  //           {
  //             new: true,
  //             runValidators: true,
  //           }
  //         );
  //       }
  //       throw new AuthenticationError('You need to be logged in!');
  //     },
  //     removeThought: async (parent, { thoughtId }, context) => {
  //       if (context.user) {
  //         const thought = await Thought.findOneAndDelete({
  //           _id: thoughtId,
  //           thoughtAuthor: context.user.username,
  //         });

  //         await User.findOneAndUpdate(
  //           { _id: context.user._id },
  //           { $pull: { thoughts: thought._id } }
  //         );

  //         return thought;
  //       }
  //       throw new AuthenticationError('You need to be logged in!');
  //     },
  //     removeComment: async (parent, { thoughtId, commentId }, context) => {
  //       if (context.user) {
  //         return Thought.findOneAndUpdate(
  //           { _id: thoughtId },
  //           {
  //             $pull: {
  //               comments: {
  //                 _id: commentId,
  //                 commentAuthor: context.user.username,
  //               },
  //             },
  //           },
  //           { new: true }
  //         );
  //       }
  //       throw new AuthenticationError('You need to be logged in!');
  //     },
  //   },
};

module.exports = resolvers;
