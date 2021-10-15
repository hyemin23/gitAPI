import Button from '@common/Button';
import { useLocalStorage } from '@hooks/useLocalStorage';
import Header from '@layouts/Header';

import React, { useEffect } from 'react';
import { Container } from './style';
import TrashIcon from '../../public/static/svg/trash_can.svg';

import { useHistory } from 'react-router';
import RepositoryList from '@components/RepositoryList';

const Subscribe: React.FC = () => {
  const [key, setKey] = useLocalStorage('repoType');
  const history = useHistory();

  return (
    <>
      <Header />
      <Container>
        <h1>Subscribe Repository Issue List</h1>
        <Button
          icon={<TrashIcon />}
          onClick={() => {
            localStorage.clear();
            alert('모두 삭제되었습니다.');
            return history.push('/home');
          }}
        >
          Clear All
        </Button>
        <RepositoryList localData={key} />
      </Container>
    </>
  );
};

export default Subscribe;
