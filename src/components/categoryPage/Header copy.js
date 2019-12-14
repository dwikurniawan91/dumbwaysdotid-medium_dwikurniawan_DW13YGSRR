import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 40,
    marginLeft: 40
  },
  paper: {
    padding: theme.spacing(3),
    justifyContent: "right",
    alignItem: "flex-end",
    color: theme.palette.text.secondary
  },
  image: {
    width: 300,
    height: 128
  },
  img: {
    marginLeft: 10,
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  img2: {
    objectFit: "cover",
    width: "740px",
    height: "400px"
  },
  onezero: {
    paddingTop: 30,
    marginLeft: 40
  },
  textMid: {
    paddingTop: 50
  },
  button: {
    marginTop: 50,
    marginRight: 1,
    marginLeft: 37,
    alignContent: "flex-end",
    alignItems: "flex-end"
  },
  imgBig: {
    objectFit: "cover",
    width: "300px",
    height: "354px"
  },
  colorful: {
    position: "relative",
    textAlign: "center",
    marginLeft: 80,
    marginTop: 30,

    background: "9#c27b0"
  },
  box: {
    height: 336,
    width: 420
  },
  typo: {
    
    marginTop:70
    
  }
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div className={classes.onezero}>
            <img
              className={classes.img}
              alt="medium"
              src="https://miro.medium.com/max/540/1*cw32fIqCbRWzwJaoQw6BUg.png"
            />
            {/* https://miro.medium.com/max/540/1*cw32fIqCbRWzwJaoQw6BUg.png */}
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className={classes.textMid}>
            <Typography variant={"h6"}>
              <span Style={{ color: "grey" }}>
                The front lines of the future.
              </span>{" "}
              A Medium publication about tech and science.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={2}>
          <Button className={classes.button} variant="contained">
            Follow
          </Button>
        </Grid>
      </Grid>

    {/* HORIZONTAL CARD */}

      <Grid container spacing={1}>
        <Grid item xs={6}>
          <div className={classes.onezero}>
            <img
              className={classes.img2}
              alt="medium"
              src="https://miro.medium.com/max/1557/1*I0Vcqvg96Qc7eZdM98KpSQ.png"
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.colorful} component="div" variant="h5">
            <Box
              className={classes.box}
              bgcolor="#0000FF"
              color="primary.contrastText"
              p={4}
              m={1}
            >
              <Typography>
                <Typography className={classes.typo} variant="h5">
                  <b>
                    A Dating App That Matches Users Based on Their DNA Isn’t a
                    Totally
                  </b>
                </Typography>

                <Typography variant="h6">
                  George Church’s app sounds like eugenics, but it’s based on
                  tech that’s already available
                </Typography>
                <p Style={{ color: "#FFD700" }}>Emily Mullin</p>
                <p>11 Dec - 3 Mins Read</p>
              </Typography>
            </Box>
          </div>
        </Grid>
      </Grid>
      {/* HORIZONTAL CARD */}
      {/* HORIZONTAL CARD */}

      <Grid container spacing={1} direction={'row-reverse'}>
        <Grid item xs={6}>
          <div className={classes.onezero}>
            <img
              className={classes.img2}
              alt="medium"
              src="https://miro.medium.com/max/1557/1*I0Vcqvg96Qc7eZdM98KpSQ.png"
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.colorful} component="div" variant="h5">
            <Box
              className={classes.box}
              bgcolor="#0000FF"
              color="primary.contrastText"
              p={4}
              m={1}
            >
              <Typography>
                <Typography className={classes.typo} variant="h5">
                  <b>
                    A Dating App That Matches Users Based on Their DNA Isn’t a
                    Totally
                  </b>
                </Typography>

                <Typography variant="h6">
                  George Church’s app sounds like eugenics, but it’s based on
                  tech that’s already available
                </Typography>
                <p Style={{ color: "#FFD700" }}>Emily Mullin</p>
                <p>11 Dec - 3 Mins Read</p>
              </Typography>
            </Box>
          </div>
        </Grid>
      </Grid>
      {/* HORIZONTAL CARD */}

    </div>
  );
}
