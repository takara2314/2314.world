import type { MetaFunction } from '@remix-run/cloudflare';
import OrbitWorld from '~/components/orbitWorld/OrbitWorld';

export const meta: MetaFunction = () => {
  return [
    { title: 'たからーん（濱口 宝）' },
    {
      name: 'description',
      content: '僕について紹介します！',
    },
  ];
};

export default function Page() {
  return <OrbitWorld />;
}
