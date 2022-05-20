import { IThumbProps } from 'react-range/lib/types';

export const RangeThumb = ({ props }: { props: IThumbProps }) => {
  return (
    <div
      {...props}
      className='h-3 w-3 items-center justify-center rounded-full bg-white/90 shadow-lg'
    />
  );
};
