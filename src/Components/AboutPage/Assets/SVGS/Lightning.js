import React, { useState } from 'react';

const Lightning = () => {
  const [iconColor, setIconColor] = useState('white');
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lightningBolt"
        fill="none"
        viewBox="0 0 24 24"
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    </div>
  );
};

export default Lightning;
