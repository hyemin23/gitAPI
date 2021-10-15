import React from 'react';
import { useQuery } from '@apollo/client';
import { Container } from './style';
import IssueList from './IssueList';
import { getRepoInfo } from '@apis/index';

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
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return <div>로딩중 . . . </div>;
  }
  if (error) {
    return <div>Error : ${error}</div>;
  }

  const {
    repository: {
      issues: { edges: issuesData, pageInfo },
    },
  } = data;

  if (!issuesData.length) {
    return <div>이슈가 없습니다 !</div>;
  }

  return (
    <Container>
      <IssueList
        issuesData={issuesData}
        pageInfo={pageInfo}
        fetchMore={fetchMore}
        repositoryName={repositoryName}
        repositoryOwner={repositoryOwner}
      />
    </Container>
  );
};

export default Issues;
