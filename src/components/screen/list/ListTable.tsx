import { useState } from 'react';
import { MdPause, MdPlayArrow } from 'react-icons/md';

import { BlurImage } from '@/components/common/BlurImage';

import { useSongStore } from '@/store/song';

import { formatTime } from '@/utils';

import { Track } from '@/types';

export const ListTable = () => {
  const { currentList } = useSongStore();
  return (
    <div className='flex h-auto flex-col overflow-y-auto text-gray-400'>
      <table className='h-full w-full table-auto'>
        <TableHead />
        <tbody>
          {currentList.map((track, index) => (
            <TableRow key={track.id} track={track} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead className='border-b border-white/10'>
      <tr>
        <th
          scope='col'
          className='hidden px-3 py-4 text-left text-sm font-medium md:block'
        >
          #
        </th>
        <th scope='col' className='px-5 py-4 text-left text-sm font-medium'>
          Song
        </th>
        <th
          scope='col'
          className='hidden py-4 px-2 text-left text-sm font-medium md:block'
        >
          Genre
        </th>
        <th scope='col' className='py-4 px-2 text-left text-sm font-medium'>
          Duration
        </th>
      </tr>
    </thead>
  );
};

type TableRowProps = { track: Track; index: number };

const TableRow = ({ track, index }: TableRowProps) => {
  const { name, cover, artist, duration, genre } = track;
  const [isHovering, setHovering] = useState<null | number>(null);
  const { isPlaying, currentSong } = useSongStore();

  return (
    <tr
      onMouseEnter={() => setHovering(index)}
      onMouseLeave={() => setHovering(null)}
      className={`group ${
        currentSong?.id === track.id
          ? 'bg-primary-light/50'
          : 'hover:bg-primary-light/70'
      } border-b border-white/5 transition duration-300 ease-in-out`}
    >
      <td className='hidden whitespace-nowrap p-4 text-sm font-light md:block md:pt-10'>
        {index + 1}
      </td>
      <td className='whitespace-nowrap p-4 text-sm font-light'>
        <div className='flex items-center gap-5'>
          <div className='relative'>
            <BlurImage
              src={cover}
              layout='fixed'
              width={60}
              height={60}
              className='rounded-lg group-hover:blur-[1px] group-hover:filter'
              alt={track.name}
            />

            <div
              className={`${
                isPlaying && currentSong?.id === track.id ? 'flex' : 'hidden'
              } absolute inset-0 z-30 m-auto items-center justify-center rounded-full group-hover:flex`}
            >
              <TrackTableCell
                index={index}
                isHovering={isHovering}
                track={track}
              />
            </div>
          </div>

          <div className='space-y-1'>
            <div className='text-white'>{name}</div>
            <div className='text-xs'>{artist}</div>
          </div>
        </div>
      </td>
      <td className='hidden whitespace-nowrap p-4 text-sm font-light md:block'>
        {genre}
      </td>
      <td className='whitespace-nowrap p-4 text-sm font-light'>
        {formatTime(duration)}
      </td>
    </tr>
  );
};

const TrackTableCell = ({
  index,
  track,
  isHovering,
}: {
  index: number;
  track: Track;
  isHovering: number | null;
}) => {
  const { setCurrentSong, isPlaying, togglePlay, currentSong } = useSongStore();
  const isCurrent = track.id === currentSong?.id;
  const isIndex = index === isHovering;
  if (isIndex) {
    if (isPlaying && isCurrent)
      return (
        <button
          className='rounded-full bg-primary-light/50 p-2'
          onClick={togglePlay}
        >
          <MdPause className='h-4 w-4 text-white' />
        </button>
      );
    return (
      <button
        className='rounded-full bg-primary-light/50 p-2'
        onClick={() => {
          setCurrentSong(track);
        }}
      >
        <MdPlayArrow className='h-4 w-4 text-white' />
      </button>
    );
  }

  return null;
};
