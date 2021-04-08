import React, { useState, useRef, useEffect, Suspense } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import KitmLogo from "./components/Three/KitmLogo";
import Controls from "./components/Three/Controls";
import Lights from "./components/Three/Lights";
import MainPage from "./Pages/MainPage";
import KitmLogoSmall from "./components/Three/KitmLogoSmall";
import HoveringIcons from "./components/HoveringIcons";
import MoreInfoCovers from "./components/MoreInfoCovers";

function App() {
  const [finishedAnimation, setFinishedAnimation] = useState(false);
  const [switchPressed, setSwitchPressed] = useState(false);

  const [props, set, stop] = useSpring(() => ({
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 },
  }));

  return (
    <div
      className="App"
      onMouseMove={({ clientX, clientY }) => {
        const x = (clientX / window.innerWidth) * 2 - 1;
        const y = (clientY / window.innerHeight) * 2 + 1;

        set({
          rotation: [0, x * (Math.PI / 3) * 0.3, y * (Math.PI / 3) * 0.25 - 0.3],
        });
      }}
      onTouchMove={(e) => {
        const x = (e.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
        const y = (e.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
        console.log(x, y);

        set({
          rotation: [0, x * (Math.PI / 3) * 0.8, y * (Math.PI / 3) * 0.45 - 0.3],
        });
      }}
    >
      {true ? (
        <MainPage
          pos={props.pos}
          rot={props.rotation}
          setFinishedAnimation={setFinishedAnimation}
          finishedAnimation={finishedAnimation}
          switchPressed={switchPressed}
          setSwitchPressed={setSwitchPressed}
        />
      ) : (
        <Canvas
          className="FullCanvas"
          camera={{ fov: 40, position: [0, 0, 0] }}
          onCreated={({ gl }) => {
            console.log(gl);
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}
        >
          <Controls />
          <Suspense fallback={null}>
            <KitmLogo
              pos={props.pos}
              rot={props.rotation}
              setFinishedAnimation={setFinishedAnimation}
              finishedAnimation={finishedAnimation}
            />
          </Suspense>

          <Lights />
        </Canvas>
      )}
      <HoveringIcons />
      {switchPressed && (
        <>
          <MoreInfoCovers switchPressed={switchPressed} bottom={false} main={true} />
          <MoreInfoCovers switchPressed={switchPressed} bottom={true} main={false} />
        </>
      )}
    </div>
  );
}

export default App;

/*
      {true ? (
        <MainPage
          pos={props.pos}
          rot={props.rotation}
          setFinishedAnimation={setFinishedAnimation}
          finishedAnimation={finishedAnimation}
        />
      ) : (
        <Canvas
          className="FullCanvas"
          camera={{ fov: 40, position: [-22, 0, 0] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
          }}
        >
          <Controls />
          <Suspense fallback={null}>
            <KitmLogo
              pos={props.pos}
              rot={props.rotation}
              setFinishedAnimation={setFinishedAnimation}
              finishedAnimation={finishedAnimation}
            />
          </Suspense>

          <Lights />
        </Canvas>
      )}
*/
