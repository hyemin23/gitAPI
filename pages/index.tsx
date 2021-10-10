import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container, Header, SearchBar, Navigation } from './style';
import { IoLogoGithub } from 'react-icons/io';

const GetRepository = gql`
  query abc {
    repository(owner: "hyemin23", name: "webpack-example") {
      id
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(
    GetRepository,
    // variables: {
    //   owner: 'hyemin23',
    //   name: 'webpack-example',
    // },
  );

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error : ${error}</p>;

  return (
    <Container>
      <Header>깃슈</Header>
      <div className="gitIcon">
        <IoLogoGithub color="white" size={76} />
      </div>

      <SearchBar>
        <form>
          <input type="text" placeholder="원하시는 레포지토리를 검색해주세요." />
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
