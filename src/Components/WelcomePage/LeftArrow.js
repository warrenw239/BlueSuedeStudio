/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Html } from '@react-three/drei';

const LeftArrow = ({ setCameraPlacement, pageLayout }) => {
  const [viewPortPosition, setViewPortPosition] = useState();

  useEffect(
    () =>
      pageLayout === 'mobile'
        ? setViewPortPosition([0, -1.3, 1.1])
        : setViewPortPosition([-3, -2.5, 0]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <Html position={viewPortPosition} transform>
      <button
        type="button"
        onClick={() => {
          setCameraPlacement([-4, 0, 10]);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
    </Html>
  );
};

export default LeftArrow;
