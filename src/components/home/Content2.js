import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
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
            marginLeft: "-2vh",
            marginTop: "3vh",
            width: "180vh",
            height: "50vh"
            // backgroundColor: "#cfe8fc"
          }}
        >
          {/* Start Popular on medium */}
          <Grid container spacing={3}>
            <Grid item xs={4} style={{ marginTop: "10vh" }}>
              <Typography variant="h6">
                <b>Popular on Medium</b>
              </Typography>
              <Divider orientation="horizontal" style={{ width: "40vh" }} />

              {/* Content */}

              <Grid container Style={{ paddingTop: "10vh" }}>
                <Grid item xs={2}>
                  <Typography variant="h5" style={{ color: "grey" }}>
                    01
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography variant="h7">
                    <b>
                      Scientists Are Contemplating a 1,000-Year Space Mission to
                      Save Humanity
                    </b>
                  </Typography>
                  <Typography variant="h12">
                    <p>Corin Faife in OneZero</p>
                    <p style={{ color: "grey" }}>5 Dec - 7 min read</p>
                  </Typography>
                </Grid>
              </Grid>
              {/* End Content 1 */}
              {/* Content */}

              <Grid container Style={{ paddingTop: "10vh" }}>
                <Grid item xs={2}>
                  <Typography variant="h5" style={{ color: "grey" }}>
                    02
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography variant="h7">
                    <b>
                      Scientists Are Contemplating a 1,000-Year Space Mission to
                      Save Humanity
                    </b>
                  </Typography>
                  <Typography variant="h12">
                    <p>Corin Faife in OneZero</p>
                    <p style={{ color: "grey" }}>5 Dec - 7 min read</p>
                  </Typography>
                </Grid>
              </Grid>
              {/* End Content 1 */}
              {/* Content */}

              <Grid container Style={{ paddingTop: "10vh" }}>
                <Grid item xs={2}>
                  <Typography variant="h5" style={{ color: "grey" }}>
                    03
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography variant="h7">
                    <b>
                      Scientists Are Contemplating a 1,000-Year Space Mission to
                      Save Humanity
                    </b>
                  </Typography>
                  <Typography variant="h12">
                    <p>Corin Faife in OneZero</p>
                    <p style={{ color: "grey" }}>5 Dec - 7 min read</p>
                  </Typography>
                </Grid>
              </Grid>
              {/* End Content 1 */}
            </Grid>
            {/* End Popular on medium */}
            {/* Image Based On your story */}
            <Grid item xs={7}>
            <Grid container spacing={1} justify={'flex-end'} Style={{ paddingTop: "10vh" }}>
                <Grid item sm={4}>
                  <img
                    style={{
                      objectFit: "cover",
                      width: "25vh",
                      height: "25vh",
                      marginLeft: "8vh"
                    }}
                    src="https://miro.medium.com/max/7079/1*GyMABXd3bEZBoT5cTMy1NQ.jpeg"
                    alt="story"
                  />
                </Grid>
                <Grid item sm={6} >
                  <Typography variant="h8" style={{ color: "grey"}}>
                    BASED ON YOUR STORY
                  </Typography>
                  <Typography variant="h6" style={{  }}>
                    <b>How the PlayStation Took Over the World</b>
                  </Typography>
                  <Typography variant="h12" style={{ color: "grey" }}>
                    Will the strategies that have powered Sony’s success in
                    gaming for 25 years
                  </Typography>
                  <p style={{  }}>Eric Ravenscraft in OneZero</p>
                  <p style={{ color: "grey"}}>Dec 10 - 7 mins read</p>
                </Grid>
                <Grid item  >
                    <BookmarkBorderOutlinedIcon style={{ color: "grey", marginLeft: "1vh"}}/>
                    
                </Grid>
                <Grid item  >
                    <MoreVertOutlinedIcon style={{ color: "grey", marginLeft: "1vh"}}/>
                </Grid>
              </Grid>
            <Grid container spacing={1} justify={'flex-end'} Style={{ paddingTop: "10vh" }}>
                <Grid item sm={4}>
                  <img
                    style={{
                      objectFit: "cover",
                      width: "25vh",
                      height: "25vh",
                      marginLeft: "8vh"
                    }}
                    src="https://miro.medium.com/max/7079/1*GyMABXd3bEZBoT5cTMy1NQ.jpeg"
                    alt="story"
                  />
                </Grid>
                <Grid item sm={6} >
                  <Typography variant="h8" style={{ color: "grey"}}>
                    BASED ON YOUR STORY
                  </Typography>
                  <Typography variant="h6" style={{  }}>
                    <b>How the PlayStation Took Over the World</b>
                  </Typography>
                  <Typography variant="h12" style={{ color: "grey" }}>
                    Will the strategies that have powered Sony’s success in
                    gaming for 25 years
                  </Typography>
                  <p style={{  }}>Eric Ravenscraft in OneZero</p>
                  <p style={{ color: "grey"}}>Dec 10 - 7 mins read</p>
                </Grid>
                <Grid item  >
                    <BookmarkBorderOutlinedIcon style={{ color: "grey", marginLeft: "1vh"}}/>
                    
                </Grid>
                <Grid item  >
                    <MoreVertOutlinedIcon style={{ color: "grey", marginLeft: "1vh"}}/>
                </Grid>
              </Grid>
                 







                 {/* ///fhzdh */}
              <Grid container spacing={1} justify={'flex-end'} Style={{ paddingTop: "10vh" }}>
                <Grid item sm={4}>
                  <img
                    style={{
                      objectFit: "cover",
                      width: "25vh",
                      height: "25vh",
                      marginLeft: "8vh"
                    }}
                    src="https://miro.medium.com/max/7079/1*GyMABXd3bEZBoT5cTMy1NQ.jpeg"
                    alt="story"
                  />
                </Grid>
                <Grid item sm={6} >
                  <Typography variant="h8" style={{ color: "grey"}}>
                    BASED ON YOUR STORY
                  </Typography>
                  <Typography variant="h6" style={{  }}>
                    <b>How the PlayStation Took Over the World</b>
                  </Typography>
                  <Typography variant="h12" style={{ color: "grey" }}>
                    Will the strategies that have powered Sony’s success in
                    gaming for 25 years
                  </Typography>
                  <p style={{  }}>Eric Ravenscraft in OneZero</p>
                  <p style={{ color: "grey"}}>Dec 10 - 7 mins read</p>
                </Grid>
                <Grid item  >
                    <BookmarkBorderOutlinedIcon style={{ color: "grey", marginLeft: "1vh"}}/>
                    
                </Grid>
                <Grid item  >
                    <MoreVertOutlinedIcon style={{ color: "grey", marginLeft: "1vh"}}/>
                </Grid>
              </Grid>
              {/* dhsdhs */}
            </Grid>
            {/* End Image Based On your story */}
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}

{
  /* <Grid container spacing={7}>
                <Grid item xs={6}>
                  <img
                    style={{
                      objectFit: "cover",
                      width: "25vh",
                      height: "25vh",
                      marginLeft: "25vh"
                    }}
                    src="https://miro.medium.com/max/7079/1*GyMABXd3bEZBoT5cTMy1NQ.jpeg"
                    alt="story"
                  />
                </Grid>
                {/* Based On your story */
}
//     <Grid item xs={6} >
//       <Typography variant="h8" style={{ color: "grey" }}>
//         BASED ON YOUR STORY
//       </Typography>
//       <Typography variant="h6">
//         <b>How the PlayStation Took Over the World</b>
//       </Typography>
//       <Typography variant="h12" style={{ color: "grey" }}>
//         Will the strategies that have powered Sony’s success in
//         gaming for 25 years
//       </Typography>
//       <p>Eric Ravenscraft in OneZero</p>
//       <p style={{ color: "grey" }}>Dec 10 - 7 mins read</p>
//     </Grid>
//   </Grid>
