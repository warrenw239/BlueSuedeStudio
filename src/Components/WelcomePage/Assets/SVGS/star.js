import React, { useState } from 'react';

const Star = () => {
  const [iconColor, setIconColor] = useState('white');
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="starIcon"
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
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    </div>
  );
};

export default Star;
