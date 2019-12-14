import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 1200,
    display: "row",
    marginLeft: "auto",
    marginRight: "auto"
  },
  butt: {
    paddingLeft: 0,
    paddingRight: 0
  },
  p: {
    textDecoration: "none"
  }
});

const CategoryProps = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <Link to={props.Data.url}>
        <p className={classes.p}>{props.Data.name}</p>
      </Link>
    </div>
  );
};
export default CategoryProps;
