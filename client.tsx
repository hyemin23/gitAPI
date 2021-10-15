import React from 'react';
import App from '@layouts/App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, concat, createHttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';

const URL = 'https://api.github.com/graphql';
const httpLink = createHttpLink({ uri: URL, fetch });

console.log(process.env.GIT_ACCESS_TOKEN);
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: !token ? `Bearer ${process.env.GIT_ACCESS_TOKEN}` : '',
    },
  };
});

//relayStylePagination를 설정하면 새로운 데이터가 불러와지지 않음 (찾아보기)
const client = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache({
    // typePolicies: {
    //   Query: {
    //     fields: {
    //       search: relayStylePagination,
    //     },
    //   },
    // },
  }),
});

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,

  document.querySelector('#app'),
);
