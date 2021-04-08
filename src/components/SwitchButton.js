import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useSpring, a } from "react-spring";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `2px solid #FFFFFF`,
    width: "100px",
    minWidth: "100px",
    height: "45px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
  },

  ball: {
    marginLeft: theme.spacing(1),
    height: "35px",
    width: "35px",
    borderRadius: "100%",
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
  },
}));

function SwitchButton({ switchPressed, setSwitchPressed, doRipple, setDoRipple }) {
  const rippleRef = useRef(null);
  useEffect(() => {
    console.log(rippleRef);
  }, [rippleRef]);

  const buttonSpring = useSpring({
    from: {
      transform: switchPressed ? `translate(0px)` : `translate(50px)`,
    },
    to: {
      transform: switchPressed ? `translate(50px)` : `translate(0px)`,
    },
    config: {
      //   mass: 3,
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span
        className="effect"
        ref={rippleRef}
        style={doRipple ? { display: "block" } : { display: "none" }}
      ></span>
      <a.div
        onClick={(e) => {
          console.log(e);
          let x = e.clientX + e.target.offsetLeft;
          let y = e.clientY + e.target.offsetTop;
          setSwitchPressed(!switchPressed);
          rippleRef.current.style.left = "-5%";
          rippleRef.current.style.top = "0%";
          setDoRipple(true);
          setTimeout(() => {
            setDoRipple(false);
          }, 1000);
        }}
        className={classes.ball}
        style={buttonSpring}
      ></a.div>
    </div>
  );
}

export default SwitchButton;
