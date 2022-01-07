/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

const Camera = ({ cameraPlacement }) => (
  <PerspectiveCamera position={cameraPlacement} fov={55} makeDefault />
);
export default Camera;
