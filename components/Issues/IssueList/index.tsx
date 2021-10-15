import Input from '@common/Input';
import Page from '@components/Page';
import React from 'react';
import { IssueContainer } from './style';

// page updateQuery
const getUpdateDetailPageQuery = (prev: any, { fetchMoreResult }: any) => {
  if (!fetchMoreResult) return prev;

  const { startCursor, endCursor } = fetchMoreResult.repository.issues.pageInfo;

  // return {
  //   ...prev,
  //   repository: {
  //     issues: {
  //       edges: [...prev.repository.issues.edges, ...fetchMoreResult.repository.issues.edges],
  //       pageInfo: {
  //         ...prev.repository.issues.pageInfo,
  //         startCursor,
  //         endCursor,
  //       },
  //     },
  //   },
  // };

  return fetchMoreResult;
};

interface IProps {
  issuesData: Array<object>[];
  pageInfo: pageInfo;
  fetchMore: any;
  repositoryName: string;
  repositoryOwner: string;
}

type pageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
};

const IssueList: React.FC<IProps> = ({ issuesData, pageInfo, fetchMore, repositoryName, repositoryOwner }) => {
  const { hasNextPage, hasPreviousPage, startCursor, endCursor } = pageInfo;

  let variableObj = {
    cursor: endCursor,
    name: repositoryName,
    owner: repositoryOwner,
  };

  return (
    <IssueContainer>
      {issuesData.map(({ node }: any) => {
        return (
          <div className="issue_item_container" key={node.id}>
            <h3>
              Issue : <a href={`${node.url}`}>{node.title}</a>
            </h3>
            <div className="issue_item_detail_info">
              <Input type="checkbox" id={`check_${node.id}`} />
              <label htmlFor={`check_${node.id}`}>
                자세히<em></em>
              </label>
              <div dangerouslySetInnerHTML={{ __html: node.bodyHTML }} className="issue_item_detail_content"></div>
            </div>
          </div>
        );
      })}

      {/* 이슈사항은 각각의 repoName,Owner기준으로 page를 update해야 한다. */}
      <Page
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        startCursor={startCursor}
        fetchMore={fetchMore}
        changeVariables={variableObj}
        changeUpdateQuery={getUpdateDetailPageQuery}
      />
    </IssueContainer>
  );
};

export default IssueList;
