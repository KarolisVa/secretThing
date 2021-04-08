import React from "react";

function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight position={[15, 20, 5]} penumbra={1} />
    </>
  );
}

export default Lights;
