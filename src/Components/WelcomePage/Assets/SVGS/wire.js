import React, { useState } from 'react';

const Wire = () => {
  const [iconColor, setIconColor] = useState('white');
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="wireIcon"
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
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        />
      </svg>
    </div>
  );
};

export default Wire;
