import { Range } from 'react-range';

import { RangeThumb, RangeTrack } from '@/components/common';

type TrackRangeProps = {
  duration: number;
  values: number[];
  onChange: (_values: number[]) => void;
};

export const TrackRange = ({ duration, values, onChange }: TrackRangeProps) => {
  return (
    <Range
      key='player-range'
      step={0.01}
      min={0}
      max={duration ? +duration.toFixed(2) : 100}
      values={values}
      onChange={onChange}
      renderTrack={({ props, children, isDragged, disabled }) => (
        <RangeTrack
          key='player-range'
          isDragged={isDragged}
          disabled={disabled}
          props={props}
          values={values}
          max={duration}
        >
          {children}
        </RangeTrack>
      )}
      renderThumb={({ props }) => (
        <RangeThumb props={props} key='player-range' />
      )}
    />
  );
};
