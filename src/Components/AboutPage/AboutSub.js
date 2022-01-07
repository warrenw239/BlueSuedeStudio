/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { extend, useFrame, useLoader } from '@react-three/fiber';
import { Html, shaderMaterial, Text } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
import CustomSinCurve from './CustomSinCurve';
import sapphireColor from './Assets/Textures/Sapphire_001_COLOR.jpg';
import sapphireDisplacement from './Assets/Textures/Sapphire_001_DISP.png';
import sapphireNormal from './Assets/Textures/Sapphire_001_NORM.jpg';
import sapphireOcclusion from './Assets/Textures/Sapphire_001_OCC.jpg';
import sapphireRoughness from './Assets/Textures/Sapphire_001_ROUGH.jpg';

const CurveBarShaderMaterial = shaderMaterial(
  // uniform
  {
    // uMouseY: { value: 0 },
    uTime: { value: 0 },
    uLight: { value: 0.9 },
    uColor: new THREE.Color(0.0, 0.0, 0.0, 0.0),
  },
  // vertex Shader
  glsl`
      varying vec2 vUv;
      // uniform float uMouseY;
  
      void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position * 5.0, 1.0);
          vUv = uv;
      }
    `,
  // fragment Shader
  glsl`
    precision mediump float;
    uniform float uLight;
    uniform vec3 uColor; 
    uniform float uTime;
    varying vec2 vUv; 
  

  void main()
  {
      float strength = 0.8 - distance(vUv, vec2(0.5));
      gl_FragColor = vec4(uColor * strength * uLight, 1.0);
  } 
  
  
    `
);
extend({ CurveBarShaderMaterial });
const BackGroundMaterial = shaderMaterial(
  // uniform
  {
    uMouseY: { value: 0.0 },
    uColor: new THREE.Color(0.0, 0.0, 0.0, 0.0),
  },
  // vertex Shader
  glsl`
      varying vec2 vUv;
  
      void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vUv = uv;
      }
    `,
  // fragment Shader
  glsl`
    precision mediump float;
    uniform vec3 uColor; 
    uniform float uMouseY;
    varying vec2 vUv; 
  

  void main()
  {
    float strength = 0.05 * uMouseY * 2.3 / (distance(vec2(vUv.x, (vUv.y - 0.6) * 5.0 + 0.5), vec2(0.5)));
    strength *= 0.05 * uMouseY * 2.3 / (distance(vec2(vUv.y, (vUv.x - 0.5) * 5.0 + 0.5), vec2(0.5)));
      gl_FragColor = vec4(uColor * strength, 1.0);
  } 
  
  
    `
);
extend({ BackGroundMaterial });
const DishMaterial = shaderMaterial(
  // uniform
  {
    uMouseY: { value: 0 },
    uColor: new THREE.Color(0.0, 0.0, 0.0, 0.0),
  },
  // vertex Shader
  glsl`
      varying vec2 vUv;
  
      void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vUv = uv;
      }
    `,
  // fragment Shader
  glsl`
    precision mediump float;
    uniform vec3 uColor; 
    uniform float uMouseY;
    varying vec2 vUv; 
  

  void main()
  {
      gl_FragColor = vec4(uColor * strength, 1.0);
  } 
  
  
    `
);
extend({ DishMaterial });
const LightBarMaterial = shaderMaterial(
  // uniform
  {
    uLight: { value: 1 },
    uColor: new THREE.Color(0.0, 0.0, 0.0, 0.0),
  },
  // vertex Shader
  glsl`
    varying vec2 vUv;
    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vUv = uv;
    }
  `,
  // fragment Shader
  glsl`
  precision mediump float;
  uniform vec3 uColor; 
  varying vec2 vUv; 
  void main() {
    float strength = max(abs(vUv.x - 0.9), abs(vUv.y - 0.5));
    gl_FragColor = vec4(uColor * strength * 3.0, 1.0);
  }
  `
);
extend({ LightBarMaterial });

const trackTime = 0;

let reset = false;
let light1Status = true;
let light2Status = true;
let showingText = true;
let showingFrontEnd = false;
let showingBackEnd = false;
let showingMisc = false;

