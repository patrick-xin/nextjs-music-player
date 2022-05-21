import Link from 'next/link';
import React from 'react';
import { MdArrowBack } from 'react-icons/md';

import { siteInfo } from '@/lib/site.info';

const AboutPage = () => {
  return (
    <div className='relative mx-auto mb-28 h-full min-h-screen w-full max-w-2xl px-8 text-purple-200/20 lg:text-lg'>
      <Link href='/'>
        <a className='my-8 inline-flex items-center gap-2 text-white/50'>
          <span>
            <MdArrowBack />
          </span>
          <span>Go back</span>
        </a>
      </Link>
      <div className='flex h-3/4 flex-col justify-around'>
        <div className='flex-col items-center justify-center'>
          <h1 className='my-6'>
            Hi there! Thanks for visiting. I&apos;m{' '}
            <a
              className='text-purple-200/60'
              rel='noreferrer'
              target='_blank'
              href={siteInfo.author.site}
            >
              {siteInfo.author.name}
            </a>
            .
          </h1>
          <div className='space-y-2'>
            {siteInfo.info.map((i, index) => (
              <p key={index}>{i}</p>
            ))}
          </div>
        </div>
        <div className='mt-12 space-y-2 text-sm'>
          <h4 className='text-white/50'>Disclaimer:</h4>
          <div className='space-y-2'>
            <p>
              Gradient backgroud color is from{' '}
              <a
                className='text-white/60'
                rel='noreferrer'
                target='_blank'
                href={siteInfo.disclaimer.color.site}
              >
                {siteInfo.disclaimer.color.from}
              </a>
            </p>
            <p>
              Music used in this website are from{' '}
              <span>
                <a
                  className='text-white/60'
                  rel='noreferrer'
                  target='_blank'
                  href={siteInfo.disclaimer.music.site}
                >
                  {siteInfo.disclaimer.music.from}
                </a>
              </span>
            </p>
            <p>
              Images are from{' '}
              <a
                className='text-white/60'
                rel='noreferrer'
                target='_blank'
                href={siteInfo.disclaimer.image.site}
              >
                {siteInfo.disclaimer.image.from}
              </a>
            </p>
          </div>

          <p className='pt-6 text-white/60'>{siteInfo.disclaimer.info}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
