import React from 'react';
import App from '@layouts/App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, concat, createHttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const URL = 'https://api.github.com/graphql';
const httpLink = createHttpLink({ uri: URL, fetch });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: !token ? `Bearer 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` : '',
    },
  };
});

const client = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,

  document.querySelector('#app'),
);
