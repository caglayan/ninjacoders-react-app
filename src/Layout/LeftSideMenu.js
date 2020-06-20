import React from "react";
import { connect } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuMobile: {
    marginTop: theme.spacing(18),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const SideMenu = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [selectedItem, setSelectedItem] = React.useState(0);

  const selectItem = (index) => {
    setSelectedItem(index);
  };

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    props.close();
  };
  const mobileOptimizedMenu = (
    <List className={classes.menuMobile}>
      <ListItem component={NavLink} to="/" button key="menu2">
        <ListItemText primary="Anasayfa" />
      </ListItem>
      <ListItem component={NavLink} to="/help" button key="menu4">
        <ListItemText primary="Yardım" />
      </ListItem>
      <ListItem component={NavLink} to="/about-us" button key="menu5">
        <ListItemText primary="Biz kimiz?" />
      </ListItem>
      <Divider />
      <ListItem component={NavLink} to="/privacy-policy" button key="menu3">
        <ListItemText primary="Gizlilik Sözleşmesi" />
      </ListItem>
      <ListItem component={NavLink} to="/service-policy" button key="menu3">
        <ListItemText primary="Kullanıcı Sözleşmesi" />
      </ListItem>
    </List>
  );

  return (
    <Drawer
      anchor="left"
      open={props.isOpen}
      onClose={toggleDrawer("right", false)}
    >
      <div
        className={classes.sideMenu}
        role="presentation"
        onClick={toggleDrawer(props.type, false)}
        onKeyDown={toggleDrawer(props.type, false)}
      >
        {mobileOptimizedMenu}
      </div>
    </Drawer>
  );
};

SideMenu.propTypes = {};

export default SideMenu;
