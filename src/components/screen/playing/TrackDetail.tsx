import { AnimatePresence, motion } from 'framer-motion';

import { BlurImage } from '@/components/common';

import { Track } from '@/types';

export const TrackDetail = ({
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
            className='relative'
          >
            <BlurImage
              src={track.cover}
              layout='fixed'
              height={240}
              width={240}
              className='h-full w-full rounded shadow-lg'
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
