import React from 'react';
import { useSwipeable } from 'react-swipeable';

import { Nav } from '@/components/screen/playing/Nav';
import { TrackDetail } from '@/components/screen/playing/TrackDetail';

import { useSongStore } from '@/store/song';

export const PlayingScreen = () => {
  const { currentList, currentSong, isPlaying, playNextSong, playPrevSong } =
    useSongStore();

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      playNextSong(currentList);
    },
    onSwipedRight: () => {
      playPrevSong(currentList);
    },
  });
  return (
    <div className='absolute inset-0 w-full p-6'>
      <Nav />
      <div className='mx-auto mt-6 w-full space-y-6'>
        <div className='relative overflow-hidden' {...handlers}>
          <div className='w-full whitespace-nowrap'>
            {currentList?.tracks.map((track) => (
              <TrackDetail
                show={currentSong?.id === track.id}
                key={track.id}
                track={track}
                isPlaying={isPlaying}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
