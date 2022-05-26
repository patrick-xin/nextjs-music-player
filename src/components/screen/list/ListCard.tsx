import { motion } from 'framer-motion';
import React from 'react';
import { AiFillSound } from 'react-icons/ai';

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
  const { currentList } = useSongStore();

  return (
    <div
      onClick={() => {
        setSelected(index);
      }}
      className='flex  snap-center flex-col items-center justify-center text-purple-200/30'
    >
      <motion.div
        whileTap={{ scale: 1.05 }}
        className='relative cursor-pointer'
      >
        <BlurImage
          src={list.cover}
          alt='cover-image'
          layout='fixed'
          height={160}
          width={160}
          className='rounded shadow-md'
        />
      </motion.div>
      <div className='flex items-center'>
        <h3 className='inline-flex items-center text-lg'>
          <span className={`${index === selected ? 'text-white/70' : ''}`}>
            {list.category}
          </span>
          <span className='px-1 text-sm text-purple-200/30'>
            ({list.tracks.length})
          </span>
        </h3>
        {currentList?.id === list.id && (
          <AiFillSound className='ml-2 text-green-500/70' />
        )}
      </div>
    </div>
  );
};
