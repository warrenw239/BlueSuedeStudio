import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';

// eslint-disable-next-line react/prop-types
const WebsiteHeader = ({ pageLayout }) => {
  const [viewPortPosition, setViewPortPosition] = useState();
  const [size, setSize] = useState();
  useEffect(() => {
    if (pageLayout === 'mobile') {
      setViewPortPosition([-0.9, 4.3, 1]);
      setSize('6px');
    } else {
      setViewPortPosition([-7.4, 4.82, 0]);
      setSize('10px');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Html
      style={{
        color: 'white',
        fontSize: size,
        // textDecoration: 'underline',
        fontFamily: 'sans-serif',
      }}
      position={viewPortPosition}
      transform
    >
      <h3>Blue Suede Studio</h3>
    </Html>
  );
};
export default WebsiteHeader;
