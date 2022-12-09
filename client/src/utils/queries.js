import { gql } from '@apollo/client';

export const QUERY_COMMENTS = gql`
  query getcomments {
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;
