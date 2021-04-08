import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import FacebookIcon from "@material-ui/icons/Facebook";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import FingerprintIcon from "@material-ui/icons/Fingerprint";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "none",
    width: "210px",
    height: "100px",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      position: "absolute",
      left: "50%",
      bottom: "-5%",
      transform: "translate(-50%, -50%)",
    },
  },

  icon: {
    fontSize: "1.8rem",
    cursor: "pointer",
  },
}));

function HoveringIcons() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton color="secondary">
        <FacebookIcon className={classes.icon} />
      </IconButton>
      <IconButton color="secondary">
        <WebAssetIcon className={classes.icon} />
      </IconButton>
      <IconButton color="secondary">
        <FingerprintIcon className={classes.icon} />
      </IconButton>
    </div>
  );
}

export default HoveringIcons;
