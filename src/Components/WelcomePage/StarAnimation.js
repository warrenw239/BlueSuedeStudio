/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';
import glsl from 'babel-plugin-glsl/macro';

const StarAnimation = ({ reference, materialReference, pageLayout }) => {
  const StarMaterial = shaderMaterial(
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
        precision lowp float;
        uniform vec3 uColor; 
        uniform float uTime;
        varying vec2 vUv; 
        void main() {
          float strength = 0.15 / (distance(vec2(vUv.x, (vUv.y - 0.5) * 3.0 + 0.5), vec2(0.5)));
          strength *= 0.15 / (distance(vec2(vUv.y, (vUv.x - 0.5) * 3.0 + 0.5), vec2(0.5)));
          gl_FragColor = vec4(uColor * strength, 1.0);
        }
        `
  );
  extend({ StarMaterial });
  const [viewPortPosition, setViewPortPosition] = useState();
  // const [size, setSize] = useState();

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
      <starMaterial uColor="#66b3ff" ref={materialReference} />
    </mesh>
  );
};

export default StarAnimation;
