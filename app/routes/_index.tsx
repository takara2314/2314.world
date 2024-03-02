import type { MetaFunction } from '@remix-run/node';

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
  return (
    <main className="pl-4">たからーん（濱口 宝）</main>
  );
}
