const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    following: [User]
    follwers: [User]
    posts: [Post]
  }

  type Post {
    _id: ID
    userId: String
    username: String
    title: String
    body: String
    country: String
    city: String
    comments: [Comment]!
    reactions: [Reaction]!
  }

  type Comment {
    _id: ID
    userId: ID
    username: String
    commentText: String
    createdAt: String
  }

  type Reaction {
    _id: ID
    userId: ID
    username: String
    reactionType: String
    createdAt: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts: [Post]
    myPosts(userId: ID): [Post]
    comments(postId: ID): [Comment]
    reactions(postId: ID): [Reaction]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(title: String!, body: String!, city: String!, Country: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    addReaction(postId: ID!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    removeReaction(postId: ID!): Post
  }
`;

module.exports = typeDefs;
