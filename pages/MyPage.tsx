import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GetRepository = gql`
  query abc {
    repository(owner: "hyemin23", name: "webpack-example") {
      id
    }
  }
`;

const MyPage = () => {
  const { loading, error, data } = useQuery(
    GetRepository,
    // variables: {
    //   owner: 'hyemin23',
    //   name: 'webpack-example',
    // },
  );

  console.log('hi');
  console.log(data);
  //   if (loading) return <p>loading...</p>;
  //   if (error) return <p>Error : ${error}</p>;
  return <div>마이페이지입니다.</div>;
};

export default MyPage;
