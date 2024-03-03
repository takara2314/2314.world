import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function DetailWindow({ children }: Props) {
  return (
    <div
      className="
        px-4 md:px-10 w-full md:w-[calc(100%-1rem)] h-60
        flex flex-row justify-center
        absolute right-0 bottom-4 md:bottom-6
      "
    >
      <main
        className="
          p-6 w-full h-full bg-white
          rounded-tl-2xl rounded-br-2xl shadow-2xl
          overflow-x-auto
        "
      >
        {children}
      </main>
    </div>
  );
}
