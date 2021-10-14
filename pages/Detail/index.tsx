import { getSearchRepo } from '@apis/index';
import { useQuery } from '@apollo/client';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import qs from 'qs';
import Header from '@layouts/Header';
import { Container, DetailSearchContainer } from './style';
import Button from '@common/Button';
import UploadIcon from '../../public/static/svg/check_mark.svg';
import { useLocalStorage } from '@hooks/useLocalStorage';

const Deatil: React.VFC = () => {
  const [results, setResults] = useState([]);
  const [repoCount, setRepoCount] = useState(0);
  const [key, setKey] = useLocalStorage('repoType');
  const location = useLocation();

  // page variable
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageNumber, setPserPageNumber] = useState(10);

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const { data, error, loading, fetchMore } = useQuery(getSearchRepo, {
    variables: {
      query: query.repository,
    },
  });

  const repoAddedClick = useCallback((id, name, login, avatarUrl) => {
    let repoObj = {
      id,
      repoName: name,
      repoOwner: login,
      ownerSrc: avatarUrl,
    };
    setKey((oldArray: any) => {
      if (oldArray.length >= 5) {
        alert('5개까지 추가하실 수 있습니다.');
        return oldArray;
      } else {
        const data = oldArray.some((data: any) => data.id === repoObj.id);
        console.log(data);
        if (data) {
          alert('이미 등록된 레포입니다.');
          return oldArray;
        }
      }
      const newArr = [...oldArray, { ...repoObj }];
      alert('등록되었습니다.');
      return newArr;
    });
  }, []);

  // 1~10 / 11~20 / 21~30 /
  const pageNumber = useCallback(() => {
    let numArr = [];
    for (let i = 1; i <= repoCount / 15; i++) {
      numArr.push(<li>{i}</li>);
    }
    return numArr;
  }, []);

  useEffect(() => {
    if (data && !loading) {
      setRepoCount(data.search.repositoryCount);
      setResults(data.search.edges);
      // const { hasNextPage, hasPreviousPage, startCursor, endCursor } = data.search.pageInfo;
    }
  }, [query && !loading && data]);

  if (error) {
    return <div>{error}</div>;
  }

  //   일단 현재 페이지에서 즐겨찾기 버튼 && 레포지토리를 보여줘야함
  // start,end현재 쿼리에 대해 반환된 가장자리 목록의 첫 번째 및 마지막 가장자리와 연결된 커서를 나타냅니다.
  return (
    <Container>
      <Header />
      {loading ? (
        <div>로딩중</div>
      ) : (
        <>
          <h1>{repoCount === 0 ? `아무것도 없습니다.` : `TotalRepository : ${repoCount} `}</h1>
          <h4>Added Repository Count :{key.length}</h4>
          <DetailSearchContainer>
            {results.map((result) => {
              let {
                id,
                name,
                url,
                owner: { avatarUrl, login },
                issues: { totalCount: issueCount },
              } = result['node'];
              return (
                <div className="detail_header_data" key={id}>
                  <div className="detail_header_info">
                    <div className="detail_header_title">
                      <div className="detail_header_repo_name_container">
                        <a href={`${url}`}>
                          <span className="detail_header_repo_name">Repository Name : {name}</span>
                        </a>
                      </div>
                      <div>
                        <span>total issue : {issueCount}</span>
                      </div>
                    </div>
                    <div className="user_profile_container">
                      <div className="user_profile_image">
                        <img src={avatarUrl} alt="userProfile" />
                        <span>{login}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    icon={<UploadIcon />}
                    color="black"
                    onClick={() => repoAddedClick(id, name, login, avatarUrl)}
                  />
                </div>
              );
            })}
          </DetailSearchContainer>
        </>
      )}

      {/* 번호를 누르면 mutation */}
      {/* update query */}
      <span>2</span>

      {/* 10page가 넘어가면 다음 page 버튼이 보여야함  */}
      {/* <PageContariner>
        <ul>{pageNumber()}</ul>
      </PageContariner> */}
    </Container>
  );
};

export default Deatil;
