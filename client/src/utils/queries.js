import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    profiles {
      _id
      firstName
      lasName
      username
      following
      follwers
      posts
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUSER($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lasName
      username
      following
      follwers
      posts
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lasName
      username
      following
      follwers
      posts
    }
  }
`;

export const QUERY_POSTS = gql`
  query allPosts {
    posts {
      _id
      userId
      country
      city
      comments
      reactions
      createdAt
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query singlePost($postId: ID!) {
    post(postId: $postId) {
      _id
      userId
      country
      city
      comments
      reactions
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      userId
      country
      city
      comments
      reactions
      createdAt
    }