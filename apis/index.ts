import { gql } from '@apollo/client';

// repository 정보 가져오기
export const getSearchRepo = gql`
  query getSearchRepo($query: String!) {
    search(type: REPOSITORY, query: $query, first: 15) {
      edges {
        node {
          ... on Repository {
            name
            description
            owner {
              avatarUrl
              url
              login
            }
            issues {
              totalCount
            }
            nameWithOwner
            url
          }
        }
      }
      repositoryCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
