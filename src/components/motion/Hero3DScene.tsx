import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Ring } from '@react-three/drei';
import type { Group } from 'three';

function CoreMesh() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.08 + state.pointer.x * 0.25;
    group.current.rotation.x = state.pointer.y * 0.15;
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
        <Icosahedron args={[1.05, 1]}>
          <meshStandardMaterial
            color="#38bdf8"
            wireframe
            transparent
            opacity={0.55}
            emissive="#0ea5e9"
            emissiveIntensity={0.15}
          />
        </Icosahedron>
      </Float>

      <Ring args={[1.45, 1.47, 128]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#64748b"
          wireframe
          transparent
          opacity={0.25}
        />
      </Ring>

      <Ring args={[1.85, 1.86, 128]} rotation={[Math.PI / 2.1, 0.2, 0]}>
        <meshStandardMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.12}
        />
      </Ring>
    </group>
  );
}

export default function Hero3DScene() {
  return (
    <div className="hero-3d-scene relative h-[320px] w-full sm:h-[380px] lg:h-[440px]">
      <div className="hero-grid-bg absolute inset-0 opacity-40" />
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="!absolute inset-0"
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[6, 6, 6]} intensity={0.8} color="#38bdf8" />
        <pointLight position={[-6, -3, -4]} intensity={0.3} color="#f43f5e" />
        <Suspense fallback={null}>
          <CoreMesh />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-border/50" />
    </div>
  );
}
