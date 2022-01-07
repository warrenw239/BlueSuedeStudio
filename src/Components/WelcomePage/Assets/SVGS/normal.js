import React, { useState } from 'react';

const Normal = () => {
  const [iconColor, setIconColor] = useState('white');
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="normalIcon"
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
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};

export default Normal;
