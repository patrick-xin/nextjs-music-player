import { motion } from 'framer-motion';
import React from 'react';

import { lists } from '@/data';

import { BlurImage } from '@/components/common';
import { ListTable } from '@/components/screen/list';

import { useSongStore } from '@/store/song';

import { List } from '@/types';

const ListScreen = () => {
  return (
    <div className='relative h-full min-h-screen w-full pb-48'>
      <h1 className='mb-2 mt-6 text-center text-2xl italic'>
        Patrick&apos;s Music Station
      </h1>
      <div className='my-8 inline-flex w-full snap-x gap-6 overflow-x-scroll px-8'>
        {lists.map((list) => (
          <ListCard key={list.category} list={list} />
        ))}
      </div>
      <ListTable />
    </div>
  );
};

export default ListScreen;

const ListCard = ({ list }: { list: List }) => {
  const { setCurrentList } = useSongStore();

  return (
    <div
      onClick={() => setCurrentList(list.tracks)}
      className='flex cursor-pointer snap-center flex-col items-center justify-center'
    >
      <motion.div whileTap={{ scale: 1.05 }} className='relative'>
        <BlurImage
          src={list.cover}
          alt='cover-image'
          layout='fixed'
          height={160}
          width={160}
          className='rounded shadow-md'
        />
      </motion.div>

      <h3 className='text-lg'>
        <span>{list.category}</span>
        <span className='px-1 text-sm text-white/70'>
          ({list.tracks.length})
        </span>
      </h3>
    </div>
  );
};
