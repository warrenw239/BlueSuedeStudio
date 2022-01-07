import React, { useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import glsl from 'babel-plugin-glsl/macro';

const Background = () => {
  const background = useRef();
  const BackGroundCustomMaterial = shaderMaterial(
    // uniform
    {
      uMouseX: { value: 0 },
      uTime: { value: 0 },
      uColor: new THREE.Color(1.0, 0.0, 0.0, 0.0),
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
    uniform vec3 uColor; 
    uniform float uMouseX;
    varying vec2 vUv; 
    void main() {
        gl_FragColor = vec4(-vUv.y * vUv.x * uColor * 2.0 * -uMouseX, 1.0);
    }
    `
  );
  extend({ BackGroundCustomMaterial });

  useFrame((state) => {
    background.current.uMouseX = state.mouse.x;
  });

  return (
    <mesh position={[2, -2, -10]}>
      <planeBufferGeometry args={[60, 25]} />
      <backGroundCustomMaterial uColor="#66b3ff" ref={background} />
    </mesh>
  );
};

export default Background;
