/* eslint-disable no-unused-vars */
import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import Camera from '../WelcomePage/Camera';

const Loading = () => {
  const [cameraPlacement, setCameraPlacement] = useState([0, 0, 10]);
  return (
    <Canvas>
      <Camera cameraPlacement={cameraPlacement} />
      {/* <OrbitControls /> */}
      <Suspense fallback={null}>
        <Html
          position={[-1, 1, 0]}
          style={{
            fontSize: '40px',
            color: 'white',
            width: '200px',
          }}
        >
          Loading...
        </Html>
      </Suspense>
    </Canvas>
  );
};

export default Loading;
