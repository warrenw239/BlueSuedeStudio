/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Html } from '@react-three/drei';
import Globe from './Assets/SVGS/globe';
import Wire from './Assets/SVGS/wire';
import Star from './Assets/SVGS/star';
import Normal from './Assets/SVGS/normal';

const ChangeWorldButtons = ({
  changePlanet1,
  changePlanet2,
  changePlanet3,
  changePlanet4,
  pageLayout,
}) => {
  const [viewPortPosition, setViewPortPosition] = useState();

  useEffect(
    () =>
      pageLayout === 'mobile'
        ? setViewPortPosition([0, -1.3, 1.1])
        : setViewPortPosition([4, -1.3, 1.1]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Html position={viewPortPosition} transform>
      <button
        type="button"
        onClick={changePlanet1}
        style={{
          color: 'white',
          background: 'none',
          marginLeft: '4px',
          borderStyle: 'none',
        }}
      >
        <Globe />
      </button>
      <button
        type="button"
        onClick={changePlanet2}
        style={{
          color: 'white',
          background: 'none',
          marginLeft: '4px',
          borderStyle: 'none',
        }}
      >
        <Wire />
      </button>
      <button
        type="button"
        onClick={changePlanet3}
        style={{
          color: 'white',
          background: 'none',
          marginLeft: '4px',
          borderStyle: 'none',
        }}
      >
        <Star />
      </button>
      <button
        type="button"
        onClick={changePlanet4}
        style={{
          color: 'white',
          background: 'none',
          marginLeft: '4px',
          borderStyle: 'none',
        }}
      >
        <Normal />
      </button>
    </Html>
  );
};
export default ChangeWorldButtons;
