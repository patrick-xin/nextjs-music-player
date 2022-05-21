import { FaChevronDown } from 'react-icons/fa';
import { MdVolumeMute, MdVolumeOff, MdVolumeUp } from 'react-icons/md';

import { SoundRange } from '@/components/common';

import { useSongStore } from '@/store/song';
export const Nav = () => {
  const { toggleScreen, isMute, toggleMute } = useSongStore();
  return (
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

      <div className='flex w-1/2 items-center justify-around gap-2 md:w-72'>
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
    </nav>
  );
};
