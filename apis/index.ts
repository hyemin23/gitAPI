import { gql } from '@apollo/client';

const name = 'hyemin23';

const project = 'webpack-example';

export const GetRepository = gql`{
  repository(owner : hyemin23,name :webpack-example ){
    id
  }
}
`;
