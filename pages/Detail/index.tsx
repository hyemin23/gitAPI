import { getSearchRepo } from '@apis/index';
import { useApolloClient } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import qs from 'qs';
import Header from '@layouts/Header';
import { Container, DetailSearchContainer } from './style';

const Deatil: React.VFC = () => {
  const [results, setResults] = useState([]);
  const [repoCount, setRepoCount] = useState(0);
  const [isloading, isLoading] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const client = useApolloClient();

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  async function runQuery() {
    const { loading, error, data } = await client.query({
      query: getSearchRepo,
      variables: { query: query.repository },
    });

    if (error) {
      alert('에러를 발견하였습니다. 이전 페이지로 돌아갑니다.');
      history.push('/');
    }
    if (loading) {
      isLoading(true);
    }
    if (data.search.edges.length === 0) {
      setRepoCount(0);
    }
    isLoading(false);
    setRepoCount(data.search.repositoryCount);
    setResults(data.search.edges);
  }

  const pageNumber = () => {
    let numArr = [];
    for (let i = 0; i < repoCount / 15; i++) {
      numArr.push(<span>{i}</span>);
    }
    return numArr;
  };

  useEffect(() => {
    runQuery();
  }, [query]);

  //   일단 현재 페이지에서 즐겨찾기 버튼 && 레포지토리를 보여줘야함
  /* 페이징처리 &&  */
  return (
    <Container>
      <Header />
      {isloading ? (
        <div>로딩중 . . .</div>
      ) : (
        <>
          <h1>{repoCount === 0 ? `아무것도 없습니다.` : `TotalRepository : ${repoCount} `}</h1>
          <DetailSearchContainer>
            <div>
              <h2>Repository</h2>
            </div>
            <div>
              <h2>Issues Count</h2>
            </div>
            <div>
              <h2>User</h2>
            </div>
            <div>
              <h2>Add</h2>
            </div>

            {results.map((result) => {
              let {
                name,
                url,
                owner: { avatarUrl, login },
                issues: { totalCount: issueCount },
                // pageInfo: { hasNextPage, hasPreviousPage },
              } = result['node'];

              return (
                <>
                  <div>
                    <a href={`${url}`}>
                      <span>{name}</span>
                    </a>
                  </div>
                  <div>
                    <span>전체:{issueCount}</span>
                    <span>Open:</span>
                    <span>Closed:</span>
                  </div>
                  <div className="user_profile_container">
                    <div className="user_profile_image">
                      <img src={avatarUrl} alt="userProfile" />
                      <span>{login}</span>
                    </div>
                  </div>
                  <div>
                    <button type="button"> + </button>
                  </div>
                </>
              );
            })}
            {/* page Number */}
            <div>
              <div>
                <span>{pageNumber()}</span>
              </div>
            </div>
          </DetailSearchContainer>
        </>
      )}
    </Container>
  );
};

export default Deatil;
