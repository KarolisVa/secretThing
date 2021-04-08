import React, { useRef } from "react";
import { useSpring, useChain, a } from "react-spring";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import MoreInfo from "../Pages/MoreInfo";

function MoreInfoCovers({ bottom, main }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "white",
      position: "absolute",
      bottom: bottom ? "0%" : "100%",
      height: "10px",
      width: "100%",
    },

    root2: {
      width: "100%",
      height: "100%",
    },
  }));

  const classes = useStyles();

  // const spring = useSpring({
  //   from: {
  //     height: "0px",
  //   },

  //   to: {
  //     height: `${window.innerHeight} + "px"`,
  //   },
  //   config: {
  //     duration: 1500,
  //   },
  // });

  // const spring2 = useSpring({
  //   from: {
  //     height: "0px",
  //     transform: "translateY(100%)",
  //   },

  //   to: {
  //     height: `${window.innerHeight} + "px"`,
  //     zIndex: "1",
  //   },
  //   config: {
  //     duration: 1500,
  //   },
  // });

  const coverVariant1 = {
    hidden: {
      height: "0px",
      transform: bottom ? "" : "translateY(100%)",
      zIndex: bottom ? "0" : "1",
    },

    visible: {
      height: bottom ? "50%" : "100%",

      transition: {
        duration: bottom ? 2 : 3.8,
        // staggerChildren: 3.8,
      },
    },
  };

  return (
    <motion.div
      className={classes.root}
      variants={coverVariant1}
      initial="hidden"
      animate="visible"
    >
      {main && <MoreInfo />}
    </motion.div>
  );
}

export default MoreInfoCovers;
