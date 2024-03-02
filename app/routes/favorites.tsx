import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: '好きなこと' },
    {
      name: 'description',
      content: '好きなことについて紹介します！',
    },
  ];
};

export default function Page() {
  return <main className="pl-4">好きなこと</main>;
}
