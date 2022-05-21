import React from 'react';
import { AiFillBackward, AiOutlineForward } from 'react-icons/ai';
import { MdRepeat, MdShuffle } from 'react-icons/md';

import { PlayPauseButton } from '@/components/common';

import { useSongStore } from '@/store/song';

import { formatTime } from '@/utils';

import { TrackRange } from './TrackRange';

type PlayingScreenPlayerControlProps = {
  duration: number;
  onTrackRangeChange: (values: number[]) => void;
  values: number[];
};

export const PlayingPlayer = ({
  duration,
  onTrackRangeChange,
  values,
}: PlayingScreenPlayerControlProps) => {
  const {
    playNextSong,
    playPrevSong,
    currentList,
    toggleRepeat,
    toggleShuffle,
    isRepeating,
    isShuffle,
  } = useSongStore();

  return (
    <div className='fixed bottom-0 flex h-40 w-full flex-col py-4'>
      <div className='z-50 flex h-full items-center justify-center gap-8'>
        <button onClick={() => toggleRepeat()}>
          <MdRepeat
            className={`${
              isRepeating ? 'text-white' : 'text-gray-400'
            } h-7 w-7`}
          />
        </button>

        <button onClick={() => playPrevSong(currentList)}>
          <AiFillBackward className='h-7 w-7 ' />
        </button>
        <PlayPauseButton />

        <button onClick={() => playNextSong(currentList)}>
          <AiOutlineForward className='h-7 w-7 ' />
        </button>

        <button onClick={toggleShuffle}>
          <MdShuffle
            className={`${isShuffle ? 'text-white' : 'text-gray-400'} h-7 w-7`}
          />
        </button>
      </div>

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
    </div>
  );
};
