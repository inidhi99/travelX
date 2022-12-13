import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
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
`;

export const QUERY_SINGLE_USER = gql`
  query singleUSER($userId: ID!) {
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
<<<<<<< HEAD
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
=======
  query allPosts {
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
>>>>>>> 63473531e56166e4542a8ecf3b2081735a248c0f
  }
`;

export const QUERY_SINGLE_POST = gql`
  query singlePost($postId: ID!) {
    post(postId: $postId) {
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
  query allComments {
    comments(postId: $postId) {
      _id
      userId
      username
      commentText
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
      commentText
      createdAt
    }
  }
`;

export const QUERY_REACTIONS = gql`
  query allReactions {
    reactions(postId: $postId) {
      _id
      userId
      username
      reactionType
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
