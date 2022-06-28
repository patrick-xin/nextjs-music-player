import { useAnimationFrame } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ReactHowler from 'react-howler';

import { HOWLER_STATE, useSongStore } from '@/store/song';

export const useHolwer = () => {
  const {
    isRepeating,
    playNextSong,
    volume,
    handleVolumeRange,
    setLoaded,
    currentSong,
  } = useSongStore();

  const [seek, setSeek] = useState([0]);
  const [duration, setDuration] = useState(0);

  const repeatRef = useRef(isRepeating);

  const soundRef = useRef<ReactHowler | null>(null);
  const loading = soundRef.current?.howlerState() as HOWLER_STATE;
  useEffect(() => {
    if (!soundRef.current) return;

    setLoaded(loading);
  }, [soundRef, currentSong, setLoaded, loading]);
  useEffect(() => {
    repeatRef.current = isRepeating;
  }, [isRepeating]);

  const onLoad = () => {
    if (!soundRef.current) return;

    const songDuration = soundRef.current.duration();
    setDuration(songDuration);
  };
  const onEnd = () => {
    if (!soundRef.current) return;

    if (repeatRef.current) {
      setSeek([0]);

      soundRef.current.seek(0);
    } else {
      playNextSong();
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

  useAnimationFrame(() => nextAnimationFrameHandler());
  return {
    volume,
    soundRef,
    seek,
    duration,
    onLoad,
    onEnd,
    handleTrackRange,
    handleVolumeRange,
  };
};
