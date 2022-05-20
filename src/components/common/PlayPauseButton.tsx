import { motion } from 'framer-motion';
import { MdPause, MdPlayArrow } from 'react-icons/md';

import { useSongStore } from '@/store/song';
export const PlayPauseButton = () => {
  const { isPlaying, togglePlay } = useSongStore();
  return (
    <>
      {!isPlaying ? (
        <motion.button
          whileTap={{ scale: 1.1 }}
          onClick={togglePlay}
          className='rounded-full bg-gradient-to-tr from-teal-400 to-purple-300 p-2'
        >
          <MdPlayArrow className='h-8 w-8 text-primary-light' />
        </motion.button>
      ) : (
        <motion.button
          onClick={togglePlay}
          whileTap={{ scale: 1.1 }}
          className='rounded-full bg-gradient-to-tr from-teal-700 via-indigo-400 to-purple-400 p-2'
        >
          <MdPause className='h-8 w-8 text-primary-light' />
        </motion.button>
      )}
    </>
  );
};
