import { gql } from '@apollo/client';

export const getSearchRepo = gql`
  query MyQuery($query: String!) {
    search(type: REPOSITORY, query: $query, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            description
            owner {
              avatarUrl
              url
            }
            issues {
              totalCount
            }
            nameWithOwner
            url
          }
        }
      }
    }
  }
`;
