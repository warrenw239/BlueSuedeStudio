/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import { TextureLoader } from 'three';
import suedeDiffuse from './Assets/Textures/6velvetfabric.jpg';
import suedeDisplacement from './Assets/Textures/SuedeDisplacement.png';
import suedeRoughness from './Assets/Textures/SuedeRoughness.jpg';
import suedeSpecular from './Assets/Textures/SuedeSpecular.jpg';

const Standard = ({ reference, pageLayout }) => {
  // eslint-disable-next-line no-unused-vars
  const [diffuseMap, displacementMap, roughnessMap, specularMap] = useLoader(
    TextureLoader,
    [suedeDiffuse, suedeDisplacement, suedeRoughness, suedeSpecular]
  );

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

  const [worldState, setWorldState] = useState(false);

  let holdTime = 0;

  useFrame(({ clock }) => {
    if (reference.current.visible) {
      const elapsedTime = clock.getElapsedTime();

      if (elapsedTime - holdTime > 4 && elapsedTime - holdTime < 4.04) {
        setWorldState(true);
      }
      if (elapsedTime - holdTime > 8 && elapsedTime - holdTime < 8.04) {
        setWorldState(false);
      }
      if (elapsedTime - holdTime > 10) {
        holdTime = elapsedTime;
      }
    }
  });

  return (
    <>
      {worldState === false && (
        <mesh position={viewPortPosition} ref={reference} visible>
          <sphereBufferGeometry args={[1.7, 64, 64]} />

          <meshPhongMaterial
            specularMap={specularMap}
            displacementMap={displacementMap}
          />
          <meshStandardMaterial
            bumpMap={roughnessMap}
            bumpScale={0.03}
            map={diffuseMap}
          />
        </mesh>
      )}
      {worldState === true && (
        <mesh position={viewPortPosition} ref={reference} visible>
          <sphereBufferGeometry args={[1.7, 64, 64]} />
          <MeshDistortMaterial
            // attach="material"
            distort={0.4} // Strength, 0 disables the effect (default=1)
            speed={1} // Speed (default=1)
            color="#660000"
          />
        </mesh>
      )}
    </>
  );
};

// <MeshDistortMaterial
// // attach="material"
// distort={0.4} // Strength, 0 disables the effect (default=1)
// speed={1} // Speed (default=1)
// color="#660000"
// />

export default Standard;
