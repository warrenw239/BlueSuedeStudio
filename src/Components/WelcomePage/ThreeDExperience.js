/* eslint-disable no-unused-vars */
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { LightBarLight, PrimaryLights, SecondaryLights } from './Lights';
import Background from './Background';
import WebsiteHeader from './WebsiteHeader';
import WebsiteHeaderIcon from './WebsiteHeaderIcon';
import NavButtons from './NavButtons';
import WorldStates from './WorldStates';
import HeaderBackGround from './HeaderBackGround';
import AnimatedTitleMessage from './AnimatedTitleMessage';
import LeftArrow from './LeftArrow';
import Camera from './Camera';
import Lines from './Lines';

// implement prop-types throughout project
// eslint-disable-next-line react/prop-types
const ThreeDExperience = ({ pageLayout, setAppPage }) => {
  const [cameraPlacement, setCameraPlacement] = useState([0, 0, 10]);
  return (
    <Canvas>
      <Camera cameraPlacement={cameraPlacement} />
      {/* <OrbitControls /> */}
      <Suspense fallback={null}>
        <Background />
        <Lines />
        {/* <HeaderBackGround /> */}
        <WebsiteHeaderIcon pageLayout={pageLayout} />
        <WebsiteHeader pageLayout={pageLayout} />
        <NavButtons pageLayout={pageLayout} />
        <AnimatedTitleMessage />
        <WorldStates pageLayout={pageLayout} setAppPage={setAppPage} />
        {/* <LeftArrow
          setCameraPlacement={setCameraPlacement}
          pageLayout={pageLayout}
        /> */}
        <PrimaryLights />
        <SecondaryLights />
        {/* <LightBarLight /> */}
        {/* <ButtonLightBar /> */}
      </Suspense>
    </Canvas>
  );
};
export default ThreeDExperience;
