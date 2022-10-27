import formatDuration from 'format-duration';

import { Track } from '@/generated/graphql';

export const formatTime = (timeInSeconds = 0) => {
  return formatDuration(timeInSeconds * 1000);
};

export const setTrackToLocalStorage = (track: Track) => {
  if (!localStorage) return;
  if (localStorage.getItem('current-song')) {
    localStorage.removeItem('current-song');
  } else {
    localStorage.setItem('current-song', JSON.stringify(track));
  }
};
