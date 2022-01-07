/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import { Link } from 'react-router-dom';
import PixelRain from './PixelRain';
import PixelFire from './PixelFire';
import PixelColorWind from './PixelColorWind';
import PlanetOne from './Images/planet.svg';
import PlanetTwo from './Images/planet-2.svg';
import PlanetThree from './Images/planet-3.svg';
import PlanetFour from './Images/planet-4.svg';
import InteractiveParticles from './InteractiveParticles';

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background: #131313;
`;
const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 1rem 0;
    font-size: 2rem;
    line-height: 1.1;
    color: white;
    align-self: center;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  select {
    color: white;
    margin: 2rem 0;
    font-size: 1.5rem;
    line-height: 1.1;
    background: #131313;
    border-color: #131313;
    padding: 0rem 2rem;
  }
  ${Image}:nth-child(1) {
    top: 100px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: 170px;
    left: 100px;
  }
  ${Image}:nth-child(3) {
    bottom: 100px;
    right: 105px;
  }
  div:nth-child(1) {
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    div:nth-child(1) {
      display: flex;
      flex-direction: row;
      button:nth-child(1) {
        margin: 0rem;
        padding: 0rem;
        background: #131313;
        border: #131313;
        a {
          font-size: 2.5rem;
          background: #131313;
          border: #131313;
          color: #66b3ff;
          font-weight: bold;
          margin: 0rem;
          padding: 0rem;
          text-decoration: none;
        }
      }
      button:nth-child(2) {
        margin: 0rem;
        padding: 0rem;
        background: #131313;
        border: #131313;
        a {
          font-size: 1.5rem;
          background: #131313;
          border: #131313;
          color: white;
          margin: 0rem;
          padding: 0rem;
          text-decoration: none;
        }
      }
    }
    div:nth-child(2) {
      display: flex;
      flex-direction: row;
      button {
        background: #131313;
        border: #131313;
        a {
          font-size: 1rem;
          background: #131313;
          border: #131313;
          color: white;
        }
      }
    }
  }

  div:nth-child(4) {
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    button:nth-child(1) {
      padding: 0.5rem 2rem;
      font-size: 1rem;
      border: 2px solid #fff;
      border-radius: 10px;
      outline: none;
      cursor: pointer;
      background: transparent;
      color: #fff;
      margin-top: 20px;
    }
    button:nth-child(2) {
      padding: 0.5rem 2rem;
      font-size: 1rem;
      border: 2px solid #fff;
      border-radius: 10px;
      outline: none;
      cursor: pointer;
      background: transparent;
      color: #fff;
      margin-top: 20px;
      margin-left: 20px;
    }
  }
`;

const AlgorithmDisplay = ({ appPage }) => {
  const [section, setSection] = useState('interactive');
  const [leftDisplay, setLeftDisplay] = useState(1);
  const transition = useTransition(leftDisplay, {
    from: { x: 300, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1, delay: 1000 },
    leave: { x: -300, y: 0, opacity: 0 },
  });

  const fadeLeft = {
    hidden: { opacity: 0, x: -500 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section>
      <Container>
        <div>
          <div>
            <button type="button">
              <a href="/">𐐒</a>
            </button>
            <button type="button">
              <a href="/">Blue Suede Studio</a>
            </button>
          </div>
          <div>
            <button type="button">
              <a href="/data">Data/Sound Visualisation</a>
            </button>
            <button type="button">
              <a href="https://github.com/warrenw239">Github Profile</a>
            </button>
            <button type="button">
              <a href="/resources">Learning Resources</a>
            </button>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          Algorithm Design Display: A visuals collection built with Javascript
          and GLSL
        </motion.p>
        <div>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2 }}
          >
            <select
              defaultValue="interactive"
              onChange={(e) => setSection(e.target.value)}
            >
              <option value="interactive">Interactive Pixel Algorithms</option>
              <option value="animated">Animated Pixel Algorithms</option>
            </select>
          </motion.p>
          <div className="animationHolder">
            {section === 'interactive' &&
              transition((style, item) => (
                <animated.div style={style} className="item">
                  <InteractiveParticles />
                </animated.div>
              ))}

            {section === 'animated' &&
              transition((style, item) => {
                if (item === 2) {
                  return (
                    <animated.div style={style} className="item">
                      <PixelRain />
                    </animated.div>
                  );
                }
                if (item === 1) {
                  return (
                    <animated.div style={style} className="item">
                      <PixelColorWind />
                    </animated.div>
                  );
                }
                if (item === 3) {
                  return (
                    <animated.div style={style} className="item">
                      <PixelFire />
                    </animated.div>
                  );
                }
                return <p />;
              })}
          </div>
        </div>
        {section === 'animated' && (
          <div>
            {leftDisplay > 1 && (
              <button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 0.95,
                  backgroundColor: '#67F6E7',
                  border: 'none',
                  color: '#000',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.5 } }}
                onClick={() => {
                  setLeftDisplay(leftDisplay - 1);
                }}
              >
                Back
              </button>
            )}
            {leftDisplay < 3 && (
              <button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 0.95,
                  backgroundColor: '#67F6E7',
                  border: 'none',
                  color: '#000',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.5 } }}
                onClick={() => {
                  setLeftDisplay(leftDisplay + 1);
                }}
              >
                Next
              </button>
            )}
          </div>
        )}
        <Image
          src={PlanetOne}
          alt="planet"
          whileTap={{ scale: 0.9 }}
          drag
          dragConstraints={{ left: 0, right: 50, top: 50, bottom: 200 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.7, y: 100, transition: { duration: 1 } }}
        />
        <Image
          src={PlanetTwo}
          alt="planet"
          whileTap={{ scale: 0.6 }}
          drag
          dragConstraints={{ left: 300, right: 700, top: 550, bottom: 550 }}
          initial={{ opacity: 0, y: 0, x: 100 }}
          animate={{
            opacity: 0.2,
            y: 550,
            x: 500,
            transition: { duration: 1 },
          }}
        />
        <Image
          src={PlanetThree}
          alt="planet"
          whileTap={{ scale: 0.6 }}
          drag
          dragConstraints={{ left: 800, right: 1400, top: 100, bottom: 600 }}
          initial={{ opacity: 0, y: -100, x: 0 }}
          animate={{
            opacity: 0.5,
            y: 300,
            x: 1200,
            transition: { duration: 1 },
          }}
        />
        <Image
          src={PlanetFour}
          alt="planet"
          whileTap={{ scale: 0.9 }}
          drag
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 200 }}
          initial={{ opacity: 0, y: 100, x: 0 }}
          animate={{
            opacity: 0.9,
            y: 200,
            x: 100,
            transition: { duration: 1 },
          }}
        />
      </Container>
    </Section>
  );
};

export default AlgorithmDisplay;

// reactive background based on displaying pixel or glsl algos
