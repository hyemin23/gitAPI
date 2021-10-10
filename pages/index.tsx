import React, { useEffect, useState } from 'react';
import { useQuery, gql, useApolloClient } from '@apollo/client';
import { Container, Header, SearchBar, Navigation } from './style';
import { IoLogoGithub } from 'react-icons/io';
import Input from '@common/Input';
import { getSearchRepo } from '@apis/index';
import useDebounce from '@hooks/useDebounce';

const Home = () => {
  const [repoValue, setRepoValue] = useState('');
  const client = useApolloClient();

  // * 검색 결과
  const [results, setResults] = useState([]);
  const serachKeyword = useDebounce(repoValue, 300);

  async function runQuery() {
    const { loading, error, data } = await client.query({ query: getSearchRepo, variables: { query: repoValue } });
    console.log(data);
  }
  const onChangeRepo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!serachKeyword) {
      console.log('검색내용 없음');
    }

    if (serachKeyword) {
      console.log(serachKeyword);
      console.log('검색중');
      setRepoValue(serachKeyword);
      runQuery();
    }
  }, [serachKeyword]);

  return (
    <Container>
      <Header>깃슈</Header>
      <div className="gitIcon">
        <IoLogoGithub color="white" size={76} />
      </div>

      <SearchBar>
        <form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="원하시는 레포지토리를 검색해주세요."
            onChange={onChangeRepo}
            value={repoValue}
          />
        </form>
      </SearchBar>
      <Navigation>
        <ul>
          <li>
            <a href="#">
              <span className="highlight">
                <span>Subscribe</span>
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="highlight">
                <span>Issue</span>
              </span>
            </a>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Home;
