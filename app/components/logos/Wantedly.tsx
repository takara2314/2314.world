import type { SVGProps } from 'react';

const SvgWantedly = (props: SVGProps<SVGSVGElement>) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 394"
    {...props}
  >
    <circle
      cx={375}
      cy={122.95}
      r={38.98}
      style={{
        fill: '#21bddb',
      }}
    />
    <path
      d="M217.17 234.77c-2.34-1.52-9-10.45-27.42-54.44-1.15-2.76-2.22-5.14-3.23-7.18l-3.77-9.08-32.28-77.95H85.89l32.29 77.95 32.29 78 29.82 72a2.68 2.68 0 0 0 4.94 0l32.45-77.68a1.34 1.34 0 0 0-.51-1.62m120.98 0c-2.34-1.52-9-10.45-27.42-54.44a126 126 0 0 0-3.24-7.19l-3.75-9.07-32.29-77.95h-64.58l32.29 77.95 32.29 78 29.82 72a2.68 2.68 0 0 0 4.94 0l32.45-77.67a1.36 1.36 0 0 0-.51-1.63"
      style={{
        fill: '#282828',
        fillRule: 'evenodd',
      }}
    />
  </svg>
);

export default SvgWantedly;
