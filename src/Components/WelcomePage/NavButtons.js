import React from 'react';
import { Html } from '@react-three/drei';

const NavButtons = () => (
  <Html
    style={{
      color: 'white',
    }}
    position={[5.6, 4.9, 0]}
    transform
  >
    <button
      type="button"
      className="pageButton"
      style={{
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '8px',
        fontFamily: 'serif',
      }}
      onPointerEnter={(e) => {
        e.currentTarget.style.textDecorationColor = 'white';
        e.currentTarget.style.textDecorationLine = 'underline';
      }}
      onPointerLeave={(e) => {
        e.currentTarget.style.textDecorationColor = 'none';
        e.currentTarget.style.textDecorationLine = 'none';
      }}
    >
      <a
        href="/data"
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '8px',
          fontFamily: 'serif',
        }}
      >
        Data Visualization
      </a>
    </button>
    <button
      type="button"
      className="pageButton"
      style={{
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '8px',
        fontFamily: 'serif',
      }}
      onPointerEnter={(e) => {
        e.currentTarget.style.textDecorationColor = 'white';
        e.currentTarget.style.textDecorationLine = 'underline';
      }}
      onPointerLeave={(e) => {
        e.currentTarget.style.textDecorationColor = 'none';
        e.currentTarget.style.textDecorationLine = 'none';
      }}
    >
      <a
        href="/algorithms"
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '8px',
          fontFamily: 'serif',
        }}
      >
        Algorithm Design Display
      </a>
    </button>
    <button
      type="button"
      className="pageButton"
      style={{
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '8px',
        fontFamily: 'serif',
      }}
      onPointerEnter={(e) => {
        e.currentTarget.style.textDecorationColor = 'white';
        e.currentTarget.style.textDecorationLine = 'underline';
      }}
      onPointerLeave={(e) => {
        e.currentTarget.style.textDecorationColor = 'none';
        e.currentTarget.style.textDecorationLine = 'none';
      }}
    >
      <a
        href="https://github.com/warrenw239"
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '8px',
          fontFamily: 'serif',
        }}
      >
        Github Profile
      </a>
    </button>
    <button
      type="button"
      href="/resources"
      style={{
        background: 'none',
        border: 'none',
        color: 'white',
        fontSize: '8px',
        fontFamily: 'serif',
        textDecoration: 'underline',
      }}
      // onPointerEnter={(e) => {
      //   e.currentTarget.style.textDecorationColor = 'white';
      //   e.currentTarget.style.textDecorationLine = 'underline';
      // }}
    >
      Learning Resources
    </button>
  </Html>
);

export default NavButtons;
