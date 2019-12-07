import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import FormRegister from "./FormRegister";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "row",
    margin: "200px"
  },
  content: {
    margin: "20"
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
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Get Started
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
            <div className={classes.img}>
              <img
                src={
                  "https://miro.medium.com/max/214/1*MQH4A5bsyRz4AWh5V4IfvQ.png"
                }
                alt="background"
              />
            </div>
            <div className={classes.content}>
              <h1 id="transition-modal-title">Join Medium</h1>
              <p id="transition-modal-description">
                Create an account to receive great stories in your inbox,
                personalize your homepage, and follow authors and topic that you
                love.
              </p>
              <FormRegister />
              <p>
                <b>
                  Already have an account?<a href="url"> Sign in</a>
                </b>
              </p>
              <p>
                To make Medium work, we log user data and share it with service
                providers. Click " Sign Up" above to accept ,
                <u>Medium's Term of Service & Privacy Policy.</u>{" "}
              </p>
            </div>

            <div className={classes.img}>
              <img
                src={
                  "https://miro.medium.com/max/214/1*lhbp8cxKdkDB-MgmwIPE5w.png"
                }
                alt="background1"
              />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
