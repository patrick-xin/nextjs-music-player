import * as React from 'react';

import { Playerbar } from '@/components/common/PlayerBar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='mesh fixed inset-0 mx-auto min-h-screen overflow-auto'>
        <main className='lg:px-24'>{children}</main>
      </div>
      <Playerbar />
    </>
  );
};
