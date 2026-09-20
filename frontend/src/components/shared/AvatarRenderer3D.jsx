import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Environment, ContactShadows } from "@react-three/drei";

/* ---------------------------------------------------------------
   Cute 3D Robot — built entirely from primitives.
   Matches SmritiCare palette:
     sage #8fb59d · forest #2f6b4f · ivory #fbf7ef · peach #f0b27a
   States: idle · talking · listening · thinking · happy
---------------------------------------------------------------- */
function CuteRobot({ state = "idle", speaking = false, listening = false }) {
  const group = useRef();
  const head = useRef();
  const antennaBall = useRef();
  const mouth = useRef();
  const leftEye = useRef();
  const rightEye = useRef();
  const leftArm = useRef();
  const rightArm = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    /* Whole body — gentle idle bob + tiny sway */
    if (group.current) {
      const bobSpeed = state === "happy" ? 4 : state === "thinking" ? 1.2 : 1.8;
      group.current.position.y =
        Math.sin(t * bobSpeed) * (state === "happy" ? 0.12 : 0.06);
      group.current.rotation.y = Math.sin(t * 0.5) * 0.08;
    }

    /* Head — subtle tilt, reacts to state */
    if (head.current) {
      head.current.rotation.z = Math.sin(t * 0.7) * 0.03;
      if (state === "thinking") {
        head.current.rotation.y = Math.sin(t * 1.6) * 0.18;
        head.current.rotation.x = Math.sin(t * 1.2) * 0.05;
      } else if (state === "listening") {
        head.current.rotation.y = Math.sin(t * 0.8) * 0.06;
        head.current.rotation.x = -0.06;
      } else {
        head.current.rotation.y = Math.sin(t * 0.8) * 0.05;
        head.current.rotation.x = 0;
      }
    }

    /* Antenna glow — brighter + faster pulse while listening */
    if (antennaBall.current && antennaBall.current.material) {
      const intensity = listening
        ? 1.1 + Math.sin(t * 8) * 0.6
        : 0.55 + Math.sin(t * 2) * 0.25;
      antennaBall.current.material.emissiveIntensity = intensity;
    }

    /* Mouth — open/close while speaking */
    if (mouth.current) {
      if (speaking || state === "talking") {
        const open = Math.abs(Math.sin(t * 12));
        mouth.current.scale.y = 0.5 + open * 1.6;
        mouth.current.scale.x = 1 + open * 0.25;
      } else {
        mouth.current.scale.y = 0.5;
        mouth.current.scale.x = 1;
      }
    }

    /* Eyes — occasional blink */
    const blink = t % 4 > 3.85 ? 0.1 : 1;
    if (leftEye.current) leftEye.current.scale.y = blink;
    if (rightEye.current) rightEye.current.scale.y = blink;

    /* Arms — small idle swing, bigger when happy */
    if (leftArm.current && rightArm.current) {
      const swing =
        state === "happy" ? Math.sin(t * 8) * 0.35 : Math.sin(t * 1.2) * 0.08;
      leftArm.current.rotation.z = 0.3 + swing;
      rightArm.current.rotation.z = -0.3 - swing;
    }
  });

  return (
    <group ref={group} position={[0, 0.05, 0]}>
      {/* -------- BODY -------- */}
      <RoundedBox
        args={[1.1, 1.2, 0.8]}
        radius={0.3}
        smoothness={4}
        position={[0, -0.3, 0]}
      >
        <meshStandardMaterial color="#8fb59d" roughness={0.55} />
      </RoundedBox>

      {/* Chest heart */}
      <mesh position={[0, -0.1, 0.42]}>
        <circleGeometry args={[0.15, 32]} />
        <meshStandardMaterial color="#f0b27a" />
      </mesh>
      <mesh position={[0, -0.1, 0.43]}>
        <circleGeometry args={[0.09, 32]} />
        <meshStandardMaterial color="#e89a5a" />
      </mesh>

      {/* -------- ARMS -------- */}
      <mesh ref={leftArm} position={[-0.75, -0.1, 0]} rotation={[0, 0, 0.3]}>
        <capsuleGeometry args={[0.1, 0.5, 4, 8]} />
        <meshStandardMaterial color="#8fb59d" roughness={0.55} />
      </mesh>
      <mesh ref={rightArm} position={[0.75, -0.1, 0]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.1, 0.5, 4, 8]} />
        <meshStandardMaterial color="#8fb59d" roughness={0.55} />
      </mesh>

      {/* Arm mitts */}
      <mesh position={[-0.95, -0.45, 0]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#2f6b4f" roughness={0.5} />
      </mesh>
      <mesh position={[0.95, -0.45, 0]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial color="#2f6b4f" roughness={0.5} />
      </mesh>

      {/* -------- LEGS + FEET -------- */}
      <mesh position={[-0.28, -1.2, 0]}>
        <capsuleGeometry args={[0.13, 0.35, 4, 8]} />
        <meshStandardMaterial color="#2f6b4f" roughness={0.5} />
      </mesh>
      <mesh position={[0.28, -1.2, 0]}>
        <capsuleGeometry args={[0.13, 0.35, 4, 8]} />
        <meshStandardMaterial color="#2f6b4f" roughness={0.5} />
      </mesh>
      <mesh position={[-0.28, -1.45, 0.05]}>
        <sphereGeometry args={[0.15, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#2f6b4f" roughness={0.5} />
      </mesh>
      <mesh position={[0.28, -1.45, 0.05]}>
        <sphereGeometry args={[0.15, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#2f6b4f" roughness={0.5} />
      </mesh>

      {/* -------- HEAD -------- */}
      <group ref={head} position={[0, 0.85, 0]}>
        {/* Head shell */}
        <RoundedBox args={[1.5, 1.2, 1.0]} radius={0.4} smoothness={4}>
          <meshStandardMaterial color="#fbf7ef" roughness={0.45} />
        </RoundedBox>

        {/* Face plate */}
        <RoundedBox
          args={[1.2, 0.9, 0.05]}
          radius={0.2}
          smoothness={4}
          position={[0, 0, 0.5]}
        >
          <meshStandardMaterial color="#f5ede0" roughness={0.5} />
        </RoundedBox>

        {/* Left eye */}
        <group ref={leftEye} position={[-0.28, 0.08, 0.53]}>
          <mesh>
            <circleGeometry args={[0.13, 32]} />
            <meshStandardMaterial color="#2f6b4f" />
          </mesh>
          <mesh position={[0.04, 0.04, 0.01]}>
            <circleGeometry args={[0.045, 16]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>

        {/* Right eye */}
        <group ref={rightEye} position={[0.28, 0.08, 0.53]}>
          <mesh>
            <circleGeometry args={[0.13, 32]} />
            <meshStandardMaterial color="#2f6b4f" />
          </mesh>
          <mesh position={[0.04, 0.04, 0.01]}>
            <circleGeometry args={[0.045, 16]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>

        {/* Blush cheeks */}
        <mesh position={[-0.5, -0.1, 0.52]}>
          <circleGeometry args={[0.085, 16]} />
          <meshStandardMaterial color="#f0b27a" transparent opacity={0.75} />
        </mesh>
        <mesh position={[0.5, -0.1, 0.52]}>
          <circleGeometry args={[0.085, 16]} />
          <meshStandardMaterial color="#f0b27a" transparent opacity={0.75} />
        </mesh>

        {/* Mouth */}
        <mesh ref={mouth} position={[0, -0.18, 0.53]} scale={[1, 0.5, 1]}>
          <circleGeometry args={[0.08, 16]} />
          <meshStandardMaterial color="#2f6b4f" />
        </mesh>

        {/* Ear caps */}
        <mesh position={[-0.78, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
          <meshStandardMaterial color="#8fb59d" />
        </mesh>
        <mesh position={[0.78, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
          <meshStandardMaterial color="#8fb59d" />
        </mesh>

        {/* Antenna */}
        <mesh position={[0, 0.75, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
          <meshStandardMaterial color="#2f6b4f" />
        </mesh>
        <mesh ref={antennaBall} position={[0, 0.95, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#f0b27a"
            emissive="#f0b27a"
            emissiveIntensity={0.6}
          />
        </mesh>
      </group>
    </group>
  );
}

/* ---------------------------------------------------------------
   Public component — same API as before.
   Swap this for a GLB loader later without touching chat/voice.
---------------------------------------------------------------- */
export default function AvatarRenderer3D({
  state = "idle",
  speaking = false,
  listening = false,
  compact = false,
}) {
  return (
    <div
      className={`landing-ai-avatar-3d${
        compact ? " landing-ai-avatar-3d--compact" : ""
      }`}
      role="img"
      aria-label={`Smriti the SmritiCare companion, ${state}`}
    >
      <Canvas
        camera={{ position: [0, 0.15, 5.6], fov: 35 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.85} />
        <directionalLight
          position={[3, 5, 3]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight
          position={[-3, 2, -2]}
          intensity={0.4}
          color="#c4b5e0"
        />
        <Suspense fallback={null}>
          <CuteRobot state={state} speaking={speaking} listening={listening} />
          <Environment preset="apartment" />
          <ContactShadows
            position={[0, -1.65, 0]}
            opacity={0.28}
            scale={8}
            blur={2.6}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
