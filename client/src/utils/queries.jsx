import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
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

export const QUERY_POSTS = gql`
posts {
  _id
  body
  city
  country
  title
  userId
  username
  comments {
    _id
    userId
    username
    commentText
  }
  reactions {
    _id
    userId
    username
    reactionType
  }
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

export const QUERY_COMMENTS = gql`
  query allComments {
    comments {
      _id
      userId
      username
      content
      createdAt
    }
  }
`;

export const QUERY_SINGLE_COMMENT = gql`
  query singleComment($commentId: ID!) {
    comment(commentId: $commentId) {
      _id
      userId
      username
      content
      createdAt
    }
  }
`;

export const QUERY_REACTIONS = gql`
  query allReactions {
    reactions {
      _id
      userId
      username
      type
      createdAt
    }
  }
`;

export const QUERY_SINGLE_REACTION = gql`
  query singleReaction($reactionId: ID!) {
    reaction(reactionId: $reactionId) {
      _id
      userId
      username
      type
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      users
      username
      posts
      comment
      reaction
    }
  }
`;