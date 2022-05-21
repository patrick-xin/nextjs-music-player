import Link from 'next/link';
import * as React from 'react';

import { Seo } from '@/components/common/Seo';
import { Layout } from '@/components/layout/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section>
          <div className='flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
            <Link className='mt-4 md:text-lg' href='/'>
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
