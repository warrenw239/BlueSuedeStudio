import React from 'react';
import { useFrame } from '@react-three/fiber';

export const PrimaryLights = () => {
  const primarylights = React.useRef();

  useFrame((state) => {
    primarylights.current.intensity = state.mouse.x * 0.1 - 2;
  });
  return (
    <>
      <pointLight
        intensity={2}
        position={[-4.5, 3.5, 5]}
        args={['#ffdd99']}
        distance={15}
        ref={primarylights}
      />
    </>
  );
};
export const SecondaryLights = () => {
  const secondarylights = React.useRef();

  useFrame((state) => {
    secondarylights.current.intensity = state.mouse.x;
  });
  return (
    <>
      <pointLight
        intensity={0}
        position={[4.5, 3.5, 5]}
        args={['#ffdd99']}
        distance={15}
        ref={secondarylights}
      />
    </>
  );
};

export const LightBarLight = () => (
  <>
    <pointLight
      intensity={2}
      args={['red']}
      distance={4}
      position={[3.3, -1.3, 2.3]}
    />
  </>
);
