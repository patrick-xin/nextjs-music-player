import { useRef, useState } from 'react';
import ReactHowler from 'react-howler';

import { useSongStore } from '@/store/song';

import { useAnimationFrame } from './useAnimationFrame';

export const useHolwer = () => {
  const {
    isPlaying,
    isRepeating,
    currentSong,
    playNextSong,
    currentList,
    volume,
    handleVolumeRange,
  } = useSongStore();

  const [seek, setSeek] = useState([0]);
  const [duration, setDuration] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const soundRef = useRef<ReactHowler | null>(null);

  const onLoad = () => {
    if (!soundRef.current) return;
    setLoaded(true);
    const songDuration = soundRef.current.duration();
    setDuration(songDuration);
  };
  const onEnd = () => {
    if (!soundRef.current) return;
    if (isRepeating) {
      setSeek([0]);
      soundRef.current.seek(0);
    } else {
      playNextSong(currentList);
    }
  };
  const handleTrackRange = (values: number[]) => {
    setSeek(values);
    soundRef.current?.seek(values[0]);
  };

  const nextAnimationFrameHandler = () => {
    const seek = soundRef.current?.seek() as number;
    setSeek([seek]);
  };
  useAnimationFrame({
    nextAnimationFrameHandler,
    shouldAnimate: Boolean(currentSong) && isPlaying,
    duration: currentSong?.duration,
  });
  return {
    volume,
    soundRef,
    seek,
    duration,
    onLoad,
    onEnd,
    handleTrackRange,
    handleVolumeRange,
    loaded,
  };
};
