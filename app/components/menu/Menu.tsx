import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import Copyright from './Copyright';
import Hero from './Hero';
import PageSelector from './PageSelector';
import SocialIcons from './SocialIcons';

export default function Menu() {
  const isPc = useMediaQuery('(min-width: 768px)');
  const x = useMotionValue(0);

  useEffect(() => {
    if (!isPc) {
      return;
    }

    x.set(0);
  }, [isPc, x.set]);

  return (
    <motion.menu
      drag={isPc ? undefined : 'x'}
      dragConstraints={{ left: -500, right: 0 }}
      dragElastic={0}
      style={{ x }}
      className="w-[20rem] h-full text-center bg-white rounded-r-2xl fixed top-0 left-0"
    >
      <Hero />
      <PageSelector />

      <div className="pt-5 w-full border-t-2 border-gray-300 absolute bottom-4">
        <SocialIcons />
        <Copyright />
      </div>
    </motion.menu>
  );
}
