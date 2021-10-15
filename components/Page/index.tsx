import Button from '@common/Button';
import React from 'react';
import { Container } from './styled';

interface IProps {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string;
  changeVariables: string;
  changeUpdateQuery: any;
  fetchMore: ({ variables, updateQuery }: { variables: object; updateQuery: any }) => void;
}

const Page: React.FC<IProps> = ({ hasNextPage, changeVariables, fetchMore, changeUpdateQuery }) => {
  return (
    <Container>
      {hasNextPage && (
        <div className="page_button">
          <Button
            onClick={async () =>
              await fetchMore({
                variables: {
                  cursor: changeVariables,
                },
                updateQuery: changeUpdateQuery,
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
