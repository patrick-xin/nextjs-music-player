import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

import { useToastStore } from '@/store/toast';

const variants = {
  fadeLeft: {
    initial: {
      opacity: 0,
      x: '100%',
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: '100%',
    },
  },
  fadeUp: {
    initial: {
      opacity: 0,
      y: 12,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: '-100%',
    },
  },
};
const Toast = () => {
  const { isToastOpen, message, direction, closeToast } = useToastStore();
  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast();
    }, 3000);
    return () => clearTimeout(timer);
  }, [isToastOpen, closeToast]);
  return (
    <AnimatePresence>
      {isToastOpen && (
        <motion.div
          key={message}
          variants={variants[direction]}
          initial='initial'
          animate='animate'
          exit='exit'
          className='fixed bottom-2 right-2 z-[200] flex h-12 w-72 items-center justify-between rounded bg-primary-light px-6'
        >
          {message}
          <button className='px-1 py-2' onClick={closeToast}>
            <MdClose className='h-4 w-4 text-white' />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
