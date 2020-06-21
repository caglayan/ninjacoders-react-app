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
  menuDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      marginTop: theme.spacing(4),
      marginRight: theme.spacing(2),
    },
  },
  menuMobile: {
    marginTop: theme.spacing(4),
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
      <ListItem component={NavLink} to="/user/account" button key="11">
        <ListItemAvatar>
          <Avatar
            onClick={props.sideMenuOpen}
            className={classes.Avatar}
            alt={props.givenName + " " + props.familyName}
            src={props.avatarImage ? props.avatarImage.dataUri : null}
          >
            {props.givenName ? props.givenName.charAt(0).toUpperCase() : null}
            {props.familyName ? props.familyName.charAt(0).toUpperCase() : null}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            props.givenName
              ? props.givenName + " " + props.familyName
              : "Problem"
          }
          secondary={props.email ? props.email : "Problem"}
        />
      </ListItem>
      <ListItem component={NavLink} to="/user/account" button key="13">
        <ListItemText primary="Hesap Ayarları" />
      </ListItem>
      <ListItem component={NavLink} to="/user/account/avatar" button key="14">
        <ListItemText primary="Profil Resmi" />
      </ListItem>
      <ListItem component={NavLink} to="/user/account/password" button key="15">
        <ListItemText primary="Şifre Değiştir" />
      </ListItem>
      <ListItem component={NavLink} to="/user/courses" button key="16">
        <ListItemText primary="İzlediğim Dersler" />
      </ListItem>
      <ListItem component={NavLink} to="/user/questions" button key="17">
        <ListItemText primary="Sorularım" />
      </ListItem>
      <ListItem component={NavLink} to="/user/coursemap" button key="18">
        <ListItemText primary="Sertifikalar" />
      </ListItem>
      <Divider />
      <ListItem component={NavLink} to="/help" button key="16">
        <ListItemText primary="Yardım" />
      </ListItem>
      <ListItem
        onClick={() => {
          history.push("/logout");
          props.logoutUser();
        }}
        button
        key="17"
      >
        <ListItemText primary="Çıkış" />
      </ListItem>
    </List>
  );
  const desktopOptimizedMenu = (
    <List className={classes.menuDesktop}>
      <ListItem component={NavLink} to="/user/account" button key="11">
        <ListItemAvatar>
          <Avatar
            onClick={props.sideMenuOpen}
            className={classes.Avatar}
            alt={props.givenName + " " + props.familyName}
            src={props.avatarImage ? props.avatarImage.dataUri : null}
          >
            {props.givenName ? props.givenName.charAt(0).toUpperCase() : null}
            {props.familyName ? props.familyName.charAt(0).toUpperCase() : null}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            props.givenName
              ? props.givenName + " " + props.familyName
              : "Problem"
          }
          secondary={props.email ? props.email : "Problem"}
        />
      </ListItem>
      <ListItem
        selected={selectedItem == 0}
        onClick={() => {
          console.log(selectedItem);
          selectItem(0);
        }}
        component={NavLink}
        to="/user/account"
        button
        key="13"
      >
        <ListItemText primary="Hesap Ayarları" />
      </ListItem>
      <ListItem
        selected={selectedItem == 1}
        onClick={() => {
          console.log(selectedItem);
          selectItem(1);
        }}
        component={NavLink}
        to="/user/questions"
        button
        key="12"
      >
        <ListItemText primary="Sorularım" />
      </ListItem>
      <ListItem
        selected={selectedItem == 2}
        onClick={() => {
          console.log(selectedItem);
          selectItem(2);
        }}
        component={NavLink}
        to="/user/courses"
        button
        key="12"
      >
        <ListItemText primary="İzlediğim Dersler" />
      </ListItem>
      <ListItem
        selected={selectedItem == 3}
        onClick={() => {
          console.log(selectedItem);
          selectItem(3);
        }}
        component={NavLink}
        to="/user/coursemap"
        button
        key="12"
      >
        <ListItemText primary="Sertifikalar" />
      </ListItem>
      <Divider />
      <ListItem
        selected={selectedItem == 5}
        onClick={() => {
          console.log(selectedItem);
          selectItem(5);
        }}
        component={NavLink}
        to="/help"
        button
        key="14"
      >
        <ListItemText primary="Yardım" />
      </ListItem>
      <ListItem
        onClick={() => {
          props.logoutUser();
          history.push("/logout");
        }}
        button
        key="15"
      >
        <ListItemText primary="Çıkış" />
      </ListItem>
    </List>
  );

  return (
    <Drawer
      anchor="right"
      open={props.isOpen}
      onClose={toggleDrawer("right", false)}
    >
      <div
        className={classes.sideMenu}
        role="presentation"
        onClick={toggleDrawer(props.type, false)}
        onKeyDown={toggleDrawer(props.type, false)}
      >
        {desktopOptimizedMenu}
        {mobileOptimizedMenu}
      </div>
    </Drawer>
  );
};

SideMenu.propTypes = {};

const SideMenuCon = connect((state) => {
  return {
    _id: state.userReducer._id,
    givenName: state.userReducer.givenName,
    familyName: state.userReducer.familyName,
    avatarImage: state.userReducer.avatarImage,
    email: state.userReducer.email,
  };
})(SideMenu);

export default SideMenuCon;
