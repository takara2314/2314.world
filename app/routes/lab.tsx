import type { MetaFunction } from '@remix-run/node';

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
