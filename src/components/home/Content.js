import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import HighlightMid from "./HighlightMid";
import Divider from "@material-ui/core/Divider";
import Content2 from "./Content2";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  img: {
    objectFit: "cover",
    width: "300px",
    height: "337px"
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <div
          className={classes.root}
          style={{
            // backgroundColor: "#cfe8fc",
            marginLeft: "6vh",
            marginTop: "3vh",
            width: "180vh",
            height: "50vh"
          }}
        >
          <Grid
            container
            spacing={3}
            style={{
              // backgroundColor: "#cfe8fc",
              height: "50%"
            }}
          >
            <Grid item xs={6} sm={4}>
              <div
                style={{
                  // backgroundColor: "#cfe8fc",
                  height: "25vh"
                }}
              >
                <img
                  style={{
                    objectFit: "cover",
                    width: "70vh",
                    height: "25vh",
                    marginLeft: "-10vh"
                  }}
                  src="https://miro.medium.com/max/7079/1*GyMABXd3bEZBoT5cTMy1NQ.jpeg"
                  alt="story"
                />
              </div>
              <Grid
                style={{
                  height: "14vh",
                  width: "50vh",
                  marginLeft: "1vh",
                  padding: "0vh"
                }}
              >
                <Typography variant="h6">
                  <b>How the PlayStation Took Over the World</b>
                </Typography>
                <Grid
                  style={{
                    marginTop: "2vh"
                  }}
                >
                  <Typography variant="h12" style={{ color: "grey" }}>
                    Will the strategies that have powered Sony’s success in
                    gaming for 25 years translate to the streaming generation?
                  </Typography>
                </Grid>
                <Grid
                  style={{
                    marginTop: "2vh"
                  }}
                >
                  <p>Eric Ravenscraft in OneZero</p>
                  <Typography variant="h12" style={{ color: "grey" }}>
                    Dec 10 - 7 mins read
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={4}>
              <HighlightMid />
              <HighlightMid />
              <HighlightMid />
            </Grid>

            <Grid item xs={6} sm={4}>
              <div
                style={{
                  //   backgroundColor: "#cfe8fc",
                  height: "25vh"
                }}
              >
                <img
                  style={{
                    objectFit: "cover",
                    width: "60vh",
                    height: "25vh",
                    marginLeft: "10vh"
                  }}
                  src="https://miro.medium.com/max/1920/1*bNjaA_7cA-VEplEfb4rdwQ.gif"
                  alt="story"
                />
              </div>
              <Grid
                style={{
                  height: "14vh",
                  width: "50vh",
                  marginLeft: "10vh",
                  padding: "0vh"
                }}
              >
                <Typography variant="h6">
                  <b>Addiction Isn’t a Sin, It’s an Adaptation</b>
                </Typography>
                <Grid
                  style={{
                    marginTop: "2vh"
                  }}
                >
                  <Typography variant="h12" style={{ color: "grey" }}>
                    Adaptation I always thought of myself as a relatively
                  </Typography>
                </Grid>
                <Grid
                  style={{
                    marginTop: "2vh"
                  }}
                >
                  <p>Eric Ravenscraft in OneZero</p>
                  <Typography variant="h12" style={{ color: "grey" }}>
                    Dec 10 - 7 mins read
                  </Typography>
                </Grid>
                <Typography
                  style={{
                    color: "green",
                    marginTop: "25vh",
                    marginLeft: "15vh"
                  }}
                >
                  <a href="url">SEE ALL FEATURED</a>
                </Typography>
              </Grid>
            </Grid>
            <Container
              style={{
                backgroundColor: "grey",
                marginTop: "1vh",
                width: "180vh"
              }}
            >
              <Divider orientation="horizontal" style={{}} />
            </Container>
            <Content2 />
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}
