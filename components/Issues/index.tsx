import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Container } from './style';
import IssueList from './IssueList';

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

const getRepoInfo = gql`
  query getRepoInfo($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      ...commonFields
    }
  }
  ${REPOSITORY_FRAGMENT}
`;

interface IssueInfo {
  repositoryName: string;
  repositoryOwner: string;
}

// 해당 repository의 issues 목록을 가져옴
const Issues: React.FC<IssueInfo> = ({ repositoryName, repositoryOwner }) => {
  const { data, error, loading, fetchMore } = useQuery(getRepoInfo, {
    variables: {
      name: repositoryName,
      owner: repositoryOwner,
    },
  });

  if (loading) {
    return <div>로딩중 . . . </div>;
  }
  if (error) {
    return <div>Error : ${error}</div>;
  }

  const {
    repository: {
      issues: { edges: issuesData },
    },
  } = data;

  if (!issuesData.length) {
    return <div>이슈가 없습니다 !</div>;
  }
  return (
    <Container>
      <IssueList issuesData={issuesData} />
    </Container>
  );
};

export default Issues;
