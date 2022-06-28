import { RichText } from '@graphcms/rich-text-react-renderer';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { MdClose } from 'react-icons/md';

import { Page } from '@/generated/graphql';

type Props = {
  content: Page;
  isModalOpen: boolean;
  closeModal: () => void;
};
const AboutModal = ({ content, isModalOpen, closeModal }: Props) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div className='fixed inset-0 -mt-12 flex h-screen w-screen items-center justify-center bg-primary-dark/90 backdrop-blur-sm'>
          <button className='absolute right-6 top-16'>
            <MdClose className='h-6 w-6 text-white/70' onClick={closeModal} />
          </button>
          <div className='mx-8 md:mx-12 lg:mx-auto lg:max-w-xl'>
            <RichText
              content={content.content?.raw}
              renderers={{
                p: ({ children }) => (
                  <p className='my-2 text-white/80 lg:text-lg'>{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className='list-disc text-white/60'>{children}</ul>
                ),
                li: ({ children }) => (
                  <li className='text-sm text-white/50'>{children}</li>
                ),
                h4: ({ children }) => (
                  <h4 className='text-bold my-4 text-2xl'>{children}</h4>
                ),
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutModal;
