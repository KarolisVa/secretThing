import React, { Suspense, useRef } from "react";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { useSpring, a } from "react-spring/three";
import { Canvas } from "react-three-fiber";
import KitmLogoSmall from "../components/Three/KitmLogoSmall";

import Lights from "../components/Three/Lights";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Stars } from "@react-three/drei/Stars";
import { useFrame, extend, useThree } from "react-three-fiber";
import Controls from "../components/Three/Controls";

import PrograminesIrangosTestuotojas from "../components/Three/PrograminesIrangosTestuotojas";
import Kosmonautas from "../components/Three/Kosmonautas";
import Satalitas from "../components/Three/SATALITAS";
import Zeme from "../components/Three/ZEME";
import Glasstest from "../components/Three/Glasstest";
import Veidrodis from "../components/Three/Veidrodis";
import Tekstas from "../components/Three/Tekstas";
import Palidov from "../components/Three/Palidov";
import Remas from "../components/Three/Remas";
import Keturilapai from "../components/Three/Keturilapai";
extend({ OrbitControls });

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "92%",
    // backgroundColor: theme.palette.primary.dark,
    marginLeft: "auto",
    marginRight: "auto",
  },
  canvasDiv: {
    height: "70%",
  },
}));

function MainPage({ pos, rot, setFinishedAnimation, finishedAnimation, switchPressed, setSwitchPressed }) {
  const classes = useStyles();
  const opacitySpring = useSpring({ opacity: finishedAnimation ? 1 : 0 });

  return (
    <div className={classes.root}>
      <Header
        pos={pos}
        rot={rot}
        setFinishedAnimation={setFinishedAnimation}
        finishedAnimation={finishedAnimation}
        switchPressed={switchPressed}
        setSwitchPressed={setSwitchPressed}
      />
      <div className={classes.canvasDiv}>
        <Canvas camera={{ position: [-window.innerWidth / 2.5, 0, 0] }}>
          <Suspense fallback={null}>
            {/* <PrograminesIrangosTestuotojas /> */}
            {/* <Palidov /> */}
            {/* <Tekstas /> */}
            <group position={[1, 0, 0]}>
              <Keturilapai />
              <Remas />
            </group>
            <Veidrodis />
            <Glasstest position={[2, 1.5, 0]} />
            <Kosmonautas position={[0, 1.5, 0]} rotation={[0, 2.5, 3.5]} />
            <Zeme position={[12, 1, 5]} />
            <Satalitas position={[0, 3, 6]} />
            <Controls />
            <Stars
              radius={100} // Radius of the inner sphere (default=100)
              depth={50} // Depth of area where stars should fit (default=50)
              count={8000} // Amount of stars (default=5000)
              factor={5} // Size factor (default=4)
              saturation={0} // Saturation 0-1 (default=0)
              fade // Faded dots (default=false)
            />
          </Suspense>
          <Lights />
        </Canvas>
      </div>
    </div>
  );
}

export default MainPage;

//    width: "92%",
