import * as React from 'react';

import Seo from '@/components/common/Seo';
import ListScreen from '@/components/screen/list/ListScreen';
import PlayingScreen from '@/components/screen/playing/PlayingScreen';

import { useSongStore } from '@/store/song';

export default function HomePage() {
  const { currentScreen } = useSongStore();
  return (
    <div>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      {currentScreen === 'playing' ? <PlayingScreen /> : <ListScreen />}
    </div>
  );
}
