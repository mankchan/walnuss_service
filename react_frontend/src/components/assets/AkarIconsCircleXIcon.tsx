import { memo, SVGProps } from 'react';

const AkarIconsCircleXIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M15 15L9 9M15 9L9 15' stroke='#6074DD' strokeWidth={2} strokeLinecap='round' />
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke='#6074DD'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(AkarIconsCircleXIcon);
export { Memo as AkarIconsCircleXIcon };
