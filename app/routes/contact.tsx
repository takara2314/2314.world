import type { MetaFunction } from '@remix-run/cloudflare';

export const meta: MetaFunction = () => {
  return [
    { title: 'お問い合わせ' },
    {
      name: 'description',
      content: 'お問い合わせはこちらからお願いします！',
    },
  ];
};

export default function Page() {
  return <main className="pl-4">お問い合わせ</main>;
}
