import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
{  
  query allUsers {
    users {
      username
      posts {
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
      following {
        _id
        username
        email
      }
      followers {
        _id
        username
        email
      }
      email
      _id
    }
  }
}
`;

export const QUERY_SINGLE_USER = gql`
query user($username: String!){
  user(username: $username) {
    _id
    username
    email
    following {
      _id
      username
      email
    }
    followers {
      _id
      username
      email
    }
    posts {
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
}
`;

export const QUERY_POSTS = gql`
{
  posts {
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

export const QUERY_SINGLE_POST = gql`
{  
  query post(postId: $postId) {
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

export const QUERY_COMMENTS = gql`
{
  query comments(postId: $postId) {
    _id
    userId
    username
    commentText
    createdAt
  }
}
`;

export const QUERY_SINGLE_COMMENT = gql`
{
  query comment(commentId: $commentId) {
    _id
    userId
    username
    commentText
    createdAt
  }
}
`;

export const QUERY_REACTIONS = gql`
{
  query reactions(postId: $postId) {
    _id
    userId
    username
    reactionType
    createdAt
  }
}
`;

export const QUERY_SINGLE_REACTION = gql`
{
  query reaction(reactionId: $reactionId) {
    _id
    userId
    username
    reactionType
    createdAt
  }
}
`;

export const QUERY_ME = gql`

  query me {
    me {
      _id
      username
      email
      following {
        _id
        username
        email
      }
      followers {
        _id
        username
        email
      }
      posts {
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
  }

`;
