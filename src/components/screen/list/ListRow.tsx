import React from 'react';

import { ListCard } from '@/components/screen/list/ListCard';

import { List } from '@/generated/graphql';

type Props = {
  lists: List[];
};

const ListRow = ({ lists }: Props) => {
  return (
    <div className='my-8 inline-flex w-full snap-x gap-6 overflow-x-scroll px-8 scrollbar-hide'>
      {lists.map((list) => (
        <ListCard key={list.id} list={list} />
      ))}
    </div>
  );
};

export default ListRow;
