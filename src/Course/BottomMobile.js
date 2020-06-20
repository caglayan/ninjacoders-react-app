import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Button, AppBar, Typography } from "@material-ui/core/";
import { useHistory } from "react-router-dom";
import BuyButtonMobile from "../Components/BuyButton/BuyButtonMobile";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    width: "100%",
    backgroundColor: "transparent",
    boxShadow: "none",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  PremiumButton: {
    borderRadius: 50,
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
}));

export default function BottomAppBar(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar style={{ marginBottom: 4 }}>
        <div className={classes.grow} />
        <BuyButtonMobile
          premiumCourseGroups={props.premiumCourseGroups}
          courseGroup={props.courseGroup}
          width={300}
        ></BuyButtonMobile>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
}
