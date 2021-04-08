import React, { useRef } from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Profesijos from "../utils/data/Profesijos";
import SwitchButton from "../components/SwitchButton";
import Profesija from "../components/Profesija";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100%",
    overflow: "auto",
  },

  item: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
  },

  profesijaBox: {
    textAlign: "center",
    "&:nth-child(n+2):nth-child(-n+3)": {
      marginTop: "40px",
    },
  },

  text: {
    fontWeight: "600",
  },
});

const transitionVariant = {
  hidden: {
    opacity: 0,
    background: "linear-gradient(to right, #0062ae, #0097d9)",
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 3,
    },
  },
};

function MoreInfo() {
  const classes = useStyles();

  const generateGrid = (x, y, xl, lg, md, sm, xs) => {
    return (
      <Grid container spacing={0}>
        {Profesijos.slice(x, y).map((profesija) => {
          if (profesija.class.includes(12)) {
            return (
              <Grid className={classes.item} item xl={xl} lg={lg} md={md} sm={sm} xs={xs}>
                <Profesija name={profesija.name} />
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    );
  };

  return (
    <motion.div variants={transitionVariant} className={classes.root} initial="hidden" animate="visible">
      <Box
        className={classes.test}
        height="auto"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        mt={15}
      >
        <Box className={classes.profesijaBox} display="flex" flexDirection="column">
          <Typography className={classes.text} color="secondary" variant="h4">
            Baigusius 8 klasių
          </Typography>

          <Grid container spacing={5}>
            {Profesijos.map((profesija) => {
              if (profesija.class.includes(8)) {
                return (
                  <Grid className={classes.item} item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Profesija name={profesija.name} />
                  </Grid>
                );
              }
              return null;
            })}
          </Grid>
        </Box>

        <Box className={classes.profesijaBox} display="flex" flexDirection="column">
          <Typography className={classes.text} color="secondary" variant="h4">
            Baigusius 10 klasių
          </Typography>

          <Grid container spacing={5}>
            {Profesijos.map((profesija) => {
              if (profesija.class.includes(10)) {
                return (
                  <Grid className={classes.item} item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <Profesija name={profesija.name} />
                  </Grid>
                );
              }
              return null;
            })}
          </Grid>
        </Box>

        <Box className={classes.profesijaBox}>
          <Typography className={classes.text} color="secondary" variant="h4">
            Baigusius 12 klasių arba turinčius kvalifikaciją
          </Typography>

          {generateGrid(0, 8, 3, 3, 4, 6, 12)}
          {/* {generateGrid(4, 8, 3, 3, 4, 6, 12)}
          {generateGrid(8, 11, 3, 3, 4, 6, 12)} */}
        </Box>
      </Box>
    </motion.div>
  );
}

export default MoreInfo;

/*
 const generateGrid = (x, y) => {
    return (
      <Grid container spacing={5}>
        {Profesijos.slice(x, y).map((profesija) => {
          if (profesija.class.includes(12)) {
            return (
              <Grid className={classes.item} item lg={3}>
                <Profesija name={profesija.name} />
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    );
  };
*/
