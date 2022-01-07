/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-void */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';
import Scroll from './Scroll';

export default function Camera(props) {
  const camera = useRef();
  const set = useThree((state) => state.set);
  useEffect(() => {
    set({ camera: camera.current });
  }, []);
  // Update it every frame
  useFrame(() => camera.current.updateMatrixWorld());
  const [y] = Scroll([-100, 200], { domTarget: window });
  return (
    <a.perspectiveCamera
      ref={camera}
      {...props}
      position-y={y.to((Y) => (Y / 500) * 5)}
      fov={55}
    />
  );
}
