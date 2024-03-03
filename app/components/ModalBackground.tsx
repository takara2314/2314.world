import { MotionValue, motion } from 'framer-motion';

export interface Props {
  opacity: MotionValue<number>;
  onClick: () => void;
}

export default function ModalBackground({
  opacity,
  onClick,
}: Props) {
  return (
    <motion.div
      onClick={onClick}
      style={{ opacity: opacity }}
      className={
        opacity.get() <= 0.0
          ? 'w-full h-full bg-black pointer-events-none fixed top-0 left-0 z-20'
          : 'w-full h-full bg-black fixed top-0 left-0 z-20'
      }
    />
  );
}
