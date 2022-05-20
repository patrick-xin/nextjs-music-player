import * as React from 'react';

import { Playerbar } from '@/components/common/PlayerBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='mesh fixed inset-0 mx-auto min-h-screen  max-w-xl overflow-auto'>
        {children}
      </main>
      <Playerbar />
    </>
  );
}
