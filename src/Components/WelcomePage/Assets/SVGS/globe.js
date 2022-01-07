import React, { useState } from 'react';

const Globe = () => {
  const [iconColor, setIconColor] = useState('white');

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="globeIcon"
        fill="none"
        viewBox="0 -2 24 24"
        stroke={iconColor}
        onPointerEnter={() => {
          setIconColor('#66b3ff');
        }}
        onPointerLeave={() => {
          setIconColor('white');
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a1 2 0 012 2v1a2 2 0 002 2 2 2 0 013 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};

export default Globe;
