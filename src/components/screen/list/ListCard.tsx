import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { useSongStore } from '@/store/song';

import { List } from '@/generated/graphql';

export const ListCard = ({ list }: { list: List }) => {
  const { currentList, setCurrentList } = useSongStore();

  return (
    <div
      onClick={() => {
        setCurrentList(list);
      }}
      className='flex snap-center flex-col items-center justify-center text-purple-200/30'
    >
      <motion.div
        whileTap={{ scale: 1.05 }}
        className='relative cursor-pointer'
      >
        <Image
          src={list.image.source.url}
          alt='cover-image'
          layout='fixed'
          height={160}
          width={160}
          className='rounded shadow-md'
        />
      </motion.div>
      <div className='flex items-center'>
        <h3 className='inline-flex items-center text-lg'>
          <span
            className={`${list.id === currentList?.id ? 'text-white/70' : ''}`}
          >
            {list.category}
          </span>
          <span className='px-1 text-sm text-purple-200/30'>
            ({list.tracks.length})
          </span>
        </h3>
      </div>
    </div>
  );
};
