/* eslint-disable react/prop-types */
import React from 'react';
import Loading from '../LoadingScreen/Loading';
import ThreeDExperience from './ThreeDExperience';
import AboutPage from '../AboutPage/AboutPage';

const WelcomePageHolder = ({
  loadingStatus,
  appPage,
  pageLayout,
  setAppPage,
}) => (
  <>
    {loadingStatus < 5 && <Loading />}
    {appPage === 'welcome' && loadingStatus > 4 && (
      <ThreeDExperience pageLayout={pageLayout} setAppPage={setAppPage} />
    )}
    {appPage === 'about' && loadingStatus > 4 && (
      <AboutPage pageLayout={pageLayout} setAppPage={setAppPage} />
    )}
  </>
);

export default WelcomePageHolder;
