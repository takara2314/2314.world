import PageSelectorItem from './PageSelectorItem';

const pages = [
  {
    label: '僕について',
    href: '/',
  },
  {
    label: 'できること',
    href: '/skills',
  },
  {
    label: '作ったもの',
    href: '/works',
  },
  {
    label: '好きなもの',
    href: '/favorites',
  },
  {
    label: 'ラボ',
    href: '/lab',
  },
  {
    label: 'お問い合わせ',
    href: '/contact',
  },
];

export default function PageSelector() {
  return (
    <ul className="w-full mt-10 font-bold">
      {pages.map((page) => (
        <PageSelectorItem
          label={page.label}
          href={page.href}
          key={page.label}
        />
      ))}
    </ul>
  );
}
