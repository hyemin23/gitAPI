import Button from '@common/Button';
import React from 'react';
import { Container } from './styled';

interface IProps {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string;
  endCursor?: string;
  fetchMore: ({ variables, updateQuery }: { variables: object; updateQuery: any }) => void;
}

// page updateQuery
export const getUpdatePageQuery = (prev: any, { fetchMoreResult }: any) => {
  if (!fetchMoreResult) return prev;

  if (!fetchMoreResult) return prev;
  const { startCursor, endCursor } = fetchMoreResult.search.pageInfo;

  return Object.assign({}, prev, {
    search: {
      edges: [...prev.search.edges, ...fetchMoreResult.search.edges],
      pageInfo: {
        ...prev.search.pageInfo,
        startCursor,
        endCursor,
      },
      repositoryCount: prev.search.repositoryCount,
    },
  });
};

const Page: React.FC<IProps> = ({ hasNextPage, endCursor, fetchMore }) => {
  return (
    <Container>
      {hasNextPage && (
        <div className="page_button">
          <Button
            onClick={async () =>
              await fetchMore({
                variables: {
                  cursor: endCursor,
                },
                updateQuery: getUpdatePageQuery,
              })
            }
          >
            더보기
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Page;
