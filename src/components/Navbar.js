import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div>
      <AppBar color="white" position="static">
        <Toolbar>
          <TypoGraphy variant="h4" color="inherit">
            Medium
          </TypoGraphy>
          <Menu />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
