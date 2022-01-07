/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AboutSub from './AboutSub';
import HeaderBackGround from '../WelcomePage/HeaderBackGround';
import WebsiteHeader from '../WelcomePage/WebsiteHeader';
import WebsiteHeaderIcon from '../WelcomePage/WebsiteHeaderIcon';
import NavButtons from '../WelcomePage/NavButtons';
import Camera from '../WelcomePage/Camera';

const AboutPage = ({ setAppPage, pageLayout }) => {
  const [cameraPlacement, setCameraPlacement] = useState([0, 0, 10]);
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Camera cameraPlacement={cameraPlacement} />
        <HeaderBackGround />
        <WebsiteHeaderIcon pageLayout={pageLayout} />
        <WebsiteHeader pageLayout={pageLayout} />
        <NavButtons pageLayout={pageLayout} />
        <AboutSub setAppPage={setAppPage} />
      </Suspense>
    </Canvas>
  );
};
export default AboutPage;
