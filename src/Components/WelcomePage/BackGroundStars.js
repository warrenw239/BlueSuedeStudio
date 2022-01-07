/* eslint-disable react/prop-types */
import React from 'react';
import { Stars } from '@react-three/drei';

const BackGroundStars = ({ reference }) => (
  <mesh ref={reference} visible={false}>
    <Stars
      radius={3} // Radius of the inner sphere (default=100)
      depth={6} // Depth of area where stars should fit (default=50)
      count={2000} // Amount of stars (default=5000)
      factor={0.3} // Size factor (default=4)
      saturation={0.5} // Saturation 0-1 (default=0)
      fade
    />
  </mesh>
);

export default BackGroundStars;
