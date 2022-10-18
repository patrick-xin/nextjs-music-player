import cn from 'clsx';
import React, { useEffect } from 'react';
import { AiFillBackward, AiOutlineForward } from 'react-icons/ai';
import { MdRepeat, MdShuffle } from 'react-icons/md';

import { PlayPauseButton } from '@/components/common';

import { HOWLER_STATE, useSongStore } from '@/store/song';
import { useToastStore } from '@/store/toast';

import { formatTime, setTrackToLocalStorage } from '@/utils';

import { TrackRange } from './TrackRange';

type PlayingScreenPlayerControlProps = {
  duration: number;
  onTrackRangeChange: (_values: number[]) => void;
  values: number[];
  size?: 'sm' | 'normal';
};

export const PlayingPlayer = ({
  duration,
  onTrackRangeChange,
  values,
  size = 'normal',
}: PlayingScreenPlayerControlProps) => {
  const {
    playNextSong,
    playPrevSong,
    currentSong,
    toggleRepeat,
    toggleShuffle,
    isRepeating,
    isShuffle,
    isLoaded,
  } = useSongStore();
  const handlePlayNext = () => {
    playNextSong();
    if (currentSong) setTrackToLocalStorage(currentSong);
  };
  const handlePlayPrev = () => {
    playPrevSong();
    if (currentSong) setTrackToLocalStorage(currentSong);
  };
  const handleShuffle = () => {
    toggleShuffle();
    isShuffle ? toast('Shuffle off') : toast('Shuffle on');
  };
  const handleRepeat = () => {
    toggleRepeat();
    isRepeating ? toast('Repeating off') : toast('Repeating on');
  };
  const { toast } = useToastStore();
  useEffect(() => {
    if (currentSong) setTrackToLocalStorage(currentSong);
  }, [currentSong]);
  return (
    <div
      className={cn(
        'fixed -bottom-14 z-100 flex w-full flex-col space-y-3 py-4',
        {
          'h-40': size === 'normal',
        }
      )}
    >
      <div className='z-50 flex items-center justify-center gap-8'>
        <button onClick={handleRepeat}>
          <MdRepeat
            className={`${
              isRepeating ? 'text-white' : 'text-gray-400'
            } h-7 w-7`}
          />
        </button>

        <button onClick={handlePlayPrev}>
          <AiFillBackward className='h-7 w-7' />
        </button>
        <PlayPauseButton />

        <button onClick={handlePlayNext}>
          <AiOutlineForward className='h-7 w-7' />
        </button>

        <button onClick={handleShuffle}>
          <MdShuffle
            className={`${isShuffle ? 'text-white' : 'text-gray-400'} h-7 w-7`}
          />
        </button>
      </div>
      {isLoaded !== HOWLER_STATE.LOADED ? (
        <div className='h-6' />
      ) : (
        <div className='mx-auto w-56 space-y-2 lg:w-1/3'>
          <div className='mx-auto w-full'>
            <TrackRange
              duration={duration}
              onChange={onTrackRangeChange}
              values={values}
            />
          </div>
          <div className='flex justify-between'>
            <div className='w-8 text-xs'>{formatTime(values[0])}</div>
            <div className='text-xs'>{formatTime(duration)}</div>
          </div>
        </div>
      )}
    </div>
  );
};
