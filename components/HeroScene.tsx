"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function StreamingParticles({ count = 38 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        position: [Math.random() * 8 - 4, Math.random() * 4 - 2, Math.random() * 4 - 2] as [number, number, number],
        scale: 0.01 + Math.random() * 0.02,
      })),
    [count]
  );

  return (
    <group>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position}>
          <sphereGeometry args={[particle.scale, 8, 8]} />
          <meshStandardMaterial emissive="#d4af37" emissiveIntensity={0.8} transparent opacity={0.82} />
        </mesh>
      ))}
    </group>
  );
}

function FloatingDevice({ position, rotation, dimensions, color }: { position: [number, number, number]; rotation: [number, number, number]; dimensions: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Group | null>(null);

  return (
    <Float floatIntensity={2} rotationIntensity={0.2} speed={1.2} floatingRange={[0.5, 1.1]}>
      <group ref={ref} position={position} rotation={rotation}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={dimensions} />
          <meshStandardMaterial color={color} metalness={0.4} roughness={0.18} emissive={color} emissiveIntensity={0.18} />
        </mesh>
        <mesh position={[0, 0, dimensions[2] / 2 + 0.01]}>
          <planeGeometry args={[dimensions[0] * 0.92, dimensions[1] * 0.65]} />
          <meshStandardMaterial color="#080808" emissive="#111111" emissiveIntensity={0.5} transparent opacity={0.95} />
        </mesh>
      </group>
    </Float>
  );
}

function FloatingTV() {
  return <FloatingDevice position={[-1.5, -0.2, 0]} rotation={[0, 0.3, 0]} dimensions={[4.4, 2.4, 0.26]} color="#1c1c1f" />;
}

function FloatingPhone() {
  return <FloatingDevice position={[2.1, -0.7, 0]} rotation={[0, -0.25, 0]} dimensions={[1.4, 2.6, 0.2]} color="#121214" />;
}

function DeviceReflection() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.65, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#050505" roughness={1} metalness={0.2} opacity={0.4} transparent />
    </mesh>
  );
}

export default function HeroScene() {
  const [supportsWebGL, setSupportsWebGL] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    setSupportsWebGL(Boolean(gl));
  }, []);

  if (!supportsWebGL) {
    return (
      <div className="flex h-full min-h-[420px] items-center justify-center rounded-[36px] bg-gradient-to-br from-slate-950 via-[#060606] to-slate-900 shadow-2xl">
        <div className="text-center text-sm text-slate-400">3D visual unavailable — displaying static premium hero.</div>
      </div>
    );
  }

  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-[36px] bg-[#050505] shadow-[0_60px_120px_rgba(0,0,0,0.55)]">
      <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 12], fov: 32 }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 5, 4]} intensity={1.1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <spotLight position={[-12, 8, 5]} intensity={0.5} angle={0.35} penumbra={0.7} />
        <Float rotationIntensity={0.16} floatIntensity={0.8} speed={1.1}>
          <group>
            <FloatingTV />
            <FloatingPhone />
          </group>
        </Float>
        <DeviceReflection />
        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>
        <StreamingParticles count={26} />
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}
