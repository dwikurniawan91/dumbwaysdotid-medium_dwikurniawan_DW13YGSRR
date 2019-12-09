import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Avatar from "@material-ui/core/Avatar";

function Menu(props) {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <SearchIcon />
        </ListItemText>
        <ListItemText inset>
          <NotificationsNoneIcon />
        </ListItemText>

        <ListItemText inset>
          <Avatar alt="Remy Sharp" src="profile.jpg" />
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default Menu;
