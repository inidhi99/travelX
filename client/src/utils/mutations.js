import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
  mutation addComment($thoughtText: String!, $commentAuthor: String!) {
    addComment(commentText: $commentText, commentAuthor: $commentAuthor) {
      _id
      commentText
      commentAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;
