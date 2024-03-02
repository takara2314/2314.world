import type { SVGProps } from 'react';

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 1365 1365"
    {...props}
  >
    <path
      d="M10240 5120c0 2827.7-2292.3 5120-5120 5120S0 7947.7 0 5120C0 2564.46 1872.31 446.301 4320 62.2V3640H3020v1480h1300v1128c0 1283.2 764.38 1992 1933.9 1992 560.17 0 1146.1-100 1146.1-100V6880h-645.62c-636.03 0-834.38-394.67-834.38-799.57V5120h1420l-227-1480H5920V62.2c2447.69 384.1 4320 2502.26 4320 5057.8"
      style={{
        fill: '#1877f2',
        fillOpacity: 1,
        fillRule: 'nonzero',
        stroke: 'none',
      }}
      transform="matrix(.13333 0 0 -.13333 0 1365.333)"
    />
    <path
      d="m7113 3640 227 1480H5920v960.43c0 404.9 198.35 799.57 834.38 799.57H7400v1260s-585.93 100-1146.1 100C5084.38 8240 4320 7531.2 4320 6248V5120H3020V3640h1300V62.2C4580.67 21.3 4847.84 0 5120 0s539.33 21.3 800 62.2V3640z"
      style={{
        fill: '#fff',
        fillOpacity: 1,
        fillRule: 'nonzero',
        stroke: 'none',
      }}
      transform="matrix(.13333 0 0 -.13333 0 1365.333)"
    />
  </svg>
);

export default SvgFacebook;
