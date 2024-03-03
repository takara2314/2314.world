import type { MetaFunction } from '@remix-run/cloudflare';

export const meta: MetaFunction = () => {
  return [
    { title: 'できること' },
    {
      name: 'description',
      content: 'できることについて紹介します！',
    },
  ];
};

export default function Page() {
  return <main className="pl-4">できること</main>;
}
