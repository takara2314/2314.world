import type { MetaFunction } from '@remix-run/node';

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
