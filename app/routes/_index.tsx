import {
  Canvas,
  ThreeElements,
  useFrame,
} from '@react-three/fiber';
import type { MetaFunction } from '@remix-run/cloudflare';
import { useRef, useState } from 'react';
import * as THREE from 'three';

export const meta: MetaFunction = () => {
  return [
    { title: 'たからーん（濱口 宝）' },
    {
      name: 'description',
      content: '僕について紹介します！',
    },
  ];
};

export default function Page() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight
        position={[-10, -10, -10]}
        decay={0}
        intensity={Math.PI}
      />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}

function Box(props: ThreeElements['mesh']) {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={hovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  );
}
