import Image from 'next/image';
import React, { useEffect } from 'react';

import { PlayPauseButton } from '@/components/common';

import { HOWLER_STATE, useSongStore } from '@/store/song';

import { setTrackToLocalStorage } from '@/utils';

export const ListPlayer = () => {
  const { currentSong, toggleScreen, isLoaded } = useSongStore();
  useEffect(() => {
    if (currentSong) setTrackToLocalStorage(currentSong);
  }, [currentSong]);

  return (
    <div className='glow fixed bottom-0 right-0 left-0 mx-auto max-w-full gap-4 rounded-md lg:px-12'>
      {currentSong ? (
        <div className='flex items-center justify-between p-4'>
          <div
            className='flex cursor-pointer items-center gap-3'
            onClick={() => {
              if (isLoaded !== HOWLER_STATE.LOADED) return;
              toggleScreen('playing');
            }}
          >
            <Image
              alt={`${currentSong.coverImage.alt}`}
              src={currentSong.coverImage.source.url}
              layout='fixed'
              height={50}
              width={50}
              className='rounded-md'
            />
            <div>
              <div className='text-sm'>{currentSong.name}</div>
              <div className='text-xs text-gray-400'>
                {currentSong.artist.split('_').join(' ')}
              </div>
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
