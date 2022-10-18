import cn from 'clsx';
import React from 'react';

import { HOWLER_STATE, useSongStore } from '@/store/song';

export const Cassette = () => {
  const { currentSong, isPlaying, isLoaded } = useSongStore();

  return (
    <div className='h-full w-full'>
      {currentSong && (
        <div className='tape relative'>
          <div className='tape-screws'>
            <TapeScrew className='left-2 top-2 rotate-[20deg]' />
            <TapeScrew className='right-2 top-2 rotate-[40deg]' />
            <TapeScrew className='bottom-12 left-2 rotate-[-5deg]' />
            <TapeScrew className='right-2.5 bottom-12 rotate-[10deg] bg-red-400' />
          </div>
          <TapeHeader songName={currentSong.name} />

          <div className='tape-body relative font-display'>
            <TapeSide />
            <TapeWindow
              spinning={isPlaying && isLoaded === HOWLER_STATE.LOADED}
            />
          </div>
          <div className='tape-footer'></div>
        </div>
      )}
    </div>
  );
};

const TapeScrew = ({
  className,
  size = 'sm',
}: {
  className: string;
  size?: 'sm' | 'lg';
}) => {
  return (
    <div
      className={cn(
        'absolute overflow-hidden rounded-full bg-[#c3c3c5] p-1',
        className,
        { 'h-4 w-4': size === 'sm', 'h-8 w-8': size === 'lg' }
      )}
    >
      <div className='tape-screw-overflow'>
        <div className=''></div>
        <div className=''></div>
      </div>
    </div>
  );
};
const TapeHeader = ({ songName }: { songName: string }) => {
  return (
    <div className='tape-header w-full'>
      <div className='absolute left-1/2 top-4 w-full -translate-x-1/2 text-center font-display text-4xl font-black tracking-wider text-[#1D2225]'>
        {songName}
      </div>
    </div>
  );
};

const TapeSide = () => {
  return (
    <div className='absolute top-[40%] left-4 bottom-0 -translate-y-1/2 uppercase text-[#1D2225]'>
      <div className='flex w-full justify-center text-4xl font-black'>A</div>
      <div className='text-sm tracking-widest'>Side</div>
    </div>
  );
};
const TapeWindow = ({ spinning }: { spinning: boolean }) => {
  return (
    <div className='tape-window'>
      <div className='tape-spools'>
        <div className='tape-spool'>
          <div
            className={cn('tape-spoolbar', {
              'animate-spin-slow': spinning,
            })}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='tape-film-container'>
            <div className='tape-film'></div>
          </div>
        </div>
        <div className='tape-spool'>
          <div
            className={cn('tape-spoolbar', {
              'animate-spin-slow': spinning,
            })}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='tape-film-container'>
            <div className='tape-film'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