const AboutSub = ({ setAppPage }) => {
  const [colorMap, displacementMap, normalMap, occlusionMap, roughnessMap] =
    useLoader(TextureLoader, [
      sapphireColor,
      sapphireDisplacement,
      sapphireNormal,
      sapphireOcclusion,
      sapphireRoughness,
    ]);

  const techHeader = useRef();
  const frontEnd = useRef();
  const backEnd = useRef();
  const misc = useRef();
  const frontEndText = useRef();
  const backEndText = useRef();
  const miscText = useRef();
  const lightbars = useRef();
  const dish = useRef();
  const dishMat = useRef();
  const backArrow = useRef();
  const mouseLight = useRef();
  const leftLight = useRef();
  const leftLightMaterial = useRef();
  const rightLight = useRef();
  const rightLightMaterial = useRef();
  const backGroundMaterial = useRef();
  const html = useRef();

  const trackCount = 0;
  const trackCount2 = 0;

  useFrame(({ clock, mouse }) => {
    const timer = clock.getElapsedTime();
    // leftLightMaterial.current.uMouseY = mouse.y;
    // rightLightMaterial.current.uMouseY = mouse.y;
    backGroundMaterial.current.uMouseY = mouse.y;
    if (!showingText) {
      //   leftLight.current.visible = false;
      //   rightLight.current.visible = false;
      html.current.visible = false;
      dish.current.visible = true;
      mouseLight.current.visible = true;
      techHeader.current.visible = false;
      mouseLight.current.position.x = mouse.x;
      mouseLight.current.position.y = mouse.y;
      frontEnd.current.visible = false;
      backEnd.current.visible = false;
      misc.current.visible = false;
      lightbars.current.visible = false;
      backArrow.current.visible = true;
      // lightningIcon.current.visible = false;
      if (showingFrontEnd) {
        frontEndText.current.visible = true;
      }
      if (showingBackEnd) {
        backEndText.current.visible = true;
      }
      if (showingMisc) {
        miscText.current.visible = true;
      }
    } else {
      // lightningIcon.current.visible = true;
      mouseLight.current.visible = false;
      dish.current.visible = false;
      //   leftLight.current.visible = true;
      //   rightLight.current.visible = true;
      html.current.visible = true;
      lightbars.current.visible = true;
      frontEnd.current.visible = true;
      backEnd.current.visible = true;
      misc.current.visible = true;
      frontEndText.current.visible = false;
      backEndText.current.visible = false;
      miscText.current.visible = false;
      backArrow.current.visible = false;
      techHeader.current.visible = true;
    }

    // if (reset) {
    //   trackTime = timer;
    //   trackCount = 0;
    //   trackCount2 = 0;
    //   reset = false;
    // }

    // if (light1Status === true) {
    //   leftLightMaterial.current.uLight = timer + 0.3;
    //   if (leftLightMaterial.current.uLight >= 3.1) {
    //     leftLightMaterial.current.uLight = 3.1;
    //   }
    // }
    // if (light1Status === false) {
    //   if (timer > trackTime + 0.15) {
    //     leftLightMaterial.current.uLight = 1.5;
    //     if (timer > trackTime + 0.3) {
    //       leftLightMaterial.current.uLight = 0.3;
    //       trackTime += 0.7;
    //       trackCount += 1;
    //       if (trackCount >= 3) {
    //         // eslint-disable-next-line no-param-reassign
    //         light1Status = true;
    //         reset = false;
    //       }
    //     }
    //   }
    // }
    // if (light2Status === true) {
    //   rightLightMaterial.current.uLight = timer + 0.3;
    //   if (rightLightMaterial.current.uLight >= 3.1) {
    //     rightLightMaterial.current.uLight = 3.1;
    //   }
    // }
    // if (light2Status === false) {
    //   if (timer > trackTime + 0.15) {
    //     rightLightMaterial.current.uLight = 1.5;
    //     if (timer > trackTime + 0.22) {
    //       rightLightMaterial.current.uLight = 0.3;
    //       trackTime += 0.5;
    //       trackCount2 += 1;
    //       if (trackCount2 >= 3) {
    //         // eslint-disable-next-line no-param-reassign
    //         light2Status = true;
    //         reset = false;
    //       }
    // }
    //   }
    // }
  });
  const path = new CustomSinCurve(0.2);
  const [useColor, setColor] = useState('white');
  return (
    <>
      {/* <mesh ref={leftLight} position={[100, 40, -80]} rotation={[0.3, 0, 1.3]}>
        <tubeBufferGeometry args={[path, 8, 0.1, 2, false]} />
        <curveBarShaderMaterial uColor="white" ref={leftLightMaterial} />
      </mesh>
      <mesh ref={rightLight} position={[105, 40, -80]} rotation={[0, 3.2, 1.4]}>
        <tubeBufferGeometry args={[path, 8, 0.1, 2, false]} />
        <curveBarShaderMaterial uColor="white" ref={rightLightMaterial} />
      </mesh> */}
      <Html
        // transform
        position={[-8, 3.5, 1]}
        style={{
          fontSize: '20px',
          color: useColor,
          width: '200px',
          textDecoration: 'underline',
          textDecorationColor: '#66b3ff',
        }}
      >
        <h3
          onClick={() => {
            console.info('click');
            setAppPage('welcome');
          }}
          onMouseEnter={() => setColor('#66b3ff')}
          onMouseLeave={() => setColor('white')}
        >
          Welcome Page
        </h3>
      </Html>
      <mesh
        position={[0, 0, -80]}
        onPointerEnter={() => {
          reset = true;
          light1Status = false;
          light2Status = false;
        }}
        onClick={() => {
          reset = true;
          light1Status = false;
          light2Status = false;
        }}
      >
        <planeBufferGeometry args={[400, 200]} />
        <backGroundMaterial uColor="#66b3ff" ref={backGroundMaterial} />
      </mesh>
      <Text ref={html} color="white" anchorX="center" anchorY="middle">
        <Text position={[-0, 1.7, -0.5]} scale={[3, 3, 3]}>
          About Blue Suede Studio
        </Text>
        <Text position={[-0, 1, -0.5]} scale={[1.7, 1.7, 1.7]}>
          Thanks for checking out my personal website. My name is Warren and
          I&apos;m a Web Developer from the United States
        </Text>
        <Text position={[-2.8, 0.4, -0.5]} scale={[2.5, 2.5, 2.5]}>
          Premium Web Experiences:
        </Text>
        <Text position={[-1.47, 0, -0.5]} scale={[1.7, 1.7, 1.7]}>
          Functional, engaging & custom experiences are what I create for my
          clients
        </Text>
        <Text position={[-2.07, -0.4, -0.5]} scale={[1.7, 1.7, 1.7]}>
          This Website is my example of what is possible on the web
        </Text>
      </Text>
      <Text
        scale={[2.5, 2.5, 2.5]}
        position={[-2.25, -1, 0]}
        color="white"
        anchorX="center"
        anchorY="middle"
        ref={techHeader}
      >
        Technologies & Libraries I Use:
      </Text>
      <Text
        scale={[2.5, 2.5, 2.5]}
        position={[-3, -1.6, 0]}
        color="white"
        anchorX="center"
        anchorY="middle"
        ref={frontEnd}
        onClick={() => {
          showingText = false;
          showingFrontEnd = true;
          showingBackEnd = false;
          showingMisc = false;
        }}
        onPointerOver={() => {
          frontEnd.current.color = '#005ce6';
        }}
        onPointerLeave={() => (frontEnd.current.color = 'white')}
      >
        Front End
      </Text>
      <Text
        scale={[2.5, 2.5, 2.5]}
        position={[0, -1.6, 0]}
        color="white"
        anchorX="center"
        anchorY="middle"
        ref={backEnd}
        onClick={() => {
          showingText = false;
          showingBackEnd = true;
          showingFrontEnd = false;
          showingMisc = false;
        }}
        onPointerOver={() => (backEnd.current.color = '#005ce6')}
        onPointerLeave={() => (backEnd.current.color = 'white')}
      >
        Back End
      </Text>
      <Text
        scale={[2.0, 2.0, 2.0]}
        color="white"
        anchorX="center"
        anchorY="middle"
        visible={false}
        ref={frontEndText}
      >
        <Text position={[0, 0.5, 0]}>- React</Text>
        <Text position={[0, 0.4, 0]}>- TailWind CSS</Text>
        <Text position={[0, 0.3, 0]}>- React Hook Forms</Text>
        <Text position={[0, 0.2, 0]}>- YUP Validation</Text>
        <Text position={[0, 0.1, 0]}>- I18Next Translation</Text>
        <Text position={[0, 0, 0]}>- Redux & Redux Saga</Text>
        <Text position={[0, -0.1, 0]}>- Three JS & GLSL</Text>
        <Text position={[0, -0.2, 0]}>- React Three Fiber</Text>
        <Text position={[0, -0.3, 0]}>- React Drei</Text>
        <Text position={[0, -0.4, 0]}>- React Spring</Text>
      </Text>
      <Text
        scale={[2.0, 2.0, 2.0]}
        color="white"
        anchorX="center"
        anchorY="middle"
        visible={false}
        ref={backEndText}
      >
        <Text position={[0, 0.2, 0]}>- Node & Express</Text>
        <Text position={[0, 0.1, 0]}>- Mysql</Text>
        <Text position={[0, 0, 0]}>- MongoDB and Mongoose</Text>
      </Text>
      <Text
        scale={[2.0, 2.0, 2.0]}
        color="white"
        anchorX="center"
        anchorY="middle"
        visible={false}
        ref={miscText}
      >
        <Text position={[0, 0.2, 0]}>- Husky</Text>
        <Text position={[0, 0.1, 0]}>- ESLint</Text>
        <Text position={[0, 0, 0]}>- Auth0</Text>
        <Text position={[0, -0.1, 0]}>- Microsoft Authentication</Text>
        <Text position={[0, -0.2, 0]}>- WebPack</Text>
      </Text>

      <mesh position={[0, 0, -1]} ref={dish}>
        <circleBufferGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          map={colorMap}
          aoMap={occlusionMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          ref={dishMat}
        />
      </mesh>
      <pointLight
        position={[0, 0, 2]}
        distance={5}
        intensity={0.28}
        ref={mouseLight}
      />
      <Text
        scale={[2.5, 2.5, 2.5]}
        position={[3, -1.6, 0]}
        color="white"
        anchorX="center"
        anchorY="middle"
        ref={misc}
        onClick={() => {
          showingText = false;
          showingMisc = true;
          showingBackEnd = false;
          showingFrontEnd = false;
        }}
        onPointerOver={() => (misc.current.color = '#005ce6')}
        onPointerLeave={() => (misc.current.color = 'white')}
      >
        Misc.
      </Text>
      <group ref={lightbars}>
        <mesh position={[-3, -1.8, 0]} rotation={[0.9, 0, -1.57]}>
          <cylinderBufferGeometry args={[0.01, 0.01, 1, 5]} />
          <lightBarMaterial uColor="white" />
        </mesh>
        <mesh position={[0, -1.8, 0]} rotation={[0.9, 0, -1.57]}>
          <cylinderBufferGeometry args={[0.01, 0.01, 1, 5]} />
          <lightBarMaterial uColor="white" />
        </mesh>
        <mesh position={[3, -1.8, 0]} rotation={[0.9, 0, -1.57]}>
          <cylinderBufferGeometry args={[0.01, 0.01, 1, 5]} />
          <lightBarMaterial uColor="white" />
        </mesh>
      </group>
      <Text
        scale={[2.5, 2.5, 2.5]}
        position={[-3, 0, 0]}
        ref={backArrow}
        onClick={() => {
          showingText = true;
        }}
        onPointerOver={() => (backArrow.current.color = '#005ce6')}
        onPointerLeave={() => (backArrow.current.color = 'white')}
      >
        About
      </Text>
      <Text
        scale={[1.5, 1.5, 1.5]}
        position={[-4, -2.2, 0]}
        onPointerOver={() => (backArrow.current.color = 'red')}
        onPointerLeave={() => (backArrow.current.color = 'white')}
      >
        Contact me: warrenw239@gmail.com
      </Text>
    </>
  );
};

export default AboutSub;
