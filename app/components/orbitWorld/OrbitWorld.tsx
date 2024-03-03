import { CameraControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import DetailWindow from './DetailWindow';
import Ground from './Ground';

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

        <Ground />
      </Canvas>

      <DetailWindow>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
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
