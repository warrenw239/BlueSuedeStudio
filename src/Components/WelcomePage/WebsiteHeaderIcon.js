/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Html } from '@react-three/drei';

const WebsiteHeaderIcon = ({ pageLayout }) => {
  const [viewPortPosition, setViewPortPosition] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    if (pageLayout === 'mobile') {
      setViewPortPosition([-1.8, 4.3, 1]);
      setSize('12px');
    } else {
      setViewPortPosition([-8.8, 4.8, 0]);
      setSize('20px');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Html
      style={{
        color: '#66b3ff',
        fontSize: size,
        fontFamily: 'sans-serif',
      }}
      position={viewPortPosition}
      transform
    >
      <h3>𐐒</h3>
    </Html>
  );
};

export default WebsiteHeaderIcon;
