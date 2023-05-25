import { memo, SVGProps } from 'react';

const BxImagesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.3333 1.33333H5.33333C4.598 1.33333 4 1.93133 4 2.66667V10.6667C4 11.402 4.598 12 5.33333 12H13.3333C14.0687 12 14.6667 11.402 14.6667 10.6667V2.66667C14.6667 1.93133 14.0687 1.33333 13.3333 1.33333ZM5.33333 10.6667V2.66667H13.3333L13.3347 10.6667H5.33333Z'
      fill='black'
    />
    <path
      d='M2.66667 5.33333H1.33333V13.3333C1.33333 14.0687 1.93133 14.6667 2.66667 14.6667H10.6667V13.3333H2.66667V5.33333Z'
      fill='black'
    />
    <path d='M8 8L7.33333 7.33333L6 9.33333H12.6667L10 5.33333L8 8Z' fill='black' />
  </svg>
);
const Memo = memo(BxImagesIcon);
export { Memo as BxImagesIcon };
