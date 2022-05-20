import formatDuration from 'format-duration';

export const formatTime = (timeInSeconds = 0) => {
  return formatDuration(timeInSeconds * 1000);
};
