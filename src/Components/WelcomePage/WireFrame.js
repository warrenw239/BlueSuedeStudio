/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

export const WireFrame = ({ reference, pageLayout }) => {
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
      <meshStandardMaterial wireframe color="#66b3ff" />
    </mesh>
  );
};
export default WireFrame;
