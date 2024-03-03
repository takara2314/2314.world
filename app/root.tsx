import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/m-plus-2/wght.css';

import { useMediaQuery } from 'usehooks-ts';
import stylesheet from '~/tailwind.css';
import Menu from './components/menu/Menu';

export const links: LinksFunction = () => {
  return [
    ...(cssBundleHref
      ? [
          { rel: 'stylesheet', href: cssBundleHref },
          { rel: 'stylesheet', href: stylesheet },
        ]
      : []),
    // ...
  ];
};

export default function App() {
  const isPc = useMediaQuery('(min-width: 768px)');

  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
        />
        <Meta />
        <Links />
      </head>

      <body className="w-dvw h-dvh text-lg text-neutral-900 overflow-hidden">
        <div className="w-full h-full flex flex-row justify-end">
          <Menu />
          <div
            className={
              isPc
                ? 'w-[calc(100%-20rem+1rem)] h-full text-white bg-sky-400'
                : 'w-full h-full text-white bg-sky-400'
            }
          >
            <Outlet />
          </div>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
