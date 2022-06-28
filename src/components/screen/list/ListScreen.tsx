import React from 'react';

import { siteInfo } from '@/lib/site.info';

import ListRow from '@/components/screen/list/ListRow';
import { ListTable } from '@/components/screen/list/ListTable';

import { useSongStore } from '@/store/song';

import { List } from '@/generated/graphql';

type Props = {
  lists: List[];
  toggleModal: () => void;
};

export const ListScreen = ({ lists, toggleModal }: Props) => {
  const { currentList } = useSongStore();

  return (
    <div className='relative h-full min-h-screen w-full pb-48'>
      <h1 className='mb-2 mt-6 text-center text-2xl italic text-purple-200/50 md:my-8 lg:text-4xl'>
        {siteInfo.title}
      </h1>
      <h3
        onClick={toggleModal}
        className='cursor-pointer text-center underline underline-offset-2'
      >
        About
      </h3>

      <ListRow lists={lists} />
      {currentList && <ListTable list={currentList} />}
    </div>
  );
};
