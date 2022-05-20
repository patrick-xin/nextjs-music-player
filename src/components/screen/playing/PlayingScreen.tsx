import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { MdVolumeMute, MdVolumeOff, MdVolumeUp } from 'react-icons/md';
import { useSwipeable } from 'react-swipeable';

import { BlurImage } from '@/components/common';
import SoundRange from '@/components/common/range/SoundRange';

import { useSongStore } from '@/store/song';

import { Track } from '@/types';
const PlayingScreen = () => {
  const { toggleScreen } = useSongStore();
  const {
    currentList,
    currentSong,
    isPlaying,
    setCurrentSong,
    isMute,
    toggleMute,
  } = useSongStore();

  const [current, setCurrent] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  useEffect(() => {
    if (!currentSong) return;
    setCurrent(currentList.indexOf(currentSong));
  }, [current, currentList, setCurrentSong, currentSong]);
  const update = (index: number) => {
    if (index < 0) {
      index = currentList.length - 1;
    } else if (index >= currentList.length) {
      index = 0;
    }
    setCurrent(index);
    setCurrentSong(currentList[index]);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      update(current + 1);
    },
    onSwipedRight: () => {
      update(current - 1);
    },
  });
  return (
    <div className='absolute inset-0 w-full p-6'>
      <nav className='mb-4 flex items-center justify-around'>
        <div>
          <button
            type='button'
            className='rounded-full border border-white/10 p-2'
            onClick={() => toggleScreen('main')}
          >
            <FaChevronDown className='h-4 w-4 text-white/60' />
          </button>
        </div>

        <div className='flex w-1/2 items-center justify-around gap-2'>
          {isMute ? (
            <button type='button' onClick={toggleMute}>
              <MdVolumeOff className='h-5 w-5 text-white/60' />
            </button>
          ) : (
            <button type='button' onClick={toggleMute}>
              <MdVolumeMute className='h-5 w-5 text-white/60' />
            </button>
          )}

          <div className='w-full'>
            <SoundRange />
          </div>
          <button type='button' onClick={toggleMute}>
            <MdVolumeUp className='h-5 w-5 text-white/60' />
          </button>
        </div>

        <div className='relative'>
          <button
            onClick={() => setShowDetail(!showDetail)}
            type='button'
            className='rounded-full border border-white/10 p-2'
          >
            <BsThreeDots />
          </button>
          {showDetail && (
            <div className='absolute inset-0 top-10 z-50 h-64 w-48 -translate-x-3/4 space-y-4 rounded bg-primary-light/90 p-4 transition-all ease-linear'>
              <div>
                <h4>Credit</h4>
                <div className='text-sm text-white/40'>Some credit</div>
              </div>
              <div>
                <h4>Source</h4>
                <div className='text-sm text-white/40'>url</div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className='mx-auto mt-6 w-full space-y-6'>
        <div className='relative overflow-hidden' {...handlers}>
          <div className='w-full whitespace-nowrap'>
            {currentList.map((track) => (
              <TrackDetail
                show={current === currentList.indexOf(track)}
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

export default PlayingScreen;

const TrackDetail = ({
  track,
  isPlaying,
  show,
}: {
  track: Track;
  isPlaying: boolean;
  show: boolean;
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='inline-flex w-full flex-col items-center justify-center gap-6'
          key={track.id}
        >
          <motion.div
            initial={false}
            animate={isPlaying ? 'grow' : 'shrink'}
            variants={{
              grow: {
                scale: 1,
                transition: {
                  type: 'spring',
                  duration: 1,
                  bounce: 0.5,
                  delay: 0.05,
                },
              },
              shrink: {
                scale: 0.9,
                transition: {
                  type: 'spring',
                  duration: 0.7,
                  bounce: 0,
                  delay: 0.05,
                },
              },
            }}
            className='mx-auto flex items-center justify-center'
          >
            <BlurImage
              src={track.cover}
              layout='fixed'
              height={240}
              width={240}
              className='rounded shadow-lg'
              alt={`${track.name}-cover-image`}
            />
          </motion.div>

          <div className='flex flex-col items-center justify-center gap-2'>
            <h4 className='text-2xl'>{track.name}</h4>
            <h3 className='text-gray-400'>{track.artist}</h3>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
