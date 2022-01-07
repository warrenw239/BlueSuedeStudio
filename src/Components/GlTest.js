/* eslint-disable no-unused-vars */
import React, { useRef, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const WaveShaderMaterial = shaderMaterial(
  // uniform
  {
    uMouseX: { value: 0 },
    uTime: { value: 0 },
    uColor: new THREE.Color(0.0, 0.0, 0.0, 0.0),
  },
  // vertex Shader
  glsl`
    varying vec2 vUv;

    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vUv = uv;
    }
  `,
  // fragment Shader
  glsl`
  precision mediump float;
  uniform float uMouseX;
  uniform float uMouseY;
  uniform vec3 uColor; 
  uniform float uTime;
  varying vec2 vUv; 


  float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898,120.233))) * 13758.5453123);
}

void main()
{
    // ...

    float strength = random(vUv);

    gl_FragColor = vec4(uColor * strength, 1.0);
} 


  `
);

extend({ WaveShaderMaterial });

const Wave = () => {
  const ref = useRef();
  const ball = useRef();
  // eslint-disable-next-line no-return-assign
  useFrame(({ clock, mouse }) => {
    ref.current.uTime = clock.getElapsedTime();
    // ref.current.uMouse =
    ref.current.uMouseX = mouse.x;
    ref.current.uMouseY = mouse.y;
    ball.current.position.x = mouse.x * 5;
    ball.current.position.y = mouse.y * 5;
    // ball.current.position.x = mouse.x
  });
  // onPointerEnter={(e) => console.info(e.clientX)}
  return (
    <mesh ref={ball}>
      <sphereBufferGeometry args={[0.5, 16, 16]} />
      <waveShaderMaterial uColor="#66b3ff" ref={ref} />
    </mesh>
  );
};

const GlTest = () => (
  <Canvas>
    <Suspense fallback={null}>
      <pointLight position={[10, 0, 10]} />
      <Wave />
    </Suspense>
  </Canvas>
);

export default GlTest;
