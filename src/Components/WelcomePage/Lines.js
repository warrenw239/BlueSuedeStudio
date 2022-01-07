import React, { useEffect, useRef } from 'react';
import { CubicBezierLine } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Lines = () => {
  const bottomRightLine = useRef();
  //   let holdCurrent = {};
  //   const currentDirectionBottomLine = 'up';

  useFrame(() => {
    // bottomRightLine.current.distEnd.y += 0.1;
    if (bottomRightLine.current.position.y) {
      //   bottomRightLine.current.position.y += 0.01;
    } else {
      bottomRightLine.current.position.y += 0.01;
    }
    // console.info(bottomRightLine.current.distEnd.y);
  });
  useEffect(() => {
    // console.info(bottomRightLine.current);
    // bottomRightLine.current.line.end.y = 10;
    // console.info(bottomRightLine.current.line.end.y);
  }, []);
  return (
    <CubicBezierLine
      ref={bottomRightLine}
      start={[3, -3, 0]} // Starting point
      end={[3, 6, 0]} // Ending point
      midA={[-4, 0, 0]} // First control point
      midB={[0, 1, 5]} // Second control point
      color="white" // Default
      lineWidth={0.5}
      position={[7, -3, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

export default Lines;
