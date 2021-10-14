import React, { useCallback } from 'react';

import RepositoryItem from '@components/RepositoryItem';
import { RepoListContainer } from './style';
import { useHistory } from 'react-router';

interface IParamProps {
  localData: Array<Object>;
}

const RepositoryList: React.FC<IParamProps> = ({ localData }) => {
  const history = useHistory();

  const deleteRepo = useCallback((id: string): void => {
    const deleteData = localData.filter((data: any) => {
      return data.id !== id;
    });
    localStorage.setItem('repoType', JSON.stringify(deleteData));
    alert('삭제되었습니다.');
    history.go(0);
  }, []);

  return (
    <RepoListContainer>
      {localData.map((data: any) => (
        <RepositoryItem localItem={data} deleteRepo={deleteRepo} key={data.id} />
      ))}
    </RepoListContainer>
  );
};

export default RepositoryList;
