import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlgorithmDisplay from './Components/AlgorithmDisplay/AlgorithmDisplay';
import UnderConstruction from './Components/UnderConstruction';
import WelcomePageHolder from './Components/WelcomePage/WelcomePageHolder';

export default function App() {
  const [appPage, setAppPage] = useState('welcome');
  const [loadingStatus, setLoadingStatus] = useState(0);
  const [pageLayout, setPageLayout] = useState('');
  useEffect(() => {
    if (window.innerHeight / window.innerWidth > 0.58) {
      setPageLayout('mobile');
    } else {
      setPageLayout('desktop');
    }
    setTimeout(() => {
      setLoadingStatus(5);
    }, 3500);
  }, []);

  return (
    // implement object movement for all visuals throughout app
    // create mobile indicators for visuals
    // implement notification for mobile users on load about experience
    // implement routes for the about page and learning resources and ADD page
    // implement loading screen using suspense rather than timeouts
    // implement contact page with react three forms and fiber
    // implement better typography

    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <WelcomePageHolder
                loadingStatus={loadingStatus}
                appPage={appPage}
                pageLayout={pageLayout}
                setAppPage={setAppPage}
              />
            }
          />
          <Route
            exact
            path="/algorithms"
            element={<AlgorithmDisplay appPage={appPage} />}
          />
          <Route exact path="/data" element={<UnderConstruction />} />
          <Route exact path="/resources" element={<UnderConstruction />} />
        </Routes>
      </Router>
    </>
  );
}
