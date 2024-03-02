import type { MetaFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import Menu from '~/components/menu/Menu';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="w-full h-full flex flex-row justify-end">
      <Menu />
      <div className="w-[calc(100%-20rem+1rem)] h-full text-white bg-sky-400">
        <Outlet />
      </div>
    </div>
  );
}
