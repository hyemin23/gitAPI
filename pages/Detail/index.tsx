import { getSearchRepo } from '@apis/index';
import { useQuery } from '@apollo/client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import qs from 'qs';
import Header from '@layouts/Header';
import { Container, DetailSearchContainer } from './style';
import Button from '@common/Button';
import UploadIcon from '../../public/static/svg/check_mark.svg';
import { useLocalStorage } from '@hooks/useLocalStorage';
import Page from '@components/Page';

// page updateQuery
const getUpdatePageQuery = (prev: any, { fetchMoreResult }: any) => {
  if (!fetchMoreResult) return prev;

  const { startCursor, endCursor } = fetchMoreResult.search.pageInfo;

  return {
    ...prev,
    search: {
      edges: [...prev.search.edges, ...fetchMoreResult.search.edges],
      pageInfo: {
        ...prev.search.pageInfo,
        startCursor,
        endCursor,
      },
      repositoryCount: prev.search.repositoryCount,
    },
  };
};

const Deatil: React.VFC = () => {
  const [key, setKey] = useLocalStorage('repoType');
  const location = useLocation();
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
      if (oldArray.length >= 4) {
        alert('4개까지 추가하실 수 있습니다.');
        return oldArray;
      } else {
        const data = oldArray.some((data: any) => data.id === repoObj.id);

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

  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>로딩중 . . .</div>;
  }

  const { hasNextPage, hasPreviousPage, startCursor, endCursor } = data.search.pageInfo;
  const { repositoryCount, edges: results } = data.search;

  return (
    <Container>
      <Header />
      {loading ? (
        <div>로딩중</div>
      ) : (
        <>
          <h1>{repositoryCount === 0 ? `아무것도 없습니다.` : `Total : ${repositoryCount} `}</h1>
          <h4>Added Repository Count :{key.length}</h4>
          <DetailSearchContainer>
            {results.map((result: any) => {
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

          <Page
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
            startCursor={startCursor}
            fetchMore={fetchMore}
            changeVariables={{
              cursor: endCursor,
            }}
            changeUpdateQuery={getUpdatePageQuery}
          />
        </>
      )}
    </Container>
  );
};

export default Deatil;
