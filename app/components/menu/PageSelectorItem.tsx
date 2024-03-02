import { Link, useLocation } from '@remix-run/react';

interface Props {
  label: string;
  href: string;
}

export default function PageSelectorItem({
  label,
  href,
}: Props) {
  const location = useLocation();

  return (
    <li>
      <Link to={href}>
        <div className="w-full h-10 relative">
          {location.pathname === href ? (
            <div className="w-11/12 h-full bg-lime-200 rounded-r-full absolute top-0 left-0" />
          ) : (
            <div className="w-11/12 h-full hover:bg-gray-200 rounded-r-full transition-colors duration-150 absolute top-0 left-0" />
          )}

          <div
            className={
              location.pathname === href
                ? 'w-full h-full text-lime-950 text-xl pointer-events-none flex flex-col items-center justify-center absolute top-0 left-0'
                : 'w-full h-full text-xl pointer-events-none flex flex-col items-center justify-center absolute top-0 left-0'
            }
          >
            {label}
          </div>
        </div>
      </Link>
    </li>
  );
}
