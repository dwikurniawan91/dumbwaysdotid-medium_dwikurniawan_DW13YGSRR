import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CategoryProps from "./CategoryProps";
import Data from "./Data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
  }
});
export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const categoryMenu = Data.map(item => (
    <CategoryProps key={item} Data={item} url={item} />
  ));

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {categoryMenu.map((currElement, Index) => {
        return (
          <BottomNavigationAction
            className={classes.butt}
            label={currElement}
            key={Index}
            onClick={currElement}
          ></BottomNavigationAction>
        );
      })}
    </BottomNavigation>
  );
}
