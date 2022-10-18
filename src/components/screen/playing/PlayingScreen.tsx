import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSwipeable } from 'react-swipeable';

import { Cassette } from '@/components/screen/playing/Cassette';
import { Nav } from '@/components/screen/playing/Nav';
import { TrackDetail } from '@/components/screen/playing/TrackDetail';

import { useSongStore } from '@/store/song';

import { setTrackToLocalStorage } from '@/utils';

export const PlayingScreen = () => {
  const { currentList, currentSong, isPlaying, playNextSong, playPrevSong } =
    useSongStore();
  // handlers to swipe songs
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      playNextSong();
      if (currentSong) setTrackToLocalStorage(currentSong);
    },
    onSwipedRight: () => {
      playPrevSong();
      if (currentSong) setTrackToLocalStorage(currentSong);
    },
  });
  // Detect if device is portrait, if so display cassette
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className='absolute inset-0 h-full w-full'>
      {!isPortrait && isMobile ? (
        <div className='h-full'>
          <Cassette />
        </div>
      ) : (
        <div className='p-6'>
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
      )}
    </div>
  );
};
