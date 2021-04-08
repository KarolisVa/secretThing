import React, { useState, useRef, useEffect, Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from "react-spring/three";
import * as THREE from "three";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import Lights from "./Lights";
import Controls from "./Controls";

function KitmLogoSmall({ pos, rot, setFinishedAnimation, finishedAnimation }) {
  const [model, setModel] = useState();

  const [animation, set, stop] = useSpring(() => ({
    scale: [1, 1, 1],
    position: [0, 0, 10],
    rotation: [0, Math.PI, 0],
    config: { duration: 1600 },
  }));

  useEffect(() => {
    new GLTFLoader().load("/fork.gltf", setModel);
  }, []);

  return model ? (
    <a.primitive object={model.scene} rotation={rot} scale={[0.85, 0.85, 0.85]} />
  ) : null;
}

export default KitmLogoSmall;
