import { ThreeEvent } from '@react-three/fiber';

interface Props {
  x: number;
  y: number;
  z: number;
  color: string;
}

export default function Block({ x, y, z, color }: Props) {
  return (
    <mesh
      position={[x, y, z]}
      onPointerDown={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
