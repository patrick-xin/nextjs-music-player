import Image from 'next/image';
import React from 'react';

import { PlayPauseButton } from '@/components/common';
import { AnimatedGradient } from '@/components/screen/list/ListTable';

import { useSongStore } from '@/store/song';

export const ListPlayer = () => {
  const { currentSong, toggleScreen } = useSongStore();

  return (
    <div className='mesh fixed bottom-0 right-0 left-0 z-50 mx-auto max-w-full gap-4 rounded-md lg:px-12'>
      <AnimatedGradient />
      {currentSong ? (
        <div className='flex items-center justify-between p-4'>
          <div
            className='flex cursor-pointer items-center gap-3'
            onClick={() => toggleScreen('playing')}
          >
            <Image
              alt={`${currentSong.cover}-cover`}
              src={currentSong.cover}
              layout='fixed'
              height={50}
              width={50}
              className='rounded-md'
            />
            <div>
              <div className='text-sm'>{currentSong.name}</div>
              <div className='text-xs text-gray-400'>{currentSong.artist}</div>
            </div>
          </div>
          <div>
            <PlayPauseButton />
          </div>
        </div>
      ) : (
        <div className='flex h-20 items-center justify-between p-4'>
          Select a song to play
        </div>
      )}
    </div>
  );
};
