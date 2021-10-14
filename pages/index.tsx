import React, { useCallback, useState } from 'react';
import { Container, Header, SearchBar, Navigation } from './style';
import { IoLogoGithub } from 'react-icons/io';
import Input from '@common/Input';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Home = () => {
  const [repoValue, setRepoValue] = useState('');
  const history = useHistory();
  // const serachKeyword = useDebounce(repoValue, 300);

  const onChangeRepo = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setRepoValue(event.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      history.push({
        pathname: `/detail`,
        search: `?repository=${repoValue}`,
      });
    },
    [repoValue],
  );

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
            <Link to="/subscribe">
              <span className="highlight">
                <span>Subscribe</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="highlight">
                <span>Issue</span>
              </span>
            </Link>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Home;
