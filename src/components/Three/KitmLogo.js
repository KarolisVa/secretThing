import React, { useState, useRef, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from "react-spring/three";

function KitmLogo({ pos, rot, setFinishedAnimation, finishedAnimation }) {
  const [model, setModel] = useState();
  const [clicked, setClicked] = useState(false);

  const [animation, set, stop] = useSpring(() => ({
    scale: [1, 1, 1],
    position: [0, 0, 10],
    rotation: [0, 0, 0],
    config: { duration: 1600 },
  }));

  console.log(rot);

  useEffect(() => {
    setTimeout(() => {
      set({ position: [0, 0, 0], rotation: [0, Math.PI * 2, 0] });
    }, 1600);

    setTimeout(() => {
      set({
        position: [7, 9.5, 0],
        rotation: [Math.PI * 2, 0, 0],
        scale: [0.55, 0.55, 0.55],
      });

      setTimeout(() => {
        setFinishedAnimation(true);
      }, 2000);
    }, 4000);
  }, []);

  useEffect(() => {
    new GLTFLoader().load("/fork.gltf", setModel);
  }, []);

  return model ? (
    <a.primitive
      object={model.scene}
      onClick={() => {
        setClicked(!clicked);
        clicked
          ? set({ scale: [1.4, 1.4, 1.4], config: { duration: 500 } })
          : set({ scale: [1, 1, 1], config: { duration: 500 } });
      }}
      position={animation.position}
      rotation={finishedAnimation ? rot : animation.rotation}
      scale={animation.scale}
    />
  ) : null;
}

export default KitmLogo;
