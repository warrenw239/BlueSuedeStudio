/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import glsl from 'babel-plugin-glsl/macro';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

const CustomProgram = ({ reference, materialReference, pageLayout }) => {
  const DecayedMaterial = shaderMaterial(
    // uniform
    {
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
        uniform vec3 uColor; 
        uniform float uTime;
        varying vec2 vUv; 
        void main() {
          vec2 wavedUv = vec2(
            vUv.x + sin(vUv.y * uTime) * 0.1,
            vUv.y + sin(vUv.x * uTime) * 0.1
          );
          float strength = 1.0 - step(0.01, abs(distance(wavedUv, vec2(0.5)) - 0.25));
            gl_FragColor = vec4(uColor * strength, 1.0);
        }
        `
  );
  extend({ DecayedMaterial });

  const [viewPortPosition, setViewPortPosition] = useState();

  useEffect(
    () =>
      pageLayout === 'mobile'
        ? setViewPortPosition([0, 1, 1])
        : setViewPortPosition([4, 1, 1]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <mesh position={viewPortPosition} ref={reference} visible={false}>
      <sphereBufferGeometry args={[1.7, 64, 64]} />
      <decayedMaterial uColor="#66b3ff" ref={materialReference} />
    </mesh>
  );
};

export default CustomProgram;
