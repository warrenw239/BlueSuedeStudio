/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import { Redirect } from 'react-router-dom';
import { WireFrame } from './WireFrame';
import CustomProgram from './CustomProgram';
import StarAnimation from './StarAnimation';
import Standard from './Standard';
import BackGroundStars from './BackGroundStars';
import ChangeWorldButtons from './ChangeWorldButtons';
import DownArrow from './Assets/SVGS/downArrow';

// eslint-disable-next-line react/prop-types
const WorldStates = ({ pageLayout, setAppPage }) => {
  const [useColor, setColor] = useState('white');
  // const lightingBarMat = useRef();
  const aboutNote = useRef();
  const downArrows = useRef();
  const world = useRef();
  const wireWorld = useRef();
  const decayedWorld = useRef();
  const decayedMaterial = useRef();
  const starWorld = useRef();
  const stars = useRef();
  const starMaterial = useRef();

  let holdTime = 0;
  let holdPosition = 0;
  // const trackTime = 0;
  // const reset = false;
  let trackHeight = 'top';
  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    // if (reset) {
    //   trackTime = elapsedTime;
    //   reset = false;
    //   lightingBarMat.current.uLight = 0.75;
    // }
    // if (elapsedTime > trackTime + 2 && elapsedTime < trackTime + 2.25) {
    //   lightingBarMat.current.uLight = 2;
    // }
    // if (elapsedTime > trackTime + 3 && elapsedTime < trackTime + 4) {
    //   lightingBarMat.current.uLight = 0.75;
    // }
    // if (elapsedTime > trackTime + 4 && elapsedTime < trackTime + 4.3) {
    //   lightingBarMat.current.uLight = 2;
    // }
    // if (elapsedTime > trackTime + 4.35 && elapsedTime < trackTime + 4.6) {
    //   lightingBarMat.current.uLight = 0.75;
    // }
    // if (elapsedTime > trackTime + 4.65 && elapsedTime < trackTime + 4.85) {
    //   lightingBarMat.current.uLight = 2;
    // }
    // if (elapsedTime > trackTime + 4.9) {
    //   lightingBarMat.current.uLight = 0.75;
    // }
    // if (elapsedTime - trackTime > 8) {
    //   reset = true;
    // }

    if (!starWorld.current.visible) {
      starWorld.current.position.z = 1;
    }

    if (world.current.visible) {
      world.current.rotation.y = elapsedTime * 0.2;
      world.current.rotation.z = elapsedTime * 0.2;
    }
    if (decayedWorld.current.visible) {
      if (elapsedTime - holdTime > 60) {
        holdTime = elapsedTime;
      }
      decayedMaterial.current.uTime = elapsedTime - holdTime;
    }
    if (wireWorld.current.visible) {
      if (pageLayout === 'mobile') {
        wireWorld.current.position.x = state.mouse.x;
        wireWorld.current.position.y = state.mouse.y;
      } else {
        wireWorld.current.position.x = state.mouse.x * 2 + 4;
        wireWorld.current.position.y = state.mouse.y * 2;
      }
    }
    if (starWorld.current.visible) {
      starWorld.current.rotation.y = -2.5;
      starWorld.current.position.z = 1;
      starWorld.current.position.z = holdPosition - 0.1;
      holdPosition -= 0.1;
      if (starWorld.current.position.z < -4.5) {
        starWorld.current.position.z = -4.5;
        starWorld.current.rotation.x = -2;
        stars.current.visible = true;
      }
    }
    if (aboutNote.current.position) {
      if (aboutNote.current.position.y > -3.6) {
        trackHeight = 'top';
      } else if (aboutNote.current.position.y < -3.9) {
        trackHeight = 'bottom';
      }
      if (trackHeight === 'top') {
        aboutNote.current.position.y -= 0.002;
      }
      if (trackHeight === 'bottom') {
        aboutNote.current.position.y += 0.002;
      }
    }
  });

  const changePlanet1 = () => {
    decayedWorld.current.visible = true;
    decayedWorld.current.rotation.z = 0.5;
    decayedWorld.current.rotation.x = 0.5;
    decayedWorld.current.rotation.y = -0.8;
    world.current.visible = false;
    wireWorld.current.visible = false;
    starWorld.current.visible = false;
    stars.current.visible = false;
  };
  const changePlanet2 = () => {
    world.current.visible = false;
    decayedWorld.current.visible = false;
    wireWorld.current.visible = true;
    starWorld.current.visible = false;
    stars.current.visible = false;
  };
  const changePlanet3 = () => {
    world.current.visible = false;
    decayedWorld.current.visible = false;
    wireWorld.current.visible = false;
    holdPosition = 0;
    starWorld.current.position.z = 0;
    starWorld.current.rotation.x = 0;
    starWorld.current.visible = true;
    stars.current.visible = false;
  };
  const changePlanet4 = () => {
    world.current.visible = true;
    decayedWorld.current.visible = false;
    wireWorld.current.visible = false;
    starWorld.current.visible = false;
    stars.current.visible = false;
  };

  return (
    <>
      <CustomProgram
        reference={decayedWorld}
        materialReference={decayedMaterial}
        pageLayout={pageLayout}
      />
      <WireFrame reference={wireWorld} pageLayout={pageLayout} />
      <StarAnimation
        reference={starWorld}
        materialReference={starMaterial}
        pageLayout={pageLayout}
      />
      <Standard reference={world} pageLayout={pageLayout} />
      {/* <ButtonLightBar /> */}
      <BackGroundStars reference={stars} />
      <ChangeWorldButtons
        changePlanet1={changePlanet1}
        changePlanet2={changePlanet2}
        changePlanet3={changePlanet3}
        changePlanet4={changePlanet4}
        pageLayout={pageLayout}
      />
      <>
        <Text
          scale={[2.5, 2.5, 2.5]}
          position={[0.05, -3.4, 0]}
          ref={aboutNote}
          onClick={() => setAppPage('about')}
          color={useColor}
          onPointerOver={() => {
            downArrows.current.style.color = 'blue';
            setColor('#66b3ff');
          }}
          onPointerLeave={() => setColor('white')}
        >
          about
        </Text>
        <Html
          position={[0, -3.8, 1.2]}
          transform
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          onClick={() => setAppPage('about')}
          onPointerOver={() => setColor('#66b3ff')}
          onPointerLeave={() => setColor('white')}
          ref={downArrows}
        >
          <div
            style={{
              marginLeft: '5px',
            }}
          >
            <DownArrow />
          </div>
        </Html>
      </>
    </>
  );
};

export default WorldStates;
