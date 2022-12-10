const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lasName: String
    username: String
    email:String
    password: String
    following: [User]
    follwers: [User]
    posts: [Post]!
  }

  type Post {
    _id: ID
    userId: ID
    country: String
    city: String
    comments: [Comment]!
    reactions: [Reaction]!
    createdAt: String

  }

  type Comment {
    _id: ID
    userId: ID
    username: String
    content: String
    createdAt: String
  }

  type Reaction {
    _id: ID
    userId: ID
    username: String
    type: String
    createdAt: String
    
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(userId: ID): [Post]
    comments(postId: ID): [Comment]
    reactions(postId: ID): [Reaction]
    me: User
  }

  // type Mutation {
 
  // }
`;

module.exports = typeDefs;
