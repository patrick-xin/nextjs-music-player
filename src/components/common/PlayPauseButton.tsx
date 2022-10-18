import { motion } from 'framer-motion';
import { BiLoaderAlt } from 'react-icons/bi';
import { MdPause, MdPlayArrow } from 'react-icons/md';

import { HOWLER_STATE, useSongStore } from '@/store/song';

export const PlayPauseButton = () => {
  const { isPlaying, togglePlay, isLoaded } = useSongStore();

  return (
    <>
      {isLoaded !== HOWLER_STATE.LOADED && !isPlaying ? (
        <motion.button
          whileTap={{ scale: 1.1 }}
          onClick={togglePlay}
          className='rounded-full bg-gradient-to-tr from-teal-400 to-purple-300 p-2'
        >
          <MdPlayArrow className='h-6 w-6 text-primary-light' />
        </motion.button>
      ) : isLoaded !== HOWLER_STATE.LOADED ? (
        <button
          disabled
          className='rounded-full bg-gradient-to-tr from-teal-400 to-purple-300 p-2 disabled:bg-opacity-50'
        >
          <BiLoaderAlt className='h-6 w-6 animate-spin p-1 text-primary-light/70 duration-500' />
        </button>
      ) : !isPlaying ? (
        <motion.button
          whileTap={{ scale: 1.1 }}
          onClick={togglePlay}
          className='rounded-full bg-gradient-to-tr from-teal-400 to-purple-300 p-2'
        >
          <MdPlayArrow className='h-6 w-6 text-primary-light' />
        </motion.button>
      ) : (
        <motion.button
          onClick={togglePlay}
          whileTap={{ scale: 1.1 }}
          className='rounded-full bg-gradient-to-tr from-teal-700 via-indigo-400 to-purple-400 p-2'
        >
          <MdPause className='h-6 w-6 text-primary-light' />
        </motion.button>
      )}
    </>
  );
};
