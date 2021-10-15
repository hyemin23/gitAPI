import { gql } from '@apollo/client';

// repository 정보 가져오기
export const getSearchRepo = gql`
  query getSearchRepo($query: String!, $cursor: String) {
    search(type: REPOSITORY, query: $query, first: 12, after: $cursor) {
      edges {
        node {
          ... on Repository {
            name
            description
            id
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
        startCursor
        endCursor
      }
    }
  }
`;

const REPOSITORY_FRAGMENT = gql`
  fragment commonFields on Repository {
    name
    hasIssuesEnabled
    owner {
      id
      login
    }
    issues(states: OPEN, first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
      edges {
        node {
          id
          author {
            login
          }
          title
          url
          bodyHTML
        }
        cursor
      }
    }
  }
`;

export const getRepoInfo = gql`
  query getRepoInfo($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      ...commonFields
    }
  }
  ${REPOSITORY_FRAGMENT}
`;
