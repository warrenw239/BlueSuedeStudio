/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import glsl from 'babel-plugin-glsl/macro';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';

const ButtonLightBar = () => {
  const LightBarMaterial = shaderMaterial(
    // uniform
    {
      uLight: { value: 1 },
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
        uniform vec3 uColor; 
        uniform float uLight;
        varying vec2 vUv; 
        void main() {
          float strength = max(abs(vUv.x - 0.9), abs(vUv.y - 0.5));
          gl_FragColor = vec4(uColor * strength * 3.0 * uLight, 1.0);
        }
        `
  );
  extend({ LightBarMaterial });

  const lightBarRef = useRef();

  useFrame(({ clock }) => {
    // const time = clock.getElapsedTime();
    lightBarRef.current.uLight = 3.0;
  });

  return (
    <mesh position={[4.55, -3, 0]} rotation={[0.9, 0, -1.57]}>
      <cylinderBufferGeometry args={[0.03, 0.03, 5, 5]} />
      <lightBarMaterial uColor="#ffffff" ref={lightBarRef} />
    </mesh>
  );
};

export default ButtonLightBar;
