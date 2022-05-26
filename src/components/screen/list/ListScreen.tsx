import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { siteInfo } from '@/lib/site.info';

import { lists } from '@/data';

import { ListTable } from '@/components/screen/list';
import { ListCard } from '@/components/screen/list/ListCard';

import { useSongStore } from '@/store/song';

export const ListScreen = () => {
  const { currentList } = useSongStore();

  const [selected, setSelected] = useState<number>(0);
  useEffect(() => {
    if (currentList) {
      setSelected(currentList.id);
    }
  }, [currentList]);
  return (
    <div className='relative h-full min-h-screen w-full pb-48'>
      <h1 className='mb-2 mt-6 text-center text-2xl italic text-purple-200/50 md:my-8 lg:text-4xl'>
        {siteInfo.title}
      </h1>
      <h3 className='text-center underline underline-offset-2'>
        <Link href='/about'>
          <a className='text-purple-200/40'>About</a>
        </Link>
      </h3>
      <div className='my-8 inline-flex w-full snap-x gap-6 overflow-x-scroll px-8'>
        {lists.map((list, index) => (
          <ListCard
            key={list.category}
            list={list}
            index={index}
            setSelected={setSelected}
            selected={selected}
          />
        ))}
      </div>
      <ListTable list={lists[selected]} />
    </div>
  );
};
