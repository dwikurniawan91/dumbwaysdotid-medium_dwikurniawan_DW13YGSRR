import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: "1192px",
    margin: "0 64px",
    width: "100%",
  },
  card1: {
    paddingTop: 60,
    display: "flex",
    flexDirection: "row",
    width: "1192px",
    height: "354px",    
  },
  card2: {
    width: "740px", 
    height: "354px"
  },
  img1: { 
    objectFit: "cover",
    width: "740px", 
    height: "354px" 
},
  card3: {
    background: "#6A0BFF",
    color:"white",
    width: "450px",
    height: "400px",
    alignItem:"center",
    justifyItem:"center"
  },
  img1: {
    objectFit: "cover",
    width: "740px",
    height: "400px",
  },

  text1: {
    width: "370px",
    height: "218px",
    textAlign: "center",
    padding: "24px 40px" 
  },

  h1: {fontSize: "15px"},
  h2: {fontSize: "11px"},
  h3: {fontSize: "10px"},
  h4: {fontSize: "10px"},
  cardRev3: {
    background: "#FFFFF",
    color:"black",
    width: "450px",
    height: "400px",
    alignItem:"center",
    justifyItem:"center",
    // marginRight: 14
  },
  img1: {
    objectFit: "cover",
    width: "740px",
    height: "400px",
  },
  textRev1: {
    width: "370px",
    height: "218px",
    textAlign: "center",
    padding: "24px 40px" 
  },
  h1: {fontSize: "15px"},
  h2: {fontSize: "11px"},
  h3: {fontSize: "10px"},
  h4: {fontSize: "10px"},
  card10: {
    marginTop: 60,
    display: "flex",
    flexDirection: "row",
    width: "1192px",
    height: "354px",  
    backgroundColor: "#DAF832" ,
    textAlign: "center",
    
  },
  cardRev30: {
    alignItem:"center",
    justifyItem:"center",
    textAlign: "center",
  }
  
}));

export default function CardHuge() {
  const classes = useStyles();
  return (
    <Grid className={classes.card} >
         <Grid className={classes.card1}>
            <Grid className={classes.card2}>
                <img className={classes.img1} alt="medium" src="https://miro.medium.com/max/3696/1*HqbtU7kdzdqxSVtAc56g0A.jpeg"/>
            </Grid>
            <Grid className={classes.card3}>
                <Grid className={classes.text1}>
                    <Grid className={classes.h1}>
                        <h1>A Dating App That Matches Users Based on Their DNA Isn’t a Totally...</h1>
                    </Grid>
                    <Grid className={classes.h2}>
                        <h1>George Church’s app sounds like eugenics, but it’s based on tech
                        that’s already available</h1> 
                    </Grid>
                    <Grid className={classes.h3}>
                        <h1>Emily chan</h1>
                    </Grid>
                    <Grid className={classes.h4}>
                        <h1> 11 Dec - 3 Mins Read </h1>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        <Grid className={classes.card1}>
            <Grid className={classes.cardRev3}>
                <Grid className={classes.textRev1}>
                    <Grid className={classes.h1}>
                        <h1>A Dating App That Matches Users Based on Their DNA Isn’t a Totally...</h1>
                    </Grid>
                    <Grid className={classes.h2}>
                        <h1>George Church’s app sounds like eugenics, but it’s based on tech that’s already available </h1>
                    </Grid>
                    <Grid className={classes.h3}>
                        <h1>Emily chan</h1>
                    </Grid>
                    <Grid className={classes.h4}>
                        <h1> 11 Dec - 3 Mins Read </h1>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.card2}>
                <img className={classes.img1} alt="medium" src="https://miro.medium.com/max/1557/1*I0Vcqvg96Qc7eZdM98KpSQ.png"/>
            </Grid>
        </Grid>
        <Grid className={classes.card10}>
                <Grid className={classes.textRev10}>
                    <Grid className={classes.h1}>
                        <h1>
                        A Dating App That Matches Users Based on Their DNA Isn’t a Totally...
                        </h1>
                    </Grid>
                    <Grid className={classes.h2}>
                        <h1>
                        George Church’s app sounds like eugenics, but it’s based on tech
                        that’s already available
                        </h1>
                    </Grid>
                    <Grid className={classes.h3}>
                        <h1>Emily chan</h1>
                    </Grid>
                    <Grid className={classes.h4}>
                        <h1> 11 Dec - 3 Mins Read </h1>
                    </Grid>
                </Grid>
        </Grid>

        {/* END CARD 4 */}
        <Grid className={classes.card1}>
            <Grid className={classes.card2}>
                <img className={classes.img1} alt="medium" src="https://miro.medium.com/max/3696/1*HqbtU7kdzdqxSVtAc56g0A.jpeg"/>
            </Grid>
            <Grid className={classes.card3}>
                <Grid className={classes.text1}>
                    <Grid className={classes.h1}>
                        <h1>A Dating App That Matches Users Based on Their DNA Isn’t a Totally...</h1>
                    </Grid>
                    <Grid className={classes.h2}>
                        <h1>George Church’s app sounds like eugenics, but it’s based on tech
                        that’s already available</h1> 
                    </Grid>
                    <Grid className={classes.h3}>
                        <h1>Emily chan</h1>
                    </Grid>
                    <Grid className={classes.h4}>
                        <h1> 11 Dec - 3 Mins Read </h1>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    {/* END CARD 4 */}
    <Grid className={classes.card1}>
            <Grid className={classes.cardRev3}>
                <Grid className={classes.textRev1}>
                    <Grid className={classes.h1}>
                        <h1>A Dating App That Matches Users Based on Their DNA Isn’t a Totally...</h1>
                    </Grid>
                    <Grid className={classes.h2}>
                        <h1>George Church’s app sounds like eugenics, but it’s based on tech that’s already available </h1>
                    </Grid>
                    <Grid className={classes.h3}>
                        <h1>Emily chan</h1>
                    </Grid>
                    <Grid className={classes.h4}>
                        <h1> 11 Dec - 3 Mins Read </h1>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.card2}>
                <img className={classes.img1} alt="medium" src="https://miro.medium.com/max/1557/1*I0Vcqvg96Qc7eZdM98KpSQ.png"/>
            </Grid>
        </Grid>

    </Grid>
    
    
    
    
  );
}


{/* <Grid className={classes.container}>
      <Grid className={classes.box}>
        <Grid className={classes.text10}>
            <Grid className={classes.h10}>
                <h1>
                this age of copy-and-paste design, imitation often isn’t the sincerest form of flattery — it’s outright copyright infringement.
                </h1>
            </Grid>
            <Grid className={classes.h11}>
                <h1>Florence Ion
                </h1>
            </Grid>
            <Grid className={classes.h12}>
                <h1>You Might Be Wearing Stolen Art</h1>
            </Grid>
            <Grid className={classes.h13}>
                <h1> 11 Dec - 3 Mins Read </h1>
            </Grid>
        </Grid>
    </Grid>
  </Grid>
</Grid> */}