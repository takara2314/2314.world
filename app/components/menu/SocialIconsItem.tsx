import { Link } from '@remix-run/react';
import { type ReactNode } from 'react';

interface Props {
  href: string;
  className: string;
  children: ReactNode;
}

export default function SocialIconsItem({
  href,
  className,
  children,
}: Props) {
  return (
    <li>
      <Link to={href} className="w-7 h-7">
        <div className={className}>{children}</div>
      </Link>
    </li>
  );
}
