import { useState } from 'react';
import { MdPause, MdPlayArrow } from 'react-icons/md';

import { BlurImage } from '@/components/common';

import { HOWLER_STATE, useSongStore } from '@/store/song';

import { List, Track } from '@/generated/graphql';
import { formatTime, setTrackToLocalStorage } from '@/utils';

type Props = {
  list: List;
};

export const ListTable = ({ list }: Props) => {
  return (
    <div className='flex h-auto flex-col overflow-y-auto text-gray-400'>
      <table className='h-full w-full table-auto'>
        <TableHead />
        <TableBody list={list} />
      </table>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead className='border-b border-white/10 text-purple-200/40'>
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

const TableBody = ({ list }: { list: List }) => {
  return (
    <tbody className='w-full'>
      {list.tracks?.map((track, index) => (
        <TableRow key={track.id} track={track} index={index} list={list} />
      ))}
    </tbody>
  );
};

type TableRowProps = { track: Track; index: number; list: List };

const TableRow = ({ track, index, list }: TableRowProps) => {
  const { name, coverImage, duration, genre } = track;
  const [isHovering, setHovering] = useState<null | number>(null);
  const { isPlaying, currentSong, isLoaded } = useSongStore();

  return (
    <tr
      onMouseEnter={() => setHovering(index)}
      onMouseLeave={() => setHovering(null)}
      className={`group w-full ${
        currentSong?.id === track.id
          ? 'bg-primary-light/50'
          : 'hover:bg-indigo-300/20'
      } border-b border-white/5 transition duration-300 ease-in-out`}
    >
      <td className='hidden whitespace-nowrap p-4 text-sm font-light md:block md:pt-10'>
        {index + 1}
      </td>
      <td className='whitespace-nowrap p-4 text-sm font-light'>
        <div className='flex items-center gap-5'>
          <div className='relative'>
            <BlurImage
              src={coverImage.source.url}
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
                list={list}
              />
            </div>
          </div>
          <div className='flex items-center'>
            <div className='space-y-1'>
              <div className='text-white'>{name}</div>
              <div className='text-xs'>artist</div>
            </div>

            <div className='relative ml-4 h-4 w-4'>
              {isPlaying &&
                (isLoaded === HOWLER_STATE.LOADED && currentSong?.id) ===
                  track.id &&
                Array.from(Array(4).keys()).map((item, index) => (
                  <span className='bar' key={index} />
                ))}
            </div>
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
  list,
}: {
  index: number;
  track: Track;
  isHovering: number | null;
  list: List;
}) => {
  const { setCurrentSong, isPlaying, togglePlay, currentSong, setCurrentList } =
    useSongStore();
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
          setCurrentSong(track, true);
          setCurrentList(list);
          setTrackToLocalStorage(track);
        }}
      >
        <MdPlayArrow className='h-4 w-4 text-white' />
      </button>
    );
  }

  return null;
};
