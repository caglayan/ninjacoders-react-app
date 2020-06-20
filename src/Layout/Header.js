import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  Avatar,
  Link,
  IconButton,
} from "@material-ui/core";

import { Menu } from "@material-ui/icons";

import logo from "../logo.svg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  logoDesktop: {
    width: theme.spacing(24),
    marginLeft: theme.spacing(6),
  },
  logoMobile: {
    width: theme.spacing(20),
    marginLeft: theme.spacing(1),
  },
  grow: {
    flexGrow: 1,
  },
  PremiumButton: {
    width: theme.spacing(22),
    borderRadius: 50,
    marginRight: theme.spacing(6),
  },
  SigninButton: {
    width: theme.spacing(8),
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(12),
    },
    borderRadius: 50,
    color: "#313e5b",
  },
  SignupButton: {
    width: theme.spacing(12),
    height: theme.spacing(6),
    borderRadius: 50,
    marginRight: theme.spacing(6),
  },
  Toolbar: {
    flex: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  Avatar: {
    marginRight: theme.spacing(2),
    width: 60,
    height: 60,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { loginOpen, signupOpen } = props;
  const history = useHistory();

  //******************* MOBILE MENU ********************/
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const notSignComponentMobile = (
    <div className={classes.sectionMobile}>
      <Button
        className={classes.SigninButton}
        onClick={() => {
          history.push("/signin?via=" + history.location.pathname);
        }}
      >
        Giriş
      </Button>
    </div>
  );

  const signComponentMobile = (
    <div className={classes.sectionMobile}>
      <Avatar
        onClick={props.sideRightMenuOpen}
        className={classes.Avatar}
        alt={props.givenName + " " + props.familyName}
        src={props.avatarImage ? props.avatarImage.dataUri : null}
      >
        {props.givenName ? props.givenName.charAt(0).toUpperCase() : null}
        {props.familyName ? props.familyName.charAt(0).toUpperCase() : null}
      </Avatar>
    </div>
  );

  //******************* Desktop MENU ********************/
  const signComponent = (
    <div className={classes.sectionDesktop}>
      <Avatar
        onClick={props.sideRightMenuOpen}
        className={classes.Avatar}
        alt={props.givenName + " " + props.familyName}
        src={props.avatarImage ? props.avatarImage.dataUri : null}
      >
        {props.givenName ? props.givenName.charAt(0).toUpperCase() : null}
        {props.familyName ? props.familyName.charAt(0).toUpperCase() : null}
      </Avatar>
    </div>
  );

  const notSignComponent = (
    <div className={classes.sectionDesktop}>
      <Button className={classes.SigninButton} onClick={loginOpen}>
        Giriş
      </Button>
      <Button
        className={classes.SignupButton}
        variant="contained"
        color="primary"
        onClick={signupOpen}
      >
        Üye ol
      </Button>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.sectionMobile}>
          <Toolbar className={classes.Toolbar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={props.sideLeftMenuOpen}
            >
              <Menu />
            </IconButton>
            <div className={classes.grow} />
            <Link href="/">
              <img
                src="/ninjacoders_h_logo.png"
                className={classes.logoMobile}
                alt="logo"
              />
            </Link>
            <div className={classes.grow} />
            {props._id != "" ? signComponentMobile : notSignComponentMobile}
          </Toolbar>
        </div>
        <div className={classes.sectionDesktop}>
          <Toolbar className={classes.Toolbar}>
            <Link href="/">
              <img
                src="/ninjacoders_h_logo.png"
                className={classes.logoDesktop}
                alt="logo"
              />
            </Link>
            <div className={classes.grow} />
            {props._id != "" ? signComponent : notSignComponent}
            {props._id != "" ? (
              <Button
                onClick={props.sideRightMenuOpen}
                className={classes.PremiumButton}
                variant="contained"
                color="primary"
              >
                Menü
              </Button>
            ) : null}
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
};

const ConnectedHeader = connect((state) => {
  return {
    _id: state.userReducer._id,
    givenName: state.userReducer.givenName,
    familyName: state.userReducer.familyName,
    avatarImage: state.userReducer.avatarImage,
    shoppingCart: state.userReducer.shoppingCart,
  };
})(Header);

export default ConnectedHeader;
