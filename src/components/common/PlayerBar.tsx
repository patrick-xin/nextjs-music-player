import ReactHowler from 'react-howler';

import { useHolwer } from '@/lib/hooks/useHolwer';

import { ListPlayer } from '@/components/screen/list';
import { PlayingPlayer } from '@/components/screen/playing/PlayingPlayer';

import { useSongStore } from '@/store/song';

export const Playerbar = () => {
  const { isPlaying, isRepeating, isMute, currentSong, currentScreen, volume } =
    useSongStore();
  const { soundRef, onLoad, onEnd, seek, duration, handleTrackRange } =
    useHolwer();

  return (
    <div>
      {currentSong && (
        <ReactHowler
          loop={isRepeating}
          src={currentSong.src}
          playing={isPlaying}
          ref={soundRef}
          onLoad={onLoad}
          mute={isMute}
          volume={volume[0]}
          onEnd={onEnd}
          preload
        />
      )}
      {currentScreen === 'main' ? (
        <ListPlayer />
      ) : (
        <PlayingPlayer
          values={seek}
          onTrackRangeChange={handleTrackRange}
          duration={duration}
        />
      )}
    </div>
  );
};
