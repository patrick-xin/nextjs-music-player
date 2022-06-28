import { RichText } from '@graphcms/rich-text-react-renderer';
import { Dialog } from '@headlessui/react';
import { AnimatePresence } from 'framer-motion';
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
        <Dialog
          className='relative z-50 my-6'
          open={isModalOpen}
          onClose={closeModal}
        >
          <div className='fixed inset-0 overflow-y-auto bg-primary-dark/90 backdrop-blur-sm'>
            <Dialog.Panel>
              <button className='fixed right-6 top-6'>
                <MdClose
                  className='h-6 w-6 text-white/70'
                  onClick={closeModal}
                />
              </button>
              <div className='mx-8 md:mx-12 lg:mx-auto lg:max-w-xl'>
                <RichText
                  content={content.content?.raw}
                  renderers={{
                    p: ({ children }) => (
                      <p className='my-2 text-white/80 lg:text-lg'>
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className='list-disc space-y-1 text-white/60'>
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => (
                      <li className='text-sm text-white/50'>{children}</li>
                    ),
                    h4: ({ children }) => (
                      <h4 className='text-bold py-6 text-2xl italic'>
                        {children}
                      </h4>
                    ),
                  }}
                />
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default AboutModal;
//<motion.div >
