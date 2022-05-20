import { AppProps } from 'next/app';
import '@fontsource/poppins';

import '@/styles/globals.css';

import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
