import { GetStaticProps } from 'next';
import * as React from 'react';

import { lists } from '@/data';

import { Seo } from '@/components/common/Seo';
import { ListScreen } from '@/components/screen/list/ListScreen';
import { PlayingScreen } from '@/components/screen/playing/PlayingScreen';

import { useSongStore } from '@/store/song';

import { List, Track } from '@/types';

export default function HomePage({ lists }: { lists: List[] }) {
  const { currentScreen, setCurrentSong, setCurrentList } = useSongStore();
  React.useEffect(() => {
    const song = localStorage && localStorage.getItem('current-song');
    if (song) {
      const lastplayed = JSON.parse(song) as Track;
      setCurrentSong(lastplayed, false);

      const tracks = lists.reduce<string[]>((cur, next) => {
        return [...cur, next.category];
      }, []);

      const index = tracks.findIndex((t) => t === lastplayed.genre);

      setCurrentList(lists[index]);
    } else {
      setCurrentList(lists[0]);
    }
  }, [setCurrentSong, setCurrentList, lists]);

  return (
    <>
      <Seo />
      {currentScreen === 'playing' ? <PlayingScreen /> : <ListScreen />}
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      lists,
    },
  };
};
