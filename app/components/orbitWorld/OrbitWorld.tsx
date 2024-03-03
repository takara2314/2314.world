import { CameraControls } from '@react-three/drei';
import {
  Canvas,
  ThreeElements,
  useFrame,
} from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import DetailWindow from './DetailWindow';

export default function OrbitWorld() {
  return (
    <div className="w-full h-full relative">
      <Canvas>
        <CameraControls />
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

      <DetailWindow>
        <h1 className="text-3xl font-bold mb-2">
          タカラーン（濱口 宝）
        </h1>
        <p>やっほー (ﾉ・ω・)ﾉ</p>
        <p>
          気まぐれで生きている高専5年生(20歳)です！
          幼少期にPCに興味を持ってから、PCと親友になりました。
        </p>
        <p>
          気軽に 「
          <span className="text-green-700">タカラーン</span>
          」 や 「
          <span className="text-green-700">たからん</span>」
          と呼んでくれると嬉しいです！
        </p>
      </DetailWindow>
    </div>
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
