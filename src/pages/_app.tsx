import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import '@fontsource/poppins';

import '@/styles/globals.css';

import { client } from '@/lib/client';

import { Layout } from '@/components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
