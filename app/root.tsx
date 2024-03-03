import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';

import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/m-plus-2/wght.css';

import stylesheet from '~/tailwind.css';
import Body from './Body';
import Head from './Head';

export const links: LinksFunction = () => {
  return [
    ...(cssBundleHref
      ? [
          { rel: 'stylesheet', href: cssBundleHref },
          { rel: 'stylesheet', href: stylesheet },
        ]
      : []),
  ];
};

export default function App() {
  return (
    <html lang="ja">
      <Head />
      <Body />
    </html>
  );
}
