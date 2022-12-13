import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(password: $password, username: $username) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(title: $title, body: $body, city: $city, country: $country) {
      _id
      title
      body
      country
      city
    }
  }
`;

export const ADD_COMMENT = gql`
addComment(postId: $postId, commentText: $commentText) {
  _id
  userId
  username
  title
  body
  country
  city
  comments {
    _id
    username
    userId
    createdAt
    commentText
  }
  reactions {
    _id
    username
    userId
    reactionType
    createdAt
  }
}
`;

export const ADD_REACTION = gql`
  mutation addReaction($postId: ID!, $reactionText: String!) {
    addReaction(postId: $postId, reactionType: $reactionType) {
      _id
      userId
      username
      title
      body
      country
      city
      comments {
        _id
        userId
        username
        commentText
        createdAt
      }
      reactions {
        _id
        userId
        username
        reactionType
        createdAt
      }
    }
  }
`;
