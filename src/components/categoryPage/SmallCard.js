import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button"
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      paddingTop: 50,
      marginTop: 60
    },
  }));
  
export default function SmallCard() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container >
            <Grid item xs={12}>
                <Grid container spacing={1} justify={"flex-end"} Style={{ paddingTop: "10vh" }} >
                    <Grid item sm={4}>
                    </Grid>
                    <Grid item sm={2}>
                        <Typography variant="h6" style={{}}> <b>Twitter Will Finally Stop Making Your Images Look Terrible</b> </Typography>
                        <Typography variant="h12" style={{ color: "grey" }}> At last, the end of sketchy compression
                        </Typography>
                        <p style={{}}>Eric Ravenscraft</p>
                        <p style={{ color: "grey" }}>Dec 10 - 7 mins read</p>
                        
                    </Grid>
                    <Grid item sm={2}>
                        <img style={{objectFit: "cover", width: "25vh",height: "25vh",marginLeft: "8vh"
                        }} src="https://miro.medium.com/max/7079/1*GyMABXd3bEZBoT5cTMy1NQ.jpeg" alt="story"/>
                        
                    </Grid>
                    <Grid item sm={4}>
                    </Grid>
                </Grid>
                 <Divider variant="middle" style={{ width: "31vw", marginLeft:"32vw" }} />
            </Grid>
        </Grid>
 </div>
);}