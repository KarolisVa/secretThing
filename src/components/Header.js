import React, { useState, Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SwitchButton from "./SwitchButton";
import Icons from "./Icons";
import { Canvas } from "react-three-fiber";
import Controls from "./Three/Controls";
import KitmLogoSmall from "./Three/KitmLogoSmall";
import Lights from "./Three/Lights";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "12%",
    minHeight: "120px",
    maxHeight: "120px",
    // backgroundColor: theme.palette.primary.dark,
    // borderBottom: `2px solid ${theme.palette.secondary.main}`,
    // background: " -webkit-linear-gradient(to right, #0062ae, #0097d9)",
    // background: "linear-gradient(to right, #0062ae, #0097d9)",

    [theme.breakpoints.down("xs")]: {
      height: "15%",
      maxHeight: "240px",
    },
    position: "relative",
    zIndex: "100",
  },

  toolBar: {
    position: "relative",
    zIndex: "100",
    height: "40%",
    width: "100%",
    padding: "0",
  },

  toolBarLeft: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      height: "70%",
    },
  },

  toolBarMiddle: {
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "70%",
    },
  },

  toolBarRight: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: "30%",
    },
  },

  text: {
    color: theme.palette.secondary.main,
    fontFamily: "'Quicksand', sans-serif",
    fontSize: "1.8rem",
    textTransform: "uppercase",
    textAlign: "end",
    textAlignLast: "center",
    [theme.breakpoints.down("lg")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },

    [theme.breakpoints.down(theme.breakpoints.values.xs + 400)]: {
      fontSize: "1rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
}));

function Header({ pos, rot, setFinishedAnimation, finishedAnimation, switchPressed, setSwitchPressed }) {
  const classes = useStyles();
  const [doRipple, setDoRipple] = useState(false);

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.toolBarLeft} item xs={6} sm={4} md={4} lg={4}>
        <SwitchButton
          setSwitchPressed={setSwitchPressed}
          switchPressed={switchPressed}
          doRipple={doRipple}
          setDoRipple={setDoRipple}
        />
        <Icons />
      </Grid>
      <Grid className={classes.toolBarMiddle} item xs={6} sm={4} md={4} lg={4}>
        <Canvas
          camera={{ fov: 40, position: [-4, 0, 0] }}
          onCreated={({ gl }) => {
            // gl.antialias = false;
            gl.setPixelRatio(window.devicePixelRatio || 2);
            gl.capabilities.precision = "highp";
            gl.capabilities.getMaxAnisotropy = "true";
          }}
        >
          <Controls />
          <Suspense fallback={"wait"}>
            <KitmLogoSmall
              pos={pos}
              rot={rot}
              setFinishedAnimation={setFinishedAnimation}
              finishedAnimation={finishedAnimation}
            />
          </Suspense>
          <Lights />
        </Canvas>
      </Grid>
      <Grid className={classes.toolBarRight} item xs={12} sm={4} md={4} lg={4}>
        <Typography className={classes.text} color="initial">
          Kauno informacinių technologijų mokykla
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Header;

/*
 <Grid container className={classes.root}>
      <Grid className={classes.toolBarLeft} item xs={6} sm={4} md={4} lg={4}>
        <SwitchButton
          setSwitchPressed={setSwitchPressed}
          switchPressed={switchPressed}
          doRipple={doRipple}
          setDoRipple={setDoRipple}
        />
        <Icons />
      </Grid>
      <Grid className={classes.toolBarMiddle} item xs={6} sm={4} md={4} lg={4}>
        <Canvas
          camera={{ fov: 40, position: [-4, 0, 0] }}
          onCreated={({ gl }) => {
            // gl.antialias = false;
            gl.setPixelRatio(window.devicePixelRatio || 2);
            gl.capabilities.precision = "highp";
            gl.capabilities.getMaxAnisotropy = "true";
          }}
        >
          <Controls />
          <Suspense fallback={"wait"}>
            <KitmLogoSmall
              pos={pos}
              rot={rot}
              setFinishedAnimation={setFinishedAnimation}
              finishedAnimation={finishedAnimation}
            />
          </Suspense>
          <Lights />
        </Canvas>
      </Grid>
      <Grid className={classes.toolBarRight} item xs={12} sm={4} md={4} lg={4}>
        <Typography className={classes.text} color="initial">
          Kauno informacinių technologijų mokykla
        </Typography>
      </Grid>
    </Grid>
*/

/*
const useStyles = makeStyles((theme) => ({
  root: {
    height: "12%",
    minHeight: "120px",
    maxHeight: "120px",
    backgroundColor: theme.palette.primary.dark,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down("xs")]: {
      height: "15%",
      maxHeight: "240px",
    },
  },

  toolBar: {
    height: "40%",
    width: "100%",
    padding: "0",
  },

  toolBarLeft: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      height: "70%",
    },
  },

  toolBarMiddle: {
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "70%",
    },
  },

  toolBarRight: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: "30%",
    },
  },

  text: {
    color: theme.palette.secondary.main,
    fontFamily: "'Quicksand', sans-serif",
    fontSize: "1.8rem",
    textTransform: "uppercase",
    textAlign: "end",
    textAlignLast: "center",
    [theme.breakpoints.down("lg")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },

    [theme.breakpoints.down(theme.breakpoints.values.xs + 400)]: {
      fontSize: "1rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
}));
*/

/*
  toolBarMiddle: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  */
