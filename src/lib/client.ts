import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.GRAPHCMS_ENV,
  cache: new InMemoryCache(),
});
