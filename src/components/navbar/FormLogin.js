import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 300
    }
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField style={{margin: "30px"}} id="standard-basic" label="Your Email" variant="standard" />
      <TextField style={{margin: "30px"}} id="standard-basic" label="Your Password" variant="standard" />

      <Button 
        style={{
          backgroundColor: "black",
          color: "white",
          display: "inline-block",
          padding: "5px 10px",
          width: "150px"
        }}
        color="primary"
      >
        Continue
      </Button>
    </form>
  );
}
