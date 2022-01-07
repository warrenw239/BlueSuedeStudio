/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import React, { useRef, useState } from 'react';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextureLoader } from 'three';
import { useLoader, extend, useFrame } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { Html } from '@react-three/drei';
import Roboto from './Assets/Roboto_Regular.json';
import smoke from './Assets/Textures/smoke-1.png';

const AnimatedTitleMessage = () => {
  const [smokeMap] = useLoader(TextureLoader, [smoke]);

  // const font = new FontLoader().parse(Roboto);
  // extend({ TextGeometry });
  const [useColor, setColor] = useState('#b3b3b3');
  // const textOptions = {
  //   font,
  //   size: 1.5,
  //   height: 0.1,
  // };

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();
  const ref9 = useRef();
  const ref10 = useRef();
  const ref11 = useRef();
  const ref12 = useRef();
  const ref13 = useRef();
  const ref14 = useRef();
  const ref15 = useRef();
  const ref16 = useRef();
  const ref17 = useRef();
  const ref18 = useRef();
  const ref19 = useRef();
  const ref20 = useRef();
  const ref21 = useRef();

  useFrame(() => {
    ref1.current.rotation.z += 0.004;
    ref2.current.rotation.z += 0.001;
    ref3.current.rotation.z += 0.0015;
    ref4.current.rotation.z += 0.0003;
    ref5.current.rotation.z += 0.001;
    ref6.current.rotation.z += 0.0003;
    ref7.current.rotation.z += 0.0005;
    ref8.current.rotation.z += 0.0023;
    ref9.current.rotation.z -= 0.0028;
    ref10.current.rotation.z += 0.0014;
    ref11.current.rotation.z += 0.0009;
    ref12.current.rotation.z -= 0.002;
    ref13.current.rotation.z -= 0.00087;
    ref14.current.rotation.z += 0.003;
    ref15.current.rotation.z -= 0.003;
    ref16.current.rotation.z += 0.002;
    ref17.current.rotation.z -= 0.002;
    ref18.current.rotation.z += 0.004;
    ref19.current.rotation.z += 0.0022;
    ref20.current.rotation.z += 0.0022;
    ref21.current.rotation.z -= 0.0025;
  });

  return (
    <>
      <Html position={[-4, 1.3, 0.2]} transform>
        <h1
          style={{
            color: 'white',
            background: 'none',
            fontSize: '85px',
          }}
        >
          Welcome
        </h1>
      </Html>
      <Html position={[-4, 0.2, 0.2]} transform>
        <h1
          style={{
            color: 'white',
            background: 'none',
            fontSize: '10px',
          }}
        >
          Blue Suede - A Full Stack Web Development and Software Studio
        </h1>
      </Html>
      <Html position={[-4, -0.5, 0.2]} transform>
        <h3
          style={{
            color: useColor,
            background: 'none',
            fontSize: '10px',
          }}
          onPointerEnter={() => setColor('#66b3ff')}
          onPointerLeave={() => setColor('#b3b3b3')}
        >
          (explore the abyss)
        </h3>
      </Html>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref1}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref2}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref3}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref4}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref5}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref6}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref7}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref8}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref9}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref10}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref11}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref12}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref13}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref14}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref15}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref16}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref17}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref18}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref19}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref20}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh
        position={[
          -11 * Math.random(),
          5 * Math.random() - 4,
          -2 * Math.random(),
        ]}
        ref={ref21}
      >
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh position={[-5, 4, -1]} rotation={[0, 0, 1.5]}>
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh position={[2, -4, -1]} rotation={[0, 0, 1.5]}>
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
      <mesh position={[-7, 3.5, -1]} rotation={[0, 0, 2]}>
        <planeBufferGeometry args={[10, 10]} />
        <meshLambertMaterial transparent map={smokeMap} color="#a6a6a6" />
      </mesh>
    </>
  );
};

export default AnimatedTitleMessage;
