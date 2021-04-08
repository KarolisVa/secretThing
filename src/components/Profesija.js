import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, IconButton } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import TestSVG from "../utils/svg/TestSVG";

const useStyles = makeStyles({
  root: {
    width: "285px",
    height: "115px",
    borderRadius: "5px",
    padding: "1px",
  },
  text: {
    fontSize: "1rem",
    fontWeight: "600",
  },

  underText: {
    fontSize: "1rem",
  },

  icon: {
    color: "white",
    height: "35px",
    width: "35px",
  },
});
function Profesija({ name }) {
  const classes = useStyles();
  return (
    <Box className={classes.root} boxShadow={3}>
      <TestSVG />
      <Typography className={classes.text} color="secondary" variant="h6">
        {name}
      </Typography>
      <Box color="secondary.main" display="flex" justifyContent="center" alignItems="center">
        <Typography className={classes.underText} variant="h6">
          Daugiau
        </Typography>
        <IconButton className={classes.icon}>
          <PlayCircleOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Profesija;
