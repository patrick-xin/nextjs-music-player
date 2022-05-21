import { motion } from 'framer-motion';
import React from 'react';

import { BlurImage } from '@/components/common';

import { useSongStore } from '@/store/song';

import { List } from '@/types';

export const ListCard = ({
  list,
  setSelected,
  index,
  selected,
}: {
  list: List;
  setSelected: (index: number) => void;
  index: number;
  selected: number;
}) => {
  const { currentList, isPlaying } = useSongStore();

  return (
    <div
      onClick={() => {
        setSelected(index);
      }}
      className='flex cursor-pointer snap-center flex-col items-center justify-center text-purple-200/30'
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

      <h3 className='inline-flex items-center text-lg'>
        <span className={`${index === selected ? 'text-white/70' : ''}`}>
          {list.category}
        </span>
        <span className='px-1 text-sm text-purple-200/30'>
          ({list.tracks.length})
        </span>
        {currentList?.id === list.id && isPlaying && (
          <span className='relative mx-2 h-4 w-4'>
            {Array.from(Array(4).keys()).map((item, index) => (
              <span className='bar' key={index} />
            ))}
          </span>
        )}
      </h3>
    </div>
  );
};
