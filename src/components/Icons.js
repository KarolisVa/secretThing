import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import FacebookIcon from "@material-ui/icons/Facebook";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import FingerprintIcon from "@material-ui/icons/Fingerprint";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "210px",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  icon: {
    fontSize: "2.3rem",
    cursor: "pointer",
  },
}));

function Icons() {
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

export default Icons;
