import type { MetaFunction } from '@remix-run/cloudflare';

export const meta: MetaFunction = () => {
  return [
    { title: 'ラボ' },
    {
      name: 'description',
      content: '試験的に開発している機能を体験できます！',
    },
  ];
};

export default function Page() {
  return <main className="pl-4">ラボ</main>;
}
