/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import glsl from 'babel-plugin-glsl/macro';
import { useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

const HeaderBackGround = () => {
  // const HeaderbackGroundMaterial = shaderMaterial(
  //   // uniform
  //   {
  //     uTime: { value: 0 },
  //     uColor: new THREE.Color(1.0, 0.0, 0.0, 0.0),
  //   },
  //   // vertex Shader
  //   glsl`
  //     varying vec2 vUv;
  //     void main() {
  //         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  //         vUv = uv;
  //     }
  //   `,
  //   // fragment Shader
  //   glsl`
  //   precision mediump float;
  //   uniform vec3 uColor;
  //   uniform float uTime;
  //   varying vec2 vUv;
  //   void main() {

  //     float barX = step(0.1, mod(vUv.x * 1.0, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
  //     float barY = step(0.5, mod(vUv.y * 0.0, 1.0) * step(0.8, mod(vUv.x * 10.0, 1.0)));
  //     float strength = barX + barY;
  //     vec3 blackColor = vec3(0.0);
  //     // vec3 uColor = vec3(vUv * 4.0, 0.1);
  //     vec3 mixedColor = mix(blackColor, uColor * 1.0, strength * 0.5);
  //     gl_FragColor = vec4(mixedColor * 0.3, 0.5);
  //     // gl_FragColor = vec4(vec3(strength * 0.2), 1.0);
  //   }
  //   `
  // );

  const HeaderbackGroundMaterial = shaderMaterial(
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
    uniform float uTime;
    varying vec2 vUv; 
    void main() {
        gl_FragColor = vec4(vUv.y * vUv.y * uColor * 2.0 * uTime * 0.5, 1.0);
    }
    `
  );
  extend({ HeaderbackGroundMaterial });
  const headerMaterial = useRef();

  let holdTime = 0;
  let downCounter = 0;
  let upCounter = 0;
  useFrame(({ clock }) => {
    const elapstedTime = clock.getElapsedTime();
    if (elapstedTime - holdTime < 8) {
      upCounter += 0.002;
      headerMaterial.current.uTime = upCounter;
    } else {
      downCounter += 0.002;
      headerMaterial.current.uTime = 0.9 - downCounter;
    }
    if (elapstedTime - holdTime > 15) {
      holdTime = elapstedTime;
      downCounter = 0;
      upCounter = 0;
    }
  });

  return (
    <mesh position={[2, 9.8, -9.9]}>
      <planeBufferGeometry args={[50, 1.7]} />
      <headerbackGroundMaterial uColor="white" ref={headerMaterial} />
      {/* <meshStandardMaterial uColor="" /> */}
    </mesh>
  );
};

export default HeaderBackGround;
