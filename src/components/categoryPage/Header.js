import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 50,
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
  box: {
    height: 336,
    width: 420,
    marginLeft: 60
  },
  typo: {
    
    marginTop:70
    
  },
  container:{
    width: "100%"
  },
  box:{
    width: "1192px",
    height: "354px",
    display: "flex",
    paddingTop: "60px",
    flexDirection: "row",


  },
  text1: {
    position: "relative",
    display:"block",
    width: "680px",
    height: "236px",
    textAlign: "left",
    padding: "24px 40px" ,
    
  },
  h1:{fontSize:"13px"},
  h2:{fontSize:"7px"},
  h3:{fontSize:"10px"},
  h4:{fontSize:"7px"},
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
    <BigCard/>
    <SmallCard/>
    <SmallCard/>
    <SmallCard/>
    <SmallCard/>
    <SmallCard/>
    
</div>
  );
}
