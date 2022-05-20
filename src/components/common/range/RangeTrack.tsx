import { getTrackBackground } from 'react-range';
import { IRenderTrackParams, ITrackProps } from 'react-range/lib/types';

interface TrackProps extends IRenderTrackParams {
  values: number[];
  max: number;
  children: React.ReactNode;
  props: ITrackProps;
}

export const RangeTrack = ({ children, props, values, max }: TrackProps) => {
  return (
    <div
      onMouseDown={props.onMouseDown}
      onTouchStart={props.onTouchStart}
      className='group flex h-2 w-full'
    >
      <div
        ref={props.ref}
        className='h-1 w-full self-center rounded-lg'
        style={{
          background: getTrackBackground({
            values,
            colors: ['#cec1e867', '#6969696d'],
            min: 0,
            max,
          }),
        }}
      >
        {children}
      </div>
    </div>
  );
};
