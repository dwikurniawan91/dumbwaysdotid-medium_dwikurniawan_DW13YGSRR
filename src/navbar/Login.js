// eslint-disable-next-line
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import FormLogin from "./FormLogin";
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles(theme => ({
  modal: {
    margin: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: "300px"
  },
  content: {
    paddingLeft: "300px",
    paddingRight: "300px",
    paddingTop: "100",
    paddingBottom: "150"
  }
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{
          height: "35px",
          backgroundColor: "white",
          color: "black",
          marginTop: "4px",
          marginLeft: "12px",
          marginRight: "12px",
          border: "1px solid black",
          borderRadius: "6px"
        }}
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        Sign in
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.content}>
              <h1 id="transition-modal-title">Sign in with email</h1>
              <p id="transition-modal-description">
                Enter the email address associated with your account, and we’ll
                send a magic link to your inbox.
              </p>

              <FormLogin />
              <p>
                <ArrowBackIosIcon fontSize="inherit" color="primary" />
                <a  href="url">All sign in options</a>
              </p>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
