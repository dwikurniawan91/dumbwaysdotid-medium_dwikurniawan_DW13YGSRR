import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "70vh",
    padding: "1vh",
    paddingRight: "0vh",
    paddingLeft: "0vh",
    marginTop: 0,
    marginBottom: 0
  },

  image: {
    objectFit: "cover",
    width: "25vh",
    height: "30vh",
    marginLeft: "10vh",
   
  },
  img: {
    objectFit: "cover",
    width: "15vh",
    height: "15vh",
    marginLeft: "-5vh",
    marginTop: "0",
    
  }
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        style={{
         
         
        }}
      >
        <Grid item className={classes.image}>
          <img
            className={classes.img}
            alt="complex"
            src="https://miro.medium.com/max/1280/1*pUHXuHQ7lGyXPmUcQJTQHg.gif" 
          />
        </Grid>
        <Grid
          item
          sm
          container
          style={{ height: "30vh", marginLeft: "0",marginBottom:"0" }}
        >
          <Grid item xs container direction="column" spacing={1}>
            <Grid item xs stylr={{marginLeft: 2}}>
              <Typography gutterBottom variant="subtitle1">
                <b>Authoritarian Nations Are Turning the Internet Into a Weapon</b>
              </Typography>
              <Typography variant="body2" gutterBottom>
                MORGAN MEAKER in OneZero 
              </Typography>
              <Typography variant="body2" color="textSecondary">
              a few hours ago
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
