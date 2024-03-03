import type { MetaFunction } from '@remix-run/cloudflare';

export const meta: MetaFunction = () => {
  return [
    { title: '作ったもの' },
    {
      name: 'description',
      content: '作ったものについて紹介します！',
    },
  ];
};

export default function Page() {
  return <main className="pl-4">作ったもの</main>;
}
