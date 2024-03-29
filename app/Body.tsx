import {
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import { useSpring, useTransform } from 'framer-motion';
import { useCallback } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import ModalBackground from './components/ModalBackground';
import Menu from './components/menu/Menu';

export default function Body() {
  const isPc = useMediaQuery('(min-width: 768px)');
  const menuX = useSpring(0);

  const handleCloseMenu = useCallback(() => {
    menuX.set(-500);
  }, [menuX.set]);

  const menuBackgroundOpacity = useTransform(
    menuX,
    [-500, 0],
    [0, 0.5],
  );

  return (
    <body className="w-dvw h-dvh text-base md:text-lg text-neutral-900 overflow-hidden">
      <div className="w-full h-full flex flex-row justify-end">
        {!isPc && (
          <ModalBackground
            opacity={menuBackgroundOpacity}
            onClick={handleCloseMenu}
          />
        )}
        <Menu x={menuX} />

        <div
          className={
            isPc
              ? 'w-[calc(100%-20rem+1rem)] h-full bg-[#66d9ff]'
              : 'w-full h-full bg-[#66d9ff]'
          }
        >
          <Outlet />
        </div>
      </div>

      <ScrollRestoration />
      <Scripts />
    </body>
  );
}
